import { useState } from "react"
import { Typography } from "@mui/material"
import BasicDateField from "./BasicDateField"
import { MyDate } from "./MyDate"

const date_placeholder = new MyDate(2000, 1, 1)

function DateConverter() {
    const [newDate, setNewDate] = useState(date_placeholder)

    function handleUpdateUserDate(d) {
        const date_string = new String(d)
        const date = new Date(date_string)
        const new_date = new MyDate(date.getFullYear(), date.getMonth(), date.getDate())
        setNewDate(new_date)
    }
    
	return (
	<>
    <Typography>
        Enter your standard birthday to find your new birthday:
    </Typography>
    <BasicDateField f={(d) => handleUpdateUserDate(d)} />
    <Typography>
        Your new birthday:<br />
        {newDate.getMonth()}/{newDate.getDay()}/{newDate.getYear()}<br />
        The {newDate.getDay()}th of {newDate.getMonthName()}
    </Typography>
	</>
	)
}

export default DateConverter
