import { Container, Typography } from '@mui/material';
import MyCalendar from './MyCalendar';
import DateConverter from './DateConverter'
import { MyDate } from './MyDate.js'

function App() {
	var now = new Date()
	var start = new Date(now.getFullYear(), 0, 0)
	var diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000)
	var one_day = 1000 * 60 * 60 * 24
	var day = Math.floor(diff / one_day)
	
	var date = Date()
	
	const my_day = (day - 1) % 28
	const my_month = Math.ceil(day / 28)
	const my_year = 2024
	const my_date = new MyDate(my_day, my_month, my_year)

	return (
	<Container>
		<Typography>
			Today is the 
			<Typography sx={{ fontWeight: 'bold' }}>{day}th</Typography> 
			day of the year.<br />
		</Typography>

		<br />

		<Typography>
			Standard calendar date = <Typography sx={{ fontWeight: 'bold' }}>{date}</Typography>
		</Typography>

		<br />

		<Typography>
			My calendar date<br />
			{day} / 28 = {day/28}<br />
			11 months and 15 days
			<Typography sx={{ fontWeight: 'bold' }}>
				{my_date.getDate('standard')}<br />
				{my_date.getDate('long')}<br />
			</Typography>
		</Typography>

		<br />

		<hr />

		<MyCalendar month={my_date.getMonth()} day={my_date.getDay()} />
		<DateConverter />

		<br />

		<hr />

		{/* <Typography>
			My calendar is based on every month having 28 days. 
			This allows each month to have a perfect 4 weeks, starting on Monday and ending on Sunday.
			With this structure, the year will have 13 months. 
			If we do the math...13 x 28 = {13 * 28} days...that leaves us with one extra day in most years.
			This will be New Year's Day at the beginning of the calendar. 
			On a leap year, we'll add another day at the end of the calendar called "leap day".
		</Typography> */}
	</Container>
	)
}

export default App
