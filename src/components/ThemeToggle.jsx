import { useCallback, useState } from 'react'
import { applyTheme, getCurrentTheme } from '../lib/theme.js'

export function ThemeToggle() {
  const [theme, setTheme] = useState(getCurrentTheme)

  const onClick = useCallback(() => {
    const next = theme === 'dark' ? 'light' : 'dark'
    applyTheme(next)
    setTheme(next)
  }, [theme])

  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      className="theme-toggle"
      onClick={onClick}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? 'Dark' : 'Light'}
    </button>
  )
}
