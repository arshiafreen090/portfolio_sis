// Small shared building blocks used across every section.
import { motion } from "framer-motion";
import { ArrowUpRight, Image as ImageIcon, Instagram, Linkedin, Mail } from "lucide-react";

/* Placeholder tones — also used as accent tones for accounts. */
export const tones = {
  sky: "from-sky/80 via-paper to-blush/60",
  blush: "from-blush via-paper to-butter/70",
  butter: "from-butter via-paper to-sky/60",
  sand: "from-sand via-paper to-blush/60",
  forest: "from-forest/25 via-paper to-butter/70",
};

export const toneBg = {
  sky: "bg-sky",
  blush: "bg-blush",
  butter: "bg-butter",
  sand: "bg-sand",
  forest: "bg-forest text-cream",
};

/**
 * Media — shows the image when `src` is set, otherwise an on-brand
 * placeholder with a label. Replacing a placeholder = setting `src` in data.
 */
export function Media({ src, alt, label, tone = "sky", className = "", fit = "cover", labelTop = false }) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {src ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          className={`h-full w-full ${fit === "contain" ? "object-contain" : "object-cover"}`}
        />
      ) : (
        <div
          role="img"
          aria-label={alt}
          className={`flex h-full w-full flex-col items-center gap-2 bg-linear-to-br ${tones[tone] || tones.sky} p-5 text-center ${
            labelTop ? "justify-start pt-[32%]" : "justify-center"
          }`}
        >
          <div className="dots absolute inset-0 opacity-60" aria-hidden="true" />
          <ImageIcon className="relative size-6 text-ink/35" strokeWidth={1.5} aria-hidden="true" />
          <span className="relative font-hand text-xl leading-tight text-ink/60">{label}</span>
        </div>
      )}
    </div>
  );
}

/** Numbered pill label, e.g. "2 / about". */
export function Pill({ children, className = "bg-sky" }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm font-semibold tracking-tight text-ink ${className}`}
    >
      {children}
    </span>
  );
}

/** Subtle one-time reveal on scroll. */
export function Reveal({ children, delay = 0, className = "", as = "div" }) {
  const Tag = motion[as] || motion.div;
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  );
}

/** Button-styled link. variant: solid | outline | light */
export function Button({ href, children, variant = "solid", external = false, icon = null, className = "", ...rest }) {
  const styles = {
    solid: "bg-ink text-cream hover:bg-skydeep",
    outline: "border border-ink/20 bg-paper text-ink hover:border-ink hover:bg-ink hover:text-cream",
    light: "bg-cream text-ink hover:bg-sky",
  };
  const ext = external ? { target: "_blank", rel: "noopener noreferrer" } : {};
  return (
    <a
      href={href}
      {...ext}
      {...rest}
      className={`group/btn inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full px-5 py-3 sm:px-6 text-[15px] font-medium transition-all duration-200 active:scale-[0.97] ${styles[variant]} ${className}`}
    >
      {children}
      {icon || (
        <ArrowUpRight
          className="size-4 transition-transform duration-200 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5"
          aria-hidden="true"
        />
      )}
    </a>
  );
}

/** X (Twitter) logo — Lucide has no X mark, so it lives here. */
export function XIcon({ className = "size-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M17.75 3h3.07l-6.7 7.66L22 21h-6.17l-4.83-6.32L5.47 21H2.4l7.17-8.2L2 3h6.33l4.37 5.77L17.75 3Zm-1.08 16.17h1.7L7.4 4.74H5.58l11.09 14.43Z" />
    </svg>
  );
}

export const socialIcons = {
  email: Mail,
  linkedin: Linkedin,
  instagram: Instagram,
  x: XIcon,
};

/** Row of round social icon links. */
export function SocialIcons({ links, className = "", itemClassName = "" }) {
  return (
    <ul className={`flex items-center gap-2.5 ${className}`}>
      {links.map((link) => {
        const Icon = socialIcons[link.id] || ArrowUpRight;
        return (
          <li key={link.id}>
            <a
              href={link.url}
              target={link.url.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={link.label}
              className={`flex size-11 items-center justify-center rounded-full border border-ink/15 bg-paper text-ink transition-all duration-200 hover:-translate-y-0.5 hover:border-ink hover:bg-ink hover:text-cream ${itemClassName}`}
            >
              <Icon className="size-[18px]" aria-hidden="true" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}

/** Four-point sparkle used as a recurring decorative mark. */
export function Spark({ className = "size-6 text-ink" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 0c.6 6.6 5.4 11.4 12 12-6.6.6-11.4 5.4-12 12-.6-6.6-5.4-11.4-12-12C6.600 11.400 11.400 6.600 12 0Z" />
    </svg>
  );
}
