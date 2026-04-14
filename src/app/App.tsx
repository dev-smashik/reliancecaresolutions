import svgPaths from "../imports/svg-aga04d3mpk";
import imgRelianceCareSolutionsLogo1 from "figma:asset/reliance-logo.png";
import imgFrame48096693 from "figma:asset/hero-care-1.png";
import imgFrame48096694 from "figma:asset/hero-care-2.png";
import imgFrame48096695 from "figma:asset/in-home-services.png";
import imgFrame48096696 from "figma:asset/youth-programs.png";
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
import { useState } from "react";

/* ─── Top Bar ─── */
function TopBar() {
  return (
    <div className="bg-[#0a4a50] w-full px-4 lg:px-[100px] py-2 flex flex-col md:flex-row items-center justify-between gap-1">
      <p className="font-['Open_Sans',sans-serif] font-normal text-[14px] leading-[20px] text-white text-center md:text-left">
        Your trusted personal caregiving service provider in Northwest Ohio
      </p>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1">
          <svg className="size-[14px] shrink-0" fill="none" viewBox="0 0 14 14">
            <g clipPath="url(#clip_topbar_phone)">
              <path d={svgPaths.p2c04e800} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
            </g>
            <defs><clipPath id="clip_topbar_phone"><rect fill="white" height="14" width="14" /></clipPath></defs>
          </svg>
          <span className="font-['Open_Sans',sans-serif] font-normal text-[14px] leading-[20px] text-white whitespace-nowrap">(419) 799-0916</span>
        </div>
        <span className="font-['Open_Sans',sans-serif] font-normal text-[14px] leading-[20px] text-white whitespace-nowrap hidden sm:block">info@reliancecaresolutions.com</span>
      </div>
    </div>
  );
}

/* ─── Navbar ─── */
function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="backdrop-blur-[10px] w-full px-4 lg:px-[20px] py-3 flex items-center justify-between sticky top-0 z-50 bg-white/80">
      <div className="flex items-center max-w-[1240px] w-full mx-auto justify-between">
        {/* Logo */}
        <div className="flex gap-3 items-end shrink-0">
          <div className="h-[46px] w-[51px] relative overflow-hidden">
            <img alt="Logo" className="absolute h-[158%] left-[-47%] top-0 max-w-none w-[195%]" src={imgRelianceCareSolutionsLogo1} />
          </div>
          <div className="h-[36px] w-[160px] relative overflow-hidden hidden sm:block">
            <img alt="Logo Text" className="absolute h-[322%] left-0 top-[-222%] max-w-none w-full" src={imgRelianceCareSolutionsLogo1} />
          </div>
        </div>
        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-9 items-center font-['Inter',sans-serif] font-normal text-[16px] leading-[24px] text-[#171a1b]">
          <span>Home</span>
          <span>Youth Programs</span>
          <span>About us</span>
          <span>Coverage</span>
          <span>Contact</span>
        </div>
        {/* CTA */}
        <div className="hidden md:flex items-center">
          <div className="bg-[#00766a] flex gap-2 items-center px-4 pr-5 py-2 rounded-br-[24px] rounded-tl-[24px]">
            <div className="size-5 relative">
              <div className="absolute inset-[12.5%]">
                <svg className="absolute inset-0 size-full" fill="none" viewBox="0 0 15 15">
                  <path clipRule="evenodd" d={svgPaths.p27b2a00} fill="white" fillRule="evenodd" />
                </svg>
              </div>
            </div>
            <span className="font-['Inter',sans-serif] font-medium text-[16px] leading-[20px] text-white whitespace-nowrap">419-704-0316</span>
          </div>
        </div>
        {/* Mobile hamburger */}
        <button className="lg:hidden flex flex-col gap-1.5 p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <span className="w-6 h-0.5 bg-[#171a1b]" />
          <span className="w-6 h-0.5 bg-[#171a1b]" />
          <span className="w-6 h-0.5 bg-[#171a1b]" />
        </button>
      </div>
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg lg:hidden z-50 flex flex-col p-6 gap-4 font-['Inter',sans-serif] text-[16px] text-[#171a1b]">
          <span>Home</span>
          <span>Youth Programs</span>
          <span>About us</span>
          <span>Coverage</span>
          <span>Contact</span>
          <div className="bg-[#00766a] flex gap-2 items-center justify-center px-4 py-3 rounded-br-[24px] rounded-tl-[24px] text-white font-medium mt-2">
            419-704-0316
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── Hero Section ─── */
function HeroSection() {
  return (
    <div className="bg-white w-full overflow-hidden relative">
      {/* Text content */}
      <div className="relative z-10 flex flex-col items-center pt-8 lg:pt-12 pb-4 px-4">
        <div className="flex items-center justify-center px-3 py-1.5 rounded-[200px] w-fit" style={{ backgroundImage: "linear-gradient(90deg, rgba(241,250,254,0) 0%, rgb(241,250,254) 35%, rgb(241,250,254) 63%, rgba(241,250,254,0) 100%)" }}>
          <span className="font-['Inter',sans-serif] font-semibold text-[14px] leading-[1.6] text-[#00766a] tracking-[1.4px] uppercase">We are certified in 88 counties</span>
        </div>
        <div className="mt-2 font-['Inter',sans-serif] font-medium text-[32px] sm:text-[48px] lg:text-[60px] leading-[1.07] tracking-[-0.3px] text-[#171a1b] text-center max-w-[1026px]">
          <p>Compassionate Care for</p>
          <p>Every <span className="font-['Instrument_Serif',serif] italic text-[#00766a]">Stage of Life</span></p>
        </div>
        <p className="mt-2 font-['Inter',sans-serif] font-normal text-[14px] sm:text-[16px] leading-[24px] text-[#8e8e8e] text-center max-w-[724px]">Professional home care services and direct support caregivers for your loved ones in the Toledo area delivered with a customized, personal approach.</p>
        <div className="mt-4 flex items-center gap-2">
          <div className="flex items-center">
            {[imgEllipse1, imgEllipse2, imgEllipse3, imgEllipse4].map((img, i) => (
              <img key={i} alt="" className="size-[46px] rounded-full border-2 border-white" style={{ marginLeft: i > 0 ? "-23px" : 0 }} src={img} />
            ))}
          </div>
          <p className="font-['Inter',sans-serif] font-normal text-[14px] sm:text-[16px] leading-[24px] text-[#8c8c8c] max-w-[330px]">Trusted by 500+ families in Northwest Ohio</p>
        </div>
        <div className="mt-4 bg-[#ff7865] flex items-center justify-center px-4 h-[54px] rounded-br-[24px] rounded-tl-[24px] w-[160px] cursor-pointer">
          <span className="font-['Manrope',sans-serif] font-semibold text-[16px] leading-[1.6] text-white">Apply Now →</span>
        </div>
      </div>
      {/* Image strip */}
      <div className="flex justify-center gap-4 lg:gap-6 mt-4 px-4 overflow-hidden">
        {[imgFrame48096693, imgFrame48096694, imgFrame48096695, imgFrame48096696].map((img, i) => (
          <div key={i} className="w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] lg:w-[430px] lg:h-[430px] shrink-0 rounded-none overflow-hidden">
            <img alt="" className="w-full h-full object-cover" src={img} />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── In Home Services Section ─── */
function InHomeServicesSection() {
  return (
    <div className="bg-white w-full px-6 lg:px-[100px] py-16 lg:py-[120px]">
      <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-[80px] items-center">
        <div className="flex-1 flex flex-col justify-between gap-8">
          <div className="flex flex-col gap-4">
            <div className="font-['Inter',sans-serif] font-semibold text-[32px] sm:text-[40px] lg:text-[48px] leading-[1.33] text-[#00766a]">
              In Home Services Care in Northwest Ohio
            </div>
            <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[24px] text-[#5b5b5b]">
              We understand that the search for the appropriate home care and caregiving services can be daunting. At Reliance Care Solutions, we aim to simplify this experience by arranging a meet and greet. This opportunity allows us to understand you and your loved one's unique needs better. You will meet our dedicated staff, and together we can create a tailored plan that best supports your loved one.
            </p>
          </div>
          <div className="flex items-center gap-0">
            {[
              { num: "12+", label: "Service Programs" },
              { num: "500+", label: "Families Served" },
              { num: "88+", label: "Ohio Counties Certified" },
            ].map((stat) => (
              <div key={stat.label} className="flex-1 flex flex-col gap-2 py-5">
                <span className="font-['Manrope',sans-serif] font-bold text-[32px] lg:text-[42px] leading-[1.4] text-[#ff7865]">{stat.num}</span>
                <span className="font-['Inter',sans-serif] font-normal text-[14px] lg:text-[16px] leading-[1.6] text-[#636768]">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full lg:w-[622px] h-[300px] sm:h-[400px] lg:h-[548px] rounded-[16px] overflow-hidden shrink-0">
          <img alt="" className="w-full h-full object-cover rounded-[16px]" src={imgFrame48096695} />
        </div>
      </div>
    </div>
  );
}

/* ─── Caregiving Services & Support Section (Desktop-3) ─── */
function CaregivingServicesSection() {
  return (
    <div className="bg-white w-full px-6 lg:px-[100px] py-16 lg:py-[120px]">
      <div className="max-w-[1240px] mx-auto flex flex-col gap-16">
        {/* Header row */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
          <div className="flex flex-col gap-6 max-w-[628px]">
            <div className="flex items-center justify-center px-3 py-1.5 rounded-[200px] w-fit" style={{ backgroundImage: "linear-gradient(90deg, rgba(241,250,254,0) 0%, rgb(241,250,254) 35%, rgb(241,250,254) 63%, rgba(241,250,254,0) 100%)" }}>
              <span className="font-['Inter',sans-serif] font-semibold text-[14px] leading-[1.6] text-[#00766a] tracking-[1.4px] uppercase">Information - advice - support</span>
            </div>
            <p className="font-['Inter',sans-serif] font-medium text-[32px] sm:text-[40px] lg:text-[48px] leading-[1.33] text-[#171a1b]">Caregiving Services & Support</p>
          </div>
          <div className="flex flex-col gap-8 max-w-[518px]">
            <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[24px] text-[#5b5b5b]">We offer flexible direct care support for individuals with developmental or physical disabilities, seniors, those with cancer and more.</p>
            <div className="flex items-center justify-center px-4 h-[54px] rounded-br-[24px] rounded-tl-[24px] border border-[#00766a] w-fit cursor-pointer">
              <span className="font-['Inter',sans-serif] font-medium text-[16px] leading-[20px] text-[#00766a]">Explore Our Services</span>
            </div>
          </div>
        </div>
        {/* Cards */}
        <div className="flex flex-col gap-6">
          {/* Row 1 */}
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Big green card */}
            <div className="bg-[#00766a] rounded-[16px] p-5 flex flex-col justify-between w-full lg:w-[816px] min-h-[196px]">
              <div className="bg-white rounded-full p-4 w-fit">
                <svg className="size-8" fill="none" viewBox="0 0 24 24">
                  <path clipRule="evenodd" d={svgPaths.p11a21600} fill="#00766A" fillRule="evenodd" />
                </svg>
              </div>
              <p className="font-['Inter',sans-serif] font-semibold text-[20px] leading-[1.4] text-white mt-3">Personal Product & Service Advice</p>
              <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[1.4] text-white mt-1">Get personalized guidance and recommendations from our experts and trusted partners to find the right care solutions for your needs.</p>
            </div>
            {/* Small card */}
            <div className="bg-[rgba(230,241,240,0.5)] rounded-[16px] p-5 flex flex-col justify-between flex-1 min-h-[196px]">
              <div className="bg-white rounded-full p-4 w-fit">
                <svg className="size-8" fill="none" viewBox="0 0 29.33 24">
                  <path d={svgPaths.p2e914700} fill="#00766A" />
                </svg>
              </div>
              <p className="font-['Inter',sans-serif] font-semibold text-[20px] leading-[1.4] text-[#171a1b] mt-3">Orientation in the Care Landscape</p>
              <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[1.4] text-[#5b5b5b] mt-1">We help you navigate the physical disabilities healthcare system.</p>
            </div>
          </div>
          {/* Row 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: svgPaths.p1995c300, vb: "0 0 21.33 26.67", title: "Online Guide", desc: "Access step-by-step resources, articles, and practical tips anytime." },
              { icon: svgPaths.p1bdcd800, vb: "0 0 26.67 26.67", title: "Benefits & Applications Information", desc: "Clear, reliable information on healthcare benefits." },
              { icon: svgPaths.pff65100, vb: "0 0 22.67 22.67", title: "Advisor", desc: "A dedicated advisor is always ready to answer your questions and assist." },
            ].map((card) => (
              <div key={card.title} className="bg-[rgba(230,241,240,0.5)] rounded-[16px] p-5 flex flex-col justify-between min-h-[196px]">
                <div className="bg-white rounded-full p-4 w-fit">
                  <svg className="size-8" fill="none" viewBox={card.vb}>
                    <path clipRule="evenodd" d={card.icon} fill="#00766A" fillRule="evenodd" />
                  </svg>
                </div>
                <p className="font-['Inter',sans-serif] font-semibold text-[20px] leading-[1.4] text-[#171a1b] mt-3">{card.title}</p>
                <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[1.4] text-[#5b5b5b] mt-1">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Caregiving Services Cards (Desktop-4) ─── */
function ServiceCardsSection() {
  const services = [
    { icon: <svg className="size-[66px]" fill="none" viewBox="0 0 32 32"><path d={svgPaths.p1336e580} fill="#fff" clipRule="evenodd" fillRule="evenodd" /></svg>, title: "Community & Family Focused", desc: "Organize care at home with guidance, helpful tips, and trusted tools that make caregiving easier, smoother, and reliable daily.", green: true },
    { icon: <svg className="size-[66px]" fill="none" viewBox="0 0 32 32"><path d={svgPaths.p20879e80} fill="#DDDDDD" clipRule="evenodd" fillRule="evenodd" /></svg>, title: "Customized care", desc: "We practice a tailored approach to care, working with each client's schedule to develop customized care plans.", green: false },
  ];

  const services2 = [
    { icon: <svg className="size-[66px]" fill="none" viewBox="0 0 49.5 52.44"><path d={svgPaths.p21aadb00} fill="#DDDDDD" /></svg>, title: "Transportation", desc: "Transportation with safety in mind, using solutions that increase accessibility, prevent accidents, and maintain comfort for daily use." },
    { icon: <svg className="size-[66px]" fill="none" viewBox="0 0 66 66"><path d={svgPaths.p129fdb00} fill="#DDDDDD" /></svg>, title: "Improved Quality of Life", desc: "Direct support in-home care provides an invaluable solution for individuals who prioritize comfort and familiarity." },
    { icon: <svg className="size-[66px]" fill="none" viewBox="0 0 66 66"><path d={svgPaths.p1110c900} fill="#DDDDDD" /></svg>, title: "Professional & trained staff", desc: "Use our calculator to assess and define the right care level, helping families and caregivers make confident choices daily." },
  ];

  return (
    <div className="bg-[rgba(42,157,143,0.1)] w-full px-6 lg:px-[100px] py-16 lg:py-[120px]">
      <div className="max-w-[1240px] mx-auto flex flex-col gap-12 items-center">
        <div className="flex flex-col lg:flex-row gap-6 w-full items-start">
          <div className="flex flex-col gap-6 w-full lg:w-[397px] shrink-0">
            <p className="font-['Inter',sans-serif] font-medium text-[32px] lg:text-[40px] leading-[48px] text-[#171a1b]">Caregiving Services & Support</p>
            <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[1.6] text-[#636768] max-w-[317px]">We provide caregiving services to clients 7 days per week, 24 hours per day</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 flex-1 w-full">
            {services.map((s) => (
              <div key={s.title} className={`${s.green ? 'bg-[#00766a] text-white' : 'bg-white text-[#171a1b]'} rounded-[20px] flex-1 flex flex-col`}>
                <div className="p-5 flex flex-col gap-6">
                  <div className="h-[191px] overflow-hidden relative flex items-center justify-center">
                    {s.icon}
                    <div className="absolute right-0 top-0 size-8">
                      <svg className="size-full" fill="none" viewBox="0 0 32 32">
                        <path d={svgPaths.p85eb00} fill={s.green ? "white" : "#777777"} />
                      </svg>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className={`font-['Inter',sans-serif] font-semibold text-[20px] leading-[1.6] ${s.green ? '' : 'text-[#171a1b]'}`}>{s.title}</p>
                    <p className={`font-['${s.green ? "Inter" : "Open_Sans"}',sans-serif] font-normal text-[${s.green ? '16' : '14'}px] leading-[1.6] ${s.green ? '' : 'text-[#777]'}`}>{s.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Bottom row of 3 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
          {services2.map((s) => (
            <div key={s.title} className="bg-white rounded-[20px] flex flex-col">
              <div className="p-5 flex flex-col gap-6">
                <div className="h-[191px] overflow-hidden relative flex items-center justify-center">
                  {s.icon}
                  <div className="absolute right-0 top-0 size-8">
                    <svg className="size-full" fill="none" viewBox="0 0 32 32">
                      <path d={svgPaths.p85eb00} fill="#777777" />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-['Inter',sans-serif] font-semibold text-[20px] leading-[1.6] text-[#171a1b]">{s.title}</p>
                  <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[1.6] text-[#777]">{s.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center px-5 h-[54px] rounded-br-[24px] rounded-tl-[24px] border border-[#00766a] cursor-pointer">
          <span className="font-['Inter',sans-serif] font-medium text-[16px] leading-[20px] text-[#00766a]">Explore All Services →</span>
        </div>
      </div>
    </div>
  );
}

/* ─── Trust Banner ─── */
function TrustBanner() {
  return (
    <div className="bg-[#00766a] w-full px-6 lg:px-[100px] py-16 lg:py-[100px] flex items-center justify-center">
      <p className="font-['Manrope',sans-serif] font-bold text-[28px] sm:text-[36px] lg:text-[48px] leading-[1.4] text-white text-center max-w-[1240px]">
        Trusted by countless families for quality homecare. Bringing comfort, safety, and peace of mind to where it matters most.
      </p>
    </div>
  );
}

/* ─── Youth Programs Section ─── */
function YouthProgramsSection() {
  const programs = [
    { title: "CANS Assessment", desc: "Certified assessments for children using the Child and Adolescent Needs and Strengths tool to identify and address each child's unique needs promptly.", iconPaths: [svgPaths.p2469b00, svgPaths.p3eef23d2], extraPath: "M9 14L11 16L15 12" },
    { title: "Group Home Services", desc: "A safe, supportive living environment for children focused on individual needs, personal growth, and overall well-being within a structured setting.", iconPaths: [svgPaths.p2bbf6680, svgPaths.p206ad900] },
    { title: "Emergency Respite Placement", desc: "Immediate support for children in crisis, ensuring a safe and nurturing environment during times of urgent need.", iconPaths: [svgPaths.p3f3d8e00], extraPath: "M9 12L11 14L15 10" },
  ];

  return (
    <div className="bg-[#eaf6f4] w-full px-6 lg:px-[100px] py-16 lg:py-[120px]">
      <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row gap-8 lg:gap-11 items-center">
        <div className="flex flex-col justify-between gap-10 flex-1">
          {/* Title */}
          <div className="flex flex-col gap-6">
            <div className="bg-[#f1fafe] flex items-center justify-center px-3 py-1.5 rounded-[200px] w-fit">
              <span className="font-['Poppins',sans-serif] font-semibold text-[14px] leading-[20px] text-[#00766a] uppercase">Youth Programs</span>
            </div>
            <p className="font-['Inter',sans-serif] font-semibold text-[32px] sm:text-[40px] lg:text-[48px] leading-[1.33] tracking-[0.12px]">
              <span className="text-[#1a1a2e]">Expanding Care for </span>
              <span className="text-[#2a9d8f]">Youth & Children</span>
            </p>
            <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[24px] text-[#5a6a6e]">We're proud to announce our expanded youth services and programs, providing comprehensive care and support for children and adolescents in Northwest Ohio. Every program is designed with safety, growth, and individual needs at the forefront.</p>
          </div>
          {/* Program items */}
          <div className="flex flex-col gap-6">
            {programs.map((p) => (
              <div key={p.title} className="flex gap-4 items-start">
                <div className="bg-[rgba(42,157,143,0.1)] rounded-[14px] size-[48px] shrink-0 flex items-center justify-center">
                  <svg className="size-6" fill="none" viewBox="0 0 24 24">
                    {p.iconPaths.map((path, i) => (
                      <path key={i} d={path} stroke="#2A9D8F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    ))}
                    {p.extraPath && <path d={p.extraPath} stroke="#2A9D8F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />}
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-['Inter',sans-serif] font-semibold text-[16px] leading-[20px] text-[#1a1a2e]">{p.title}</p>
                  <p className="font-['Inter',sans-serif] font-normal text-[14px] leading-[16px] tracking-[0.175px] text-[#5a6a6e]">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full lg:w-[568px] h-[350px] sm:h-[450px] lg:h-[654px] rounded-[16px] overflow-hidden shrink-0">
          <img alt="" className="w-full h-full object-cover rounded-[16px]" src={imgFrame48096696} />
        </div>
      </div>
    </div>
  );
}

/* ─── Testimonials ─── */
function TestimonialCard({ name, img, text }: { name: string; img: string; text: string }) {
  return (
    <div className="bg-[#f5f5f5] rounded-[16px] p-5 flex flex-col gap-4 break-inside-avoid mb-4">
      <div className="flex gap-2.5 items-center">
        <img alt="" className="size-[44px] rounded-full" src={img} />
        <div className="flex flex-col">
          <p className="font-['Inter',sans-serif] font-semibold text-[16px] leading-[1.6] text-[#171a1b]">{name}</p>
          <p className="font-['Inter',sans-serif] font-normal text-[14px] leading-[1.6] text-[#171a1b] opacity-70">Dental Assistant</p>
        </div>
      </div>
      <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[1.5] text-[#171a1b] opacity-80">{text}</p>
    </div>
  );
}

function TestimonialsSection() {
  const testimonials = [
    { name: "Cameron Williamson", img: imgEllipse1086, text: "Highly recommended! This product exceeded my expectations in every way. It has become an essential part of my daily life." },
    { name: "Wanda Maximoff", img: imgEllipse1087, text: "Outstanding customer support! They went above and beyond to help me resolve my issue. I felt valued as a customer, and their commitment to ensuring my satisfaction left a lasting impression." },
    { name: "Natasha Romanoff", img: imgEllipse1088, text: "Highly recommended! This product exceeded my expectations in every way." },
    { name: "Harleen Quinzel", img: imgEllipse1089, text: "Outstanding customer support! They went above and beyond to help me resolve my issue. I felt valued as a customer, and their commitment to ensuring my satisfaction left a lasting impression." },
    { name: "Carol Danvers", img: imgEllipse1090, text: "Highly recommended! This product exceeded my expectations in every way." },
    { name: "Juan Attwood", img: imgEllipse1091, text: "Outstanding customer support! They went above and beyond to help me resolve my issue. I felt valued as a customer, and their commitment to ensuring my satisfaction left a lasting impression." },
    { name: "Alan Carrington", img: imgEllipse1092, text: "Highly recommended! This product exceeded my expectations in every way." },
    { name: "Brian Bargeman", img: imgEllipse1093, text: "Outstanding customer support! They went above and beyond to help me resolve my issue. I felt valued as a customer, and their commitment to ensuring my satisfaction left a lasting impression." },
    { name: "Brendan Carroll", img: imgEllipse1094, text: "Highly recommended! This product exceeded my expectations in every way. It has become an essential part of my daily life." },
    { name: "Zhanatan Donaldson", img: imgEllipse1095, text: "Highly recommended! This product exceeded my expectations in every way." },
    { name: "Kaden Fane", img: imgEllipse1096, text: "Outstanding customer support! They went above and beyond to help me resolve my issue. I felt valued as a customer, and their commitment to ensuring my satisfaction left a lasting impression." },
    { name: "Samuel Moore", img: imgEllipse1097, text: "Outstanding customer support! They went above and beyond to help me resolve my issue. I felt valued as a customer, and their commitment to ensuring my satisfaction left a lasting impression." },
  ];

  return (
    <div className="bg-white w-full px-6 lg:px-[100px] py-16 lg:py-[120px] relative">
      <div className="max-w-[1240px] mx-auto flex flex-col gap-12 items-center">
        <p className="font-['Inter',sans-serif] font-medium text-[32px] sm:text-[40px] lg:text-[48px] leading-[64px] text-[#171a1b] text-center">See what our members are saying</p>
        <div className="w-full max-h-[786px] overflow-hidden relative">
          <div className="columns-1 sm:columns-2 lg:columns-4 gap-4">
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} name={t.name} img={t.img} text={t.text} />
            ))}
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-[192px] bg-gradient-to-b from-transparent to-white" />
        </div>
        <div className="bg-[#ff7865] flex items-center justify-center px-4 h-[54px] rounded-br-[24px] rounded-tl-[24px] cursor-pointer">
          <span className="font-['Manrope',sans-serif] font-semibold text-[16px] leading-[1.6] text-white">Show More →</span>
        </div>
      </div>
    </div>
  );
}

/* ─── Contact Section ─── */
function ContactSection() {
  return (
    <div className="bg-white w-full px-6 lg:px-[100px] py-16 lg:py-[120px]">
      <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row gap-12 items-start">
        {/* Left */}
        <div className="flex flex-col gap-16 lg:gap-[109px] flex-1">
          <div className="flex flex-col gap-8">
            <p className="font-['Inter',sans-serif] font-medium text-[36px] sm:text-[48px] lg:text-[60px] leading-[1.07] tracking-[-0.3px] text-[#171a1b]">
              Connect with our team to <span className="font-['Instrument_Serif',serif] italic text-[#00766a]">explore solutions.</span>
            </p>
            <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[1.6] text-[#636768]">We're here to answer your questions and support your needs.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="backdrop-blur-[12px] bg-[#eaf6f4] rounded-[20px] p-4 flex flex-col gap-2.5 w-full sm:w-[274px]">
              <div className="backdrop-blur-[12px] bg-[rgba(176,213,209,0.5)] rounded-full size-[48px] flex items-center justify-center">
                <svg className="size-6" fill="none" viewBox="0 0 24 24">
                  <path d={svgPaths.p1b81e780} stroke="#00766A" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                  <path d={svgPaths.p31dc2600} stroke="#00766A" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                </svg>
              </div>
              <div className="flex flex-col">
                <p className="font-['Inter',sans-serif] font-medium text-[20px] leading-[1.6] text-[#171a1b]">Email</p>
                <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[1.6] text-[#171a1b]">info@reliancecaresolutions.com</p>
              </div>
            </div>
            <div className="backdrop-blur-[12px] bg-[#eaf6f4] rounded-[20px] p-4 flex flex-col gap-2.5 w-full sm:w-[274px]">
              <div className="backdrop-blur-[12px] bg-[rgba(176,213,209,0.5)] rounded-full size-[48px] flex items-center justify-center">
                <svg className="size-6" fill="none" viewBox="0 0 24 24">
                  <path d={svgPaths.pa7f1800} stroke="#00766A" strokeMiterlimit="10" strokeWidth="1.5" />
                  <path d={svgPaths.p34187f98} stroke="#00766A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  <path d="M22 9C22 5.13 18.87 2 15 2" stroke="#00766A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
              <div className="flex flex-col">
                <p className="font-['Inter',sans-serif] font-medium text-[20px] leading-[1.6] text-[#171a1b]">Phone</p>
                <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[1.6] text-[#171a1b]">(419) 704-0316</p>
              </div>
            </div>
          </div>
        </div>
        {/* Right - Form */}
        <div className="bg-white rounded-[20px] border border-[rgba(61,61,61,0.1)] p-6 w-full lg:w-[541px] flex flex-col gap-8 shrink-0">
          <div className="flex flex-col gap-1.5">
            <p className="font-['Inter',sans-serif] font-medium text-[24px] leading-[1.6] text-[#171a1b]">Tell us what you need</p>
            <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[1.6] text-[#777]">Our team is ready to assist you with every detail.</p>
          </div>
          <div className="flex flex-col gap-[30px]">
            <div className="flex flex-col sm:flex-row gap-[30px]">
              <div className="flex flex-col gap-3 flex-1">
                <label className="font-['Inter',sans-serif] font-medium text-[12px] leading-[1.6] text-[#171a1b]">Full Name</label>
                <input type="text" placeholder="Full name" className="border border-[rgba(61,61,61,0.1)] rounded-[10px] px-3 py-4 font-['Rubik',sans-serif] font-normal text-[16px] leading-[1.6] text-[#777] outline-none" />
              </div>
              <div className="flex flex-col gap-3 flex-1">
                <label className="font-['Inter',sans-serif] font-medium text-[12px] leading-[1.6] text-[#171a1b]">Phone Number</label>
                <input type="text" placeholder="(419) 000-0000" className="border border-[rgba(61,61,61,0.1)] rounded-[10px] px-3 py-4 font-['Rubik',sans-serif] font-normal text-[16px] leading-[1.6] text-[rgba(26,26,46,0.5)] outline-none" />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <label className="font-['Inter',sans-serif] font-medium text-[12px] leading-[1.6] text-[#171a1b]">Email</label>
              <input type="email" placeholder="yourname@email.com" className="border border-[rgba(61,61,61,0.1)] rounded-[10px] px-3 py-4 font-['Rubik',sans-serif] font-normal text-[16px] leading-[1.6] text-[#777] outline-none" />
            </div>
            <div className="flex flex-col gap-3">
              <label className="font-['Inter',sans-serif] font-medium text-[12px] leading-[1.6] text-[#171a1b]">How can we help you?</label>
              <textarea placeholder="Tell us about your needs..." className="border border-[rgba(61,61,61,0.1)] rounded-[10px] px-3 py-4 font-['Rubik',sans-serif] font-normal text-[16px] leading-[1.6] text-[#777] outline-none h-[124px] resize-none" />
            </div>
          </div>
          <button className="bg-[#00766a] h-[54px] rounded-[200px] w-full flex items-center justify-center cursor-pointer">
            <span className="font-['Manrope',sans-serif] font-semibold text-[16px] leading-[1.6] text-white">Submit</span>
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <div className="bg-[#00766a] w-full">
      <div className="px-6 lg:px-[100px] py-10 lg:py-[60px]">
        <div className="max-w-[1248px] mx-auto flex flex-col lg:flex-row gap-10 lg:gap-10">
          {/* Logo col */}
          <div className="flex flex-col gap-4 w-full lg:w-[282px] shrink-0">
            <div className="flex gap-3 items-end">
              <div className="h-[46px] w-[51px] relative overflow-hidden">
                <img alt="" className="absolute h-[158%] left-[-47%] top-0 max-w-none w-[195%]" src={imgRelianceCareSolutionsLogo1} />
              </div>
              <div className="h-[36px] w-[160px] relative overflow-hidden">
                <img alt="" className="absolute h-[322%] left-0 top-[-222%] max-w-none w-full" src={imgRelianceCareSolutionsLogo1} />
              </div>
            </div>
            <p className="font-['Open_Sans',sans-serif] font-normal text-[14px] leading-[23.8px] text-white">Your trusted personal caregiving service provider in Northwest Ohio. Providing compassionate, reliable care since our founding.</p>
            <div className="flex gap-3">
              {/* Facebook */}
              <div className="bg-[rgba(255,255,255,0.1)] rounded-full size-[36px] flex items-center justify-center">
                <svg className="size-4" fill="none" viewBox="0 0 16 16">
                  <path d={svgPaths.p391f9d80} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                </svg>
              </div>
              {/* Instagram */}
              <div className="bg-[rgba(255,255,255,0.1)] rounded-full size-[36px] flex items-center justify-center">
                <svg className="size-4" fill="none" viewBox="0 0 16 16">
                  <g clipPath="url(#clip_ig_foot)">
                    <path d={svgPaths.p22916300} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                    <path d={svgPaths.p2c68500} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                    <path d="M11.6667 4.33333H11.6733" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                  </g>
                  <defs><clipPath id="clip_ig_foot"><rect fill="white" height="16" width="16" /></clipPath></defs>
                </svg>
              </div>
            </div>
          </div>
          {/* Links columns */}
          <div className="flex flex-wrap gap-10 flex-1 justify-start lg:justify-end">
            <div className="flex flex-col gap-4 w-[140px] lg:w-[240px]">
              <p className="font-['Poppins',sans-serif] font-semibold text-[15px] leading-[22.5px] text-white">Quick Links</p>
              {["Home", "About Us", "Services", "Youth Programs", "Contact"].map((l) => (
                <p key={l} className="font-['Open_Sans',sans-serif] font-normal text-[14px] leading-[20px] text-white">{l}</p>
              ))}
            </div>
            <div className="flex flex-col gap-4 w-[160px] lg:w-[240px]">
              <p className="font-['Poppins',sans-serif] font-semibold text-[15px] leading-[22.5px] text-white">Services</p>
              {["Respite Care", "Adult Day Services", "Community Activities", "Vocational Rehab", "Transportation"].map((l) => (
                <p key={l} className="font-['Open_Sans',sans-serif] font-normal text-[14px] leading-[20px] text-white">{l}</p>
              ))}
            </div>
            <div className="flex flex-col gap-4 w-full sm:w-[240px]">
              <p className="font-['Poppins',sans-serif] font-semibold text-[15px] leading-[22.5px] text-white">Contact Us</p>
              <div className="flex gap-3 items-start">
                <svg className="size-4 shrink-0 mt-1" fill="none" viewBox="0 0 16 16">
                  <path d={svgPaths.p14548f00} stroke="#F4A261" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                  <path d={svgPaths.p17781bc0} stroke="#F4A261" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                </svg>
                <div className="font-['Open_Sans',sans-serif] font-normal text-[14px] leading-[20px] text-white">
                  <p>5450 Oak Alley Ct.,</p>
                  <p>Suite 108, Toledo, OH 43606</p>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <svg className="size-4 shrink-0" fill="none" viewBox="0 0 16 16">
                  <g clipPath="url(#clip_foot_ph)">
                    <path d={svgPaths.p2a44c680} stroke="#F4A261" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                  </g>
                  <defs><clipPath id="clip_foot_ph"><rect fill="white" height="16" width="16" /></clipPath></defs>
                </svg>
                <span className="font-['Inter',sans-serif] font-normal text-[16px] leading-[1.6] text-white">(419) 704-0316</span>
              </div>
              <div className="flex gap-3 items-center">
                <svg className="size-4 shrink-0" fill="none" viewBox="0 0 16 16">
                  <path d={svgPaths.p17070980} stroke="#F4A261" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                  <path d={svgPaths.p120c8200} stroke="#F4A261" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                </svg>
                <span className="font-['Open_Sans',sans-serif] font-normal text-[14px] leading-[20px] text-white">info@reliancecaresolutions.com</span>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="size-4 shrink-0 mt-1" fill="none" viewBox="0 0 16 16">
                  <g clipPath="url(#clip_foot_cl)">
                    <path d={svgPaths.p39ee6532} stroke="#F4A261" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                    <path d="M8 4V8L10.6667 9.33333" stroke="#F4A261" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                  </g>
                  <defs><clipPath id="clip_foot_cl"><rect fill="white" height="16" width="16" /></clipPath></defs>
                </svg>
                <div className="font-['Open_Sans',sans-serif] font-normal text-[14px] leading-[20px] text-white">
                  <p>Mon - Fri: 9am - 5pm</p>
                  <p>Emergency: 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="border-t border-[rgba(255,255,255,0.24)]">
        <div className="px-6 lg:px-[120px] py-8 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-[1440px] mx-auto">
          <p className="font-['Inter',sans-serif] font-normal text-[14px] leading-[1.6] text-white opacity-70 text-center sm:text-right">Copyright© 2026. Reliance Care Solutions. All Right Reserved.</p>
          <div className="flex gap-9 items-center opacity-70 font-['Inter',sans-serif] font-normal text-[14px] leading-[1.6] text-white">
            <span>Terms of Service</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="w-full min-h-screen bg-white overflow-x-hidden">
      <TopBar />
      <Navbar />
      <HeroSection />
      <InHomeServicesSection />
      <CaregivingServicesSection />
      <ServiceCardsSection />
      <TrustBanner />
      <YouthProgramsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
