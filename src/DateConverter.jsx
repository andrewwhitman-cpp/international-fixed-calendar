import { useMemo, useState } from 'react'
import { MyDate } from './MyDate.js'

const GREGORIAN_MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

function daysInMonth(year, monthIndex) {
  return new Date(year, monthIndex + 1, 0).getDate()
}

function ChevronDownIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

const SELECT_FIELD =
  'w-full cursor-pointer appearance-none rounded-pill border border-hairline bg-paper py-2 text-sm font-semibold text-ink shadow-sm ring-1 ring-black/[0.04] transition-[box-shadow,border-color] duration-200 [color-scheme:light] hover:border-accent/45 hover:shadow-md hover:ring-accent/15 focus-visible:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/35 dark:ring-white/[0.06] dark:[color-scheme:dark]'

function PolishedSelect({ id, label, value, onChange, children, fieldClassName }) {
  return (
    <div className="relative w-full min-w-0">
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <select id={id} value={value} onChange={onChange} className={`${SELECT_FIELD} ${fieldClassName}`}>
        {children}
      </select>
      <span
        className="pointer-events-none absolute right-2.5 top-1/2 flex h-5 w-5 -translate-y-1/2 items-center justify-center rounded-full bg-accent/8 text-muted"
        aria-hidden
      >
        <ChevronDownIcon className="h-3.5 w-3.5 opacity-90" />
      </span>
    </div>
  )
}

function DateConverter() {
  const [picked, setPicked] = useState(() => new Date(2001, 1, 1))
  const newDate = new MyDate(picked.getFullYear(), picked.getMonth(), picked.getDate())

  const y = picked.getFullYear()
  const monthIndex = picked.getMonth()
  const day = picked.getDate()
  const maxDay = daysInMonth(y, monthIndex)

  const yearOptions = useMemo(() => {
    const set = new Set()
    for (let year = 1900; year <= 2100; year++) set.add(year)
    set.add(y)
    return Array.from(set).sort((a, b) => a - b)
  }, [y])

  const setGregorian = (nextY, nextM, nextD) => {
    const cap = daysInMonth(nextY, nextM)
    const d = Math.min(nextD, cap)
    setPicked(new Date(nextY, nextM, d))
  }

  return (
    <section className="planner-card planner-card-hover p-5 sm:p-6" aria-labelledby="converter-heading">
      <h2 id="converter-heading" className="font-serif text-lg font-semibold text-ink sm:text-xl">
        Gregorian → International Fixed Calendar
      </h2>
      <p className="mt-1 text-sm text-muted">
        Pick a Gregorian date to see its equivalent in the International Fixed Calendar.
      </p>

      <fieldset className="mt-5">
        <legend className="mb-2.5 block w-full text-xs font-semibold uppercase tracking-widest text-muted">
          Gregorian date
        </legend>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-[minmax(0,1.35fr)_minmax(4.25rem,0.55fr)_minmax(0,0.95fr)] sm:gap-3">
          <div className="min-w-0">
            <span className="mb-1.5 block text-[0.65rem] font-medium uppercase tracking-wide text-muted">Month</span>
            <PolishedSelect
              id="converter-month"
              label="Month"
              value={monthIndex}
              fieldClassName="pl-4 pr-10 text-left"
              onChange={(e) => {
                const m = Number(e.target.value)
                if (!Number.isFinite(m)) return
                setGregorian(y, m, day)
              }}
            >
              {GREGORIAN_MONTHS.map((name, i) => (
                <option key={name} value={i}>
                  {name}
                </option>
              ))}
            </PolishedSelect>
          </div>
          <div className="min-w-0 sm:max-w-[6.5rem]">
            <span className="mb-1.5 block text-[0.65rem] font-medium uppercase tracking-wide text-muted">Day</span>
            <PolishedSelect
              id="converter-day"
              label="Day"
              value={day}
              fieldClassName="pl-3 pr-9 text-center tabular-nums"
              onChange={(e) => {
                const d = Number(e.target.value)
                if (!Number.isFinite(d)) return
                setPicked(new Date(y, monthIndex, d))
              }}
            >
              {Array.from({ length: maxDay }, (_, i) => i + 1).map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </PolishedSelect>
          </div>
          <div className="min-w-0">
            <span className="mb-1.5 block text-[0.65rem] font-medium uppercase tracking-wide text-muted">Year</span>
            <PolishedSelect
              id="converter-year"
              label="Year"
              value={y}
              fieldClassName="pl-3 pr-9 text-center tabular-nums"
              onChange={(e) => {
                const nextY = Number(e.target.value)
                if (!Number.isFinite(nextY)) return
                setGregorian(nextY, monthIndex, day)
              }}
            >
              {yearOptions.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </PolishedSelect>
          </div>
        </div>
      </fieldset>

      <div className="mt-6 rounded-lg border border-dashed border-hairline bg-bg/60 p-4">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted">
          International Fixed Calendar date
        </p>
        <p className="mt-2 font-mono text-sm text-ink sm:text-base">
          {newDate.getMonth()}/{newDate.getDay()}/{newDate.getYear()}
        </p>
        <p className="mt-3 font-serif text-lg text-ink sm:text-xl">{newDate.getDate('full')}</p>
      </div>
    </section>
  )
}

export default DateConverter
