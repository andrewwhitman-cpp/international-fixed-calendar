import { useState } from 'react'
import { SiteHeader } from './components/SiteHeader.jsx'
import About from './About.jsx'
import FAQs from './FAQs.jsx'
import DateConverter from './DateConverter.jsx'
import MyCalendar from './MyCalendar.jsx'
import { MyDate } from './MyDate.js'
import { monthKeyFromName } from './lib/myMonth.js'

function isGregorianLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
}

/** Progress copy under the IFC headline: Primus = days only; month 2+ = completed months + days in current month; year-end line without naming Addus. */
function ifcProgressLine(myDate) {
  const m = myDate.getMonth()
  const d = myDate.getDay()
  const y = myDate.getYear()
  if (m === 0) {
    const yearEndDays = isGregorianLeapYear(y) ? 2 : 1
    return `Year-end: day ${d} of ${yearEndDays}`
  }
  if (m === 1) {
    const dayNoun = d === 1 ? 'day' : 'days'
    return `${d} ${dayNoun} into the year`
  }
  const completedMonths = m - 1
  const monthNoun = completedMonths === 1 ? 'month' : 'months'
  const dayNoun = d === 1 ? 'day' : 'days'
  return `${completedMonths} ${monthNoun} and ${d} ${dayNoun} into the year`
}

function App() {
  const [page, setPage] = useState('Home')

  const now = new Date()
  const my_date = new MyDate(now.getFullYear(), now.getMonth(), now.getDate())

  const start = new Date(now.getFullYear(), 0, 0)
  const diff = now - start + (start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000
  const one_day = 1000 * 60 * 60 * 24
  const dayOfYear = Math.floor(diff / one_day)

  const conventional = now.toLocaleDateString(undefined, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
  const todayMonthKey = monthKeyFromName(my_date.getMonthName())

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader page={page} onNavigate={setPage} />

      <main className="mx-auto w-full max-w-layout flex-1 px-4 py-8 sm:px-6 lg:px-8">
        {page === 'About' && <About />}

        {page === 'FAQs' && <FAQs />}

        {page === 'Home' && (
          <div className="flex flex-col gap-8 lg:gap-10">
            <section className="planner-card planner-card-hover p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted">Today</p>
              <h1 className="mt-2 font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                Day {dayOfYear} of the year
              </h1>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                Conventional:{' '}
                <span className="font-medium text-ink">{conventional}</span>
              </p>
              <div className="mt-6 border-t border-hairline pt-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted">
                  International Fixed Calendar
                </p>
                <p className="mt-2 font-serif text-2xl text-accent sm:text-3xl">{my_date.getDate('full')}</p>
                <p className="mt-2 text-muted">{ifcProgressLine(my_date)}</p>
              </div>
            </section>

            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted">Month view</p>
              <MyCalendar
                monthName={my_date.getMonthName()}
                todayDay={my_date.getDay()}
                todayMonthKey={todayMonthKey}
                todayYear={my_date.getYear()}
              />
            </div>

            <DateConverter />
          </div>
        )}
      </main>
    </div>
  )
}

export default App
