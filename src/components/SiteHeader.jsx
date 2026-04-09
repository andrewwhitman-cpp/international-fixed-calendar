import { ThemeToggle } from './ThemeToggle.jsx'

const sections = [
  { id: 'Home', label: 'Home' },
  { id: 'About', label: 'About' },
  { id: 'FAQs', label: 'FAQs' },
]

export function SiteHeader({ page, onNavigate }) {
  return (
    <header className="sticky top-0 z-20 border-b border-hairline bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-layout flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-6 lg:px-8">
        <div className="min-w-0">
          <p className="font-serif text-lg font-semibold tracking-tight text-ink sm:text-xl">
            International Fixed Calendar
          </p>
          <p className="truncate text-xs text-muted sm:text-sm">13 × 28 + year days</p>
        </div>
        <div className="flex shrink-0 flex-wrap items-center gap-2 sm:gap-3">
          <nav className="segmented" aria-label="Primary">
            {sections.map((s) => (
              <button
                key={s.id}
                type="button"
                className={`segmented__btn ${page === s.id ? 'segmented__btn--active' : ''}`}
                onClick={() => onNavigate(s.id)}
                aria-current={page === s.id ? 'page' : undefined}
              >
                {s.label}
              </button>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
