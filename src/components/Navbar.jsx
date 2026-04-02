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
    <nav className="fixed top-0 left-0 right-0 bg-[#0e0e0e]/90 backdrop-blur-sm z-50 border-b border-[#353534]/10">
      <div className="flex justify-between items-center w-full px-8 py-6 max-w-screen-2xl mx-auto">
        <Link to="/" className="flex items-center gap-4">
          <img src={logo} alt="WingTsun Systém" className="h-20 w-auto" />
          <span className="font-display font-bold uppercase tracking-tighter text-white text-4xl">Umenie Boja</span>
        </Link>
        <div className="flex items-center space-x-12">
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
