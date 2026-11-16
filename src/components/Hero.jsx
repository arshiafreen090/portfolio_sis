import { ArrowDown } from "lucide-react";
import { profile, socialLinks, heroSocialIds } from "../data/socialLinks.js";
import { Button, Media, Reveal, SocialIcons, Spark } from "./ui.jsx";

export default function Hero() {
  const heroLinks = socialLinks.filter((l) => heroSocialIds.includes(l.id));

  return (
    <section id="home" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-10 sm:px-8 md:pt-16 md:grid-cols-[1.1fr_0.9fr] md:gap-8 lg:pb-28">
        {/* Copy */}
        <div className="relative">
          <Reveal delay={0.05}>
            <h1 className="font-display text-[clamp(2.9rem,10vw,6.75rem)] leading-[0.95] tracking-[-0.03em]">
              {profile.greeting}
              <br />
              <span className="relative inline-block italic">
                {profile.name}!
                <Spark className="absolute -right-8 -top-3 size-7 text-skydeep sm:-right-11 sm:size-9" />
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 text-2xl font-medium tracking-tight sm:text-3xl">
              Your <span className="squiggle">{profile.role}</span>
            </p>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-mute">{profile.intro}</p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href="#projects" icon={<ArrowDown className="size-4" aria-hidden="true" />}>
                Explore My Work
              </Button>
              <Button href="#contact" variant="outline">
                Let's Connect
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <SocialIcons links={heroLinks} />
              <span className="font-hand text-2xl text-ink/60">say hi, I reply!</span>
            </div>
          </Reveal>
        </div>

        {/* Portrait composition */}
        <Reveal delay={0.1} className="relative mx-auto w-full max-w-[19rem] sm:max-w-sm md:max-w-none lg:pl-8">
          <div className="relative mx-auto w-[82%] sm:w-[78%]">
            {/* offset colour blocks behind the photo */}
            <div className="absolute -left-5 top-8 h-full w-full -rotate-6 rounded-[2.5rem] bg-sky" aria-hidden="true" />
            <div className="absolute -right-4 -top-4 h-28 w-28 rounded-full bg-butter" aria-hidden="true" />

            {/* [REPLACE] hero photo: set profile.heroImage in src/data/socialLinks.js */}
            <Media
              src={profile.heroImage}
              alt={`Portrait of ${profile.name}`}
              label="[Sabiha's photo]"
              tone="blush"
              className="relative aspect-[4/5] rotate-2 rounded-[2.5rem] border-[6px] border-paper bg-sand shadow-lift"
            />

            {/* stickers */}
            <div className="absolute -left-6 bottom-16 -rotate-6 rounded-2xl border border-ink/10 bg-paper px-3 py-2 shadow-soft sm:-left-12 sm:px-4 sm:py-3 lg:-left-16">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-mute">currently</p>
              <p className="font-display text-lg italic leading-tight">AI UGC + scripts</p>
            </div>
            <div className="absolute -right-4 top-1/3 rotate-6 whitespace-nowrap rounded-full bg-ink px-3 py-1.5 text-xs font-medium text-cream shadow-soft sm:-right-10 sm:px-4 sm:py-2 sm:text-sm">
              content <span className="text-sky">×</span> growth
            </div>
            <p className="absolute -bottom-10 right-0 rotate-[-4deg] font-hand text-2xl text-ink/70">
              that's me <span aria-hidden="true">↑</span>
            </p>
          </div>
        </Reveal>
      </div>

      {/* positioning strip */}
      <div className="border-y border-ink/10 bg-paper">
        <p className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-4 gap-y-1 px-5 py-5 text-center font-display text-xl italic sm:text-2xl">
          <Spark className="size-4 text-skydeep" />
          {profile.positioning}
          <Spark className="size-4 text-skydeep" />
        </p>
      </div>
    </section>
  );
}
