import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Download, X } from "lucide-react";

/** Full script in a pop-up: timing, section and dialogue for every beat. */
function ScriptModal({ script, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={`Full script: ${script.title}`}
      className="fixed inset-0 z-[80] flex items-end justify-center bg-ink/80 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-t-3xl bg-paper shadow-lift sm:rounded-3xl"
        initial={{ y: 24 }}
        animate={{ y: 0 }}
        exit={{ y: 16 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-ink/10 px-6 py-5 sm:px-8">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-skydeep">
              {script.category}
              {script.duration ? ` \u00b7 ${script.duration}` : ""}
            </p>
            <h5 className="mt-1 font-display text-2xl leading-tight tracking-tight sm:text-3xl">{script.title}</h5>
          </div>
          <button
            type="button"
            onClick={onClose}
            autoFocus
            aria-label="Close script"
            className="flex size-10 shrink-0 items-center justify-center rounded-full bg-ink text-cream transition-transform hover:scale-105"
          >
            <X className="size-4" />
          </button>
        </div>

        <ol className="overflow-y-auto px-6 py-5 sm:px-8">
          {script.full.map((row, i) => (
            <li key={i} className="grid gap-1 border-b border-dashed border-ink/15 py-4 last:border-0 sm:grid-cols-[7.5rem_1fr] sm:gap-5">
              <div>
                <p className="font-display text-sm italic text-mute">{row.time}</p>
                <p className={`mt-1 inline-block rounded-md px-2 py-0.5 text-[11px] font-semibold uppercase tracking-[0.08em] ${i === 0 ? "bg-butter" : "bg-sand/70"}`}>
                  {row.section}
                </p>
              </div>
              <p className="text-[15px] leading-relaxed">{row.line}</p>
            </li>
          ))}
        </ol>

        {script.url && (
          <div className="border-t border-ink/10 px-6 py-4 sm:px-8">
            <a
              href={script.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-mute transition-colors hover:text-ink"
            >
              <Download className="size-4" aria-hidden="true" /> Open the PDF version
            </a>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

const tilts = ["-rotate-1", "rotate-1", "-rotate-[0.5deg]"];

/** Document-style script card with a highlighted hook. */
export default function ScriptCard({ script, index = 0 }) {
  const [open, setOpen] = useState(false);
  return (
    <>
    <article
      className={`group relative flex flex-col rounded-2xl border border-ink/10 bg-paper p-6 shadow-soft transition-all duration-300 hover:rotate-0 hover:-translate-y-1 hover:shadow-lift sm:p-7 ${
        tilts[index % tilts.length]
      }`}
    >
      {/* paper details: punched holes + ruled lines */}
      <div className="absolute left-4 top-0 flex h-full flex-col justify-center gap-10" aria-hidden="true">
        <span className="size-2.5 rounded-full bg-cream ring-1 ring-ink/10" />
        <span className="size-2.5 rounded-full bg-cream ring-1 ring-ink/10" />
      </div>

      <div className="pl-6">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-md bg-sand px-2 py-1 text-[11px] font-semibold uppercase tracking-[0.12em]">
            {script.category}
          </span>
          <span className="shrink-0 font-display text-sm italic text-mute">0{index + 1}{script.duration ? ` \u00b7 ${script.duration}` : ""}</span>
        </div>

        <h5 className="mt-5 font-display text-2xl leading-tight tracking-tight sm:text-[1.7rem]">{script.title}</h5>

        <div className="relative mt-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-skydeep">Hook</p>
          <p className="mt-1.5 text-lg font-medium leading-snug">
            <mark className="box-decoration-clone bg-butter px-1 text-ink">{script.hook}</mark>
          </p>
          {script.note && (
            <span className="absolute -top-3 right-0 rotate-6 font-hand text-xl text-skydeep">{script.note}</span>
          )}
        </div>

        <div className="mt-6 border-t border-dashed border-ink/20 pt-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-mute">Script preview</p>
          <p className="mt-1.5 text-[14px] leading-relaxed text-ink/75">{script.preview}</p>
        </div>

        {script.beats?.length > 0 && (
          <div className="mt-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-mute">Structure</p>
            <ol className="mt-2 flex flex-wrap items-center gap-1.5 text-[11px] font-medium">
              {script.beats.map((beat, i) => (
                <li key={beat} className="flex items-center gap-1.5">
                  <span className={`rounded-full px-2 py-0.5 ${i === 0 ? "bg-butter" : "bg-sand/70"}`}>{beat}</span>
                  {i < script.beats.length - 1 && <span className="text-ink/30" aria-hidden="true">{"\u2192"}</span>}
                </li>
              ))}
            </ol>
          </div>
        )}

        {/* Full script opens in a pop-up (data: `full` in src/data/scriptingProjects.js) */}
        {script.full ? (
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="mt-6 inline-flex items-center gap-1.5 self-start border-b-2 border-ink pb-0.5 text-[15px] font-semibold transition-colors hover:border-skydeep hover:text-skydeep"
          >
            Read Full Script
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </button>
        ) : (
          <a
            href={script.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-1.5 border-b-2 border-ink pb-0.5 text-[15px] font-semibold transition-colors hover:border-skydeep hover:text-skydeep"
          >
            Read Full Script
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        )}
      </div>
    </article>
    <AnimatePresence>{open && <ScriptModal script={script} onClose={() => setOpen(false)} />}</AnimatePresence>
    </>
  );
}
