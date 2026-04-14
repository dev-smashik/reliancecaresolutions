import svgPaths from "../svgPaths";
import { ArrowIconDark } from "../components/UI";

function ServiceIcon_Like() {
  return (
    <div className="h-[191px] overflow-clip relative shrink-0 w-full">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[66px] top-[calc(50%+0.5px)]" data-name="Like">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 66">
          <g id="Like">
            <path d={svgPaths.p20592980} fill="var(--fill-0, #DDDDDD)" id="Vector" />
          </g>
        </svg>
      </div>
      <ArrowIconDark />
    </div>
  );
}

function ServiceCard_Home_Content() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.6] not-italic relative shrink-0 text-[#171a1b] text-[20px] w-full">Stay home care</p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[23.8px] relative shrink-0 text-[#777] text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>{`Our specialized team provides direct care support in the comfort of your own home, ensuring safety and quality of life.`}</p>
    </div>
  );
}

function ServiceCard_Home() {
  return (
    <div className="bg-white flex flex-col items-center p-[20px] relative rounded-[20px] shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.01] cursor-default">
      <ServiceIcon_Like />
      <ServiceCard_Home_Content />
    </div>
  );
}

function ServiceIcon_Smile() {
  return (
    <div className="h-[191px] overflow-clip relative shrink-0 w-full">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[66px] top-[calc(50%+0.5px)]" data-name="Smile">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 66">
          <g id="Smile">
            <path d={svgPaths.p178ff980} fill="var(--fill-0, #DDDDDD)" id="Shape" />
          </g>
        </svg>
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
    <div className="bg-white flex flex-col items-center p-[20px] relative rounded-[20px] shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.01] cursor-default">
      <ServiceIcon_Smile />
      <ServiceCard_Customized_Content />
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
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#777] text-[16px] w-full">Transportation with safety in mind, using solutions that increase accessibility and maintain comfort for daily use.</p>
    </div>
  );
}

function ServiceCard_Transportation() {
  return (
    <div className="bg-white flex flex-col items-center p-[20px] relative rounded-[20px] shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.01] cursor-default">
      <ServiceIcon_Layers />
      <ServiceCard_Transportation_Content />
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
    <div className="bg-white flex flex-col items-center p-[20px] relative rounded-[20px] shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.01] cursor-default">
      <ServiceIcon_Modeling />
      <ServiceCard_Quality_Content />
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
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#777] text-[16px] w-full">Our dedicated staff is trained to provide the highest level of care, ensuring confidence for families every day.</p>
    </div>
  );
}

function ServiceCard_Staff() {
  return (
    <div className="bg-white flex flex-col items-center p-[20px] relative rounded-[20px] shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.01] cursor-default">
      <ServiceIcon_Volunteer />
      <ServiceCard_Staff_Content />
    </div>
  );
}

function ServiceOverviewText() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] md:gap-[24px] items-start not-italic relative shrink-0 w-full lg:w-[397.33px]">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[1.2] md:leading-[48px] relative shrink-0 text-[#171a1b] text-[32px] md:text-[40px] tracking-[0.1px] w-full">
        <p className="">{`Caregiving Services & Support`}</p>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#636768] text-[16px] w-full lg:w-[317px]">We provide caregiving services to clients 7 days per week, 24 hours per day</p>
    </div>
  );
}

function ServicesGridContainer() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-[24px]">
      <div className="xl:col-span-1">
        <ServiceOverviewText />
      </div>
      <ServiceCard_Home />
      <ServiceCard_Customized />
      <ServiceCard_Transportation />
      <ServiceCard_Quality />
      <ServiceCard_Staff />
    </div>
  );
}

export function ServicesOverviewSection() {
  return (
    <div id="services-overview" className="bg-[rgba(42,157,143,0.1)] content-stretch flex flex-col items-center overflow-x-hidden px-4 md:px-8 lg:px-[100px] py-[60px] md:py-[120px] relative w-full" data-name="Desktop - 4">
      <div className="w-full max-w-[1240px] flex flex-col items-center">
        <ServicesGridContainer />
        <div
          className="bg-[#00766a] h-[54px] items-center justify-center flex px-[32px] relative rounded-br-[24px] rounded-tl-[24px] mt-12 cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95 hover:brightness-110 shadow-sm hover:shadow-md"
          data-name="Button/Default/Rounded"
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-white text-[16px] text-center whitespace-nowrap">
            <p className="leading-[20px]">Explore All Services →</p>
          </div>
        </div>
      </div>
    </div>
  );
}
