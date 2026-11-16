import { ArrowUpRight } from 'lucide-react'
import { asset } from '../lib/asset.js'
import { InstagramIcon } from './BrandIcons.jsx'
import Media from './Media.jsx'

const statLabels = [
  ['followers', 'Followers'],
  ['following', 'Following'],
  ['posts', 'Posts'],
]

// Instagram account header: screenshot on the left, details on the right.
// Used by the UGC accounts and by the scripting/content account.
export default function AccountProfile({ account, flip = false }) {
  const handle = account.username.replace(/^@/, '')

  return (
    <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
      <div className={flip ? 'md:order-2' : ''}>
        <div className={`pop overflow-hidden rounded-3xl border-2 border-ink bg-white ${flip ? 'rotate-1' : '-rotate-1'}`}>
          {account.screenshot ? (
            // Real screenshot: natural proportions, never cropped.
            <img
              src={asset(account.screenshot)}
              alt={`Instagram profile of ${account.name}`}
              loading="lazy"
              decoding="async"
              className="block h-auto w-full"
            />
          ) : (
            <div className="aspect-[16/11]">
              <Media alt="Instagram profile screenshot placeholder" label="Instagram profile screenshot" tone={account.tone} />
            </div>
          )}
        </div>
      </div>

      <div>
        <h4 className="font-display text-[clamp(1.75rem,3.6vw,2.6rem)] font-medium leading-[1.05] tracking-[-0.01em]">{account.name}</h4>
        <p className="mt-2 flex items-center gap-2 font-medium text-grape">
          <InstagramIcon size={18} />@{handle}
        </p>
        <p className="mt-4 max-w-md leading-relaxed text-muted">{account.description}</p>

        <dl className="mt-7 flex max-w-md divide-x-2 divide-ink/15">
          {statLabels.map(([key, label]) => (
            <div key={key} className="flex-1 px-4 first:pl-0 last:pr-0">
              <dt className="text-sm font-medium text-muted">{label}</dt>
              <dd className="mt-1 font-display text-[clamp(1.5rem,3.4vw,2.25rem)] leading-none">{account.stats[key]}</dd>
            </div>
          ))}
        </dl>

        <a
          href={account.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="pop-sm mt-8 inline-flex items-center gap-2.5 rounded-full border-2 border-ink bg-white px-5 py-2.5 font-semibold transition duration-200 hover:-translate-y-0.5 hover:bg-marker hover:shadow-[4px_4px_0_var(--color-ink)]"
        >
          <InstagramIcon size={18} />
          Visit Instagram
          <ArrowUpRight size={18} aria-hidden="true" />
        </a>
      </div>
    </div>
  )
}
