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
    constructor(day, month, year) {
        this.day = day;
        this.month = month;
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
