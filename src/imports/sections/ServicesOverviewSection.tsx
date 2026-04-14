import svgPaths from "../svgPaths";
import { ArrowIcon, ArrowIconDark } from "../components/UI";

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
    <div className="bg-[#00766a] flex-[1_0_0] min-h-px min-w-px relative rounded-[200px]">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-center p-[20px] relative size-full">
          <ServiceIcon_Home />
          <ServiceCard_1_Content />
        </div>
      </div>
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

export function ServicesOverviewSection() {
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
