import { useState } from 'react'
import { Container, Typography, Paper, Box } from '@mui/material';
import BasicMenu from './BasicMenu'
import About from './About'
import DateConverter from './DateConverter'
import MyCalendar from './MyCalendar';
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
		<Container maxWidth="lg">
			<BasicMenu f={(t) => setPage(t)} />

			{page === 'About' && <About />}

			{page === 'Home' && (
				<Box sx={{ mt: 4 }}>
					<Paper elevation={3} sx={{ p: 3, mb: 4, borderRadius: 2 }}>
						<Typography variant="h6" gutterBottom>
							Today is the <Box component="span" sx={{ fontWeight: 'bold', color: 'primary.main' }}>{day}th</Box> day of the year
						</Typography>

						<Typography variant="body1" gutterBottom>
							Conventional calendar: <Box component="span" sx={{ fontWeight: 'bold' }}>{date}</Box>
						</Typography>

						<Typography variant="body1">
							Modern calendar:
							<Box sx={{ mt: 1 }}>
								<Typography variant="h6" color="primary.main">
									{my_date.getDate('full')}
								</Typography>
								<Typography variant="subtitle1">
									{my_date.getMonth()} months and {my_date.getDay()} days
								</Typography>
							</Box>
						</Typography>
					</Paper>

					<MyCalendar 
						month={my_date.getMonthName()} 
						day={my_date.getDay()} 
						weekday={my_date.getWeekday()} 
					/>

					<Paper elevation={3} sx={{ p: 3, mt: 4, borderRadius: 2 }}>
						<DateConverter />
					</Paper>
				</Box>
			)}
		</Container>
	)
}

export default App
