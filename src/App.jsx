import { Typography } from '@mui/material';
import MyCalendar from './MyCalendar';

function App() {
	var now = new Date()
	var start = new Date(now.getFullYear(), 0, 0)
	var diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000)
	var one_day = 1000 * 60 * 60 * 24
	var day = Math.floor(diff / one_day)

	var date = Date()

	var my_month = Math.ceil(day / 28).toString()
	var my_day = (day % 28).toString()
	var my_year = "2024"

	return (
	<>
		<Typography>
			Today is the <Typography sx={{ fontWeight: 'bold' }}>{day}th</Typography> day of the year.
		</Typography>

		<br />

		<Typography>
			Standard calendar date = <Typography sx={{ fontWeight: 'bold' }}>{date}</Typography>
		</Typography>

		<br />

		<Typography>
			My calendar date<br />
			295 / 28 = {295/28}<br />
			11 months and 15 days
			<Typography sx={{ fontWeight: 'bold' }}>
				{my_month}/{my_day}/{my_year}
			</Typography>
		</Typography>

		<hr />

		<Typography>
			My calendar is based on every month having 28 days. 
			This allows each month to have a perfect 4 weeks, starting on Monday and ending on Sunday.
			With this structure, the year will have 13 months. 
			If we do the math...13 x 28 = {13 * 28} days...that leaves us with one extra day in most years.
			This will be New Year's Day at the beginning of the calendar. 
			On a leap year, we'll add another day at the end of the calendar called "leap day".
		</Typography>
	</>
	)
}

export default App
