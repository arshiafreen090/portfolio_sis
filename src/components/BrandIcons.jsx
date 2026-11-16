// Small brand marks drawn in-house so they never depend on an icon
// library's brand set. They match the stroke style of Lucide icons.

const base = { width: 20, height: 20, viewBox: '0 0 24 24', 'aria-hidden': true }
const stroke = { fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }

export function InstagramIcon({ size = 20, ...props }) {
  return (
    <svg {...base} {...stroke} width={size} height={size} {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5.5" />
      <circle cx="12" cy="12" r="4.2" />
      <path d="M17.5 6.5h.01" />
    </svg>
  )
}

export function LinkedInIcon({ size = 20, ...props }) {
  return (
    <svg {...base} {...stroke} width={size} height={size} {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

export function XIcon({ size = 20, ...props }) {
  return (
    <svg {...base} width={size} height={size} fill="currentColor" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}
