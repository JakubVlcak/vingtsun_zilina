import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import logo from '../images/logo_2016.png';
import client from '../sanityClient';

function useDropdown() {
  const [open, setOpen] = useState(false);
  const timer = useRef(null);
  return {
    open,
    onMouseEnter: () => { clearTimeout(timer.current); setOpen(true); },
    onMouseLeave: () => { timer.current = setTimeout(() => setOpen(false), 150); },
    close: () => setOpen(false),
  };
}

function PageItem({ page, allPages, onClose, sectionSlug }) {
  const [subOpen, setSubOpen] = useState(false);
  const timer = useRef(null);
  const subpages = allPages.filter((p) => p.parentId === page._id);

  return (
    <div
      className="relative"
      onMouseEnter={() => { clearTimeout(timer.current); setSubOpen(true); }}
      onMouseLeave={() => { timer.current = setTimeout(() => setSubOpen(false), 150); }}
    >
      <Link
        to={`/s/${sectionSlug}/${page.slug.current}`}
        className="flex items-center justify-between px-6 py-3 font-headline text-sm text-[#e7bdb6] hover:text-white hover:bg-[#1a1a1a] transition-colors duration-200 border-b border-[#353534]/20 last:border-0 tracking-tight"
        onClick={onClose}
      >
        {page.title}
        {subpages.length > 0 && <span className="ml-4 text-[#666] text-xs">›</span>}
      </Link>
      {subOpen && subpages.length > 0 && (
        <div className="absolute left-full top-0 bg-[#0e0e0e]/95 backdrop-blur-sm border border-[#353534]/30 min-w-[240px] shadow-2xl">
          {subpages.map((sub) => (
            <Link
              key={sub._id}
              to={`/s/${sectionSlug}/${sub.slug.current}`}
              className="block px-6 py-3 font-headline text-sm text-[#e7bdb6] hover:text-white hover:bg-[#1a1a1a] transition-colors duration-200 border-b border-[#353534]/20 last:border-0 tracking-tight"
              onClick={onClose}
            >
              {sub.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function SekciaDrop({ sekcia, allPages, isActive }) {
  const dd = useDropdown();
  const pages = allPages.filter((p) => p.sectionId === sekcia._id && !p.parentId);

  const baseClass = isActive
    ? 'text-[#be0000] font-bold border-b-2 border-[#be0000] pb-1 font-headline tracking-tight cursor-pointer transition-all duration-200'
    : 'text-[#e7bdb6] hover:text-white transition-colors duration-300 font-headline tracking-tight cursor-pointer';

  return (
    <div className="relative" onMouseEnter={dd.onMouseEnter} onMouseLeave={dd.onMouseLeave}>
      <span className={baseClass}>{sekcia.title}</span>
      {dd.open && pages.length > 0 && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 bg-[#0e0e0e]/95 backdrop-blur-sm border border-[#353534]/30 min-w-[280px] shadow-2xl">
          {pages.map((p) => (
            <PageItem
              key={p._id}
              page={p}
              allPages={allPages}
              onClose={dd.close}
              sectionSlug={sekcia.slug.current}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function Navbar() {
  const { pathname } = useLocation();
  const [clanky, setClanky] = useState([]);
  const [sekcie, setSekcie] = useState([]);
  const [allPages, setAllPages] = useState([]);
  const clankyDD = useDropdown();

  useEffect(() => {
    client
      .fetch(`*[_type == "clanek" && defined(slug.current)] | order(datum desc) { title, slug, datum }`)
      .then(setClanky);
    client
      .fetch(`*[_type == "navSekcia" && defined(slug.current)] | order(poradie asc) { _id, title, slug }`)
      .then(setSekcie);
    client
      .fetch(`*[_type == "stranka" && defined(slug.current)] | order(poradie asc) { _id, title, slug, "sectionId": sekcia._ref, "parentId": rodic._ref }`)
      .then(setAllPages);
  }, []);

  const linkClass = (path) =>
    pathname === path
      ? 'text-[#be0000] font-bold border-b-2 border-[#be0000] pb-1 font-headline tracking-tight transition-all duration-200'
      : 'text-[#e7bdb6] hover:text-white transition-colors duration-300 font-headline tracking-tight';

  const scrollToZacat = (e) => {
    e.preventDefault();
    const el = document.getElementById('zacat');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#0e0e0e]/90 backdrop-blur-sm z-50 border-b border-[#353534]/10">
      <div className="flex justify-between items-center w-full px-8 py-6 max-w-screen-2xl mx-auto">
        <Link to="/" className="flex items-center gap-4">
          <img src={logo} alt="WingTsun Systém" className="h-20 w-auto" />
          <span className="font-display font-bold uppercase tracking-tighter text-white text-4xl">Umenie Boja</span>
        </Link>
        <div className="flex items-center space-x-12">
          <Link className={linkClass('/')} to="/">Info</Link>

          {sekcie.map((s) => (
            <SekciaDrop
              key={s._id}
              sekcia={s}
              allPages={allPages}
              isActive={pathname.startsWith(`/s/${s.slug.current}`)}
            />
          ))}

          <div className="relative" onMouseEnter={clankyDD.onMouseEnter} onMouseLeave={clankyDD.onMouseLeave}>
            <Link className={linkClass('/clanky')} to="/clanky">Články</Link>
            {clankyDD.open && clanky.length > 0 && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 bg-[#0e0e0e]/95 backdrop-blur-sm border border-[#353534]/30 min-w-[280px] shadow-2xl">
                {clanky.map((c) => (
                  <Link
                    key={c.slug.current}
                    to={`/clanky/${c.slug.current}`}
                    className="block px-6 py-3 font-headline text-sm text-[#e7bdb6] hover:text-white hover:bg-[#1a1a1a] transition-colors duration-200 border-b border-[#353534]/20 last:border-0 tracking-tight"
                    onClick={clankyDD.close}
                  >
                    {c.title}
                    {c.datum && <span className="block font-label text-xs text-[#666] mt-0.5">{c.datum}</span>}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
        <button
          onClick={scrollToZacat}
          className="bg-[#be0000] text-[#690000] px-6 py-2 font-headline font-bold uppercase tracking-tighter active:scale-95 duration-150 ease-in-out"
        >
          zacat cvicit?
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
