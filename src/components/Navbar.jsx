import logo from '../images/logo_2016.png';

function Navbar() {
  return (
    <nav className="bg-[#131313] fixed top-0 w-full z-50">
      <div className="flex justify-between items-center w-full px-8 py-6 max-w-screen-2xl mx-auto">
        <div className="flex items-center gap-4">
          <img src={logo} alt="WingTsun Systém" className="h-20 w-auto" />
          <span className="font-display font-bold uppercase tracking-tighter text-white text-4xl">Umenie Boja</span>
        </div>
        <div className="hidden md:flex items-center space-x-12">
          <a className="text-[#be0000] font-bold border-b-2 border-[#be0000] pb-1 font-headline tracking-tight transition-all duration-200" href="#">
            Info
          </a>
          <a className="text-[#e7bdb6] hover:text-white transition-colors duration-300 font-headline tracking-tight" href="#">
            WingTsun systémy
          </a>
          <a className="text-[#e7bdb6] hover:text-white transition-colors duration-300 font-headline tracking-tight" href="#">
            Články
          </a>
        </div>
        <a href="#zacat" className="bg-[#be0000] text-[#690000] px-6 py-2 font-headline font-bold uppercase tracking-tighter active:scale-95 duration-150 ease-in-out inline-block">
          zacat cvicit?
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
