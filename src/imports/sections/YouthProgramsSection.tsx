import svgPaths from "../svgPaths";
import imgYouthProgram from "figma:asset/youth-programs.png";

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

export function YouthProgramsSection() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#eaf6f4] content-stretch flex items-start left-1/2 overflow-clip px-[100px] py-[120px] top-[4265px] w-[1440px]" data-name="Desktop - 7">
      <YouthSectionLayout />
    </div>
  );
}
