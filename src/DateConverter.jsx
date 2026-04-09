import { useState } from 'react'
import { MyDate } from './MyDate.js'

function parseIsoToLocalDate(iso) {
  const parts = iso.split('-').map(Number)
  if (parts.length !== 3 || parts.some((n) => Number.isNaN(n))) return null
  const [y, m, d] = parts
  return new Date(y, m - 1, d)
}

function formatIsoFromDate(d) {
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

function DateConverter() {
  const [picked, setPicked] = useState(() => new Date(2001, 1, 1))
  const newDate = new MyDate(picked.getFullYear(), picked.getMonth(), picked.getDate())

  return (
    <section className="planner-card planner-card-hover p-5 sm:p-6" aria-labelledby="converter-heading">
      <h2 id="converter-heading" className="font-serif text-lg font-semibold text-ink sm:text-xl">
        Gregorian → modern calendar
      </h2>
      <p className="mt-1 text-sm text-muted">Pick a standard date to see its modern equivalent.</p>

      <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-end">
        <label className="block flex-1">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-muted">
            Standard date
          </span>
          <input
            type="date"
            value={formatIsoFromDate(picked)}
            onChange={(e) => {
              const d = parseIsoToLocalDate(e.target.value)
              if (d) setPicked(d)
            }}
            className="w-full rounded-lg border border-hairline bg-paper px-3 py-2.5 text-ink shadow-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/25"
          />
        </label>
      </div>

      <div className="mt-6 rounded-lg border border-dashed border-hairline bg-bg/60 p-4">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted">Modern date</p>
        <p className="mt-2 font-mono text-sm text-ink sm:text-base">
          {newDate.getMonth()}/{newDate.getDay()}/{newDate.getYear()}
        </p>
        <p className="mt-3 font-serif text-lg text-ink sm:text-xl">{newDate.getDate('full')}</p>
      </div>
    </section>
  )
}

export default DateConverter
