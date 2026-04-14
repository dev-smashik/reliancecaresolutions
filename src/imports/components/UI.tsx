import svgPaths from "../svgPaths";

export function ArrowIcon() {
  return (
    <div className="absolute right-[-0.34px] size-[32px] top-0" data-name="ArrowUpRight">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="ArrowUpRight">
          <path d={svgPaths.p85eb00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

export function ArrowIconDark() {
  return (
    <div className="absolute right-0 size-[32px] top-0" data-name="ArrowUpRight">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="ArrowUpRight">
          <path d={svgPaths.p85eb00} fill="var(--fill-0, #777777)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}
