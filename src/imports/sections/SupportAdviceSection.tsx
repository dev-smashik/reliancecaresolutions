import svgPaths from "../svgPaths";

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
    <div className="bg-white content-stretch flex items-center p-[16px] relative rounded-200px shrink-0">
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
    <div className="bg-white content-stretch flex items-center p-[16px] relative rounded-200px shrink-0">
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
    <div className="bg-white content-stretch flex items-center p-[16px] relative rounded-200px shrink-0">
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
    <div className="bg-white content-stretch flex items-center p-[16px] relative rounded-200px shrink-0">
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
    <div className="bg-white content-stretch flex items-center p-[16px] relative rounded-200px shrink-0">
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

export function SupportAdviceSection() {
  return (
    <div className="-translate-x-1/2 absolute bg-white content-stretch flex flex-col items-start left-1/2 overflow-clip px-[100px] py-[120px] top-[1854px] w-[1440px]" data-name="Desktop - 3">
      <SupportAdviceLayout />
    </div>
  );
}
