import svgPaths from "../svgPaths";

function IconCall() {
  return (
    <div className="bg-white content-stretch flex items-center p-[16px] relative rounded-[200px] shrink-0">
      <div className="relative shrink-0 size-[32px]" data-name="system/phone-call">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Path" />
        </svg>
        <div className="absolute inset-y-[4.17%] left-[4.17%] right-[4.17%]" data-name="Shape">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.3333 24">
            <path d={svgPaths.p2e914700} fill="var(--fill-0, #00766A)" id="Shape" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function IconMore() {
  return (
    <div className="bg-white content-stretch flex items-center p-[16px] relative rounded-[200px] shrink-0">
      <div className="relative shrink-0 size-[32px]" data-name="system/more-square">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Path" />
        </svg>
        <div className="absolute inset-[8.33%]" data-name="Shape">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.6667 26.6667">
            <path clipRule="evenodd" d={svgPaths.p2001e680} fill="var(--fill-0, #00766A)" fillRule="evenodd" id="Shape" />
          </svg>
        </div>
      </div>
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
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full lg:w-[628px]">
      <AdviceBadge />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[1.2] md:leading-[64px] not-italic relative shrink-0 text-[#171a1b] text-[32px] md:text-[48px] tracking-[0.12px] w-full">
        <p className="">{`Caregiving Services & Support`}</p>
      </div>
    </div>
  );
}

function AdviceDescriptionBlock() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full lg:w-[518px]">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#5b5b5b] text-[16px] w-full">We offer flexible direct care support for individuals with developmental or physical disabilities, seniors, those with cancer and more.</p>
      <div
        className="content-stretch flex h-[54px] items-center justify-center px-[24px] relative rounded-br-[24px] rounded-tl-[24px] shrink-0 cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95 hover:bg-[#00766a]/5 w-full sm:w-auto"
        data-name="Button/Default/Rounded"
        onClick={() => document.getElementById('services-overview')?.scrollIntoView({ behavior: 'smooth' })}
      >
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
    <div className="content-stretch flex flex-col lg:flex-row items-start lg:items-center justify-between gap-[32px] lg:gap-0 relative shrink-0 w-full">
      <AdviceTitleBlock />
      <AdviceDescriptionBlock />
    </div>
  );
}

function AdviceCard1Content() {
  return (
    <div className="content-stretch flex flex-col items-start justify-between min-h-[150px] relative w-full h-full gap-8">
      <IconCall />
      <div className="flex flex-col gap-2">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.4] not-italic relative shrink-0 text-[20px] text-white w-full">{`Personal Product & Service Advice`}</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[16px] text-white w-full">Get personalized guidance and recommendations from our experts and trusted partners to find the right care solutions for your needs.</p>
      </div>
    </div>
  );
}

function AdviceCard1() {
  return (
    <div className="bg-[#00766a] content-stretch flex flex-col min-h-[196px] items-center p-[20px] relative rounded-[16px] shrink-0 w-full md:col-span-2 transition-transform duration-300 hover:scale-[1.01] cursor-default">
      <AdviceCard1Content />
    </div>
  );
}

function AdviceCard2Content() {
  return (
    <div className="content-stretch flex flex-col items-start justify-between min-h-[150px] relative w-full h-full">
      <IconMore />
      <div className="flex flex-col gap-2">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.4] not-italic relative shrink-0 text-[20px] text-[#171a1b] w-full">{`Orientation in the Care Landscape`}</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[#5b5b5b] text-[16px] w-full">We help you navigate the physical disabilities healthcare system with expert guidance and support.</p>
      </div>
    </div>
  );
}

function AdviceCard2() {
  return (
    <div className="bg-[rgba(230,241,240,0.5)] h-full min-h-[220px] relative rounded-[16px] transition-transform duration-300 hover:scale-[1.02] cursor-default">
      <div className="content-stretch flex flex-col items-center p-[20px] relative size-full">
        <AdviceCard2Content />
      </div>
    </div>
  );
}

function AdviceCard3Content() {
  return (
    <div className="content-stretch flex flex-col items-start justify-between min-h-[150px] relative w-full h-full">
      <IconDocument />
      <div className="flex flex-col gap-2">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.4] not-italic relative shrink-0 text-[20px] text-[#171a1b] w-full">Online Guide</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[#5b5b5b] text-[16px] w-full">Access step-by-step resources, articles, and practical tips anytime to manage care effectively.</p>
      </div>
    </div>
  );
}

function AdviceCard3() {
  return (
    <div className="bg-[rgba(230,241,240,0.5)] h-full min-h-[220px] relative rounded-[16px] transition-transform duration-300 hover:scale-[1.02] cursor-default">
      <div className="content-stretch flex flex-col items-center p-[20px] relative size-full">
        <AdviceCard3Content />
      </div>
    </div>
  );
}

function AdviceCard4Content() {
  return (
    <div className="content-stretch flex flex-col items-start justify-between min-h-[150px] relative w-full h-full">
      <IconAlert />
      <div className="flex flex-col gap-2">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.4] not-italic relative shrink-0 text-[20px] text-[#171a1b] w-full">{`Benefits & Applications Info`}</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[#5b5b5b] text-[16px] w-full">Clear, reliable information on healthcare benefits and assistance with the application process.</p>
      </div>
    </div>
  );
}

function AdviceCard4() {
  return (
    <div className="bg-[rgba(230,241,240,0.5)] h-full min-h-[220px] relative rounded-[16px] transition-transform duration-300 hover:scale-[1.02] cursor-default">
      <div className="content-stretch flex flex-col items-center p-[20px] relative size-full">
        <AdviceCard4Content />
      </div>
    </div>
  );
}

function AdviceCard5Content() {
  return (
    <div className="content-stretch flex flex-col items-start justify-between min-h-[150px] relative w-full h-full">
      <IconAccount />
      <div className="flex flex-col gap-2">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.4] not-italic relative shrink-0 text-[20px] text-[#171a1b] w-full">Personal Advisor</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[#5b5b5b] text-[16px] w-full">A dedicated advisor is always ready to answer your questions and assist with personalized care planning.</p>
      </div>
    </div>
  );
}

function AdviceCard5() {
  return (
    <div className="bg-[rgba(230,241,240,0.5)] h-full min-h-[220px] relative rounded-[16px] transition-transform duration-300 hover:scale-[1.02] cursor-default">
      <div className="content-stretch flex flex-col items-center p-[20px] relative size-full">
        <AdviceCard5Content />
      </div>
    </div>
  );
}

function AdviceCardsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] w-full relative">
      <AdviceCard1 />
      <AdviceCard2 />
      <AdviceCard3 />
      <AdviceCard4 />
      <AdviceCard5 />
    </div>
  );
}

export function SupportAdviceSection() {
  return (
    <div id="support-advice" className="bg-white content-stretch flex flex-col items-center overflow-x-hidden px-4 md:px-8 lg:px-[100px] py-[60px] md:py-[120px] relative w-full" data-name="Desktop - 3">
      <div className="flex flex-col gap-[48px] md:gap-[64px] items-start relative shrink-0 w-full max-w-[1240px]">
        <AdviceHeaderRow />
        <AdviceCardsGrid />
      </div>
    </div>
  );
}
