import { ArrowUp } from "lucide-react";
import { profile, socialLinks } from "../data/socialLinks.js";
import { SocialIcons } from "./ui.jsx";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
      <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-3xl italic">
            {profile.name}
            <span className="text-skydeep">.</span>
          </p>
          <p className="mt-1 font-hand text-xl text-ink/65">{profile.footerTagline}</p>
        </div>
        <SocialIcons links={socialLinks} />
      </div>
      <div className="mt-8 flex items-center justify-between gap-4 border-t border-ink/10 pt-6 text-sm text-mute">
        <p>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <a
          href="#home"
          className="group inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full border border-ink/15 bg-paper py-1.5 pl-4 pr-1.5 font-medium text-ink transition-colors hover:border-ink"
        >
          Back to top
          <span className="flex size-8 items-center justify-center rounded-full bg-ink text-cream transition-transform group-hover:-translate-y-0.5">
            <ArrowUp className="size-4" aria-hidden="true" />
          </span>
        </a>
      </div>
    </footer>
  );
}
