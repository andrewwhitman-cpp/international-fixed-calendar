import { useState } from 'react'
import { SiteHeader } from './components/SiteHeader.jsx'
import About from './About.jsx'
import DateConverter from './DateConverter.jsx'
import MyCalendar from './MyCalendar.jsx'
import { MyDate } from './MyDate.js'
import { monthKeyFromName } from './lib/myMonth.js'

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
                  Modern calendar
                </p>
                <p className="mt-2 font-serif text-2xl text-accent sm:text-3xl">{my_date.getDate('full')}</p>
                <p className="mt-2 text-muted">
                  {my_date.getMonth()} months and {my_date.getDay()} days into the structure
                </p>
              </div>
            </section>

            <div className="space-y-3">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted">Month view</p>
                  <p className="mt-1 font-serif text-xl font-semibold text-ink sm:text-2xl">
                    Four perfect weeks per month
                  </p>
                </div>
              </div>
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
