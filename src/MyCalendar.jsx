import { useMemo, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { MyMonth } from './MyDate.js'
import { MONTH_KEYS, monthKeyFromName } from './lib/myMonth.js'

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const ADDUS_MONTH_KEY = 0
const ADDUS_DAY_LABELS = ["New Year's Day", 'Leap Day']

/** Gregorian calendar leap year (matches JS Date / conventional year). */
function isGregorianLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
}

function ChevronLeftIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}

function ChevronRightIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}

function MyCalendar(props) {
  const reduceMotion = useReducedMotion()
  const [view, setView] = useState(() => ({
    year: props.todayYear,
    monthKey: monthKeyFromName(props.monthName),
  }))

  const monthLabel = MyMonth[view.monthKey] ?? props.monthName

  const handlePrev = () => {
    setView((v) => {
      const idx = MONTH_KEYS.indexOf(v.monthKey)
      if (idx <= 0) {
        return { year: v.year - 1, monthKey: MONTH_KEYS[MONTH_KEYS.length - 1] }
      }
      return { year: v.year, monthKey: MONTH_KEYS[idx - 1] }
    })
  }

  const handleNext = () => {
    setView((v) => {
      const idx = MONTH_KEYS.indexOf(v.monthKey)
      if (idx < 0 || idx >= MONTH_KEYS.length - 1) {
        return { year: v.year + 1, monthKey: MONTH_KEYS[0] }
      }
      return { year: v.year, monthKey: MONTH_KEYS[idx + 1] }
    })
  }

  const isViewingToday =
    view.monthKey === props.todayMonthKey && view.year === props.todayYear

  const handleToday = () => {
    setView({ year: props.todayYear, monthKey: props.todayMonthKey })
  }

  const isTodayCell = useMemo(() => {
    return (dayNumber) =>
      view.monthKey === props.todayMonthKey &&
      view.year === props.todayYear &&
      dayNumber === props.todayDay
  }, [view.monthKey, view.year, props.todayMonthKey, props.todayYear, props.todayDay])

  const addusDayCount =
    view.monthKey === ADDUS_MONTH_KEY ? (isGregorianLeapYear(view.year) ? 2 : 1) : null

  const yearSelectOptions = useMemo(() => {
    const set = new Set()
    for (let y = 1900; y <= 2100; y++) set.add(y)
    set.add(view.year)
    set.add(props.todayYear)
    return Array.from(set).sort((a, b) => a - b)
  }, [view.year, props.todayYear])

  const handleYearChange = (e) => {
    const y = Number(e.target.value)
    if (!Number.isFinite(y)) return
    setView((v) => ({ ...v, year: y }))
  }

  return (
    <section className="planner-card planner-card-hover overflow-hidden" aria-labelledby="calendar-heading">
      <div className="flex items-center justify-between gap-3 border-b border-hairline bg-accent/10 px-4 py-3 sm:px-5">
        <button
          type="button"
          onClick={handlePrev}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-hairline bg-paper text-ink transition hover:border-accent/50 hover:bg-accent-soft"
          aria-label="Previous month"
        >
          <ChevronLeftIcon />
        </button>
        <div className="min-w-0 flex flex-col items-center text-center">
          <h2 id="calendar-heading" className="font-serif text-xl font-semibold tracking-tight text-ink sm:text-2xl">
            {monthLabel}
          </h2>
          <label htmlFor="calendar-year-select" className="sr-only">
            Year
          </label>
          <select
            id="calendar-year-select"
            value={view.year}
            onChange={handleYearChange}
            className="mt-1 w-[min(100%,7.5rem)] cursor-pointer rounded-pill border border-hairline bg-paper py-1.5 pl-3 pr-8 text-center text-sm font-medium text-ink transition hover:border-accent/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:mt-1.5"
          >
            {yearSelectOptions.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
          <button
            type="button"
            onClick={handleToday}
            disabled={isViewingToday}
            className="mt-1.5 rounded-pill border border-hairline bg-paper px-3 py-1 text-xs font-medium text-ink transition hover:border-accent/50 hover:bg-accent-soft disabled:cursor-default disabled:opacity-50 disabled:hover:border-hairline disabled:hover:bg-paper"
            aria-label="Jump to current month"
          >
            Today
          </button>
        </div>
        <button
          type="button"
          onClick={handleNext}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-hairline bg-paper text-ink transition hover:border-accent/50 hover:bg-accent-soft"
          aria-label="Next month"
        >
          <ChevronRightIcon />
        </button>
      </div>

      <div className="p-4 sm:p-5">
        <div
          className="mb-3 grid grid-cols-7 gap-1.5 sm:gap-2"
          role="rowgroup"
          aria-label="Weekday headers"
        >
          {WEEKDAYS.map((d) => (
            <div
              key={d}
              className="text-center text-[0.65rem] font-semibold uppercase tracking-widest text-muted sm:text-xs"
              role="columnheader"
            >
              {d}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1.5 sm:gap-2" role="grid" aria-label={`Days in ${monthLabel}`}>
          {addusDayCount != null
            ? Array.from({ length: addusDayCount }, (_, index) => {
                const dayNum = index + 1
                const today = isTodayCell(dayNum)
                const label = ADDUS_DAY_LABELS[index]
                return (
                  <motion.div
                    key={`${view.year}-${view.monthKey}-${dayNum}`}
                    initial={reduceMotion ? false : { opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.1,
                      delay: reduceMotion ? 0 : index * 0.003,
                    }}
                    className={`flex min-h-[3.25rem] items-center justify-center rounded-lg border px-1 py-2 text-center transition sm:min-h-[3.5rem] ${
                      today
                        ? 'border-accent bg-accent text-accent-contrast shadow-ring'
                        : 'border-hairline bg-paper/80 text-ink hover:border-accent/35 hover:bg-accent-soft/50'
                    }`}
                    role="gridcell"
                    aria-selected={today}
                    aria-label={label}
                  >
                    <span className="text-balance text-[0.65rem] font-medium leading-tight sm:text-xs">
                      {label}
                    </span>
                  </motion.div>
                )
              })
            : Array.from({ length: 28 }, (_, index) => {
                const dayNum = index + 1
                const today = isTodayCell(dayNum)
                return (
                  <motion.div
                    key={`${view.year}-${view.monthKey}-${dayNum}`}
                    initial={reduceMotion ? false : { opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.1,
                      delay: reduceMotion ? 0 : index * 0.003,
                    }}
                    className={`flex min-h-[2.75rem] items-center justify-center rounded-lg border text-sm font-medium transition sm:min-h-[3rem] sm:text-base ${
                      today
                        ? 'border-accent bg-accent text-accent-contrast shadow-ring'
                        : 'border-hairline bg-paper/80 text-ink hover:border-accent/35 hover:bg-accent-soft/50'
                    }`}
                    role="gridcell"
                    aria-selected={today}
                  >
                    {dayNum}
                  </motion.div>
                )
              })}
        </div>
      </div>
    </section>
  )
}

export default MyCalendar
