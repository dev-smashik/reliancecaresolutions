import { useState } from "react";
import svgPaths from "../svgPaths";
import imgRelianceCareSolutionsLogo1 from "figma:asset/reliance-logo.png";

function Logo() {
  return (
    <div className="content-stretch flex gap-[8px] md:gap-[12px] items-center md:items-end justify-center relative shrink-0" data-name="Logo">
      <div className="h-[36px] md:h-[46px] relative shrink-0 w-[40px] md:w-[51px]" data-name="Reliance+Care+Solutions+Logo 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[158.09%] left-[-47.41%] max-w-none top-[-0.2%] w-[194.83%]" src={imgRelianceCareSolutionsLogo1} />
        </div>
      </div>
      <div className="h-[28px] md:h-[36px] relative shrink-0 w-[120px] md:w-[160px]" data-name="Reliance+Care+Solutions+Logo 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[322.23%] left-0 max-w-none top-[-221.9%] w-full" src={imgRelianceCareSolutionsLogo1} />
        </div>
      </div>
    </div>
  );
}

function HomeMenuItem({ onClick }: { onClick?: () => void }) {
  return (
    <div
      className="content-stretch flex items-center relative shrink-0 cursor-pointer transition-all duration-300 hover:text-[#00766a] md:hover:scale-105"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        onClick?.();
      }}
    >
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[18px] md:text-[16px] whitespace-nowrap">Home</p>
    </div>
  );
}

function YouthProgramsMenuItem({ onClick }: { onClick?: () => void }) {
  return (
    <div
      className="content-stretch flex items-center relative shrink-0 cursor-pointer transition-all duration-300 hover:text-[#00766a] md:hover:scale-105"
      onClick={() => {
        document.getElementById('youth-programs')?.scrollIntoView({ behavior: 'smooth' });
        onClick?.();
      }}
    >
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[18px] md:text-[16px] whitespace-nowrap">Youth Programs</p>
    </div>
  );
}

function NavGroup({ onClick }: { onClick?: () => void }) {
  return (
    <div className="content-stretch flex flex-col md:flex-row font-['Inter:Regular',sans-serif] font-normal gap-[24px] items-start md:items-center leading-[24px] not-italic relative shrink-0 text-[18px] md:text-[16px] whitespace-nowrap">
      <p
        className="relative shrink-0 cursor-pointer transition-all duration-300 hover:text-[#00766a] md:hover:scale-105"
        onClick={() => {
          document.getElementById('support-advice')?.scrollIntoView({ behavior: 'smooth' });
          onClick?.();
        }}
      >
        About us
      </p>
      <p
        className="relative shrink-0 cursor-pointer transition-all duration-300 hover:text-[#00766a] md:hover:scale-105"
        onClick={() => {
          document.getElementById('services-overview')?.scrollIntoView({ behavior: 'smooth' });
          onClick?.();
        }}
      >
        Coverage
      </p>
    </div>
  );
}

function Menu({ mobile, onLinkClick }: { mobile?: boolean; onLinkClick?: () => void }) {
  return (
    <div className={`${mobile ? "flex flex-col items-start gap-8 w-full p-8" : "hidden lg:flex gap-[36px] items-center"} relative shrink-0 text-[#171a1b]`} data-name="Menu">
      <HomeMenuItem onClick={onLinkClick} />
      <YouthProgramsMenuItem onClick={onLinkClick} />
      <NavGroup onClick={onLinkClick} />
      <p
        className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[18px] md:text-[16px] whitespace-nowrap cursor-pointer transition-all duration-300 hover:text-[#00766a] md:hover:scale-105"
        onClick={() => {
          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          onLinkClick?.();
        }}
      >
        Contact
      </p>
    </div>
  );
}

function HamburgerIcon({ isOpen, toggle }: { isOpen: boolean; toggle: () => void }) {
  return (
    <button
      onClick={toggle}
      className="lg:hidden flex flex-col gap-1.5 p-2 z-[150]"
      aria-label="Toggle menu"
    >
      <div className={`w-6 h-0.5 bg-[#171a1b] transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
      <div className={`w-6 h-0.5 bg-[#171a1b] transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
      <div className={`w-6 h-0.5 bg-[#171a1b] transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
    </button>
  );
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="sticky top-0 backdrop-blur-[10px] bg-white/95 content-stretch flex h-[70px] md:h-[82px] items-center justify-center left-0 w-full z-[100] shadow-sm transition-all duration-300" data-name="Navbar">
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full max-w-[1240px] px-4 md:px-8">
          <Logo />
          <Menu />

          <div className="flex flex-row items-center self-stretch gap-4">
            <a
              href="tel:4197040316"
              className="hidden sm:flex bg-[#00766a] content-stretch gap-[8px] h-[40px] md:h-full items-center justify-center pl-[16px] pr-[20px] relative rounded-br-[20px] rounded-tl-[20px] md:rounded-br-[24px] md:rounded-tl-[24px] shrink-0 cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95 hover:brightness-110 shadow-sm hover:shadow-md no-underline"
              data-name="Button/Default/Rounded"
            >
              <div className="relative shrink-0 size-[16px] md:size-[20px]" data-name="Icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                  <g id="Path" />
                </svg>
                <div className="absolute inset-[12.5%]" data-name="Shape">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                    <path clipRule="evenodd" d={svgPaths.p27b2a00} fill="var(--fill-0, white)" fillRule="evenodd" id="Shape" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-center text-white whitespace-nowrap">
                <p className="leading-[20px] text-[14px] md:text-[16px] truncate max-w-[120px] md:max-w-none">{` 419-704-0316`}</p>
              </div>
            </a>
            <HamburgerIcon isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[180] transition-opacity duration-300 lg:hidden ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={() => setIsOpen(false)}
      />
      <div
        className={`fixed right-0 top-0 bottom-0 w-[80%] max-w-[320px] bg-white z-[200] transition-transform duration-500 lg:hidden flex flex-col p-[24px] shadow-2xl overflow-y-auto ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-end mb-[24px]">
          <button onClick={() => setIsOpen(false)} className="relative w-[32px] h-[32px] flex items-center justify-center p-2 rounded-full hover:bg-gray-100 transition-colors">
            <div className="absolute w-[20px] h-[2px] bg-[#171a1b] rotate-45" />
            <div className="absolute w-[20px] h-[2px] bg-[#171a1b] -rotate-45" />
          </button>
        </div>
        <Menu mobile onLinkClick={() => setIsOpen(false)} />
        <div className="p-4 border-t border-gray-100 flex flex-col gap-4 mt-auto mb-4">
          <p className="text-gray-500 text-sm">Main Office</p>
          <a href="tel:4197040316" className="text-[#00766a] font-medium text-lg hover:underline">(419) 704-0316</a>
          <p className="text-gray-400 text-xs">Available 24/7 for your needs</p>
        </div>
      </div>
    </>
  );
}
