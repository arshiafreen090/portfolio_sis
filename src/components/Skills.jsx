import { Pill, Reveal, Spark, toneBg } from "./ui.jsx";
import { skillGroups } from "../data/skills.js";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20 lg:py-28">
      <Reveal>
        <Pill className="bg-blush">3 / skills</Pill>
        <h2 className="mt-5 font-display text-5xl leading-[1.02] tracking-[-0.02em] sm:text-6xl lg:text-7xl">
          What I <span className="italic">bring</span> to the table
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {skillGroups.map((group, gi) => (
          <Reveal key={group.id} delay={gi * 0.06}>
            <div className="relative h-full rounded-[2rem] border border-ink/10 bg-paper p-7 sm:p-9">
              <span
                className={`absolute -top-4 right-7 rounded-lg px-3 py-1 font-hand text-xl ${toneBg[group.tone]} ${
                  gi % 2 ? "-rotate-2" : "rotate-2"
                }`}
              >
                {group.note}
              </span>
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-mute">{group.title}</h3>
              {/* Typographic list: sizes vary so it reads as a composition, not a tag cloud */}
              <ul className="mt-6 flex flex-wrap items-baseline gap-x-4 gap-y-2">
                {group.skills.map((skill, i) => (
                  <li
                    key={skill}
                    className={`flex items-baseline gap-4 font-display leading-tight tracking-[-0.01em] ${
                      i % 3 === 0 ? "text-3xl sm:text-4xl" : i % 3 === 1 ? "text-2xl italic sm:text-3xl" : "text-xl text-ink/70 sm:text-2xl"
                    }`}
                  >
                    {skill}
                    {i < group.skills.length - 1 && <Spark className="size-3 shrink-0 self-center text-skydeep/70" />}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

    </section>
  );
}
