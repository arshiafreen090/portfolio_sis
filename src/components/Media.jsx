import { useId } from 'react'
import { asset } from '../lib/asset.js'

const tones = {
  lilac: 'bg-lilac text-ink',
  marker: 'bg-marker text-ink',
  blush: 'bg-blush text-ink',
  mint: 'bg-mint text-ink',
  grape: 'bg-grape text-white',
  ink: 'bg-ink text-paper',
  white: 'bg-white text-ink',
}

// Shows the real image when `src` is set in the data file.
// Otherwise draws a labelled placeholder in the site's own palette,
// so the layout looks finished before real assets arrive.
export default function Media({ src, alt = '', label, tone = 'lilac', fit = 'cover', className = '' }) {
  const id = useId()

  if (src) {
    return (
      <img
        src={asset(src)}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={`block h-full w-full ${fit === 'contain' ? 'object-contain' : 'object-cover'} ${className}`}
      />
    )
  }

  return (
    <div
      role="img"
      aria-label={alt || label || 'Placeholder image'}
      className={`relative flex h-full w-full items-center justify-center overflow-hidden ${tones[tone] || tones.lilac} ${className}`}
    >
      <svg aria-hidden="true" className="absolute inset-0 h-full w-full opacity-20">
        <defs>
          <pattern id={id} width="22" height="22" patternUnits="userSpaceOnUse">
            <circle cx="3" cy="3" r="1.6" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${id})`} />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full opacity-15">
        <circle cx="88" cy="14" r="26" fill="currentColor" />
        <path d="M0 100 Q 30 62 62 100 Z" fill="currentColor" />
      </svg>
      {label && (
        <span className="relative max-w-[85%] text-center font-hand text-xl leading-tight md:text-2xl">{label}</span>
      )}
    </div>
  )
}
