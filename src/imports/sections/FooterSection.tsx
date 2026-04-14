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

export function FooterSection() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#00766a] content-stretch flex flex-col items-center left-1/2 overflow-clip top-[7321px] w-[1440px]" data-name="Footer">
      <FooterMain />
      <FooterCopyright />
    </div>
  );
}
