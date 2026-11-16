import InstagramProfile from "./InstagramProfile.jsx";
import VideoCard from "./VideoCard.jsx";
import { Reveal } from "./ui.jsx";

/** One complete Instagram account showcase: profile header + 3 featured videos. */
export default function UGCAccount({ account, number, total = 2, flip = false, label = "Account", heading = "Some of my work" }) {
  return (
    <article aria-label={`${account.name} on Instagram`}>
      <Reveal>
        <p className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-mute">
          <span className="flex size-7 items-center justify-center rounded-full bg-ink font-display text-sm italic normal-case tracking-normal text-cream">
            {number}
          </span>
          {total > 1 ? `${label} ${number} of ${total}` : label}
        </p>
        <InstagramProfile account={account} flip={flip} />
      </Reveal>

      <Reveal delay={0.05}>
        <div className="mt-10 flex items-end justify-between gap-4 sm:mt-12">
          <h5 className="font-display text-3xl italic">{heading}</h5>
          <p className="font-hand text-xl text-ink/60 sm:hidden">swipe →</p>
          <p className="hidden font-hand text-xl text-ink/60 sm:block">tap to watch on Instagram</p>
        </div>
        {/* Mobile: horizontal snap scroll · Tablet: 2 cols · Desktop: 3 cols */}
        <div className="no-scrollbar -mx-5 mt-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:overflow-visible sm:px-0 lg:gap-6">
          {account.videos.map((video, i) => (
            <VideoCard key={i} video={video} tone={account.tone} index={i} />
          ))}
        </div>
      </Reveal>
    </article>
  );
}
