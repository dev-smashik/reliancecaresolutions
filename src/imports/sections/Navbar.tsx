import svgPaths from "../svgPaths";
import imgRelianceCareSolutionsLogo1 from "figma:asset/reliance-logo.png";

function Logo() {
  return (
    <div className="content-stretch flex gap-[12px] items-end justify-center relative shrink-0" data-name="Logo">
      <div className="h-[46px] relative shrink-0 w-[51px]" data-name="Reliance+Care+Solutions+Logo 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[158.09%] left-[-47.41%] max-w-none top-[-0.2%] w-[194.83%]" src={imgRelianceCareSolutionsLogo1} />
        </div>
      </div>
      <div className="h-[36px] relative shrink-0 w-[160px]" data-name="Reliance+Care+Solutions+Logo 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[322.23%] left-0 max-w-none top-[-221.9%] w-full" src={imgRelianceCareSolutionsLogo1} />
        </div>
      </div>
    </div>
  );
}

function HomeMenuItem() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#171a1b] text-[16px] whitespace-nowrap">Home</p>
    </div>
  );
}

function YouthProgramsMenuItem() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#171a1b] text-[16px] whitespace-nowrap">Youth Programs</p>
    </div>
  );
}

function NavGroup() {
  return (
    <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[8px] items-center leading-[24px] not-italic relative shrink-0 text-[#171a1b] text-[16px] whitespace-nowrap">
      <p className="relative shrink-0">About us</p>
      <p className="relative shrink-0">Coverage</p>
    </div>
  );
}

function Menu() {
  return (
    <div className="content-stretch flex gap-[36px] items-center relative shrink-0" data-name="Menu">
      <HomeMenuItem />
      <YouthProgramsMenuItem />
      <NavGroup />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#171a1b] text-[16px] whitespace-nowrap">Contact</p>
    </div>
  );
}

export function NavbarInner() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[1240px]">
      <Logo />
      <Menu />
      <div className="flex flex-row items-center self-stretch">
        <div className="bg-[#00766a] content-stretch flex gap-[8px] h-full items-center justify-center pl-[16px] pr-[20px] relative rounded-br-[24px] rounded-tl-[24px] shrink-0" data-name="Button/Default/Rounded">
          <div className="relative shrink-0 size-[20px]" data-name="Icon">
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
            <p className="leading-[20px] text-[16px]">{` 419-704-0316`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Navbar() {
  return (
    <div className="absolute backdrop-blur-[10px] content-stretch flex h-[82px] items-center justify-between left-0 px-[20px] py-[12px] top-0 w-[1440px]" data-name="Navbar">
      <NavbarInner />
    </div>
  );
}
