import svgPaths from "../svgPaths";

export function TopBar() {
  return (
    <div className="bg-[#0a4a50] w-full px-4 lg:px-[100px] py-2 flex flex-col md:flex-row items-center justify-between gap-1 z-[110] relative">
      <p className="font-['Open_Sans',sans-serif] font-normal text-[14px] leading-[20px] text-white text-center md:text-left">
        Your trusted personal caregiving service provider in Northwest Ohio
      </p>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1">
          <svg className="size-[14px] shrink-0" fill="none" viewBox="0 0 14 14">
            <g clipPath="url(#clip_topbar_phone)">
              <path d={svgPaths.p2c04e800} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
            </g>
            <defs><clipPath id="clip_topbar_phone"><rect fill="white" height="14" width="14" /></clipPath></defs>
          </svg>
          <span className="font-['Open_Sans',sans-serif] font-normal text-[14px] leading-[20px] text-white whitespace-nowrap">(419) 704-0316</span>
        </div>
        <span className="font-['Open_Sans',sans-serif] font-normal text-[14px] leading-[20px] text-white whitespace-nowrap hidden sm:block">info@reliancecaresolutions.com</span>
      </div>
    </div>
  );
}
