import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import logo from '../images/logo_2016.png';
import client from '../sanityClient';

function Navbar() {
  const { pathname } = useLocation();
  const [clanky, setClanky] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const closeTimer = useRef(null);

  useEffect(() => {
    client
      .fetch(`*[_type == "clanek" && defined(slug.current)] | order(datum desc) { title, slug, datum }`)
      .then((data) => setClanky(data));
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

  const handleMouseEnter = () => {
    clearTimeout(closeTimer.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setDropdownOpen(false), 150);
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
          <Link className={linkClass('/wingtsun')} to="/wingtsun">WingTsun systémy</Link>
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link className={linkClass('/clanky')} to="/clanky">Články</Link>
            {dropdownOpen && clanky.length > 0 && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 bg-[#0e0e0e]/95 backdrop-blur-sm border border-[#353534]/30 min-w-[280px] shadow-2xl">
                {clanky.map((c) => (
                  <Link
                    key={c.slug.current}
                    to={`/clanky/${c.slug.current}`}
                    className="block px-6 py-3 font-headline text-sm text-[#e7bdb6] hover:text-white hover:bg-[#1a1a1a] transition-colors duration-200 border-b border-[#353534]/20 last:border-0 tracking-tight"
                    onClick={() => setDropdownOpen(false)}
                  >
                    {c.title}
                    {c.datum && (
                      <span className="block font-label text-xs text-[#666] mt-0.5">{c.datum}</span>
                    )}
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
