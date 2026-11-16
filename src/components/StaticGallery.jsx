import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight, Expand, Instagram, X } from "lucide-react";
import { Media } from "./ui.jsx";

function useColumnCount() {
  const get = () =>
    typeof window === "undefined" ? 4 : window.innerWidth >= 1024 ? 4 : window.innerWidth >= 640 ? 3 : 2;
  const [count, setCount] = useState(get);
  useEffect(() => {
    const onResize = () => setCount(get());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return count;
}

const shapes = {
  portrait: "aspect-[4/5]",
  square: "aspect-square",
  tall: "aspect-[9/16]",
  wide: "aspect-[4/3]",
};

/** Masonry gallery of static posts / carousels with a keyboard-friendly lightbox. */
export default function StaticGallery({ posts }) {
  const [openIndex, setOpenIndex] = useState(null);
  const columnCount = useColumnCount();
  const columns = Array.from({ length: columnCount }, () => []);
  posts.forEach((post, i) => columns[i % columnCount].push({ post, i }));
  const isOpen = openIndex !== null;
  const current = isOpen ? posts[openIndex] : null;

  const close = useCallback(() => setOpenIndex(null), []);
  const step = useCallback(
    (dir) => setOpenIndex((i) => (i === null ? i : (i + dir + posts.length) % posts.length)),
    [posts.length]
  );

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, close, step]);

  return (
    <>
      {/* Pinterest-style staggered columns: every other column starts lower */}
      <div className="flex items-start gap-3 sm:gap-5">
        {columns.map((col, c) => (
          <ul key={c} className={`flex min-w-0 flex-1 flex-col gap-3 sm:gap-5 ${c % 2 === 1 ? "mt-10 sm:mt-16" : ""}`}>
            {col.map(({ post, i }) => (
              <li key={i}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(i)}
                  aria-label={`Open preview: ${post.title}`}
                  className="group relative block w-full overflow-hidden rounded-3xl border border-ink/10 bg-paper text-left shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
                >
                  <span className="block overflow-hidden">
                    {post.image ? (
                      <img
                        src={post.image}
                        alt={post.title}
                        loading="lazy"
                        decoding="async"
                        className="block h-auto w-full transition-transform duration-500 group-hover:scale-[1.04]"
                      />
                    ) : (
                      <Media alt={post.title} label={`[${post.category}]`} tone={post.tone} className={shapes[post.shape] || shapes.portrait} />
                    )}
                  </span>
                  <span className="absolute right-3 top-3 flex size-8 items-center justify-center rounded-full bg-ink text-cream opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
                    <Expand className="size-3.5" aria-hidden="true" />
                  </span>
                  <span className="block px-3 py-2.5 sm:px-4 sm:py-3">
                    <span className="flex flex-wrap items-center justify-between gap-1 text-[11px] text-mute">
                      <span className="font-medium">{post.account}</span>
                      <span className="rounded-full bg-sand px-2 py-0.5 font-semibold uppercase tracking-[0.08em] text-ink/70">
                        {post.category}
                      </span>
                    </span>
                    <span className="mt-0.5 block text-[13px] font-medium leading-snug sm:text-sm">{post.title}</span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        ))}
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={current.title}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/85 p-4 backdrop-blur-sm sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={close}
          >
            <motion.figure
              className="relative flex max-h-full w-full max-w-lg flex-col overflow-hidden rounded-3xl bg-paper shadow-lift"
              initial={{ scale: 0.95, y: 12 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.97, y: 8 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={current.image}
                alt={current.title}
                className="max-h-[72vh] w-full bg-sand/40 object-contain"
              />
              <figcaption className="flex items-center justify-between gap-4 px-5 py-4">
                <span>
                  <span className="block text-[11px] font-semibold uppercase tracking-[0.12em] text-skydeep">
                    {current.category}
                  </span>
                  <span className="block font-medium">{current.title}</span>
                  {current.description && <span className="block text-sm text-mute">{current.description}</span>}
                  {current.url && (
                    <a
                      href={current.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1.5 inline-flex items-center gap-1 text-sm font-medium text-skydeep hover:underline"
                    >
                      <Instagram className="size-3.5" aria-hidden="true" />
                      View on Instagram
                      <ArrowUpRight className="size-3.5" aria-hidden="true" />
                    </a>
                  )}
                </span>
                <span className="flex shrink-0 gap-2">
                  <button
                    type="button"
                    onClick={() => step(-1)}
                    aria-label="Previous"
                    className="flex size-10 items-center justify-center rounded-full border border-ink/15 transition-colors hover:bg-ink hover:text-cream"
                  >
                    <ChevronLeft className="size-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => step(1)}
                    aria-label="Next"
                    className="flex size-10 items-center justify-center rounded-full border border-ink/15 transition-colors hover:bg-ink hover:text-cream"
                  >
                    <ChevronRight className="size-4" />
                  </button>
                </span>
              </figcaption>
              <button
                type="button"
                onClick={close}
                autoFocus
                aria-label="Close preview"
                className="absolute right-3 top-3 flex size-10 items-center justify-center rounded-full bg-ink text-cream transition-transform hover:scale-105"
              >
                <X className="size-4" />
              </button>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
