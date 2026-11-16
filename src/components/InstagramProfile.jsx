import { ArrowUpRight, Grid3x3, Instagram } from "lucide-react";
import { Media, toneBg } from "./ui.jsx";

/** Phone-style Instagram profile card built from the account data. */
function ProfileCard({ account }) {
  const stats = [
    { label: "posts", value: account.posts },
    { label: "followers", value: account.followers },
    { label: "following", value: account.following },
  ];
  const grid = account.videos.slice(0, 3);

  return (
    <div className="relative overflow-hidden rounded-[1.75rem] border border-ink/10 bg-paper shadow-soft">
      <div className="flex items-center justify-between border-b border-ink/10 px-5 py-3">
        <span className="text-[15px] font-semibold">{account.username}</span>
        <Instagram className="size-5" aria-hidden="true" />
      </div>

      <div className="px-5 pt-5">
        <div className="flex items-center gap-5">
          <span className="rounded-full bg-linear-to-tr from-[#feda75] via-[#d62976] to-[#4f5bd5] p-[3px]">
            <img
              src={account.avatar}
              alt={`${account.name} profile picture`}
              loading="lazy"
              className="size-20 rounded-full border-[3px] border-paper object-cover sm:size-[5.5rem]"
            />
          </span>
          <dl className="grid flex-1 grid-cols-3 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <dd className="text-lg font-semibold leading-tight">{s.value}</dd>
                <dt className="text-xs text-mute">{s.label}</dt>
              </div>
            ))}
          </dl>
        </div>
        <p className="mt-4 text-sm font-semibold">{account.name}</p>
        {account.category && <p className="text-xs text-mute">{account.category}</p>}
        <div className="mt-1 space-y-0.5 text-sm leading-snug">
          {account.bio.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </div>

      <div className="mt-5 flex justify-center border-t border-ink/10 py-2.5" aria-hidden="true">
        <Grid3x3 className="size-4" />
      </div>
      <div className="grid grid-cols-3 gap-0.5">
        {grid.map((v, i) => (
          <img
            key={i}
            src={v.thumbnail}
            alt=""
            loading="lazy"
            className="aspect-[3/4] w-full object-cover"
          />
        ))}
      </div>
    </div>
  );
}

/**
 * Reusable Instagram account header.
 * - With stats (showStats: true): profile card on one side, details + stats on the other.
 * - Without stats: a compact header with avatar, name, description and button.
 * A real `screenshot` replaces the built-in profile card.
 */
export default function InstagramProfile({ account, flip = false }) {
  const VisitButton = (
    <a
      href={account.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group mt-7 inline-flex items-center gap-2 rounded-full border border-ink/20 bg-paper py-2 pl-2 pr-5 text-[15px] font-medium transition-all duration-200 hover:border-ink hover:bg-ink hover:text-cream"
    >
      <span className="flex size-8 items-center justify-center rounded-full bg-ink text-cream transition-colors group-hover:bg-cream group-hover:text-ink">
        <Instagram className="size-4" aria-hidden="true" />
      </span>
      Visit Instagram
      <ArrowUpRight
        className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        aria-hidden="true"
      />
    </a>
  );

  if (!account.showStats) {
    return (
      <div className="flex flex-col gap-6 rounded-[1.75rem] border border-ink/10 bg-paper p-6 sm:flex-row sm:items-center sm:gap-8 sm:p-8">
        <img
          src={account.avatar}
          alt={`${account.name} logo`}
          loading="lazy"
          className="size-24 shrink-0 rounded-full border border-ink/10 object-cover"
        />
        <div className="flex-1">
          <p className="inline-flex items-center gap-2 text-sm font-medium text-mute">
            <Instagram className="size-4" aria-hidden="true" />@{account.username}
          </p>
          <h4 className="mt-1 font-display text-4xl leading-tight tracking-[-0.02em]">{account.name}</h4>
          <p className="mt-2 max-w-xl leading-relaxed text-mute">{account.description}</p>
        </div>
        <div className="shrink-0 [&>a]:mt-0">{VisitButton}</div>
      </div>
    );
  }

  const stats = [
    { label: "Followers", value: account.followers },
    { label: "Following", value: account.following },
    { label: "Posts", value: account.posts },
  ];

  return (
    <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
      <div className={`relative mx-auto w-full max-w-sm ${flip ? "md:order-2" : ""}`}>
        <div
          className={`absolute inset-0 rounded-[1.75rem] ${toneBg[account.tone] || "bg-sky"} ${
            flip ? "rotate-3" : "-rotate-3"
          }`}
          aria-hidden="true"
        />
        {account.screenshot ? (
          <Media
            src={account.screenshot}
            alt={`Instagram profile screenshot of ${account.name}`}
            fit="contain"
            className="relative rounded-[1.75rem] border border-ink/10 bg-paper shadow-soft"
          />
        ) : (
          <div className="relative">
            <ProfileCard account={account} />
          </div>
        )}
      </div>

      <div>
        <p className="inline-flex items-center gap-2 text-sm font-medium text-mute">
          <Instagram className="size-4" aria-hidden="true" />@{account.username}
        </p>
        <h4 className="mt-2 font-display text-4xl leading-tight tracking-[-0.02em] sm:text-5xl">{account.name}</h4>
        <p className="mt-4 max-w-md leading-relaxed text-mute">{account.description}</p>

        <dl className="mt-7 grid max-w-md grid-cols-3 divide-x divide-ink/10 rounded-2xl border border-ink/10 bg-paper">
          {stats.map((s) => (
            <div key={s.label} className="px-3 py-4 text-center sm:px-4">
              <dd className="font-display text-2xl italic sm:text-3xl">{s.value}</dd>
              <dt className="mt-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-mute">{s.label}</dt>
            </div>
          ))}
        </dl>
        {VisitButton}
      </div>
    </div>
  );
}
