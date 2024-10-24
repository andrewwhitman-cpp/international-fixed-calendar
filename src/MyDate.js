const MyMonth = Object.freeze({
    0: 'Nullus',
    1: 'Primus',
    2: 'Secondus',
    3: 'Tertius',
    4: 'Quartus',
    5: 'Quintus',
    6: 'Sextember',
    7: 'September',
    8: 'October',
    9: 'November',
    10: 'December',
    11: 'Undecember',
    12: 'Deuodecember',
    13: 'Tredecember'
})

const MyWeekday = Object.freeze({
    0: 'Monday',
    1: 'Tuesday',
    2: 'Wednesday',
    3: 'Thursday',
    4: 'Friday',
    5: 'Saturday',
    6: 'Sunday'
})

export class MyDate {
    // Constructor
    constructor(year, month, day) {
        var now = new Date(year, month, day, 0, 0, 0, 0)
        var start = new Date(now.getFullYear(), 0, 0)
        var diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000)
        var one_day = 1000 * 60 * 60 * 24
        var day = Math.floor(diff / one_day)

        const my_day = day % 28
        const my_month = Math.ceil(day / 28)

        this.day = my_day;
        this.month = my_month;
        this.year = year;
    }
    
    // Method to get day
    getDay() { return this.day }
    
    // Method to get weekday name
    getWeekday() { return Object.values(MyWeekday)[this.day] }
    
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
            return Object.values(MyWeekday)[(this.day - 1) % 7] + ' ' + 
                    Object.values(MyMonth)[this.month] + ' ' + 
                    this.day + ' ' + 
                    this.year
        } else {
            return ''
        }
    }
}
