export const MyMonth = Object.freeze({
    0: 'Addus',
    1: 'Primus',
    2: 'Secondus',
    3: 'Tertius',
    4: 'Quartus',
    5: 'Quintus',
    6: 'Sectimus',
    7: 'Septimus',
    8: 'Octavus',
    9: 'Nonus',
    10: 'Decimus',
    11: 'Unimus',
    12: 'Duodius',
    13: 'Tredius'
})

/** Sunday = 0 … Saturday = 6 — matches IFC months starting on Sunday (same as the month grid). */
const MyWeekday = Object.freeze({
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
})

export class MyDate {
    // Constructor
    constructor(year, month, day) {
        var now = new Date(year, month, day, 0, 0, 0, 0)
        var start = new Date(now.getFullYear(), 0, 0)
        var diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000)
        var one_day = 1000 * 60 * 60 * 24
        var dayOfYear = Math.floor(diff / one_day)

        var my_day = 0
        var my_month = 0;
        if (dayOfYear <= 28 * 13) {
            // regular 1-28 date
            my_month = Math.ceil(dayOfYear / 28)
            my_day = dayOfYear % 28 == 0 ? 28 : dayOfYear % 28
        } else {
            my_month = 0
            my_day = dayOfYear % (28 * 13)
        }


        this.day = my_day;
        this.month = my_month;
        this.year = year;
    }
    
    // Method to get day
    getDay() { return this.day }
    
    // Method to get weekday name (day 1–28 within a 28-day month; week starts Sunday)
    getWeekday() {
        return Object.values(MyWeekday)[(this.day - 1) % 7]
    }
    
    // Method to get month
    getMonth() { return this.month }
    
    // Method to get month name
    getMonthName() { return Object.values(MyMonth)[this.month] }
    
    // Method to get year
    getYear() { return this.year }

    // Method to get date
    getDate(format) {
        if (format == 'standard') {
            return this.month + '/' + this.day + '/' + this.year
        } else if (format == 'long') {
            return this.day + 'th of ' + Object.values(MyMonth)[this.month] + ' ' + this.year
        } else if (format == 'full') {
            if (this.month == 0) {
                return Object.values(MyMonth)[this.month] + ' ' + 
                        this.day + ' ' + 
                        this.year
            } else {
                return Object.values(MyWeekday)[(this.day - 1) % 7] + ' ' + 
                        Object.values(MyMonth)[this.month] + ' ' + 
                        this.day + ' ' + 
                        this.year
            }
        } else {
            return ''
        }
    }
}
