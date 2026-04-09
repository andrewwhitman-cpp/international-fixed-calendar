import { useState } from "react"
import { Typography } from "@mui/material"
import BasicDateField from "./BasicDateField"
import { MyDate } from "./MyDate"

const date_placeholder = new MyDate(2001, 1, 1)

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
        Enter standard date:
    </Typography>
    <BasicDateField f={(d) => handleUpdateUserDate(d)} />
    <Typography>
        <br />
        New Date:<br />
        {newDate.getMonth()}/{newDate.getDay()}/{newDate.getYear()}<br />
        {newDate.getDate('full')}
    </Typography>
	</>
	)
}

export default DateConverter
