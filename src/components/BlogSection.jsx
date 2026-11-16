import { ArrowUpRight } from "lucide-react";
import { Media, Reveal } from "./ui.jsx";
import { blogs } from "../data/blogs.js";

function BlogCard({ blog, index }) {
  return (
    <article className="group">
      <a href={blog.url} target="_blank" rel="noopener noreferrer" className="block">
        {/* [REPLACE] blog cover: set `cover` in src/data/blogs.js */}
        <div className="overflow-hidden rounded-3xl border border-ink/10">
          {blog.cover ? (
            <Media
              src={blog.cover}
              alt={`Cover image for ${blog.title}`}
              tone={blog.tone}
              className="aspect-[16/9] w-full transition-transform duration-500 group-hover:scale-[1.03]"
            />
          ) : (
            <div
              role="img"
              aria-label={`Cover for ${blog.title}`}
              className="relative flex aspect-[16/9] w-full flex-col justify-end overflow-hidden bg-linear-to-br from-blush via-[#f3c2c9] to-[#e8a0b4] p-6 transition-transform duration-500 group-hover:scale-[1.03] sm:p-8"
            >
              <svg viewBox="0 0 24 24" className="absolute right-6 top-5 size-16 text-paper/70 sm:size-20" fill="currentColor" aria-hidden="true">
                <path d="M12 21s-7.5-4.6-9.6-9.2C.9 8.4 3 4.5 6.7 4.5c2.1 0 3.6 1.2 5.3 3.1 1.7-1.9 3.2-3.1 5.3-3.1 3.7 0 5.8 3.9 4.3 7.3C19.5 16.4 12 21 12 21Z" />
              </svg>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/60">{blog.category}</span>
              <span className="mt-1 font-display text-4xl italic leading-none text-ink sm:text-5xl">{blog.publication}</span>
            </div>
          )}
        </div>
        <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold uppercase tracking-[0.14em]">
          <span className="text-forest">{blog.category}</span>
          {blog.date && (
            <>
              <span className="hidden h-px w-6 bg-ink/30 sm:block" aria-hidden="true" />
              <span className="text-mute">{blog.date}</span>
            </>
          )}
          <span className="ml-auto font-display text-sm normal-case italic tracking-normal text-mute">{blog.publication || `No. 0${index + 1}`}</span>
        </div>
        <h5 className="mt-3 font-display text-3xl leading-[1.1] tracking-[-0.02em] decoration-forest/40 decoration-2 underline-offset-4 group-hover:underline sm:text-4xl">
          {blog.title}
        </h5>
        <p className="mt-3 max-w-lg leading-relaxed text-mute">{blog.excerpt}</p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-[15px] font-semibold text-forest">
          Read Article
          <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
        </span>
      </a>
    </article>
  );
}

export default function BlogSection() {
  return (
    <Reveal>
      <div className="mb-8 flex items-baseline justify-between gap-4 border-b-2 border-ink pb-3">
        <h4 className="font-display text-4xl tracking-[-0.02em]">
          Blog <span className="italic">writing</span>
        </h4>
        <p className="hidden text-xs font-semibold uppercase tracking-[0.16em] text-mute sm:block">Featured articles</p>
      </div>
      <div className="grid gap-12 md:grid-cols-2 md:gap-10">
        {blogs.map((blog, i) => (
          <BlogCard key={i} blog={blog} index={i} />
        ))}
      </div>
    </Reveal>
  );
}
