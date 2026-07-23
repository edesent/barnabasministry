import { MARQUEE } from "@/config/site";
import { Diamond } from "./Ornaments";

export default function Marquee() {
  const items = [...MARQUEE, ...MARQUEE];
  return (
    <div className="marquee border-y border-navy-soft/40 bg-navy py-3.5 text-cream">
      <div className="marquee__track">
        {items.map((text, i) => (
          <span key={i} className="flex items-center gap-3 text-[13px] font-medium uppercase tracking-[0.22em]">
            <Diamond className="h-2 w-2 text-gold-bright" />
            {text}
          </span>
        ))}
      </div>
      <div className="marquee__track" aria-hidden="true">
        {items.map((text, i) => (
          <span key={i} className="flex items-center gap-3 text-[13px] font-medium uppercase tracking-[0.22em]">
            <Diamond className="h-2 w-2 text-gold-bright" />
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
