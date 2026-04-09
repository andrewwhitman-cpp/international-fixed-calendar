const FAQ_ITEMS = [
  {
    q: 'What is the International Fixed Calendar?',
    a: 'It is a year structure built from thirteen equal months of twenty-eight days each, plus one or two extra days at the end of the year so the calendar stays aligned with the solar year. The “regular” part of the year is a predictable four weeks per month.',
  },
  {
    q: 'Why thirteen months of twenty-eight days?',
    a: 'Twenty-eight days is exactly four full seven-day weeks, so each month fits a simple grid and repeats the same weekday pattern. Thirteen such months cover 364 days; the remaining day or two fall at year end in Addus, after the thirteenth month.',
  },
  {
    q: 'How long is a year, and how do leap years work?',
    a: 'A common year has 365 days: 364 from the thirteen 28-day months plus one year-end intercalary day (Year Day). A Gregorian leap year adds a second year-end day (Leap Day) so the year has 366 days. This site follows that same leap-year rule when placing those Addus days.',
  },
  {
    q: 'What is Addus, and what are Year Day and Leap Day?',
    a: 'Addus is the month for the year-end intercalary days: they come after Tredius 28 (the last day of the thirteenth month) and before Primus 1 of the next civil year—so the last days of December in the Gregorian calendar map here, for example. Year Day is always present; Leap Day appears only in leap years. They are not part of the thirteen 28-day months.',
  },
  {
    q: 'Why aren’t those days labeled with a weekday (Monday–Sunday)?',
    a: 'Those year-end days sit outside the repeating Sunday–Saturday weeks that make up each 28-day month. Labeling them with a weekday would break the rule that every month is exactly four full weeks.',
  },
  {
    q: 'How does the IFC relate to the Gregorian calendar?',
    a: 'Both track the same civil year and the same leap-year pattern. A given Gregorian date corresponds to exactly one place in the IFC for that year: you can think of it as mapping by “which day of the year” you are on.',
  },
  {
    q: 'Does every regular month start on the same weekday?',
    a: 'Yes. In this calendar, each 28-day month is shown starting on Sunday and ending on Saturday, so day 1 of a month is always a Sunday in the month grid.',
  },
  {
    q: 'Why might an IFC weekday label differ from my “conventional” weekday for the same civil date?',
    a: 'The weekday name shown for a day inside a 28-day month is determined only by its position in that month (for example, day 1 is Sunday). The Gregorian weekday for the same calendar date can differ unless they happen to align.',
  },
  {
    q: 'Will my birthday always fall on the same weekday?',
    a: 'It depends what you keep fixed. The same Gregorian birthday (for example, April 9 each year) already moves across weekdays on the civil calendar you use today. Mapped into the IFC, that date can also sit in a different IFC month or day number from year to year, so its IFC weekday can change too. If you instead imagined celebrating the same IFC date every year (such as “always Quartus 15”), that slot would keep the same IFC weekday in the month grid—but it would no longer match one Gregorian date every year. Neither approach is “more correct”; they answer different questions.',
  },
  {
    q: 'Would this kind of calendar change when I observe holidays, birthdays, or anniversaries?',
    a: 'In real life, communities define observances by the rules they already use—often Gregorian dates, lunar calendars, or faith-specific calendars. Exploring the IFC does not erase or replace those; it simply offers another lens on the same days. If a holiday is “the fourth Thursday in November,” that rule stays what it is; only the parallel IFC label would differ.',
  },
  {
    q: 'Does it mean anything bad if my special date looks awkward in this system?',
    a: 'No. Anniversaries and birthdays matter because of memory and meaning, not because they land neatly on a particular grid. Seeing an unfamiliar month name or weekday label here does not diminish the importance of the day in your life—it only reflects a different way of carving up the year.',
  },
  {
    q: 'Is this the same as historical “calendar reform” or Cotsworth-style proposals?',
    a: 'It belongs to the same broad family of thirteen-month, equal-quarter ideas. This app uses its own month names and is a structural illustration, not an official or adopted civil calendar.',
  },
]

function ChevronDownIcon(props) {
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
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

function FAQs() {
  return (
    <article className="prose-planner mx-auto max-w-2xl" aria-labelledby="faqs-heading">
      <h1 id="faqs-heading" className="font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        Frequently asked questions
      </h1>
      <p className="mt-4 text-base leading-relaxed text-muted">
        Short answers about the International Fixed Calendar—often out of curiosity, with no need to change how you already track dates. For a fuller description and the month list, open{' '}
        <span className="font-medium text-ink">About</span> from the navigation.
      </p>

      <div className="mt-8 space-y-3">
        {FAQ_ITEMS.map((item) => (
          <details
            key={item.q}
            className="group rounded-card border border-hairline bg-paper shadow-card transition-shadow open:shadow-md"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3.5 font-medium text-ink marker:content-none [&::-webkit-details-marker]:hidden">
              <span className="min-w-0 pr-2">{item.q}</span>
              <ChevronDownIcon className="h-5 w-5 shrink-0 text-muted transition-transform duration-200 group-open:rotate-180" />
            </summary>
            <div className="border-t border-hairline px-4 pb-4 pt-1 text-sm leading-relaxed text-muted">{item.a}</div>
          </details>
        ))}
      </div>
    </article>
  )
}

export default FAQs
