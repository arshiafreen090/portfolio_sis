import { ArrowUpRight, Download } from "lucide-react";
import { about, profile, socialLinks } from "../data/socialLinks.js";
import { Button, Reveal, Spark, socialIcons } from "./ui.jsx";

export default function Contact() {
  const email = socialLinks.find((l) => l.id === "email");

  return (
    <section id="contact" className="px-3 pb-3 sm:px-5 sm:pb-5">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-ink text-cream">
        <div className="absolute -right-24 -top-24 size-72 rounded-full bg-skydeep/40 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-12 lg:py-16">
          <Reveal>
            <span className="inline-flex rounded-lg bg-sky px-3 py-1.5 text-sm font-semibold text-ink">4 / contact</span>
            <h2 className="mt-6 max-w-4xl font-display text-[clamp(2.4rem,8vw,6rem)] leading-[0.98] tracking-[-0.03em]">
              Got something <span className="italic text-sky">creative</span> in mind?
              <Spark className="ml-3 inline size-8 text-butter sm:size-12" />
            </h2>
            <p className="mt-6 max-w-xl text-xl leading-relaxed text-cream/75">
              Let's create something that makes people stop scrolling.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href={email?.url || "#"} variant="light">
                Get in Touch
              </Button>
              <Button
                href={profile.resumeUrl}
                external
                className="border border-cream/30 bg-transparent text-cream hover:border-cream hover:bg-cream hover:text-ink"
                icon={<Download className="size-4" aria-hidden="true" />}
              >
                Download Resume
              </Button>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-8 border-t border-cream/15 pt-8 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16">
            {/* Contact options */}
            <Reveal>
              <ul className="grid gap-3 sm:grid-cols-2">
                {socialLinks.map((link) => {
                  const Icon = socialIcons[link.id];
                  return (
                    <li key={link.id}>
                      <a
                        href={link.url}
                        target={link.url.startsWith("mailto:") ? undefined : "_blank"}
                        rel="noopener noreferrer"
                        className="group flex items-center gap-4 rounded-2xl border border-cream/15 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-sky hover:bg-cream/5"
                      >
                        <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-cream/10 transition-colors group-hover:bg-sky group-hover:text-ink">
                          <Icon className="size-5" aria-hidden="true" />
                        </span>
                        <span className="min-w-0">
                          <span className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-cream/55">
                            {link.label}
                          </span>
                          <span className="block truncate text-[15px] font-medium">{link.handle}</span>
                        </span>
                        <ArrowUpRight
                          className="ml-auto size-4 shrink-0 text-cream/50 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-sky"
                          aria-hidden="true"
                        />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </Reveal>

            {/* Open to */}
            <Reveal delay={0.05}>
              <p className="font-hand text-3xl text-butter">I'm open to...</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {about.openTo.map((item) => (
                  <li key={item} className="rounded-full border border-cream/25 px-3.5 py-1.5 text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
