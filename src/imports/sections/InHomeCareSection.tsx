import imgInHomeCare from "figma:asset/in-home-services.png";

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

export function InHomeCareSection() {
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
