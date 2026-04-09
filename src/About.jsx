import { MyMonth } from './MyDate.js'
import { AboutBenefitsBody, AboutDifficultiesBody } from './AboutBenefitsText.jsx'
import { AboutAdoptionText } from './AboutAdoptionText.jsx'
import { AboutText } from './AboutText.jsx'

const MONTH_KEYS = Object.keys(MyMonth)
  .sort((a, b) => Number(a) - Number(b))
  .map(Number)

function About() {
  return (
    <article className="prose-planner mx-auto max-w-2xl">
      <h1 className="font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        About this calendar
      </h1>
      <p className="mt-6 whitespace-pre-line text-base leading-relaxed text-muted">{AboutText.trim()}</p>

      <h2 className="mt-10 font-serif text-xl font-semibold text-ink sm:text-2xl">
        Why adopt the IFC more widely?
      </h2>
      <p className="mt-4 whitespace-pre-line text-base leading-relaxed text-muted">{AboutAdoptionText.trim()}</p>

      <h2 className="mt-10 font-serif text-xl font-semibold text-ink sm:text-2xl">Why it helps</h2>
      <p className="mt-4 whitespace-pre-line text-base leading-relaxed text-muted">{AboutBenefitsBody.trim()}</p>

      <h2 className="mt-10 font-serif text-xl font-semibold text-ink sm:text-2xl">Why change is hard</h2>
      <p className="mt-4 whitespace-pre-line text-base leading-relaxed text-muted">{AboutDifficultiesBody.trim()}</p>

      <h2 className="mt-10 font-serif text-xl font-semibold text-ink sm:text-2xl">Months</h2>
      <ul className="mt-4 space-y-3 border-t border-hairline pt-2">
        {MONTH_KEYS.map((key) => {
          const label = MyMonth[key]
          const note =
            key === 0 ? " (New Year's Day and Leap Day)" : ' (Days 1–28)'
          return (
            <li
              key={key}
              className="flex flex-col gap-0.5 border-b border-hairline py-3 last:border-b-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
            >
              <span className="font-medium text-ink">
                Month {key}: {label}
              </span>
              <span className="text-sm text-muted">{note}</span>
            </li>
          )
        })}
      </ul>
    </article>
  )
}

export default About
