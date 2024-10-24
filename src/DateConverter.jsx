import { useEffect, useState } from "react"
import { Typography } from "@mui/material"
import BasicDateField from "./BasicDateField"

function DateConverter() {
    const [userDay, setUserDay] = useState('')
    const [userMonth, setUserMonth] = useState('')
    const [userYear, setUserYear] = useState('')
    const [newDay, setNewDay] = useState('')
    const [newMonth, setNewMonth] = useState('')

    function handleUpdateUserDate(d) {
        const date_string = new String(d)
        const date = new Date(date_string)
        setUserDay(date.getDate().toString())
        setUserMonth((date.getMonth() + 1).toString())
        setUserYear(date.getFullYear().toString())
    }
    
	var my_month_names = {0: 'Nullus',
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
                        12: 'Duodecember',
                        13: 'Tredecember'}
    
    useEffect(() => {
        var userDate = new Date(userMonth + "-" + userDay + "-" + userYear)
        var userDateYear = new Date(userDate.getFullYear(), 0, 0)
        var diff = (userDate - userDateYear) + ((userDateYear.getTimezoneOffset() - userDate.getTimezoneOffset()) * 60 * 1000)
        var one_day = 1000 * 60 * 60 * 24
        var day = Math.floor(diff / one_day)
        setNewDay((day % 28).toString())
        setNewMonth(Math.ceil(day / 28).toString())
        console.log(newDay, newMonth, userYear)
    }, [userDay, userMonth, userYear])

	return (
	<>
    <Typography>
        Enter your standard birthday to find your new birthday:
    </Typography>
    <BasicDateField f={(d) => handleUpdateUserDate(d)} />
    <Typography>
        Your new birthday:<br />
        {newMonth}/{newDay}/{userYear}<br />
        The {newDay}th of {my_month_names[newMonth]}
    </Typography>
	</>
	)
}

export default DateConverter
