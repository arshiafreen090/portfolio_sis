import { asset, isExternal } from '../lib/asset.js'

const variants = {
  solid: 'bg-ink text-paper hover:bg-grape',
  marker: 'bg-marker text-ink',
  outline: 'bg-white text-ink',
  grape: 'bg-grape text-white',
}

// One button/link style for the whole site.
export default function Button({ href, variant = 'solid', children, className = '', newTab, ...rest }) {
  const external = newTab ?? isExternal(href)
  return (
    <a
      href={asset(href)}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`pop inline-flex items-center justify-center gap-2 rounded-full border-2 border-ink px-6 py-3 text-[0.95rem] font-semibold transition duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_var(--color-ink)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0_var(--color-ink)] ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </a>
  )
}
