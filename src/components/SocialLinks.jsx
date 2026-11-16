import { Mail } from 'lucide-react'
import { socialLinks } from '../data/socialLinks.js'
import { InstagramIcon, LinkedInIcon, XIcon } from './BrandIcons.jsx'
import { isExternal } from '../lib/asset.js'

export const socialIcons = {
  mail: Mail,
  linkedin: LinkedInIcon,
  instagram: InstagramIcon,
  x: XIcon,
}

// Round icon buttons. `only="hero"` limits the list to links flagged inHero.
export default function SocialLinks({ only, dark = false, className = '' }) {
  const links = only === 'hero' ? socialLinks.filter((l) => l.inHero) : socialLinks
  const look = dark
    ? 'border-paper/40 text-paper hover:bg-marker hover:text-ink hover:border-marker'
    : 'border-ink bg-white text-ink hover:bg-marker'

  return (
    <ul className={`flex items-center gap-3 ${className}`}>
      {links.map((link) => {
        const Icon = socialIcons[link.icon]
        return (
          <li key={link.id}>
            <a
              href={link.url}
              aria-label={link.label}
              title={link.label}
              {...(isExternal(link.url) ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className={`flex h-11 w-11 items-center justify-center rounded-full border-2 transition duration-200 hover:-translate-y-0.5 hover:-rotate-6 ${look}`}
            >
              <Icon size={18} />
            </a>
          </li>
        )
      })}
    </ul>
  )
}
