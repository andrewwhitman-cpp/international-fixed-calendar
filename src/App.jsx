import { useState } from 'react'
import { Container, Typography } from '@mui/material';
import BasicMenu from './BasicMenu'
import About from './About'
import DateConverter from './DateConverter'
// import MyCalendar from './MyCalendar';
import { MyDate } from './MyDate.js'

function App() {
	const [page, setPage] = useState('Home')

	var now = new Date()
	var start = new Date(now.getFullYear(), 0, 0)
	var diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000)
	var one_day = 1000 * 60 * 60 * 24
	var day = Math.floor(diff / one_day)

	const date = Date()

	const my_date = new MyDate(now.getFullYear(), now.getMonth(), now.getDate())

	return (
		<Container >

			<BasicMenu f={(t) => setPage(t)} />

			{page == 'About' && <About />}

			{page == 'Home' && <>

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
			</>}

		</Container>
	)
}

export default App
