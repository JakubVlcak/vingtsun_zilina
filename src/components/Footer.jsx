function Footer() {
  return (
    <footer className="bg-[#0e0e0e] full-width py-16">
      <div className="flex flex-col md:flex-row justify-between items-center px-12 w-full border-t border-[#353534]/10 pt-12">
        <div className="text-lg font-black text-[#be0000] font-headline uppercase mb-8 md:mb-0">
          WINGTSUN SYST�M
        </div>
        <div className="flex space-x-8 mb-8 md:mb-0">
          <a className="font-['Inter'] text-xs uppercase tracking-widest text-[#393939] hover:text-[#be0000] transition-colors" href="#">Privacy Policy</a>
          <a className="font-['Inter'] text-xs uppercase tracking-widest text-[#393939] hover:text-[#be0000] transition-colors" href="#">Terms of Service</a>
          <a className="font-['Inter'] text-xs uppercase tracking-widest text-[#393939] hover:text-[#be0000] transition-colors" href="#">Contact</a>
          <a className="font-['Inter'] text-xs uppercase tracking-widest text-[#393939] hover:text-[#be0000] transition-colors" href="#">Location</a>
        </div>
        <div className="font-['Inter'] text-xs uppercase tracking-widest text-[#393939]">
          � 2024 WingTsun Syst�m. Monastic Precision.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
