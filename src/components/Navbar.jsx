import { Link, useLocation } from 'react-router-dom';
import logo from '../images/logo_2016.png';

function Navbar() {
  const { pathname } = useLocation();

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
    <nav className="fixed top-0 w-full z-50" style={{
      '--s': '80px',
      '--c1': '#be0000',
      '--c2': '#0e0e0e',
      background: `
        radial-gradient(100% 100% at 100% 0, var(--c1) 4%, var(--c2) 4% 14%, var(--c1) 14% 24%, var(--c2) 22% 34%, var(--c1) 34% 44%, var(--c2) 44% 56%, var(--c1) 56% 66%, var(--c2) 66% 76%, var(--c1) 76% 86%, var(--c2) 86% 96%, #0008 96%, #0000),
        radial-gradient(100% 100% at 0 100%, #0000, #0008 4%, var(--c2) 4% 14%, var(--c1) 14% 24%, var(--c2) 22% 34%, var(--c1) 34% 44%, var(--c2) 44% 56%, var(--c1) 56% 66%, var(--c2) 66% 76%, var(--c1) 76% 86%, var(--c2) 86% 96%, var(--c1) 96%) var(--c1)`,
      backgroundSize: 'var(--s) var(--s)',
    }}>
      <div className="flex justify-between items-center w-full px-8 py-6 max-w-screen-2xl mx-auto">
        <Link to="/" className="flex items-center gap-4">
          <img src={logo} alt="WingTsun Systém" className="h-20 w-auto" />
          <span className="font-display font-bold uppercase tracking-tighter text-white text-4xl">Umenie Boja</span>
        </Link>
        <div className="hidden md:flex items-center space-x-12">
          <Link className={linkClass('/')} to="/">Info</Link>
          <Link className={linkClass('/wingtsun')} to="/wingtsun">WingTsun systémy</Link>
          <Link className={linkClass('/clanky')} to="/clanky">Články</Link>
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
