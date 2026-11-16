import { Heart } from "lucide-react";
import { about, profile } from "../data/socialLinks.js";
import { Media, Pill, Reveal, Spark } from "./ui.jsx";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20 lg:py-28">
      <Reveal>
        <Pill>1 / about</Pill>
        <h2 className="mt-5 font-display text-5xl leading-[1.02] tracking-[-0.02em] sm:text-6xl lg:text-7xl">
          A little <span className="italic">about me...</span>
        </h2>
      </Reveal>

      <div className="mt-10 grid gap-12 md:mt-12 md:grid-cols-12 md:gap-10 lg:gap-12">
        {/* Photo + annotation */}
        <Reveal className="mx-auto w-full max-w-sm md:col-span-5 md:max-w-none">
          <div className="relative">
          {/* About visual: profile.aboutVideo (or profile.aboutImage) in src/data/socialLinks.js */}
          {profile.aboutVideo ? (
            <video
              src={profile.aboutVideo}
              poster={profile.aboutVideoPoster}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label={`Animated collage of ${profile.name}'s creative workspace`}
              className="aspect-[800/1132] w-full rounded-[2rem] border border-ink/10 bg-sand object-cover shadow-soft"
            />
          ) : (
            <Media
              src={profile.aboutImage}
              alt={`${profile.name} at work`}
              label="[Photo or visual of Sabiha]"
              tone="sky"
              className="aspect-[5/6] rounded-[2rem] border border-ink/10 shadow-soft"
            />
          )}
          <div className="absolute -bottom-5 left-3 right-3 rotate-[-3deg] rounded-xl bg-butter px-3 py-2 text-center shadow-soft lg:left-5 lg:right-auto lg:px-4">
            <p className="font-hand text-lg leading-tight lg:whitespace-nowrap lg:text-2xl">ideas → scripts → content → growth</p>
          </div>
          <Spark className="absolute -right-3 -top-3 size-9 text-skydeep" />
          </div>
        </Reveal>

        {/* Bio */}
        <div className="md:col-span-7">
          <Reveal>
            {/* [EDITABLE] bio lives in src/data/socialLinks.js → about.paragraphs */}
            <div className="space-y-5">
              {about.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className={
                    i === 0
                      ? "font-display text-2xl leading-snug tracking-tight sm:text-[1.75rem]"
                      : "text-lg leading-relaxed text-mute"
                  }
                >
                  {p}
                </p>
              ))}
            </div>
          </Reveal>

          {/* Process strip: the whole journey, not just the edit */}
          <Reveal delay={0.05}>
            <p className="mt-9 text-xs font-semibold uppercase tracking-[0.16em] text-mute">
              What I do
            </p>
            <ol className="mt-3 flex flex-wrap gap-2">
              {about.process.map((step, i) => (
                <li
                  key={step}
                  className="inline-flex items-center gap-2 rounded-full border border-ink/12 bg-paper py-1.5 pl-1.5 pr-3.5 text-sm"
                >
                  <span className="flex size-6 items-center justify-center rounded-full bg-sand text-[11px] font-semibold">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </Reveal>

          {/* What I love doing */}
          <Reveal delay={0.1}>
            <div className="relative mt-10 rounded-3xl bg-ink p-7 text-cream sm:p-8">
              <h3 className="flex items-center gap-2 font-display text-2xl italic">
                What I love doing <Heart className="size-5 fill-blush text-blush" aria-hidden="true" />
              </h3>
              <ul className="mt-5 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                {about.loves.map((item, i) => (
                  <li key={item} className="flex gap-3 border-t border-cream/15 pt-4 text-[15px] leading-snug text-cream/90">
                    <span className="font-display text-sm italic text-sky">0{i + 1}</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="absolute -top-4 right-6 rotate-3 rounded-lg bg-sky px-3 py-1 font-hand text-xl text-ink">
                the fun stuff
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
