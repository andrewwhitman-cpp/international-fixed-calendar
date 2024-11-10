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

	const date = Date()

	const my_date = new MyDate(now.getFullYear(), now.getMonth(), now.getDate())

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
			{/* {day} / 28 = {day/28}<br /> */}
			{my_date.getMonth()} months and {my_date.getDay()} days
			<Typography sx={{ fontWeight: 'bold' }}>
				{my_date.getDate('standard')}<br />
				{my_date.getDate('full')}<br />
			</Typography>
		</Typography>

		<br />

		<hr />

		{/* <MyCalendar month={my_date.getMonthName()} day={my_date.getDay()} weekday={my_date.getWeekday()} /> */}
		<DateConverter />

		<br />

		<hr />
	</Container>
	)
}

export default App
