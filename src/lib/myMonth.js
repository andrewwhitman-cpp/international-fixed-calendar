import { MyMonth } from '../MyDate.js'

export const MONTH_KEYS = Object.keys(MyMonth)
  .sort((a, b) => Number(a) - Number(b))
  .map(Number)

/** @param {string} name */
export function monthKeyFromName(name) {
  const k = Object.keys(MyMonth).find((key) => MyMonth[key] === name)
  return k != null ? Number(k) : MONTH_KEYS[0]
}
