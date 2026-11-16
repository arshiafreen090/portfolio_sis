import { useRef } from "react";
import { ArrowUpRight, Eye, Instagram, Play } from "lucide-react";
import { Media } from "./ui.jsx";

/**
 * Vertical 9:16 video card. Clicking opens the original Instagram post.
 * If `video.preview` (a local mp4) is set, it plays muted on hover/focus —
 * never autoplays with sound and is not downloaded until hovered.
 */
export default function VideoCard({ video, tone = "sky", index = 0 }) {
  const ref = useRef(null);
  const play = () => ref.current?.play().catch(() => {});
  const stop = () => {
    if (!ref.current) return;
    ref.current.pause();
    ref.current.currentTime = 0;
  };

  return (
    <a
      href={video.url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={play}
      onMouseLeave={stop}
      onFocus={play}
      onBlur={stop}
      aria-label={`${video.title} — watch on Instagram`}
      className="group block w-[64vw] max-w-[260px] shrink-0 snap-center sm:w-auto sm:max-w-none"
    >
      <div className="relative aspect-[9/16] overflow-hidden rounded-[1.75rem] border border-ink/10 bg-paper shadow-soft transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-lift">
        {/* thumbnail: set `thumbnail` for this video in the data file */}
        <Media
          src={video.thumbnail}
          alt={`Thumbnail for ${video.title}`}
          label={`[Video thumbnail ${index + 1}]`}
          tone={tone}
          labelTop
          className="h-full w-full transition-transform duration-500 group-hover:scale-[1.04]"
        />
        {video.preview && (
          <video
            ref={ref}
            src={video.preview}
            muted
            loop
            playsInline
            preload="none"
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus:opacity-100"
          />
        )}

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-linear-to-t from-ink/75 to-transparent" aria-hidden="true" />

        {video.views && (
          <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-paper/95 px-2.5 py-1 text-xs font-semibold">
            <Eye className="size-3.5" aria-hidden="true" />
            {video.views}
          </span>
        )}
        <span className="absolute right-3 top-3 flex size-8 items-center justify-center rounded-full bg-paper/95">
          <Instagram className="size-4" aria-hidden="true" />
        </span>

        <span className="absolute left-1/2 top-1/2 flex size-12 -translate-x-1/2 sm:size-14 lg:size-16 -translate-y-1/2 items-center justify-center rounded-full bg-paper/95 shadow-lift transition-transform duration-300 group-hover:scale-110">
          <Play className="ml-1 size-6 fill-ink" aria-hidden="true" />
        </span>

        <span className="absolute inset-x-3 bottom-3 text-[13px] font-medium leading-snug text-cream sm:inset-x-4 sm:bottom-4 lg:text-[15px]">{video.title}</span>
      </div>

      <span className="mt-3 inline-flex items-center gap-1 px-1 text-sm font-medium text-ink/70 transition-colors group-hover:text-skydeep">
        Watch on Instagram
        <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
      </span>
    </a>
  );
}
