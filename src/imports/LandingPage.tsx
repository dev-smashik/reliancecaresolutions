import svgPaths from "./svgPaths";
import imgRelianceCareSolutionsLogo1 from "figma:asset/reliance-logo.png";
import imgHeroCare1 from "figma:asset/hero-care-1.png";
import imgHeroCare2 from "figma:asset/hero-care-2.png";
import imgInHomeCare from "figma:asset/in-home-services.png";
import imgYouthProgram from "figma:asset/youth-programs.png";
import imgEllipse1 from "figma:asset/avatar-hero-1.png";
import imgEllipse2 from "figma:asset/avatar-hero-2.png";
import imgEllipse3 from "figma:asset/avatar-hero-3.png";
import imgEllipse4 from "figma:asset/avatar-hero-4.png";
import imgEllipse1086 from "figma:asset/testimonial-1.png";
import imgEllipse1087 from "figma:asset/testimonial-2.png";
import imgEllipse1088 from "figma:asset/testimonial-3.png";
import imgEllipse1089 from "figma:asset/testimonial-4.png";
import imgEllipse1090 from "figma:asset/testimonial-5.png";
import imgEllipse1091 from "figma:asset/testimonial-6.png";
import imgEllipse1092 from "figma:asset/testimonial-7.png";
import imgEllipse1093 from "figma:asset/testimonial-8.png";
import imgEllipse1094 from "figma:asset/testimonial-9.png";
import imgEllipse1095 from "figma:asset/testimonial-10.png";
import imgEllipse1096 from "figma:asset/testimonial-11.png";
import imgEllipse1097 from "figma:asset/testimonial-12.png";

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

function NavbarInner() {
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

function Navbar() {
  return (
    <div className="absolute backdrop-blur-[10px] content-stretch flex h-[82px] items-center justify-between left-0 px-[20px] py-[12px] top-0 w-[1440px]" data-name="Navbar">
      <NavbarInner />
    </div>
  );
}

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

function HeroSection() {
  return (
    <div className="-translate-x-1/2 absolute bg-white h-[1030px] left-1/2 overflow-clip top-[36px] w-[1440px]" data-name="Desktop - 1">
      <Navbar />
      <HeroImageRow />
      <HeroContainer />
    </div>
  );
}

function TopBarSlogan() {
  return (
    <div className="h-[20px] relative shrink-0 w-[443.031px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Your trusted personal caregiving service provider in Northwest Ohio
        </p>
      </div>
    </div>
  );
}

function PhoneIcon() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Phone">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_1_954)" id="Phone">
          <path d={svgPaths.p2c04e800} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_1_954">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function PhoneNumber() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          (419) 799-0916
        </p>
      </div>
    </div>
  );
}

function PhoneLink() {
  return (
    <div className="h-[20px] relative shrink-0 w-[114.453px]" data-name="a">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <PhoneIcon />
        <PhoneNumber />
      </div>
    </div>
  );
}

function EmailLink() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="a">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          info@reliancecaresolutions.com
        </p>
      </div>
    </div>
  );
}

function TopBarLinks() {
  return (
    <div className="h-[20px] relative shrink-0 w-[339.094px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <PhoneLink />
        <EmailLink />
      </div>
    </div>
  );
}

function TopBar() {
  return (
    <div className="absolute bg-[#0a4a50] content-stretch flex h-[36px] items-center justify-between left-0 px-[100px] top-0 w-[1440px]" data-name="Container">
      <TopBarSlogan />
      <TopBarLinks />
    </div>
  );
}

function AdviceBadge() {
  return (
    <div className="content-stretch flex items-center justify-center px-[12px] py-[6px] relative rounded-[200px] shrink-0 w-[309px]" style={{ backgroundImage: "linear-gradient(90deg, rgba(241, 250, 254, 0) 0%, rgb(241, 250, 254) 34.782%, rgb(241, 250, 254) 63.285%, rgba(241, 250, 254, 0) 100%)" }}>
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#00766a] text-[14px] tracking-[1.4px] uppercase whitespace-nowrap">
        <p className="leading-[1.6]">Information - advice - support</p>
      </div>
    </div>
  );
}

function AdviceTitleBlock() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[628px]">
      <AdviceBadge />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#171a1b] text-[48px] text-shadow-[0px_0px_24px_rgba(255,255,255,0.16)] tracking-[0.12px] w-[min-content]">
        <p className="leading-[64px]">{`Caregiving Services & Support`}</p>
      </div>
    </div>
  );
}

function AdviceDescriptionBlock() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[518px]">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-w-full not-italic relative shrink-0 text-[#5b5b5b] text-[16px] w-[min-content]">We offer flexible direct care support for individuals with developmental or physical disabilities, seniors, those with cancer and more.</p>
      <div className="content-stretch flex h-[54px] items-center justify-center px-[16px] relative rounded-br-[24px] rounded-tl-[24px] shrink-0" data-name="Button/Default/Rounded">
        <div aria-hidden="true" className="absolute border border-[#00766a] border-solid inset-0 pointer-events-none rounded-br-[24px] rounded-tl-[24px]" />
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#00766a] text-[16px] text-center whitespace-nowrap">
          <p className="leading-[20px]">Explore Our Services</p>
        </div>
      </div>
    </div>
  );
}

function AdviceHeaderRow() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <AdviceTitleBlock />
      <AdviceDescriptionBlock />
    </div>
  );
}

function IconCall() {
  return (
    <div className="bg-white content-stretch flex items-center p-[16px] relative rounded-[200px] shrink-0">
      <div className="relative shrink-0 size-[32px]" data-name="communication/call">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Path" />
        </svg>
        <div className="absolute inset-[12.5%]" data-name="Shape">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <path clipRule="evenodd" d={svgPaths.p11a21600} fill="var(--fill-0, #00766A)" fillRule="evenodd" id="Shape" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function AdviceCard1Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px min-w-px relative w-full">
      <IconCall />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.4] not-italic relative shrink-0 text-[20px] text-white w-[441px]">{`Personal Product & Service Advice`}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[16px] text-white w-[669px]">Get personalized guidance and recommendations from our experts and trusted partners to find the right care solutions for your needs.</p>
    </div>
  );
}

function AdviceCard1() {
  return (
    <div className="bg-[#00766a] content-stretch flex flex-col h-[196px] items-center p-[20px] relative rounded-[16px] shrink-0 w-[816px]">
      <AdviceCard1Content />
    </div>
  );
}

function IconMore() {
  return (
    <div className="bg-white content-stretch flex items-center p-[16px] relative rounded-[200px] shrink-0">
      <div className="overflow-clip relative shrink-0 size-[32px]" data-name="navigation/more-circle">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Path" />
        </svg>
        <div className="absolute inset-[12.5%_4.17%]" data-name="Shape">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.3333 24">
            <path d={svgPaths.p2e914700} fill="var(--fill-0, #00766A)" id="Shape" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function AdviceCard2Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px min-w-px relative w-full">
      <IconMore />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.4] min-w-full not-italic relative shrink-0 text-[#171a1b] text-[20px] w-[min-content]">Orientation in the Care Landscape</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[#5b5b5b] text-[16px] w-[min-content]">
        <span className="leading-[1.4]">{`We help you navigate the `}</span>
        <span className="leading-[1.4]">physical disabilities</span>
        <span className="leading-[1.4]">{` healthcare system.`}</span>
      </p>
    </div>
  );
}

function AdviceCard2() {
  return (
    <div className="bg-[rgba(230,241,240,0.5)] flex-[1_0_0] h-[196px] min-h-px min-w-px relative rounded-[16px]">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center p-[20px] relative size-full">
          <AdviceCard2Content />
        </div>
      </div>
    </div>
  );
}

function CardsRow1() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
      <AdviceCard1 />
      <AdviceCard2 />
    </div>
  );
}

function IconDocument() {
  return (
    <div className="bg-white content-stretch flex items-center p-[16px] relative rounded-[200px] shrink-0">
      <div className="relative shrink-0 size-[32px]" data-name="system/document">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Path" />
        </svg>
        <div className="absolute inset-[8.33%_16.67%]" data-name="Shape">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.3333 26.6667">
            <path clipRule="evenodd" d={svgPaths.p1995c300} fill="var(--fill-0, #00766A)" fillRule="evenodd" id="Shape" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function AdviceCard3Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px min-w-px relative w-full">
      <IconDocument />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.4] min-w-full not-italic relative shrink-0 text-[#171a1b] text-[20px] w-[min-content]">Online Guide</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.4] min-w-full not-italic relative shrink-0 text-[#5b5b5b] text-[16px] w-[min-content]">Access step-by-step resources, articles, and practical tips anytime.</p>
    </div>
  );
}

function AdviceCard3() {
  return (
    <div className="bg-[rgba(230,241,240,0.5)] flex-[1_0_0] h-[196px] min-h-px min-w-px relative rounded-[16px]">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center p-[20px] relative size-full">
          <AdviceCard3Content />
        </div>
      </div>
    </div>
  );
}

function IconAlert() {
  return (
    <div className="bg-white content-stretch flex items-center p-[16px] relative rounded-[200px] shrink-0">
      <div className="relative shrink-0 size-[32px]" data-name="system/alert-info">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Path" />
        </svg>
        <div className="absolute inset-[8.33%]" data-name="Shape">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.6667 26.6667">
            <path clipRule="evenodd" d={svgPaths.p1bdcd800} fill="var(--fill-0, #00766A)" fillRule="evenodd" id="Shape" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function AdviceCard4Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px min-w-px relative w-full">
      <IconAlert />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.4] min-w-full not-italic relative shrink-0 text-[#171a1b] text-[20px] w-[min-content]">{`Benefits & Applications Information`}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.4] min-w-full not-italic relative shrink-0 text-[#5b5b5b] text-[16px] w-[min-content]">Clear, reliable information on healthcare benefits.</p>
    </div>
  );
}

function AdviceCard4() {
  return (
    <div className="bg-[rgba(230,241,240,0.5)] flex-[1_0_0] h-[196px] min-h-px min-w-px relative rounded-[16px]">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center p-[20px] relative size-full">
          <AdviceCard4Content />
        </div>
      </div>
    </div>
  );
}

function IconAccount() {
  return (
    <div className="bg-white content-stretch flex items-center p-[16px] relative rounded-[200px] shrink-0">
      <div className="relative shrink-0 size-[32px]" data-name="system/account-person">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Path" />
        </svg>
        <div className="absolute inset-[14.58%]" data-name="Shape">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.6667 22.6667">
            <path clipRule="evenodd" d={svgPaths.pff65100} fill="var(--fill-0, #00766A)" fillRule="evenodd" id="Shape" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function AdviceCard5Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px min-w-px relative w-full">
      <IconAccount />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.4] min-w-full not-italic relative shrink-0 text-[#171a1b] text-[20px] w-[min-content]">Advisor</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.4] min-w-full not-italic relative shrink-0 text-[#5b5b5b] text-[16px] w-[min-content]">A dedicated advisor is always ready to answer your questions and assist.</p>
    </div>
  );
}

function AdviceCard5() {
  return (
    <div className="bg-[rgba(230,241,240,0.5)] flex-[1_0_0] h-[196px] min-h-px min-w-px relative rounded-[16px]">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center p-[20px] relative size-full">
          <AdviceCard5Content />
        </div>
      </div>
    </div>
  );
}

function CardsRow2() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
      <AdviceCard3 />
      <AdviceCard4 />
      <AdviceCard5 />
    </div>
  );
}

function AdviceCardsGrid() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start justify-center min-h-px min-w-px relative">
      <CardsRow1 />
      <CardsRow2 />
    </div>
  );
}

function AdviceCardsContainer() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <AdviceCardsGrid />
    </div>
  );
}

function SupportAdviceLayout() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-start relative shrink-0 w-full">
      <AdviceHeaderRow />
      <AdviceCardsContainer />
    </div>
  );
}

function SupportAdviceSection() {
  return (
    <div className="-translate-x-1/2 absolute bg-white content-stretch flex flex-col items-start left-1/2 overflow-clip px-[100px] py-[120px] top-[1854px] w-[1440px]" data-name="Desktop - 3">
      <SupportAdviceLayout />
    </div>
  );
}

function InHomeCareText() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#00766a] text-[48px] text-shadow-[0px_0px_24px_rgba(255,255,255,0.16)] tracking-[-0.144px] w-full">
        <p className="leading-[64px]">In Home Services Care in Northwest Ohio</p>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#5b5b5b] text-[16px] w-full">{`We understand that the search for the appropriate home care and caregiving services can be daunting. At Reliance Care Solutions, we aim to simplify this experience by arranging a meet and greet. This opportunity allows us to understand you and your loved one's unique needs better. You will meet our dedicated staff, and together we can create a tailored plan that best supports your loved one.`}</p>
    </div>
  );
}

function ServiceProgramsStat() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] h-[138px] items-start justify-center min-h-px min-w-px py-[20px] relative">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#ff7865] text-[42px] text-shadow-[0px_0px_24px_rgba(255,255,255,0.16)]">
        <p className="leading-[1.4]">12+</p>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[#636768] text-[16px]">Service Programs</p>
    </div>
  );
}

function FamiliesServedStat() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] h-[138px] items-start justify-center min-h-px min-w-px py-[20px] relative">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#ff7865] text-[42px] text-shadow-[0px_0px_24px_rgba(255,255,255,0.16)]">
        <p className="leading-[1.4]">500+</p>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[#636768] text-[16px]">Families Served</p>
    </div>
  );
}

function CountiesCertifiedStat() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] h-[138px] items-start justify-center min-h-px min-w-px py-[20px] relative">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#ff7865] text-[42px] text-shadow-[0px_0px_24px_rgba(255,255,255,0.16)]">
        <p className="leading-[1.4]">88+</p>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[#636768] text-[16px]">Ohio Counties Certified</p>
    </div>
  );
}

function StatsRow() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full whitespace-nowrap">
      <ServiceProgramsStat />
      <FamiliesServedStat />
      <CountiesCertifiedStat />
    </div>
  );
}

function InHomeCareContent() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-between min-h-px min-w-px relative">
      <InHomeCareText />
      <StatsRow />
    </div>
  );
}

function InHomeCareSection() {
  return (
    <div className="-translate-x-1/2 absolute bg-white content-stretch flex gap-[80px] items-center left-1/2 overflow-clip px-[100px] py-[120px] top-[1066px] w-[1440px]" data-name="Desktop - 3">
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <InHomeCareContent />
      </div>
      <div className="h-[548px] relative rounded-[16px] shrink-0 w-[622px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgInHomeCare} />
      </div>
    </div>
  );
}

function ServiceOverviewText() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start not-italic relative shrink-0 w-[397.33px]">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#171a1b] text-[40px] tracking-[0.1px] w-[397.33px]">
        <p className="leading-[48px]">{`Caregiving Services & Support`}</p>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#636768] text-[16px] w-[317px]">We provide caregiving services to clients 7 days per week, 24 hours per day</p>
    </div>
  );
}

function ArrowIcon() {
  return (
    <div className="absolute right-[-0.34px] size-[32px] top-0" data-name="ArrowUpRight">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="ArrowUpRight">
          <path d={svgPaths.p85eb00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ServiceIcon_Home() {
  return (
    <div className="h-[191px] overflow-clip relative shrink-0 w-full">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 top-1/2 flex items-center justify-center">
        <div className="size-[66px] flex items-center justify-center">
          <svg className="size-[40px]" viewBox="0 0 24 24">
            <path d={svgPaths.pCommunity} fill="white" />
          </svg>
        </div>
      </div>
      <ArrowIcon />
    </div>
  );
}

function ServiceCard_1_Content() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[1.6] not-italic relative shrink-0 text-white w-full">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[20px] w-full">{`Community & Family Focused`}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[16px] w-full">Organize care at home with guidance, helpful tips, and trusted tools that make caregiving easier, smoother, and reliable daily.</p>
    </div>
  );
}

function ServiceCard_Home() {
  return (
    <div className="bg-[#00766a] flex-[1_0_0] min-h-px min-w-px relative rounded-[20px]">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-center p-[20px] relative size-full">
          <ServiceIcon_Home />
          <ServiceCard_1_Content />
        </div>
      </div>
    </div>
  );
}

function ArrowIconDark() {
  return (
    <div className="absolute right-0 size-[32px] top-0" data-name="ArrowUpRight">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="ArrowUpRight">
          <path d={svgPaths.p85eb00} fill="var(--fill-0, #777777)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ServiceIcon_Like() {
  return (
    <div className="h-[191px] overflow-clip relative shrink-0 w-full">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 top-1/2 flex items-center justify-center">
        <div className="size-[66px] flex items-center justify-center">
          <svg className="size-[40px]" viewBox="0 0 24 24">
            <path d={svgPaths.pCustomized} fill="#00766A" />
          </svg>
        </div>
      </div>
      <ArrowIconDark />
    </div>
  );
}

function ServiceCard_Customized_Content() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.6] not-italic relative shrink-0 text-[#171a1b] text-[20px] w-full">Customized care</p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[23.8px] relative shrink-0 text-[#777] text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>{`We practice a tailored approach to care, working with each client's schedule to develop customized care plans. `}</p>
    </div>
  );
}

function ServiceCard_Customized() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[20px]">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-center p-[20px] relative size-full">
          <ServiceIcon_Like />
          <ServiceCard_Customized_Content />
        </div>
      </div>
    </div>
  );
}

function ServicesRow_1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[24px] items-start min-h-px min-w-px relative">
      <ServiceCard_Home />
      <ServiceCard_Customized />
    </div>
  );
}

function ServicesHeaderLayout() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
      <ServiceOverviewText />
      <ServicesRow_1 />
    </div>
  );
}

function ArrowUpRight2() {
  return (
    <div className="absolute right-[-0.67px] size-[32px] top-0" data-name="ArrowUpRight">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="ArrowUpRight">
          <path d={svgPaths.p85eb00} fill="var(--fill-0, #777777)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ServiceIcon_Layers() {
  return (
    <div className="h-[191px] overflow-clip relative shrink-0 w-full">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[66px] top-[calc(50%+0.5px)]" data-name="maps/layers">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Path" />
        </svg>
        <div className="absolute inset-[8.33%_12.5%_12.21%_12.5%]" data-name="Shape">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49.5 52.4425">
            <path d={svgPaths.p21aadb00} fill="var(--fill-0, #DDDDDD)" id="Shape" />
          </svg>
        </div>
      </div>
      <ArrowIconDark />
    </div>
  );
}

function ServiceCard_Transportation_Content() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[1.6] not-italic relative shrink-0 w-full">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#171a1b] text-[20px] w-full">Transportation</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#777] text-[16px] w-full">Transportation with safety in mind, using solutions that increase accessibility, prevent accidents, and maintain comfort for daily use.</p>
    </div>
  );
}

function ServiceCard_Transportation() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[20px]">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-center p-[20px] relative size-full">
          <ServiceIcon_Layers />
          <ServiceCard_Transportation_Content />
        </div>
      </div>
    </div>
  );
}

function Modeling() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[66px] top-[calc(50%+0.5px)]" data-name="Modeling">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 66">
        <g id="Modeling">
          <path d={svgPaths.p129fdb00} fill="var(--fill-0, #DDDDDD)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ArrowUpRight3() {
  return (
    <div className="absolute right-[-0.33px] size-[32px] top-0" data-name="ArrowUpRight">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="ArrowUpRight">
          <path d={svgPaths.p85eb00} fill="var(--fill-0, #777777)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ServiceIcon_Modeling() {
  return (
    <div className="h-[191px] overflow-clip relative shrink-0 w-full">
      <Modeling />
      <ArrowIconDark />
    </div>
  );
}

function ServiceCard_Quality_Content() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[1.6] not-italic relative shrink-0 w-full">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#171a1b] text-[20px] w-full">Improved Quality of Life</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#777] text-[16px] w-full">Direct support in-home care provides an invaluable solution for individuals who prioritize comfort and familiarity.</p>
    </div>
  );
}

function ServiceCard_Quality() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[20px]">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-center p-[20px] relative size-full">
          <ServiceIcon_Modeling />
          <ServiceCard_Quality_Content />
        </div>
      </div>
    </div>
  );
}

function Volunter() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-0.33px)] size-[66px] top-[calc(50%+0.5px)]" data-name="Volunter">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 66">
        <g id="Volunter">
          <path d={svgPaths.p1110c900} fill="var(--fill-0, #DDDDDD)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ArrowUpRight4() {
  return (
    <div className="absolute right-0 size-[32px] top-0" data-name="ArrowUpRight">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="ArrowUpRight">
          <path d={svgPaths.p85eb00} fill="var(--fill-0, #777777)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ServiceIcon_Volunteer() {
  return (
    <div className="h-[191px] overflow-clip relative shrink-0 w-full">
      <Volunter />
      <ArrowIconDark />
    </div>
  );
}

function ServiceCard_Staff_Content() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[1.6] not-italic relative shrink-0 w-full">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#171a1b] text-[20px] w-full">{`Professional & trained staff`}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#777] text-[16px] w-full">Use our calculator to assess and define the right care level, helping families and caregivers make confident choices daily.</p>
    </div>
  );
}

function ServiceCard_Staff() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[20px]">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-center p-[20px] relative size-full">
          <ServiceIcon_Volunteer />
          <ServiceCard_Staff_Content />
        </div>
      </div>
    </div>
  );
}

function ServicesRow_2() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
      <ServiceCard_Transportation />
      <ServiceCard_Quality />
      <ServiceCard_Staff />
    </div>
  );
}

function ServicesGridContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full">
      <ServicesHeaderLayout />
      <ServicesRow_2 />
    </div>
  );
}

function ServicesOverviewSection() {
  return (
    <div className="-translate-x-1/2 absolute bg-[rgba(42,157,143,0.1)] content-stretch flex flex-col gap-[48px] items-center justify-center left-1/2 overflow-clip px-[100px] py-[120px] top-[2760px] w-[1440px]" data-name="Desktop - 4">
      <ServicesGridContainer />
      <div className="content-stretch flex h-[54px] items-center justify-center pl-[20px] pr-[16px] relative rounded-br-[24px] rounded-tl-[24px] shrink-0" data-name="Button/Default/Rounded">
        <div aria-hidden="true" className="absolute border border-[#00766a] border-solid inset-0 pointer-events-none rounded-br-[24px] rounded-tl-[24px]" />
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#00766a] text-[16px] text-center whitespace-nowrap">
          <p className="leading-[20px]">Explore All Services →</p>
        </div>
      </div>
    </div>
  );
}

function TrustStatementBanner() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#00766a] content-stretch flex h-[401px] items-center justify-between left-1/2 overflow-clip p-[100px] top-[3864px] w-[1440px]" data-name="Desktop - 2">
      <div className="flex flex-[1_0_0] flex-col font-['Manrope:Bold',sans-serif] font-bold h-full justify-center leading-[0] min-h-px min-w-px relative text-[48px] text-center text-shadow-[0px_0px_24px_rgba(255,255,255,0.16)] text-white">
        <p className="leading-[1.4]">Trusted by countless families for quality homecare. Bringing comfort, safety, and peace of mind to where it matters most.</p>
      </div>
    </div>
  );
}

function YouthBadge() {
  return (
    <div className="bg-[#f1fafe] content-stretch flex items-center justify-center px-[12px] py-[6px] relative rounded-[200px] shrink-0">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#00766a] text-[14px] uppercase whitespace-nowrap">
        <p className="leading-[20px]">{`Youth Programs `}</p>
      </div>
    </div>
  );
}

function YouthTitleBlock() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start justify-center relative shrink-0 w-full" data-name="Title">
      <YouthBadge />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#171a1b] text-[0px] tracking-[0.12px] w-[min-content]">
        <p className="text-[48px]">
          <span className="leading-[64px] text-[#1a1a2e]">{`Expanding Care for `}</span>
          <span className="leading-[64px] text-[#2a9d8f]">{`Youth & Children`}</span>
        </p>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-w-full not-italic relative shrink-0 text-[#5a6a6e] text-[16px] w-[min-content]">{`We're proud to announce our expanded youth services and programs, providing comprehensive care and support for children and adolescents in Northwest Ohio. Every program is designed with safety, growth, and individual needs at the forefront.`}</p>
    </div>
  );
}

function ProgramIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="program.icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="program.icon">
          <path d={svgPaths.p2469b00} id="Vector" stroke="var(--stroke-0, #2A9D8F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p3eef23d2} id="Vector_2" stroke="var(--stroke-0, #2A9D8F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M9 14L11 16L15 12" id="Vector_3" stroke="var(--stroke-0, #2A9D8F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-[rgba(42,157,143,0.1)] relative rounded-[14px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <ProgramIcon />
      </div>
    </div>
  );
}

function H() {
  return (
    <div className="content-stretch flex h-[24px] items-start relative shrink-0 w-full" data-name="h4">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] min-h-px min-w-px not-italic relative text-[#1a1a2e] text-[16px]">CANS Assessment</p>
    </div>
  );
}

function P() {
  return (
    <div className="h-[44.781px] relative shrink-0 w-full" data-name="p">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#5a6a6e] text-[14px] top-[-1px] tracking-[0.175px] w-[501px]">{`Certified assessments for children using the Child and Adolescent Needs and Strengths tool to identify and address each child's unique needs promptly.`}</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="flex-[1_0_0] h-[72.781px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <H />
        <P />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex gap-[16px] h-[72.781px] items-start relative shrink-0 w-full" data-name="Container">
      <Container4 />
      <Container5 />
    </div>
  );
}

function ProgramIcon1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="program.icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="program.icon">
          <path d={svgPaths.p2bbf6680} id="Vector" stroke="var(--stroke-0, #2A9D8F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p206ad900} id="Vector_2" stroke="var(--stroke-0, #2A9D8F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-[rgba(42,157,143,0.1)] relative rounded-[14px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <ProgramIcon1 />
      </div>
    </div>
  );
}

function H1() {
  return (
    <div className="content-stretch flex h-[24px] items-start relative shrink-0 w-full" data-name="h4">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] min-h-px min-w-px not-italic relative text-[#1a1a2e] text-[16px]">Group Home Services</p>
    </div>
  );
}

function P1() {
  return (
    <div className="h-[44.781px] relative shrink-0 w-full" data-name="p">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#5a6a6e] text-[14px] top-[-1px] tracking-[0.175px] w-[511px]">A safe, supportive living environment for children focused on individual needs, personal growth, and overall well-being within a structured setting.</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="flex-[1_0_0] h-[72.781px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <H1 />
        <P1 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex gap-[16px] h-[72.781px] items-start relative shrink-0 w-full" data-name="Container">
      <Container7 />
      <Container8 />
    </div>
  );
}

function ProgramIcon2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="program.icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="program.icon">
          <path d={svgPaths.p3f3d8e00} id="Vector" stroke="var(--stroke-0, #2A9D8F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M9 12L11 14L15 10" id="Vector_2" stroke="var(--stroke-0, #2A9D8F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-[rgba(42,157,143,0.1)] relative rounded-[14px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <ProgramIcon2 />
      </div>
    </div>
  );
}

function H2() {
  return (
    <div className="content-stretch flex h-[24px] items-start relative shrink-0 w-full" data-name="h4">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] min-h-px min-w-px not-italic relative text-[#1a1a2e] text-[16px]">Emergency Respite Placement</p>
    </div>
  );
}

function P2() {
  return (
    <div className="h-[44.781px] relative shrink-0 w-full" data-name="p">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#5a6a6e] text-[14px] top-[-1px] tracking-[0.175px] w-[458px]">Immediate support for children in crisis, ensuring a safe and nurturing environment during times of urgent need.</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="flex-[1_0_0] h-[72.781px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <H2 />
        <P2 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex gap-[16px] h-[72.781px] items-start relative shrink-0 w-full" data-name="Container">
      <Container10 />
      <Container11 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[266.344px] items-start relative shrink-0 w-[600px]" data-name="Container">
      <Container3 />
      <Container6 />
      <Container9 />
    </div>
  );
}

function YouthSectionText() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-between relative shrink-0 w-[628px]">
      <YouthTitleBlock />
      <Container2 />
    </div>
  );
}

function YouthSectionLayout() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[44px] items-center min-h-px min-w-px relative">
      <div className="flex flex-row items-center self-stretch">
        <YouthSectionText />
      </div>
      <div className="h-[654px] relative rounded-[16px] shrink-0 w-[568px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgYouthProgram} />
      </div>
    </div>
  );
}

function YouthProgramsSection() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#eaf6f4] content-stretch flex items-start left-1/2 overflow-clip px-[100px] py-[120px] top-[4265px] w-[1440px]" data-name="Desktop - 7">
      <YouthSectionLayout />
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center leading-[1.6] min-h-px min-w-px not-italic relative text-[#171a1b]">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[16px] w-full">Cameron Williamson</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal opacity-70 relative shrink-0 text-[14px] w-full">Dental Assistant</p>
    </div>
  );
}

function TestimonialHeader_1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[44px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="44" src={imgEllipse1086} width="44" />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center leading-[1.6] min-h-px min-w-px not-italic relative text-[#171a1b]">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[16px] w-full">Cameron Williamson</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal opacity-70 relative shrink-0 text-[14px] w-full">Dental Assistant</p>
      </div>
    </div>
  );
}

function TestimonialCard_1() {
  return (
    <div className="bg-[#f5f5f5] relative rounded-[16px] shrink-0 w-full" data-name="01">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[20px] relative size-full">
        <TestimonialHeader_1 />
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic opacity-80 relative shrink-0 text-[#171a1b] text-[16px] w-full">Highly recommended! This product exceeded my expectations in every way. It has become an essential part of my daily life.</p>
      </div>
    </div>
  );
}

function TestimonialAuthor_2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center leading-[1.6] min-h-px min-w-px not-italic relative text-[#171a1b]">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[16px] w-full">Wanda Maximoff</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal opacity-70 relative shrink-0 text-[14px] w-full">Dental Assistant</p>
    </div>
  );
}

function TestimonialHeader_2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[44px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="44" src={imgEllipse1087} width="44" />
      </div>
      <TestimonialAuthor_2 />
    </div>
  );
}

function TestimonialCard_2() {
  return (
    <div className="bg-[#f5f5f5] relative rounded-[16px] shrink-0 w-full" data-name="02">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[20px] relative size-full">
        <TestimonialHeader_2 />
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic opacity-80 relative shrink-0 text-[#171a1b] text-[16px] w-full">Outstanding customer support! They went above and beyond to help me resolve my issue. I felt valued as a customer, and their commitment to ensuring my satisfaction left a lasting impression.</p>
      </div>
    </div>
  );
}

function TestimonialAuthor_3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center leading-[1.6] min-h-px min-w-px not-italic relative text-[#171a1b]">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[16px] w-full">Natasha Romanoff</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal opacity-70 relative shrink-0 text-[14px] w-full">Dental Assistant</p>
    </div>
  );
}

function TestimonialHeader_3() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[44px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="44" src={imgEllipse1088} width="44" />
      </div>
      <TestimonialAuthor_3 />
    </div>
  );
}

function TestimonialCard_3() {
  return (
    <div className="bg-[#f5f5f5] relative rounded-[16px] shrink-0 w-full" data-name="03">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[20px] relative size-full">
        <TestimonialHeader_3 />
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic opacity-80 relative shrink-0 text-[#171a1b] text-[16px] w-full">Highly recommended! This product exceeded my expectations in every way.</p>
      </div>
    </div>
  );
}

function TestimonialAuthor_4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center leading-[1.6] min-h-px min-w-px not-italic relative text-[#171a1b]">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[16px] w-full">Cameron Williamson</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal opacity-70 relative shrink-0 text-[14px] w-full">Dental Assistant</p>
    </div>
  );
}

function TestimonialHeader_4() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[44px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="44" src={imgEllipse1086} width="44" />
      </div>
      <TestimonialAuthor_4 />
    </div>
  );
}

function TestimonialCard_4() {
  return (
    <div className="bg-[#f5f5f5] relative rounded-[16px] shrink-0 w-full" data-name="04">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[20px] relative size-full">
        <TestimonialHeader_4 />
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic opacity-80 relative shrink-0 text-[#171a1b] text-[16px] w-full">Highly recommended! This product exceeded my expectations in every way.</p>
      </div>
    </div>
  );
}

function TestimonialRow_4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative" data-name="Row 4">
      <TestimonialCard_1 />
      <TestimonialCard_2 />
      <TestimonialCard_3 />
      <TestimonialCard_4 />
    </div>
  );
}

function TestimonialAuthor_5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center leading-[1.6] min-h-px min-w-px not-italic relative text-[#171a1b]">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[16px] w-full">Harleen Quinzel</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal opacity-70 relative shrink-0 text-[14px] w-full">Dental Assistant</p>
    </div>
  );
}

function TestimonialHeader_5() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[44px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="44" src={imgEllipse1089} width="44" />
      </div>
      <TestimonialAuthor_5 />
    </div>
  );
}

function TestimonialCard_5() {
  return (
    <div className="bg-[#f5f5f5] relative rounded-[16px] shrink-0 w-full" data-name="01">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[20px] relative size-full">
        <TestimonialHeader_5 />
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic opacity-80 relative shrink-0 text-[#171a1b] text-[16px] w-full">Outstanding customer support! They went above and beyond to help me resolve my issue. I felt valued as a customer, and their commitment to ensuring my satisfaction left a lasting impression.</p>
      </div>
    </div>
  );
}

function TestimonialAuthor_6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center leading-[1.6] min-h-px min-w-px not-italic relative text-[#171a1b]">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[16px] w-full">Carol Danvers</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal opacity-70 relative shrink-0 text-[14px] w-full">Dental Assistant</p>
    </div>
  );
}

function TestimonialHeader_6() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[44px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="44" src={imgEllipse1090} width="44" />
      </div>
      <TestimonialAuthor_6 />
    </div>
  );
}

function TestimonialCard_6() {
  return (
    <div className="bg-[#f5f5f5] relative rounded-[16px] shrink-0 w-full" data-name="02">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[20px] relative size-full">
        <TestimonialHeader_6 />
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic opacity-80 relative shrink-0 text-[#171a1b] text-[16px] w-full">Highly recommended! This product exceeded my expectations in every way.</p>
      </div>
    </div>
  );
}

function TestimonialAuthor_7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center leading-[1.6] min-h-px min-w-px not-italic relative text-[#171a1b]">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[16px] w-full">Juan Attwood</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal opacity-70 relative shrink-0 text-[14px] w-full">Dental Assistant</p>
    </div>
  );
}

function TestimonialHeader_7() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[44px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="44" src={imgEllipse1091} width="44" />
      </div>
      <TestimonialAuthor_7 />
    </div>
  );
}

function TestimonialCard_7() {
  return (
    <div className="bg-[#f5f5f5] relative rounded-[16px] shrink-0 w-full" data-name="03">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[20px] relative size-full">
        <TestimonialHeader_7 />
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic opacity-80 relative shrink-0 text-[#171a1b] text-[16px] w-full">Outstanding customer support! They went above and beyond to help me resolve my issue. I felt valued as a customer, and their commitment to ensuring my satisfaction left a lasting impression.</p>
      </div>
    </div>
  );
}

function TestimonialAuthor_8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center leading-[1.6] min-h-px min-w-px not-italic relative text-[#171a1b]">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[16px] w-full">Wanda Maximoff</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal opacity-70 relative shrink-0 text-[14px] w-full">Dental Assistant</p>
    </div>
  );
}

function TestimonialHeader_8() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[44px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="44" src={imgEllipse1087} width="44" />
      </div>
      <TestimonialAuthor_8 />
    </div>
  );
}

function TestimonialCard_8() {
  return (
    <div className="bg-[#f5f5f5] relative rounded-[16px] shrink-0 w-full" data-name="4">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[20px] relative size-full">
        <TestimonialHeader_8 />
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic opacity-80 relative shrink-0 text-[#171a1b] text-[16px] w-full">Outstanding customer support! They went above and beyond to help me resolve my issue. I felt valued as a customer, and their commitment to ensuring my satisfaction left a lasting impression.</p>
      </div>
    </div>
  );
}

function TestimonialRow_3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative" data-name="Row 3">
      <TestimonialCard_5 />
      <TestimonialCard_6 />
      <TestimonialCard_7 />
      <TestimonialCard_8 />
    </div>
  );
}

function TestimonialAuthor_9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center leading-[1.6] min-h-px min-w-px not-italic relative text-[#171a1b]">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[16px] w-full">Alan Carrington</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal opacity-70 relative shrink-0 text-[14px] w-full">Dental Assistant</p>
    </div>
  );
}

function TestimonialHeader_9() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[44px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="44" src={imgEllipse1092} width="44" />
      </div>
      <TestimonialAuthor_9 />
    </div>
  );
}

function TestimonialCard_9() {
  return (
    <div className="bg-[#f5f5f5] relative rounded-[16px] shrink-0 w-full" data-name="1">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[20px] relative size-full">
        <TestimonialHeader_9 />
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic opacity-80 relative shrink-0 text-[#171a1b] text-[16px] w-full">Highly recommended! This product exceeded my expectations in every way.</p>
      </div>
    </div>
  );
}

function TestimonialAuthor_10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center leading-[1.6] min-h-px min-w-px not-italic relative text-[#171a1b]">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[16px] w-full">Brian Bargeman</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal opacity-70 relative shrink-0 text-[14px] w-full">Dental Assistant</p>
    </div>
  );
}

function TestimonialHeader_10() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[44px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="44" src={imgEllipse1093} width="44" />
      </div>
      <TestimonialAuthor_10 />
    </div>
  );
}

function TestimonialCard_10() {
  return (
    <div className="bg-[#f5f5f5] relative rounded-[16px] shrink-0 w-full" data-name="2">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[20px] relative size-full">
        <TestimonialHeader_10 />
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic opacity-80 relative shrink-0 text-[#171a1b] text-[16px] w-full">Outstanding customer support! They went above and beyond to help me resolve my issue. I felt valued as a customer, and their commitment to ensuring my satisfaction left a lasting impression.</p>
      </div>
    </div>
  );
}

function TestimonialAuthor_11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center leading-[1.6] min-h-px min-w-px not-italic relative text-[#171a1b]">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[16px] w-full">Brendan Carroll</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal opacity-70 relative shrink-0 text-[14px] w-full">Dental Assistant</p>
    </div>
  );
}

function TestimonialHeader_11() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[44px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="44" src={imgEllipse1094} width="44" />
      </div>
      <TestimonialAuthor_11 />
    </div>
  );
}

function TestimonialCard_11() {
  return (
    <div className="bg-[#f5f5f5] relative rounded-[16px] shrink-0 w-full" data-name="3">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[20px] relative size-full">
        <TestimonialHeader_11 />
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic opacity-80 relative shrink-0 text-[#171a1b] text-[16px] w-full">Highly recommended! This product exceeded my expectations in every way. It has become an essential part of my daily life.</p>
      </div>
    </div>
  );
}

function TestimonialAuthor_12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center leading-[1.6] min-h-px min-w-px not-italic relative text-[#171a1b]">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[16px] w-full">Zhanatan Donaldson</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal opacity-70 relative shrink-0 text-[14px] w-full">Dental Assistant</p>
    </div>
  );
}

function TestimonialHeader_12() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[44px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="44" src={imgEllipse1095} width="44" />
      </div>
      <TestimonialAuthor_12 />
    </div>
  );
}

function TestimonialCard_12() {
  return (
    <div className="bg-[#f5f5f5] relative rounded-[16px] shrink-0 w-full" data-name="02">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[20px] relative size-full">
        <TestimonialHeader_12 />
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic opacity-80 relative shrink-0 text-[#171a1b] text-[16px] w-full">Highly recommended! This product exceeded my expectations in every way.</p>
      </div>
    </div>
  );
}

function TestimonialRow_1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative" data-name="Row 1">
      <TestimonialCard_9 />
      <TestimonialCard_10 />
      <TestimonialCard_11 />
      <TestimonialCard_12 />
    </div>
  );
}

function TestimonialAuthor_13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center leading-[1.6] min-h-px min-w-px not-italic relative text-[#171a1b]">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[16px] w-full">Kaden Fane</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal opacity-70 relative shrink-0 text-[14px] w-full">Dental Assistant</p>
    </div>
  );
}

function TestimonialHeader_13() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[44px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="44" src={imgEllipse1096} width="44" />
      </div>
      <TestimonialAuthor_13 />
    </div>
  );
}

function TestimonialCard_13() {
  return (
    <div className="bg-[#f5f5f5] relative rounded-[16px] shrink-0 w-full" data-name="01">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[20px] relative size-full">
        <TestimonialHeader_13 />
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic opacity-80 relative shrink-0 text-[#171a1b] text-[16px] w-full">Outstanding customer support! They went above and beyond to help me resolve my issue. I felt valued as a customer, and their commitment to ensuring my satisfaction left a lasting impression.</p>
      </div>
    </div>
  );
}

function TestimonialAuthor_14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center leading-[1.6] min-h-px min-w-px not-italic relative text-[#171a1b]">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[16px] w-full">Zhanatan Donaldson</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal opacity-70 relative shrink-0 text-[14px] w-full">Dental Assistant</p>
    </div>
  );
}

function TestimonialHeader_14() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[44px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="44" src={imgEllipse1095} width="44" />
      </div>
      <TestimonialAuthor_14 />
    </div>
  );
}

function TestimonialCard_14() {
  return (
    <div className="bg-[#f5f5f5] relative rounded-[16px] shrink-0 w-full" data-name="02">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[20px] relative size-full">
        <TestimonialHeader_14 />
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic opacity-80 relative shrink-0 text-[#171a1b] text-[16px] w-full">Highly recommended! This product exceeded my expectations in every way.</p>
      </div>
    </div>
  );
}

function TestimonialAuthor_15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center leading-[1.6] min-h-px min-w-px not-italic relative text-[#171a1b]">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[16px] w-full">Samuel Moore</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal opacity-70 relative shrink-0 text-[14px] w-full">Dental Assistant</p>
    </div>
  );
}

function TestimonialHeader_15() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[44px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="44" src={imgEllipse1097} width="44" />
      </div>
      <TestimonialAuthor_15 />
    </div>
  );
}

function TestimonialCard_15() {
  return (
    <div className="bg-[#f5f5f5] relative rounded-[16px] shrink-0 w-full" data-name="03">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[20px] relative size-full">
        <TestimonialHeader_15 />
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic opacity-80 relative shrink-0 text-[#171a1b] text-[16px] w-full">Outstanding customer support! They went above and beyond to help me resolve my issue. I felt valued as a customer, and their commitment to ensuring my satisfaction left a lasting impression.</p>
      </div>
    </div>
  );
}

function TestimonialAuthor_16() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center leading-[1.6] min-h-px min-w-px not-italic relative text-[#171a1b]">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[16px] w-full">Alan Carrington</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal opacity-70 relative shrink-0 text-[14px] w-full">Dental Assistant</p>
    </div>
  );
}

function TestimonialHeader_16() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[44px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="44" src={imgEllipse1092} width="44" />
      </div>
      <TestimonialAuthor_16 />
    </div>
  );
}

function TestimonialCard_16() {
  return (
    <div className="bg-[#f5f5f5] relative rounded-[16px] shrink-0 w-full" data-name="1">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[20px] relative size-full">
        <TestimonialHeader_16 />
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic opacity-80 relative shrink-0 text-[#171a1b] text-[16px] w-full">Highly recommended! This product exceeded my expectations in every way.</p>
      </div>
    </div>
  );
}

function TestimonialRow_2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative" data-name="Row 2">
      <TestimonialCard_13 />
      <TestimonialCard_14 />
      <TestimonialCard_15 />
      <TestimonialCard_16 />
    </div>
  );
}

function TestimonialsGridContainer() {
  return (
    <div className="content-stretch flex gap-[16px] h-[786px] items-start relative shrink-0 w-full">
      <TestimonialRow_4 />
      <TestimonialRow_3 />
      <TestimonialRow_1 />
      <TestimonialRow_2 />
    </div>
  );
}

function TestimonialsInner() {
  return (
    <div className="bg-white h-[1144px] relative shrink-0 w-full" data-name="Desktop - 14">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[60px] items-center px-[100px] py-[120px] relative size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[64px] min-w-full not-italic relative shrink-0 text-[#171a1b] text-[48px] text-center tracking-[0.12px] w-[min-content]">See what our members are saying</p>
          <TestimonialsGridContainer />
          <div className="absolute bg-gradient-to-b bottom-0 from-[rgba(255,255,255,0)] h-[192px] left-0 to-white w-[1440px]" />
        </div>
      </div>
    </div>
  );
}

function TestimonialsSection() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[44px] h-[1292px] items-center left-1/2 top-[5159px] w-[1440px]">
      <TestimonialsInner />
      <div className="bg-[#ff7865] content-stretch flex h-[54px] items-center justify-center px-[16px] relative rounded-br-[24px] rounded-tl-[24px] shrink-0" data-name="Button/Default/Rounded">
        <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
          <p className="leading-[1.6]">Show More →</p>
        </div>
      </div>
    </div>
  );
}

function ContactTitle() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start justify-center not-italic relative shrink-0 w-[527px]">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#171a1b] text-[0px] text-shadow-[0px_0px_24px_rgba(255,255,255,0.16)] tracking-[-0.3px] w-full">
        <p className="text-[60px]">
          <span className="leading-[64px]">{`Connect with our team to `}</span>
          <span className="font-['Instrument_Serif:Italic',sans-serif] italic leading-[64px] text-[#00766a] tracking-[-0.3px]">explore solutions.</span>
        </p>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#636768] text-[16px] w-full">We’re here to answer your questions and support your needs.</p>
    </div>
  );
}

function VuesaxLinearSms() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/sms">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="sms">
          <path d={svgPaths.p1b81e780} id="Vector" stroke="var(--stroke-0, #00766A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
          <path d={svgPaths.p31dc2600} id="Vector_2" stroke="var(--stroke-0, #00766A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
          <g id="Vector_3" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function ContactIcon_Email() {
  return (
    <div className="backdrop-blur-[12px] bg-[rgba(176,213,209,0.5)] content-stretch flex items-center justify-center p-[10px] relative rounded-[50px] shrink-0 size-[48px]">
      <div className="relative shrink-0 size-[24px]" data-name="sms">
        <VuesaxLinearSms />
      </div>
    </div>
  );
}

function ContactDetail_Email() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[1.6] not-italic relative shrink-0 text-[#171a1b] w-full">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[20px] w-full">Email</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[16px] w-full">info@reliancecaresolutions.com</p>
    </div>
  );
}

function ContactCard_Email() {
  return (
    <div className="backdrop-blur-[12px] bg-[#eaf6f4] content-stretch flex flex-col gap-[10px] items-start p-[16px] relative rounded-[200px] shrink-0 w-[274px]">
      <ContactIcon_Email />
      <ContactDetail_Email />
    </div>
  );
}

function VuesaxLinearCallCalling() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/call-calling">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="call-calling">
          <g id="call-calling_2">
            <path d={svgPaths.pa7f1800} id="Vector" stroke="var(--stroke-0, #00766A)" strokeMiterlimit="10" strokeWidth="1.5" />
            <path d={svgPaths.p34187f98} id="Vector_2" stroke="var(--stroke-0, #00766A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d="M22 9C22 5.13 18.87 2 15 2" id="Vector_3" stroke="var(--stroke-0, #00766A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
          <g id="Vector_4" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function ContactIcon_Phone() {
  return (
    <div className="backdrop-blur-[12px] bg-[rgba(176,213,209,0.5)] content-stretch flex items-center p-[10px] relative rounded-[50px] shrink-0 size-[48px]">
      <div className="relative shrink-0 size-[24px]" data-name="call-calling">
        <VuesaxLinearCallCalling />
      </div>
    </div>
  );
}

function ContactDetail_Phone() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[1.6] not-italic relative shrink-0 text-[#171a1b] w-full">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[20px] w-full">Phone</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[16px] w-full">(419) 704-0316</p>
    </div>
  );
}

function ContactCard_Phone() {
  return (
    <div className="backdrop-blur-[12px] bg-[#eaf6f4] content-stretch flex flex-col gap-[10px] items-start p-[16px] relative rounded-[200px] shrink-0 w-[274px]">
      <ContactIcon_Phone />
      <ContactDetail_Phone />
    </div>
  );
}

function ContactCardsRow() {
  return (
    <div className="content-stretch flex gap-[16px] items-start justify-center relative shrink-0 w-full">
      <ContactCard_Email />
      <ContactCard_Phone />
    </div>
  );
}

function ContactTextWrapper() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[109px] items-start left-[101px] top-[155px] w-[564px]">
      <ContactTitle />
      <ContactCardsRow />
    </div>
  );
}

function ContactFormTitle() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start leading-[1.6] not-italic relative shrink-0 w-full">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#171a1b] text-[24px] whitespace-nowrap">Tell us what you need</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#777] text-[16px] w-[min-content]">Our team is ready to assist you with every detail.</p>
    </div>
  );
}

function FormInput_Name() {
  return (
    <div className="relative rounded-[10px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(61,61,61,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[16px] relative size-full">
          <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#777] text-[16px] whitespace-nowrap">Full name</p>
        </div>
      </div>
    </div>
  );
}

function FormField_Name() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[#171a1b] text-[12px] w-full">Full Name</p>
      <FormInput_Name />
    </div>
  );
}

function FormInput_Phone() {
  return (
    <div className="relative rounded-[10px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(61,61,61,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[16px] relative size-full">
          <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[16px] text-[rgba(26,26,46,0.5)] whitespace-nowrap">(419) 000-0000</p>
        </div>
      </div>
    </div>
  );
}

function FormField_Phone() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[#171a1b] text-[12px] w-full">Phone Number</p>
      <FormInput_Phone />
    </div>
  );
}

function FormRow_NamePhone() {
  return (
    <div className="content-stretch flex gap-[30px] items-center relative shrink-0 w-full">
      <FormField_Name />
      <FormField_Phone />
    </div>
  );
}

function FormInput_Email() {
  return (
    <div className="relative rounded-[10px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(61,61,61,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[16px] relative size-full">
          <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#777] text-[16px] whitespace-nowrap">yourname@email.com</p>
        </div>
      </div>
    </div>
  );
}

function FormField_Email() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[#171a1b] text-[12px] w-full">Email</p>
      <FormInput_Email />
    </div>
  );
}

function FormInput_Message() {
  return (
    <div className="h-[124px] relative rounded-[10px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(61,61,61,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex items-start px-[12px] py-[16px] relative size-full">
        <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#777] text-[16px] whitespace-nowrap">Tell us about your needs...</p>
      </div>
    </div>
  );
}

function FormField_Message() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[158px] items-start relative shrink-0 w-full">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[#171a1b] text-[12px] w-full">How can we help you?</p>
      <FormInput_Message />
    </div>
  );
}

function FormFieldsGrid() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0 w-full">
      <FormRow_NamePhone />
      <FormField_Email />
      <FormField_Message />
    </div>
  );
}

function ContactFormCard() {
  return (
    <div className="-translate-x-1/2 absolute bg-white content-stretch flex flex-col gap-[32px] items-start left-[calc(50%+329.5px)] p-[24px] rounded-[20px] top-[143px] w-[541px]">
      <div aria-hidden="true" className="absolute border border-[rgba(61,61,61,0.1)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <ContactFormTitle />
      <FormFieldsGrid />
      <div className="bg-[#00766a] h-[54px] relative rounded-[200px] shrink-0 w-full" data-name="Button/Default/Rounded">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[16px] relative size-full">
            <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
              <p className="leading-[1.6]">Submit</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactSection() {
  return (
    <div className="-translate-x-1/2 absolute bg-white h-[870px] left-1/2 overflow-clip top-[6451px] w-[1440px]" data-name="Desktop - 15">
      <ContactTextWrapper />
      <ContactFormCard />
    </div>
  );
}

function FooterLogo() {
  return (
    <div className="relative shrink-0" data-name="Logo">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-end justify-center relative size-full">
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
    </div>
  );
}

function FooterLogoContainer() {
  return (
    <div className="absolute content-stretch flex h-[36px] items-center left-0 top-0 w-[282px]" data-name="Container">
      <FooterLogo />
    </div>
  );
}

function FooterAboutText() {
  return (
    <div className="absolute h-[95.188px] left-0 top-[52px] w-[282px]" data-name="p">
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[23.8px] left-0 text-[14px] text-white top-0 w-[282px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Your trusted personal caregiving service provider in Northwest Ohio. Providing compassionate, reliable care since our founding.
      </p>
    </div>
  );
}

function IconFacebook() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Facebook">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Facebook">
          <path d={svgPaths.p391f9d80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SocialLinkFacebook() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] relative rounded-[33554400px] shrink-0 size-[36px]" data-name="a">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <IconFacebook />
      </div>
    </div>
  );
}

function IconInstagram() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Instagram">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_930)" id="Instagram">
          <path d={svgPaths.p22916300} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2c68500} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M11.6667 4.33333H11.6733" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_1_930">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SocialLinkInstagram() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] relative rounded-[33554400px] shrink-0 size-[36px]" data-name="a">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <IconInstagram />
      </div>
    </div>
  );
}

function SocialLinksContainer() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[36px] items-start left-0 top-[171.19px] w-[282px]" data-name="Container">
      <SocialLinkFacebook />
      <SocialLinkInstagram />
    </div>
  );
}

function FooterBrandColumn() {
  return (
    <div className="col-1 h-[207.188px] justify-self-stretch relative row-1 shrink-0" data-name="Container">
      <FooterLogoContainer />
      <FooterAboutText />
      <SocialLinksContainer />
    </div>
  );
}

function FooterColumnTitle_QuickLinks() {
  return (
    <div className="content-stretch flex h-[22.5px] items-start relative shrink-0 w-full" data-name="h4">
      <p className="flex-[1_0_0] font-['Poppins:SemiBold',sans-serif] leading-[22.5px] min-h-px min-w-px not-italic relative text-[15px] text-white">Quick Links</p>
    </div>
  );
}

function FooterLink_Home() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="li">
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-white top-[2px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Home
      </p>
    </div>
  );
}

function FooterLink_About() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="li">
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-white top-[2px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        About Us
      </p>
    </div>
  );
}

function FooterLink_Services() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="li">
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-white top-[2px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Services
      </p>
    </div>
  );
}

function FooterLink_Youth() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="li">
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-white top-[2px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Youth Programs
      </p>
    </div>
  );
}

function FooterLink_Contact() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="li">
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-white top-[2px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Contact
      </p>
    </div>
  );
}

function FooterLinksList() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[168px] items-start relative shrink-0 w-full" data-name="ul">
      <FooterLink_Home />
      <FooterLink_About />
      <FooterLink_Services />
      <FooterLink_Youth />
      <FooterLink_Contact />
    </div>
  );
}

function FooterColumn_QuickLinks() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[207px] items-start relative shrink-0 w-[240px]" data-name="Container">
      <FooterColumnTitle_QuickLinks />
      <FooterLinksList />
    </div>
  );
}

function FooterColumnTitle_Services() {
  return (
    <div className="content-stretch flex h-[22.5px] items-start relative shrink-0 w-full" data-name="h4">
      <p className="flex-[1_0_0] font-['Poppins:SemiBold',sans-serif] leading-[22.5px] min-h-px min-w-px not-italic relative text-[15px] text-white">Services</p>
    </div>
  );
}

function FooterService_Respite() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="li">
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-white top-[2px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Respite Care
      </p>
    </div>
  );
}

function FooterService_AdultDay() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="li">
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-white top-[2px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Adult Day Services
      </p>
    </div>
  );
}

function FooterService_Community() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="li">
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-white top-[2px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Community Activities
      </p>
    </div>
  );
}

function FooterService_Vocational() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="li">
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-white top-[2px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Vocational Rehab
      </p>
    </div>
  );
}

function FooterService_Transportation() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="li">
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-white top-[2px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Transportation
      </p>
    </div>
  );
}

function FooterServicesList() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[168px] items-start relative shrink-0 w-full" data-name="ul">
      <FooterService_Respite />
      <FooterService_AdultDay />
      <FooterService_Community />
      <FooterService_Vocational />
      <FooterService_Transportation />
    </div>
  );
}

function FooterColumn_Services() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[207px] items-start relative shrink-0 w-[240px]" data-name="Container">
      <FooterColumnTitle_Services />
      <FooterServicesList />
    </div>
  );
}

function FooterColumnTitle_Contact() {
  return (
    <div className="content-stretch flex h-[22.5px] items-start relative shrink-0 w-full" data-name="h4">
      <p className="flex-[1_0_0] font-['Poppins:SemiBold',sans-serif] leading-[22.5px] min-h-px min-w-px not-italic relative text-[15px] text-white">Contact Us</p>
    </div>
  );
}

function MapPin() {
  return (
    <div className="absolute left-0 size-[16px] top-[4px]" data-name="MapPin">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="MapPin">
          <path d={svgPaths.p14548f00} id="Vector" stroke="var(--stroke-0, #F4A261)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p17781bc0} id="Vector_2" stroke="var(--stroke-0, #F4A261)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function FooterAddressText() {
  return (
    <div className="absolute font-['Open_Sans:Regular',sans-serif] font-normal h-[40px] leading-[20px] left-[28px] text-[14px] text-white top-0 w-[184.219px] whitespace-nowrap" data-name="span">
      <p className="absolute left-0 top-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        5450 Oak Alley Ct.,
      </p>
      <p className="absolute left-0 top-[20px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Suite 108, Toledo, OH 43606
      </p>
    </div>
  );
}

function FooterContactInfo_Address() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="li">
      <MapPin />
      <FooterAddressText />
    </div>
  );
}

function IconPhone_Footer() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Phone">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_869)" id="Phone">
          <path d={svgPaths.p2a44c680} id="Vector" stroke="var(--stroke-0, #F4A261)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_1_869">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function FooterPhoneLink() {
  return (
    <div className="h-[20px] relative shrink-0 w-[96.453px]" data-name="a">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">(419) 704-0316</p>
      </div>
    </div>
  );
}

function FooterContactInfo_Phone() {
  return (
    <div className="content-stretch flex gap-[12px] h-[20px] items-center relative shrink-0 w-full" data-name="li">
      <IconPhone_Footer />
      <FooterPhoneLink />
    </div>
  );
}

function IconMail_Footer() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Mail">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Mail">
          <path d={svgPaths.p17070980} id="Vector" stroke="var(--stroke-0, #F4A261)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p120c8200} id="Vector_2" stroke="var(--stroke-0, #F4A261)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function FooterEmailLink() {
  return (
    <div className="h-[20px] relative shrink-0 w-[208.641px]" data-name="a">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          info@reliancecaresolutions.com
        </p>
      </div>
    </div>
  );
}

function FooterContactInfo_Email() {
  return (
    <div className="content-stretch flex gap-[12px] h-[20px] items-center relative shrink-0 w-full" data-name="li">
      <IconMail_Footer />
      <FooterEmailLink />
    </div>
  );
}

function IconClock_Footer() {
  return (
    <div className="absolute left-0 size-[16px] top-[4px]" data-name="Clock">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_872)" id="Clock">
          <path d={svgPaths.p39ee6532} id="Vector" stroke="var(--stroke-0, #F4A261)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 4V8L10.6667 9.33333" id="Vector_2" stroke="var(--stroke-0, #F4A261)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_1_872">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function FooterHoursText() {
  return (
    <div className="absolute font-['Open_Sans:Regular',sans-serif] font-normal h-[40px] leading-[20px] left-[28px] text-[14px] text-white top-0 w-[135.234px] whitespace-nowrap" data-name="span">
      <p className="absolute left-0 top-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        Mon - Fri: 9am - 5pm
      </p>
      <p className="absolute left-0 top-[20px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Emergency: 24/7
      </p>
    </div>
  );
}

function FooterContactInfo_Hours() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="li">
      <IconClock_Footer />
      <FooterHoursText />
    </div>
  );
}

function FooterContactList() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[168px] items-start relative shrink-0 w-full" data-name="ul">
      <FooterContactInfo_Address />
      <FooterContactInfo_Phone />
      <FooterContactInfo_Email />
      <FooterContactInfo_Hours />
    </div>
  );
}

function FooterColumn_Contact() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[207px] items-start relative shrink-0 w-[240px]" data-name="Container">
      <FooterColumnTitle_Contact />
      <FooterContactList />
    </div>
  );
}

function FooterNavColumnsGrid() {
  return (
    <div className="content-stretch flex gap-[40px] items-center justify-end relative shrink-0">
      <FooterColumn_QuickLinks />
      <FooterColumn_Services />
      <FooterColumn_Contact />
    </div>
  );
}

function FooterNavWrapper() {
  return (
    <div className="col-2 content-stretch flex items-center justify-end justify-self-start relative row-1 self-start shrink-0">
      <FooterNavColumnsGrid />
    </div>
  );
}

function FooterColumnsGrid() {
  return (
    <div className="gap-x-[40px] gap-y-[40px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[207.188px] relative shrink-0 w-[1248px]" data-name="div">
      <FooterBrandColumn />
      <FooterNavWrapper />
    </div>
  );
}

function FooterMain() {
  return (
    <div className="relative shrink-0 w-full" data-name="Top">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[100px] py-[60px] relative size-full">
          <FooterColumnsGrid />
        </div>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex gap-[36px] items-center justify-end opacity-70 relative shrink-0" data-name="List">
      <p className="relative shrink-0">Terms of Service</p>
      <p className="relative shrink-0">Privacy Policy</p>
    </div>
  );
}

function FooterCopyright() {
  return (
    <div className="relative shrink-0 w-[1440px]" data-name="Copyright">
      <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal items-start justify-between leading-[1.6] not-italic overflow-clip px-[120px] py-[32px] relative rounded-[inherit] size-full text-[14px] text-white whitespace-nowrap">
        <p className="opacity-70 relative shrink-0 text-right">Copyright© 2026. Reliance Care Solutions. All Right Reserved.</p>
        <List />
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.24)] border-solid border-t inset-0 pointer-events-none" />
    </div>
  );
}

function FooterSection() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#00766a] content-stretch flex flex-col items-center left-1/2 overflow-clip top-[7321px] w-[1440px]" data-name="Footer">
      <FooterMain />
      <FooterCopyright />
    </div>
  );
}

export default function LandingPage() {
  return (
    <div className="bg-white relative size-full" data-name="Landing Page">
      <NavbarInner />
      <HeroSection />
      <SupportAdviceSection />
      <InHomeCareSection />
      <ServicesOverviewSection />
      <TrustStatementBanner />
      <YouthProgramsSection />
      <TestimonialsSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}