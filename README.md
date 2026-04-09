# International Fixed Calendar

A small React site that explains and visualizes the [International Fixed Calendar](https://en.wikipedia.org/wiki/International_Fixed_Calendar) (IFC): thirteen identical 28-day months plus a short “year-end” period, with today’s date mapped from the conventional calendar.

## Features

- **Home** — Day-of-year headline, conventional date, IFC date, progress line, and a month grid for the current IFC month
- **Date converter** — Map between conventional and IFC dates
- **About** & **FAQs** — Context on the calendar and adoption
- **Theme** — Light/dark toggle (persisted)

## Stack

- [React](https://react.dev/) 18 · [Vite](https://vitejs.dev/) 5
- [Tailwind CSS](https://tailwindcss.com/) 3
- [Framer Motion](https://www.framer.com/motion/) for motion on supported UI

## Development

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Lint:

```bash
npm run lint
```

## Project layout

- `src/App.jsx` — Routing between Home, About, and FAQs
- `src/MyCalendar.jsx`, `src/MyDate.js`, `src/lib/myMonth.js` — IFC date logic and calendar UI
- `src/DateConverter.jsx` — Conversion UI
- `src/components/SiteHeader.jsx`, `ThemeToggle` — Navigation and theme
