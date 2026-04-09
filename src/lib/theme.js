/**
 * Persisted color theme. Storage key must stay in sync with the inline script in index.html.
 */
export const THEME_STORAGE_KEY = 'my-calendar-theme'

/** @returns {'light' | 'dark' | null} */
export function getStoredTheme() {
  if (typeof localStorage === 'undefined') return null
  try {
    const v = localStorage.getItem(THEME_STORAGE_KEY)
    if (v === 'light' || v === 'dark') return v
  } catch {
    /* ignore */
  }
  return null
}

/**
 * First visit: follow prefers-color-scheme. Brand default when unknown is light (paper).
 */
export function resolveInitialTheme() {
  const stored = getStoredTheme()
  if (stored) return stored
  if (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    return 'dark'
  }
  return 'light'
}

/** @param {'light' | 'dark'} theme */
export function applyTheme(theme) {
  if (theme !== 'light' && theme !== 'dark') return
  document.documentElement.dataset.theme = theme
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme)
  } catch {
    /* ignore */
  }
}

/** @returns {'light' | 'dark'} */
export function getCurrentTheme() {
  const t = document.documentElement.dataset.theme
  if (t === 'light' || t === 'dark') return t
  return resolveInitialTheme()
}

export function toggleTheme() {
  applyTheme(getCurrentTheme() === 'dark' ? 'light' : 'dark')
}
