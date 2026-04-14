import svgPaths from "../svgPaths";
import imgHeroCare1 from "figma:asset/hero-care-1.png";
import imgHeroCare2 from "figma:asset/hero-care-2.png";
import imgInHomeCare from "figma:asset/in-home-services.png";
import imgYouthProgram from "figma:asset/youth-programs.png";
import imgEllipse1 from "figma:asset/avatar-hero-1.png";
import imgEllipse2 from "figma:asset/avatar-hero-2.png";
import imgEllipse3 from "figma:asset/avatar-hero-3.png";
import imgEllipse4 from "figma:asset/avatar-hero-4.png";
import { Navbar } from "./Navbar";

function HeroImage1() {
  return (
    <div className="relative shrink-0 size-[430px]">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#ddd] inset-0" />
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-full left-[-25%] max-w-none top-0 w-[150%]" src={imgHeroCare1} />
        </div>
      </div>
    </div>
  );
}

function HeroImage2() {
  return (
    <div className="relative shrink-0 size-[430px]">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#ddd] inset-0" />
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-full left-[-58.37%] max-w-none top-0 w-[177.78%]" src={imgHeroCare2} />
        </div>
      </div>
    </div>
  );
}

function HeroImage3() {
  return (
    <div className="relative shrink-0 size-[430px]">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgInHomeCare} />
    </div>
  );
}

function HeroImage4() {
  return (
    <div className="relative shrink-0 size-[430px]">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#ddd] inset-0" />
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgYouthProgram} />
      </div>
    </div>
  );
}

function HeroImageRow() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex gap-[24px] items-center left-1/2 top-[547px]">
      <HeroImage1 />
      <HeroImage2 />
      <HeroImage3 />
      <HeroImage4 />
    </div>
  );
}

function CertBadge() {
  return (
    <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative rounded-[200px] shrink-0 w-[284px]" style={{ backgroundImage: "linear-gradient(90deg, rgba(241, 250, 254, 0) 0%, rgb(241, 250, 254) 34.782%, rgb(241, 250, 254) 63.285%, rgba(241, 250, 254, 0) 100%)" }}>
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#00766a] text-[14px] tracking-[1.4px] uppercase whitespace-nowrap">
        <p className="leading-[1.6]">We are certified in 88 counties</p>
      </div>
    </div>
  );
}

function HeroTextContent() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0">
      <CertBadge />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#171a1b] text-[60px] text-center tracking-[-0.3px] w-[1026px] whitespace-pre-wrap">
        <p className="leading-[64px] mb-0">{`Compassionate Care for `}</p>
        <p>
          <span className="leading-[64px]">{`Every `}</span>
          <span className="font-['Instrument_Serif:Italic',sans-serif] italic leading-[64px] text-[#00766a]">Stage of Life</span>
        </p>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#8e8e8e] text-[16px] text-center w-[724px]">Professional home care services and direct support caregivers for your loved ones in the Toledo area delivered with a customized, personal approach.</p>
    </div>
  );
}

function AvatarStack() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[46px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="46" src={imgEllipse1} width="46" />
      </div>
      <div className="col-1 ml-[23px] mt-0 relative row-1 size-[46px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="46" src={imgEllipse2} width="46" />
      </div>
      <div className="col-1 ml-[46px] mt-0 relative row-1 size-[46px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="46" src={imgEllipse3} width="46" />
      </div>
      <div className="col-1 ml-[69px] mt-0 relative row-1 size-[46px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="46" src={imgEllipse4} width="46" />
      </div>
    </div>
  );
}

function TrustText() {
  return (
    <div className="h-full relative shrink-0">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#8c8c8c] text-[16px] w-[330px]">Trusted by 500+ families in Northwest Ohio</p>
        </div>
      </div>
    </div>
  );
}

function TrustRow() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <AvatarStack />
      <div className="flex flex-row items-center self-stretch">
        <TrustText />
      </div>
    </div>
  );
}

function HeroMainContent() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0">
      <HeroTextContent />
      <TrustRow />
      <div className="bg-[#ff7865] content-stretch flex h-[54px] items-center justify-center px-[16px] relative rounded-br-[24px] rounded-tl-[24px] shrink-0 w-[160px]" data-name="Button/Default/Rounded">
        <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
          <p className="leading-[1.6]">Apply Now →</p>
        </div>
      </div>
    </div>
  );
}

function HeroWrapper() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-center left-1/2 top-[-40px]">
      <HeroMainContent />
    </div>
  );
}

function HeroContainer() {
  return (
    <div className="-translate-x-1/2 absolute h-[338px] left-1/2 top-[170px] w-[1200px]">
      <HeroWrapper />
    </div>
  );
}

export function HeroSection() {
  return (
    <div className="-translate-x-1/2 absolute bg-white h-[1030px] left-1/2 overflow-clip top-[36px] w-[1440px]" data-name="Desktop - 1">
      <Navbar />
      <HeroImageRow />
      <HeroContainer />
    </div>
  );
}
