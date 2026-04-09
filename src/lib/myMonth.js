import { MyMonth } from '../MyDate.js'

export const MONTH_KEYS = Object.keys(MyMonth)
  .sort((a, b) => Number(a) - Number(b))
  .map(Number)

/** Civil-year order for month navigation: Primus … Tredius, then Addus (year-end). */
export const MONTH_NAV_ORDER = [...MONTH_KEYS.filter((k) => k !== 0), 0]

/** @param {string} name */
export function monthKeyFromName(name) {
  const k = Object.keys(MyMonth).find((key) => MyMonth[key] === name)
  return k != null ? Number(k) : 1
}
