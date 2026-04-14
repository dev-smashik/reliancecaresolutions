import svgPaths from "../svgPaths";

function ContactTitle() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] md:gap-[32px] items-start justify-center not-italic relative shrink-0 w-full lg:max-w-[527px]">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[1.1] relative shrink-0 text-[#171a1b] text-shadow-[0px_0px_24px_rgba(255,255,255,0.16)] tracking-[-0.3px] w-full">
        <p className="text-[36px] md:text-[60px]">
          <span className="">{`Connect with our team to `}</span>
          <span className="font-['Instrument_Serif:Italic',sans-serif] italic text-[#00766a] tracking-[-0.3px]">explore solutions.</span>
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
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 text-[#171a1b] w-full">
      <p className="font-['Inter:Medium',sans-serif] font-medium text-[20px] leading-[1.4] shrink-0">Email</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal text-[16px] sm:text-[14px] md:text-[16px] leading-[1.4] shrink-0 opacity-100 break-all">info@reliancecaresolutions.com</p>
    </div>
  );
}

function ContactCard_Email() {
  return (
    <div className="backdrop-blur-[12px] bg-[#eaf6f4] content-stretch flex flex-col gap-[10px] items-start p-[16px] relative rounded-[20px] shrink-0 w-full sm:w-auto sm:flex-1 h-auto min-h-[148px]">
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
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 text-[#171a1b] w-full">
      <p className="font-['Inter:Medium',sans-serif] font-medium text-[20px] leading-[1.4] shrink-0">Phone</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal text-[16px] leading-[1.4] shrink-0 opacity-100">(419) 704-0316</p>
    </div>
  );
}

function ContactCard_Phone() {
  return (
    <div className="backdrop-blur-[12px] bg-[#eaf6f4] content-stretch flex flex-col gap-[10px] items-start p-[16px] relative rounded-[20px] shrink-0 w-full sm:w-auto sm:flex-1 h-auto min-h-[148px]">
      <ContactIcon_Phone />
      <ContactDetail_Phone />
    </div>
  );
}

function ContactCardsRow() {
  return (
    <div className="content-stretch flex flex-col sm:flex-row gap-[16px] items-start relative shrink-0 w-full">
      <ContactCard_Email />
      <ContactCard_Phone />
    </div>
  );
}

function ContactTextWrapper() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] md:gap-[90px] items-start w-full lg:max-w-[564px] relative">
      <ContactTitle />
      <ContactCardsRow />
    </div>
  );
}

function ContactFormTitle() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start leading-[1.6] not-italic relative shrink-0 w-full">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#171a1b] text-[24px]">Tell us what you need</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#777] text-[16px]">Our team is ready to assist you with every detail.</p>
    </div>
  );
}

function FormInput_Name() {
  return (
    <div className="relative rounded-[10px] shrink-0 w-full overflow-hidden bg-[#f8fcfb] border border-[rgba(61,61,61,0.1)] focus-within:border-[#00766a] focus-within:ring-2 focus-within:ring-[#00766a]/20 transition-all duration-300">
      <input 
        type="text"
        placeholder="Full name"
        className="w-full px-[16px] py-[16px] font-['Rubik:Regular',sans-serif] text-[16px] text-[#171a1b] placeholder-[#777] outline-none bg-transparent"
      />
    </div>
  );
}

function FormField_Name() {
  return (
    <div className="content-stretch flex w-full sm:flex-[1_0_0] flex-col gap-[12px] items-start relative">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[#171a1b] text-[12px] w-full">Full Name</p>
      <FormInput_Name />
    </div>
  );
}

function FormInput_Phone() {
  return (
    <div className="relative rounded-[10px] shrink-0 w-full overflow-hidden bg-[#f8fcfb] border border-[rgba(61,61,61,0.1)] focus-within:border-[#00766a] focus-within:ring-2 focus-within:ring-[#00766a]/20 transition-all duration-300">
      <input 
        type="tel"
        placeholder="(419) 000-0000"
        className="w-full px-[16px] py-[16px] font-['Rubik:Regular',sans-serif] text-[16px] text-[#171a1b] placeholder-[#777] outline-none bg-transparent"
      />
    </div>
  );
}

function FormField_Phone() {
  return (
    <div className="content-stretch flex w-full sm:flex-[1_0_0] flex-col gap-[12px] items-start relative">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[#171a1b] text-[12px] w-full">Phone Number</p>
      <FormInput_Phone />
    </div>
  );
}

function FormRow_NamePhone() {
  return (
    <div className="content-stretch flex flex-col sm:flex-row gap-[16px] md:gap-[30px] items-center relative shrink-0 w-full">
      <FormField_Name />
      <FormField_Phone />
    </div>
  );
}

function FormInput_Email() {
  return (
    <div className="relative rounded-[10px] shrink-0 w-full overflow-hidden bg-[#f8fcfb] border border-[rgba(61,61,61,0.1)] focus-within:border-[#00766a] focus-within:ring-2 focus-within:ring-[#00766a]/20 transition-all duration-300">
      <input 
        type="email"
        placeholder="yourname@email.com"
        className="w-full px-[16px] py-[16px] font-['Rubik:Regular',sans-serif] text-[16px] text-[#171a1b] placeholder-[#777] outline-none bg-transparent"
      />
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
    <div className="relative rounded-[10px] shrink-0 w-full overflow-hidden bg-[#f8fcfb] border border-[rgba(61,61,61,0.1)] focus-within:border-[#00766a] focus-within:ring-2 focus-within:ring-[#00766a]/20 transition-all duration-300">
      <textarea 
        placeholder="Tell us about your needs..."
        className="w-full min-h-[140px] px-[16px] py-[16px] font-['Rubik:Regular',sans-serif] text-[16px] text-[#171a1b] placeholder-[#777] outline-none bg-transparent resize-none"
      />
    </div>
  );
}

function FormField_Message() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[#171a1b] text-[12px] w-full">How can we help you?</p>
      <FormInput_Message />
    </div>
  );
}

function FormFieldsGrid() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] md:gap-[30px] items-start relative shrink-0 w-full">
      <FormRow_NamePhone />
      <FormField_Email />
      <FormField_Message />
    </div>
  );
}

function ContactFormCard() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[36px] items-start p-[32px] md:p-[48px] rounded-[24px] relative w-full lg:max-w-[541px] shadow-[0_20px_40px_rgba(0,118,106,0.1)] border border-[rgba(0,118,106,0.1)] transition-transform hover:-translate-y-1 duration-300">
      <ContactFormTitle />
      <FormFieldsGrid />
      <div 
        className="bg-gradient-to-r from-[#00766a] to-[#2a9d8f] h-[54px] relative rounded-[200px] shrink-0 w-full cursor-pointer transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] hover:shadow-[0_8px_20px_rgba(0,118,106,0.25)] shadow-md" 
        data-name="Button/Default/Rounded"
        onClick={() => alert('Thank you for your message! Our team will get back to you soon.')}
      >
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
    <div id="contact" className="bg-white flex justify-center px-4 md:px-8 lg:px-[100px] py-[60px] md:py-[120px] relative w-full overflow-hidden" data-name="Desktop - 15">
      <div className="w-full max-w-[1240px] mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between gap-[60px]">
        <ContactTextWrapper />
        <ContactFormCard />
      </div>
    </div>
  );
}
