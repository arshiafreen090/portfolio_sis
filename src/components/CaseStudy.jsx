import { FileText } from "lucide-react";
import { Button, Media, Reveal } from "./ui.jsx";
import { caseStudy } from "../data/caseStudies.js";

export default function CaseStudy() {
  return (
    <Reveal>
      <div className="mb-8 flex items-baseline justify-between gap-4 border-b-2 border-ink pb-3">
        <h4 className="font-display text-4xl tracking-[-0.02em]">
          Case <span className="italic">study</span>
        </h4>
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-mute">Featured</p>
      </div>

      <article className="grid overflow-hidden rounded-[2rem] border border-ink/10 bg-butter/60 lg:grid-cols-[0.8fr_1.2fr]">
        {/* Document-style preview */}
        <div className="relative flex items-center justify-center px-8 py-10 sm:p-12">
          <div className="absolute h-[70%] w-[55%] rotate-6 rounded-xl bg-paper/70 shadow-soft" aria-hidden="true" />
          {/* cover: set `cover` in src/data/caseStudies.js, or keep the designed cover */}
          {caseStudy.cover ? (
            <Media
              src={caseStudy.cover}
              alt={`Cover of the case study: ${caseStudy.title}`}
              className="relative aspect-[3/4] w-[62%] max-w-[15rem] -rotate-3 rounded-xl border border-ink/10 bg-paper shadow-lift"
            />
          ) : (
            <div
              role="img"
              aria-label={`Cover of the case study: ${caseStudy.title}`}
              className="relative flex aspect-[3/4] w-[62%] max-w-[15rem] -rotate-3 flex-col overflow-hidden rounded-xl bg-[#B3261E] p-5 text-cream shadow-lift sm:p-6"
            >
              <svg viewBox="0 0 200 120" className="absolute -bottom-6 -right-8 w-[85%] opacity-25" aria-hidden="true">
                {[0, 14, 28, 42, 56].map((y) => (
                  <path key={y} d={`M0 ${30 + y} q12 -14 25 0 t25 0 t25 0 t25 0 t25 0 t25 0 t25 0 t25 0`} fill="none" stroke="#F6C445" strokeWidth="5" strokeLinecap="round" />
                ))}
              </svg>
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#F6C445]">{caseStudy.coverEyebrow}</span>
              <span className="mt-auto font-display text-[clamp(1.6rem,4vw,2.4rem)] leading-[0.95] tracking-[-0.02em]">
                {caseStudy.coverTitle}
              </span>
              <span className="mt-2 font-display text-sm italic leading-snug text-cream/85 sm:text-base">{caseStudy.coverSubtitle}</span>
              <span className="mt-4 h-px w-full bg-cream/30" />
              <span className="mt-2 flex justify-between text-[10px] font-medium uppercase tracking-[0.18em] text-cream/70">
                <span>Sabiha</span>
                <span>{caseStudy.coverYear}</span>
              </span>
            </div>
          )}
          <span className="absolute bottom-6 right-6 flex items-center gap-1.5 rounded-full bg-ink px-3 py-1.5 text-xs font-semibold text-cream">
            <FileText className="size-3.5" aria-hidden="true" /> Canva
          </span>
        </div>

        <div className="bg-paper p-6 sm:p-10">
          <span className="rounded-md bg-sand px-2 py-1 text-[11px] font-semibold uppercase tracking-[0.12em]">
            {caseStudy.industry}
          </span>
          <h5 className="mt-4 font-display text-4xl leading-[1.05] tracking-[-0.02em] sm:text-5xl">{caseStudy.title}</h5>
          <p className="mt-4 leading-relaxed text-mute">{caseStudy.description}</p>

          <dl className="mt-7 grid gap-6 border-t border-ink/10 pt-6 sm:grid-cols-2">
            <div>
              <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-forest">Key objective</dt>
              <dd className="mt-1.5 text-[15px] leading-relaxed">{caseStudy.objective}</dd>
            </div>
            <div>
              <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-forest">Strategy overview</dt>
              <dd className="mt-1.5 text-[15px] leading-relaxed">{caseStudy.strategy}</dd>
            </div>
          </dl>

          {/* [REPLACE] PDF link: set `pdfUrl` in src/data/caseStudies.js */}
          <Button href={caseStudy.pdfUrl} external className="mt-8 w-full sm:w-auto">
            {caseStudy.ctaLabel || "View Full Case Study PDF"}
          </Button>
        </div>
      </article>
    </Reveal>
  );
}
