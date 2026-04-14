import svgPaths from "../svgPaths";
import imgRelianceCareSolutionsLogo1 from "figma:asset/reliance-logo.png";

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
    <div className="content-stretch flex h-auto mb-6 items-center w-full" data-name="Container">
      <FooterLogo />
    </div>
  );
}

function FooterAboutText() {
  return (
    <div className="w-full mb-6" data-name="p">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[23.8px] text-[14px] text-white w-full max-w-[282px]" style={{ fontVariationSettings: "'wdth' 100" }}>
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
    <div className="bg-[rgba(255,255,255,0.1)] relative rounded-full shrink-0 size-[36px] cursor-pointer transition-all duration-300 hover:scale-110 active:scale-95 hover:bg-[rgba(255,255,255,0.2)]" data-name="a">
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
    <div className="bg-[rgba(255,255,255,0.1)] relative rounded-full shrink-0 size-[36px] cursor-pointer transition-all duration-300 hover:scale-110 active:scale-95 hover:bg-[rgba(255,255,255,0.2)]" data-name="a">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <IconInstagram />
      </div>
    </div>
  );
}

function SocialLinksContainer() {
  return (
    <div className="content-stretch flex gap-[12px] h-[36px] items-start w-full" data-name="Container">
      <SocialLinkFacebook />
      <SocialLinkInstagram />
    </div>
  );
}

function FooterBrandColumn() {
  return (
    <div className="flex flex-col items-start relative shrink-0 w-full md:w-[282px]" data-name="Container">
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
    <div 
      className="h-[24px] relative shrink-0 w-full cursor-pointer group" 
      data-name="li"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.6] text-[14px] text-white transition-all group-hover:translate-x-1" style={{ fontVariationSettings: "'wdth' 100" }}>
        Home
      </p>
    </div>
  );
}

function FooterLink_About() {
  return (
    <div 
      className="h-[24px] relative shrink-0 w-full cursor-pointer group" 
      data-name="li"
      onClick={() => document.getElementById('in-home-care')?.scrollIntoView({ behavior: 'smooth' })}
    >
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.6] text-[14px] text-white transition-all group-hover:translate-x-1" style={{ fontVariationSettings: "'wdth' 100" }}>
        About Us
      </p>
    </div>
  );
}

function FooterLink_Services() {
  return (
    <div 
      className="h-[24px] relative shrink-0 w-full cursor-pointer group" 
      data-name="li"
      onClick={() => document.getElementById('services-overview')?.scrollIntoView({ behavior: 'smooth' })}
    >
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.6] text-[14px] text-white transition-all group-hover:translate-x-1" style={{ fontVariationSettings: "'wdth' 100" }}>
        Services
      </p>
    </div>
  );
}

function FooterLink_Youth() {
  return (
    <div 
      className="h-[24px] relative shrink-0 w-full cursor-pointer group" 
      data-name="li"
      onClick={() => document.getElementById('youth-programs')?.scrollIntoView({ behavior: 'smooth' })}
    >
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.6] text-[14px] text-white transition-all group-hover:translate-x-1" style={{ fontVariationSettings: "'wdth' 100" }}>
        Youth Programs
      </p>
    </div>
  );
}

function FooterLink_Contact() {
  return (
    <div 
      className="h-[24px] relative shrink-0 w-full cursor-pointer group" 
      data-name="li"
      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
    >
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.6] text-[14px] text-white transition-all group-hover:translate-x-1" style={{ fontVariationSettings: "'wdth' 100" }}>
        Contact
      </p>
    </div>
  );
}

function FooterLinksList() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="ul">
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
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full sm:w-[200px]" data-name="Container">
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

function FooterServicesList() {
  const services = ["Respite Care", "Adult Day Services", "Community Activities", "Vocational Rehab", "Transportation"];
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="ul">
      {services.map(s => (
        <div key={s} className="h-[24px] relative shrink-0 w-full" data-name="li">
          <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.6] text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            {s}
          </p>
        </div>
      ))}
    </div>
  );
}

function FooterColumn_Services() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full sm:w-[200px]" data-name="Container">
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

function MapPin_New() {
  return (
    <div className="size-[16px] relative" data-name="MapPin">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="MapPin">
          <path d={svgPaths.p14548f00} id="Vector" stroke="var(--stroke-0, #F4A261)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p17781bc0} id="Vector_2" stroke="var(--stroke-0, #F4A261)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
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

function IconClock_New() {
  return (
    <div className="size-[16px] relative" data-name="Clock">
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

function FooterAddressText() {
  return (
    <div className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.4] text-[14px] text-white w-full" data-name="span">
      <p className="" style={{ fontVariationSettings: "'wdth' 100" }}>
        5450 Oak Alley Ct., Suite 108,
      </p>
      <p className="" style={{ fontVariationSettings: "'wdth' 100" }}>
        Toledo, OH 43606
      </p>
    </div>
  );
}

function FooterHoursText() {
  return (
    <div className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.4] text-[14px] text-white w-full" data-name="span">
      <p className="" style={{ fontVariationSettings: "'wdth' 100" }}>
        Mon - Fri: 9am - 5pm
      </p>
      <p className="" style={{ fontVariationSettings: "'wdth' 100" }}>
        Emergency: 24/7
      </p>
    </div>
  );
}

function FooterContactList() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="ul">
      <div className="flex gap-[12px] items-start w-full">
        <div className="mt-1 shrink-0"><MapPin_New /></div>
        <FooterAddressText />
      </div>
      <div className="flex gap-[12px] items-center w-full">
        <IconPhone_Footer />
        <p className="text-[14px] text-white">(419) 704-0316</p>
      </div>
      <div className="flex gap-[12px] items-center w-full">
        <IconMail_Footer />
        <p className="text-[14px] text-white">info@reliancecaresolutions.com</p>
      </div>
      <div className="flex gap-[12px] items-start w-full">
        <div className="mt-1 shrink-0"><IconClock_New /></div>
        <FooterHoursText />
      </div>
    </div>
  );
}

function FooterColumn_Contact() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full sm:w-[240px]" data-name="Container">
      <FooterColumnTitle_Contact />
      <FooterContactList />
    </div>
  );
}

function FooterNavWrapper() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[40px] w-full lg:w-auto">
      <FooterColumn_QuickLinks />
      <FooterColumn_Services />
      <FooterColumn_Contact />
    </div>
  );
}

function FooterMain() {
  return (
    <div className="relative shrink-0 w-full overflow-hidden" data-name="Top">
      <div className="content-stretch flex flex-col px-4 md:px-8 lg:px-[100px] py-[60px] md:py-[100px] relative w-full items-center">
        <div className="flex flex-col lg:flex-row justify-between gap-[60px] w-full max-w-[1240px]">
          <FooterBrandColumn />
          <FooterNavWrapper />
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
    <div className="relative shrink-0 w-full" data-name="Copyright">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.24)] border-solid border-t inset-x-0 top-0 pointer-events-none" />
      <div className="content-stretch flex flex-col md:flex-row font-['Inter:Regular',sans-serif] font-normal items-center justify-between gap-6 px-4 md:px-8 lg:px-[120px] py-[32px] relative w-full h-auto text-[14px] text-white">
        <p className="opacity-70 text-center md:text-left">Copyright© 2026. Reliance Care Solutions. All Right Reserved.</p>
        <List />
      </div>
    </div>
  );
}

export function FooterSection() {
  return (
    <div className="bg-[#00766a] content-stretch flex flex-col items-center overflow-x-hidden relative w-full" data-name="Footer">
      <FooterMain />
      <FooterCopyright />
    </div>
  );
}
