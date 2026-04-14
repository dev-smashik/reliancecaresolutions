import svgPaths from "../svgPaths";
import imgYouthProgram from "figma:asset/youth-programs.png";

function YouthTitleBadge() {
  return (
    <div className="bg-[#eaf6f4] content-stretch flex h-[35px] items-center justify-center pl-[20px] pr-[16px] relative rounded-[200px] shrink-0 w-[184px]">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#00766a] text-[14px] tracking-[1.4px] uppercase whitespace-nowrap">
        <p className="leading-[1.6]">Programs</p>
      </div>
    </div>
  );
}

function YouthTitleBlock() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <YouthTitleBadge />
      <div className="flex flex-col font-['Inter:semibold',sans-serif] font-semibold justify-center leading-[1.2] md:leading-[64px] not-italic relative shrink-0 text-[#171a1b] text-[32px] md:text-[48px] tracking-[0.12px] w-full">
        <p className="">Expanding Care for Youth & Children</p>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#636768] text-[16px] w-full">We're proud to announce our expanded youth services and programs, providing comprehensive care and support for children and adolescents in Northwest Ohio. Every program is designed with safety, growth, and individual needs at the forefront.</p>
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

function ProgramIconWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[rgba(42,157,143,0.1)] relative rounded-[14px] shrink-0 size-[48px] flex items-center justify-center">
      {children}
    </div>
  );
}

function ProgramItem({ title, description, icon }: { title: string, description: string, icon: React.ReactNode }) {
  return (
    <div className="flex gap-[16px] items-start w-full">
      <ProgramIconWrapper>{icon}</ProgramIconWrapper>
      <div className="flex flex-col gap-[4px] flex-1">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#1a1a2e] text-[16px] leading-[1.4]">{title}</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] text-[#5a6a6e] text-[14px]">{description}</p>
      </div>
    </div>
  );
}

function FeatureList() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full mt-8">
      <ProgramItem
        title="CANS Assessment"
        description="Certified assessments for children using the Child and Adolescent Needs and Strengths tool to identify and address each child's unique needs promptly."
        icon={<ProgramIcon />}
      />
      <ProgramItem
        title="Group Home Services"
        description="A safe, supportive living environment for children focused on individual needs, personal growth, and overall well-being within a structured setting."
        icon={<ProgramIcon1 />}
      />
      <ProgramItem
        title="Emergency Respite Placement"
        description="Immediate support for children in crisis, ensuring a safe and nurturing environment during times of urgent need."
        icon={<ProgramIcon2 />}
      />
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

export function YouthProgramsSection() {
  return (
    <div id="youth-programs" className="bg-[#f0f9f8] content-stretch flex flex-col items-center overflow-x-hidden px-4 md:px-8 lg:px-[100px] py-[60px] md:py-[120px] relative w-full" data-name="Desktop - 7">
      <div className="flex flex-col lg:flex-row items-center gap-[48px] lg:gap-[80px] w-full max-w-[1240px]">
        <div className="flex flex-col items-start w-full lg:w-1/2">
          <YouthTitleBlock />
          <FeatureList />
        </div>
        <div className="h-[400px] md:h-[654px] relative rounded-[16px] shrink-0 w-full lg:w-1/2">
          <img alt="Youth Programs" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgYouthProgram} />
        </div>
      </div>
    </div>
  );
}
