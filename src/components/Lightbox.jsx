import { useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import Media from './Media.jsx'

// Full-screen preview for gallery items.
// Esc closes, left/right arrows move between items.
export default function Lightbox({ items, index, onClose, onChange }) {
  const closeRef = useRef(null)
  const item = items[index]
  const many = items.length > 1

  useEffect(() => {
    const previous = document.activeElement
    closeRef.current?.focus()
    const overflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = overflow
      previous?.focus?.()
    }
  }, [])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight' && many) onChange((index + 1) % items.length)
      if (e.key === 'ArrowLeft' && many) onChange((index - 1 + items.length) % items.length)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [index, items.length, many, onChange, onClose])

  const navButton =
    'flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-ink bg-white transition hover:bg-marker'

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${item.label} preview`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-4 md:p-8"
      onClick={onClose}
    >
      <button ref={closeRef} type="button" onClick={onClose} aria-label="Close preview" className={`absolute right-4 top-4 md:right-6 md:top-6 ${navButton}`}>
        <X size={22} />
      </button>

      <div className="flex w-full max-w-4xl items-center justify-center gap-3 md:gap-6" onClick={(e) => e.stopPropagation()}>
        {many && (
          <button type="button" aria-label="Previous item" onClick={() => onChange((index - 1 + items.length) % items.length)} className={`hidden sm:flex ${navButton}`}>
            <ChevronLeft size={24} />
          </button>
        )}

        <figure key={index} className="lightbox-panel w-full max-w-[min(34rem,100%)]">
          <div
            className="mx-auto max-h-[70vh] overflow-hidden rounded-3xl border-2 border-paper/60 bg-white"
            style={{ aspectRatio: item.ratio || '1/1', maxWidth: `calc(70vh * ${ratioToNumber(item.ratio)})` }}
          >
            <Media src={item.image} alt={item.description || item.label} label={item.label} tone={item.tone} fit="contain" />
          </div>
          <figcaption className="mt-4 flex items-start justify-between gap-4 text-paper">
            <div>
              <p className="font-display text-xl">{item.label}</p>
              {item.description && <p className="mt-1 text-sm text-paper/75">{item.description}</p>}
            </div>
            <p className="shrink-0 font-hand text-xl text-marker">
              {index + 1} of {items.length}
            </p>
          </figcaption>

          {many && (
            <div className="mt-4 flex justify-center gap-3 sm:hidden">
              <button type="button" aria-label="Previous item" onClick={() => onChange((index - 1 + items.length) % items.length)} className={navButton}>
                <ChevronLeft size={24} />
              </button>
              <button type="button" aria-label="Next item" onClick={() => onChange((index + 1) % items.length)} className={navButton}>
                <ChevronRight size={24} />
              </button>
            </div>
          )}
        </figure>

        {many && (
          <button type="button" aria-label="Next item" onClick={() => onChange((index + 1) % items.length)} className={`hidden sm:flex ${navButton}`}>
            <ChevronRight size={24} />
          </button>
        )}
      </div>
    </div>
  )
}

function ratioToNumber(ratio = '1/1') {
  const [w, h] = ratio.split('/').map(Number)
  return w && h ? w / h : 1
}
