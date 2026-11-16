// Turns a data-file path ('images/x.jpg') into a URL that works wherever the
// site is hosted. Full URLs, anchors and mailto links pass through untouched.
export function asset(path) {
  if (!path) return ''
  if (/^(https?:|mailto:|tel:|#|data:|blob:)/.test(path)) return path
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}

export const isExternal = (url) => /^https?:/.test(url || '')
