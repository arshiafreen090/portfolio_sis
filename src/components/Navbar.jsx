import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { profile } from "../data/socialLinks.js";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Me" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Highlight the section currently crossing the middle of the viewport.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    links.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-5">
      <nav
        aria-label="Main"
        className={`mx-auto max-w-6xl rounded-2xl border px-4 transition-all duration-300 sm:px-5 ${
          scrolled || open
            ? "border-ink/10 bg-paper/90 shadow-soft backdrop-blur-md"
            : "border-transparent bg-transparent"
        }`}
      >
        <div className="flex h-14 items-center justify-between">
          <a href="#home" className="font-display text-2xl italic tracking-tight" aria-label={`${profile.name} — home`}>
            {profile.name}
            <span className="text-skydeep">.</span>
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                aria-current={active === link.id ? "page" : undefined}
                className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors duration-200 ${
                  active === link.id ? "bg-sky text-ink" : "text-ink/70 hover:text-ink"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-sm font-medium text-cream transition-colors duration-200 hover:bg-skydeep"
            >
              Resume <Download className="size-3.5" aria-hidden="true" />
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex size-10 items-center justify-center rounded-xl bg-sky/70 md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        <div
          id="mobile-menu"
          className={`grid transition-all duration-300 md:hidden ${
            open ? "grid-rows-[1fr] pb-4 opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <ul className="flex flex-col gap-1 border-t border-ink/10 pt-3">
              {links.map((link, i) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => setOpen(false)}
                    tabIndex={open ? 0 : -1}
                    className={`flex items-baseline justify-between rounded-xl px-3 py-2.5 font-display text-2xl ${
                      active === link.id ? "bg-sky/60 italic" : ""
                    }`}
                  >
                    {link.label}
                    <span className="font-sans text-xs text-mute">0{i + 1}</span>
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={open ? 0 : -1}
              className="mt-3 flex items-center justify-center gap-2 rounded-full bg-ink py-3 text-sm font-medium text-cream"
            >
              Resume <Download className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
