import svgPaths from "../svgPaths";

function ContactTitle() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start justify-center not-italic relative shrink-0 w-[527px]">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#171a1b] text-[0px] text-shadow-[0px_0px_24px_rgba(255,255,255,0.16)] tracking-[-0.3px] w-full">
        <p className="text-[60px]">
          <span className="leading-[64px]">{`Connect with our team to `}</span>
          <span className="font-['Instrument_Serif:Italic',sans-serif] italic leading-[64px] text-[#00766a] tracking-[-0.3px]">explore solutions.</span>
        </p>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#636768] text-[16px] w-full">We’re here to answer your questions and support your needs.</p>
    </div>
  );
}

function VuesaxLinearSms() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/sms">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="sms">
          <path d={svgPaths.p1b81e780} id="Vector" stroke="var(--stroke-0, #00766A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
          <path d={svgPaths.p31dc2600} id="Vector_2" stroke="var(--stroke-0, #00766A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
          <g id="Vector_3" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function ContactIcon_Email() {
  return (
    <div className="backdrop-blur-[12px] bg-[rgba(176,213,209,0.5)] content-stretch flex items-center justify-center p-[10px] relative rounded-[50px] shrink-0 size-[48px]">
      <div className="relative shrink-0 size-[24px]" data-name="sms">
        <VuesaxLinearSms />
      </div>
    </div>
  );
}

function ContactDetail_Email() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[1.6] not-italic relative shrink-0 text-[#171a1b] w-full">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[20px] w-full">Email</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[16px] w-full">info@reliancecaresolutions.com</p>
    </div>
  );
}

function ContactCard_Email() {
  return (
    <div className="backdrop-blur-[12px] bg-[#eaf6f4] content-stretch flex flex-col gap-[10px] items-start p-[16px] relative rounded-[200px] shrink-0 w-[274px]">
      <ContactIcon_Email />
      <ContactDetail_Email />
    </div>
  );
}

function VuesaxLinearCallCalling() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/call-calling">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="call-calling">
          <g id="call-calling_2">
            <path d={svgPaths.pa7f1800} id="Vector" stroke="var(--stroke-0, #00766A)" strokeMiterlimit="10" strokeWidth="1.5" />
            <path d={svgPaths.p34187f98} id="Vector_2" stroke="var(--stroke-0, #00766A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d="M22 9C22 5.13 18.87 2 15 2" id="Vector_3" stroke="var(--stroke-0, #00766A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
          <g id="Vector_4" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function ContactIcon_Phone() {
  return (
    <div className="backdrop-blur-[12px] bg-[rgba(176,213,209,0.5)] content-stretch flex items-center p-[10px] relative rounded-[50px] shrink-0 size-[48px]">
      <div className="relative shrink-0 size-[24px]" data-name="call-calling">
        <VuesaxLinearCallCalling />
      </div>
    </div>
  );
}

function ContactDetail_Phone() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[1.6] not-italic relative shrink-0 text-[#171a1b] w-full">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[20px] w-full">Phone</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[16px] w-full">(419) 704-0316</p>
    </div>
  );
}

function ContactCard_Phone() {
  return (
    <div className="backdrop-blur-[12px] bg-[#eaf6f4] content-stretch flex flex-col gap-[10px] items-start p-[16px] relative rounded-[200px] shrink-0 w-[274px]">
      <ContactIcon_Phone />
      <ContactDetail_Phone />
    </div>
  );
}

function ContactCardsRow() {
  return (
    <div className="content-stretch flex gap-[16px] items-start justify-center relative shrink-0 w-full">
      <ContactCard_Email />
      <ContactCard_Phone />
    </div>
  );
}

function ContactTextWrapper() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[109px] items-start left-[101px] top-[155px] w-[564px]">
      <ContactTitle />
      <ContactCardsRow />
    </div>
  );
}

function ContactFormTitle() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start leading-[1.6] not-italic relative shrink-0 w-full">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#171a1b] text-[24px] whitespace-nowrap">Tell us what you need</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#777] text-[16px] w-[min-content]">Our team is ready to assist you with every detail.</p>
    </div>
  );
}

function FormInput_Name() {
  return (
    <div className="relative rounded-[10px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(61,61,61,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[16px] relative size-full">
          <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#777] text-[16px] whitespace-nowrap">Full name</p>
        </div>
      </div>
    </div>
  );
}

function FormField_Name() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[#171a1b] text-[12px] w-full">Full Name</p>
      <FormInput_Name />
    </div>
  );
}

function FormInput_Phone() {
  return (
    <div className="relative rounded-[10px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(61,61,61,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[16px] relative size-full">
          <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[16px] text-[rgba(26,26,46,0.5)] whitespace-nowrap">(419) 000-0000</p>
        </div>
      </div>
    </div>
  );
}

function FormField_Phone() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[#171a1b] text-[12px] w-full">Phone Number</p>
      <FormInput_Phone />
    </div>
  );
}

function FormRow_NamePhone() {
  return (
    <div className="content-stretch flex gap-[30px] items-center relative shrink-0 w-full">
      <FormField_Name />
      <FormField_Phone />
    </div>
  );
}

function FormInput_Email() {
  return (
    <div className="relative rounded-[10px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(61,61,61,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[16px] relative size-full">
          <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#777] text-[16px] whitespace-nowrap">yourname@email.com</p>
        </div>
      </div>
    </div>
  );
}

function FormField_Email() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[#171a1b] text-[12px] w-full">Email</p>
      <FormInput_Email />
    </div>
  );
}

function FormInput_Message() {
  return (
    <div className="h-[124px] relative rounded-[10px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(61,61,61,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex items-start px-[12px] py-[16px] relative size-full">
        <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#777] text-[16px] whitespace-nowrap">Tell us about your needs...</p>
      </div>
    </div>
  );
}

function FormField_Message() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[158px] items-start relative shrink-0 w-full">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[#171a1b] text-[12px] w-full">How can we help you?</p>
      <FormInput_Message />
    </div>
  );
}

function FormFieldsGrid() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0 w-full">
      <FormRow_NamePhone />
      <FormField_Email />
      <FormField_Message />
    </div>
  );
}

function ContactFormCard() {
  return (
    <div className="-translate-x-1/2 absolute bg-white content-stretch flex flex-col gap-[32px] items-start left-[calc(50%+329.5px)] p-[24px] rounded-[20px] top-[143px] w-[541px]">
      <div aria-hidden="true" className="absolute border border-[rgba(61,61,61,0.1)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <ContactFormTitle />
      <FormFieldsGrid />
      <div className="bg-[#00766a] h-[54px] relative rounded-[200px] shrink-0 w-full" data-name="Button/Default/Rounded">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[16px] relative size-full">
            <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
              <p className="leading-[1.6]">Submit</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ContactSection() {
  return (
    <div className="-translate-x-1/2 absolute bg-white h-[870px] left-1/2 overflow-clip top-[6451px] w-[1440px]" data-name="Desktop - 15">
      <ContactTextWrapper />
      <ContactFormCard />
    </div>
  );
}
