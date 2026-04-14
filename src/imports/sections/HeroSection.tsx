import svgPaths from "../svgPaths";
import imgHeroCare1 from "figma:asset/hero-care-1.png";
import imgHeroCare2 from "figma:asset/hero-care-2.png";
import imgInHomeCare from "figma:asset/in-home-services.png";
import imgYouthProgram from "figma:asset/youth-programs.png";
import imgEllipse1 from "figma:asset/avatar-hero-1.png";
import imgEllipse2 from "figma:asset/avatar-hero-2.png";
import imgEllipse3 from "figma:asset/avatar-hero-3.png";
import imgEllipse4 from "figma:asset/avatar-hero-4.png";

export function HeroSection() {
  return (
    <div id="home" className="bg-white relative flex flex-col items-center gap-[4px] overflow-x-hidden w-full" data-name="Desktop - 1">
      <HeroContainer />
      <HeroImageRow />
    </div>
  );
}

function HeroImageRow() {
  return (
    <div className="w-full overflow-x-auto no-scrollbar pb-6 px-4 md:px-0">
      <div className="flex gap-[16px] md:gap-[24px] items-center min-w-max md:min-w-0 md:justify-center relative">
        <HeroImage1 />
        <HeroImage2 />
        <HeroImage3 />
        <HeroImage4 />
      </div>
    </div>
  );
}

function HeroImage1() {
  return (
    <div className="relative shrink-0 size-[280px] md:size-[430px]">
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
    <div className="relative shrink-0 size-[280px] md:size-[430px]">
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
    <div className="relative shrink-0 size-[280px] md:size-[430px]">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgInHomeCare} />
    </div>
  );
}

function HeroImage4() {
  return (
    <div className="relative shrink-0 size-[280px] md:size-[430px]">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#ddd] inset-0" />
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgYouthProgram} />
      </div>
    </div>
  );
}

function CertBadge() {
  return (
    <div className="flex items-center justify-center mb-[16px] md:mb-[24px]">
      <p className="font-['Inter:SemiBold',sans-serif] font-semibold text-[12px] md:text-[14px] text-[#00766a] tracking-[1.5px] uppercase">
        We are certified in 88 counties
      </p>
    </div>
  );
}

function TrustedFamilies() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-[16px] md:gap-[8px] mt-[8px] md:mt-[16px]">
      <div className="flex items-center -space-x-[16px]">
        <img src={imgEllipse1} alt="Avatar" className="w-[48px] h-[48px] rounded-full border-[3px] border-white object-cover" />
        <img src={imgEllipse2} alt="Avatar" className="w-[48px] h-[48px] rounded-full border-[3px] border-white object-cover" />
        <img src={imgEllipse3} alt="Avatar" className="w-[48px] h-[48px] rounded-full border-[3px] border-white object-cover" />
        <img src={imgEllipse4} alt="Avatar" className="w-[48px] h-[48px] rounded-full border-[3px] border-white object-cover" />
      </div>
      <p className="font-['Inter:Medium',sans-serif] text-[14px] md:text-[16px] text-[#8e8e8e]">Trusted by 500+ families in Northwest Ohio</p>
    </div>
  );
}

function ApplyNowButton() {
  return (
    <button className="mt-[24px] md:mt-[32px] rounded-br-[24px] rounded-tl-[24px] bg-[#fb7864] text-white font-['Inter:Medium',sans-serif] font-medium text-[16px] md:text-[18px] px-[40px] py-[16px] rounded-[100px] hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-[8px]">
      Apply Now <span className="text-[18px]">→</span>
    </button>
  );
}

function HeroTextContent() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 px-4">
      <CertBadge />
      <h1 className="font-['Inter:Medium',sans-serif] font-medium leading-[1.2] md:leading-[1.1] not-italic relative shrink-0 text-[#171a1b] text-[32px] sm:text-[40px] md:text-[60px] text-center tracking-[-0.3px] w-full max-w-[1024px]">
        Compassionate Care for<br /> Every <span className="font-['Instrument_Serif:Italic',serif] italic text-[#00766a]">Stage of Life</span>
      </h1>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.2] not-italic relative shrink-0 text-[#8e8e8e] text-[16px] md:text-[20px] text-center w-full max-w-[375px] md:max-w-[724px] mt-[8px]  ">
        Professional home care services and direct support caregivers for your loved ones in the Toledo area delivered with a customized, personal approach.
      </p>
      <TrustedFamilies />
      <ApplyNowButton />
    </div>
  );
}

function HeroContainer() {
  return (
    <div className="relative pt-[60px] md:pt-[100px] pb-[60px] md:pb-[80px] w-full flex justify-center">
      <HeroTextContent />
    </div>
  );
}
