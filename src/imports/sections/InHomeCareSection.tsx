import imgInHomeCare from "figma:asset/in-home-services.png";

function InHomeCareText() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[1.2] md:leading-[64px] relative shrink-0 text-[#00766a] text-[32px] md:text-[48px] tracking-[-0.144px] w-full">
        <p className="">In Home Services Care in Northwest Ohio</p>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#5b5b5b] text-[16px] w-full">
        {`We understand that the search for the appropriate home care and caregiving services can be daunting. At Reliance Care Solutions, we aim to simplify this experience by arranging a meet and greet. This opportunity allows us to understand you and your loved one's unique needs better. You will meet our dedicated staff, and together we can create a tailored plan that best supports your loved one.`}
      </p>
    </div>
  );
}

function ServiceProgramsStat() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center md:items-start relative shrink-0 transition-transform hover:scale-105 duration-300">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-medium leading-[1] not-italic relative shrink-0 text-[#f4a261] text-[48px] md:text-[48px] lg:text-[48px]">10+</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium uppercase tracking-[1.5px] leading-[1.4] not-italic relative shrink-0 text-[#5b5b5b] text-[14px] md:text-[16px] text-center md:text-left">Service Programs</p>
    </div>
  );
}

function FamiliesServedStat() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center md:items-start relative shrink-0 transition-transform hover:scale-105 duration-300">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-medium leading-[1] not-italic relative shrink-0 text-[#f4a261] text-[48px] md:text-[48px] lg:text-[48px]">200+</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium uppercase tracking-[1.5px] leading-[1.4] not-italic relative shrink-0 text-[#5b5b5b] text-[14px] md:text-[16px] text-center md:text-left">Families Served</p>
    </div>
  );
}

function CountiesCertifiedStat() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center md:items-start relative shrink-0 transition-transform hover:scale-105 duration-300">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-medium leading-[1] not-italic relative shrink-0 text-[#f4a261] text-[48px] md:text-[48px] lg:text-[48px]">14</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium uppercase tracking-[1.5px] leading-[1.4] not-italic relative shrink-0 text-[#5b5b5b] text-[14px] md:text-[16px] text-center md:text-left">Counties Certified</p>
    </div>
  );
}

function StatsRow() {
  return (
    <div className="content-stretch grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 items-center relative shrink-0 w-full mt-8">
      <ServiceProgramsStat />
      <FamiliesServedStat />
      <CountiesCertifiedStat />
    </div>
  );
}

function InHomeCareContent() {
  return (
    <div className="content-stretch flex flex-col items-start justify-between relative w-full lg:max-w-[622px]">
      <InHomeCareText />
      <StatsRow />
    </div>
  );
}

export function InHomeCareSection() {
  return (
    <div id="in-home-care" className="bg-[#f3f7f7] flex justify-center relative overflow-x-hidden px-4 md:px-8 lg:px-[100px] py-[60px] md:py-[120px] w-full" data-name="Desktop - 3">
      <div className="flex flex-col items-center w-full max-w-[1240px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-[40px] lg:gap-[80px] w-full">
          <InHomeCareContent />
          <div className="h-[300px] md:h-[548px] relative rounded-[16px] shrink-0 w-full lg:w-[622px]">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgInHomeCare} />
          </div>
        </div>
      </div>
    </div>
  );
}
