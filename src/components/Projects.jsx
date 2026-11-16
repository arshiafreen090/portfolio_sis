import UGCAccount from "./UGCAccount.jsx";
import ScriptingProjects from "./ScriptingProjects.jsx";
import BlogSection from "./BlogSection.jsx";
import CaseStudy from "./CaseStudy.jsx";
import { Pill, Reveal } from "./ui.jsx";
import { ugcAccounts } from "../data/ugcAccounts.js";

const categories = [
  { id: "ugc", letter: "A", title: "AI UGC Creation", shows: "execution" },
  { id: "scripting", letter: "B", title: "Scripting + Content Creation", shows: "storytelling" },
  { id: "writing", letter: "C", title: "Blogs + Case Study", shows: "strategy" },
];

function CategoryHeader({ letter, title, blurb, chip }) {
  return (
    <Reveal className="mb-12 lg:mb-16">
      <div className="flex items-start gap-5 sm:gap-7">
        <span
          className={`flex size-16 shrink-0 items-center justify-center rounded-2xl font-display text-4xl italic sm:size-20 sm:text-5xl ${chip}`}
          aria-hidden="true"
        >
          {letter}
        </span>
        <div>
          <h3 className="font-display text-4xl leading-[1.05] tracking-[-0.02em] sm:text-5xl">{title}</h3>
          <p className="mt-3 max-w-xl leading-relaxed text-mute">{blurb}</p>
        </div>
      </div>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title">
      {/* Section intro */}
      <div className="mx-auto max-w-6xl px-5 pt-14 sm:px-8 sm:pt-20 lg:pt-28">
        <Reveal>
          <Pill className="bg-butter">2 / selected work</Pill>
          <h2 id="projects-title" className="mt-5 font-display text-5xl leading-[1.02] tracking-[-0.02em] sm:text-6xl lg:text-7xl">
            Work that goes from <span className="italic">idea</span> to <span className="squiggle italic">impact</span>
          </h2>
          <nav aria-label="Project categories" className="mt-9 grid gap-3 md:grid-cols-3">
            {categories.map((c) => (
              <a
                key={c.id}
                href={`#${c.id}`}
                className="group flex items-center gap-4 rounded-2xl border border-ink/10 bg-paper p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-ink hover:shadow-soft"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-sand font-display text-2xl italic transition-colors group-hover:bg-sky">
                  {c.letter}
                </span>
                <span>
                  <span className="block font-medium leading-tight">{c.title}</span>
                  <span className="font-hand text-lg text-ink/60">shows {c.shows}</span>
                </span>
              </a>
            ))}
          </nav>
        </Reveal>
      </div>

      {/* A — AI UGC */}
      <div id="ugc" className="scroll-mt-20 mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20 lg:py-24">
        <CategoryHeader
          letter="A"
          chip="bg-sky"
          title={<>AI UGC <span className="italic">Creation</span></>}
          blurb="AI-generated UGC videos created end to end (concept, script, production and publishing) for two Instagram accounts."
        />
        <UGCAccount account={ugcAccounts[0]} number={1} />
      </div>
      {/* second account sits on its own tinted band so the two read as separate projects */}
      <div className="border-y border-ink/10 bg-blush/30">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20 lg:py-24">
          <UGCAccount account={ugcAccounts[1]} number={2} flip />
        </div>
      </div>

      {/* B — Scripting + content */}
      <div id="scripting" className="scroll-mt-20 dots">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20 lg:py-28">
          <CategoryHeader
            letter="B"
            chip="bg-butter"
            title={<>Scripting + <span className="italic">Content Creation</span></>}
            blurb="Managing brand accounts from plan to publish: reels, static posts, carousels and video scripts built around strong hooks."
          />
          <ScriptingProjects />
        </div>
      </div>

      {/* C — Blogs, case study, SEO */}
      <div id="writing" className="scroll-mt-20 border-t border-ink/10 bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20 lg:py-28">
          <CategoryHeader
            letter="C"
            chip="bg-forest text-cream"
            title={<>Blogs + <span className="italic">Case Study</span></>}
            blurb="The research and writing side: long-form, SEO-minded articles and a full case study."
          />
          <div className="space-y-16 sm:space-y-20 lg:space-y-24">
            <BlogSection />
            <CaseStudy />
          </div>
        </div>
      </div>
    </section>
  );
}
