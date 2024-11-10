import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import { Typography } from '@mui/material';

function MyCalendar(props) {
	const days = [
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
		'Sunday'
	]

	function color(i, j) {
		return i == j ? 'green' : 'black'
	}

	function bgColor(i, j) {
		return i == j ? 'beige' : 'white'
	}

	const Item = styled(Paper)(({ theme }) => ({
		backgroundColor: '#fff',
		...theme.typography.body2,
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary,
		...theme.applyStyles('dark', {
			backgroundColor: '#1A2027',
		}),
	}));

	return (
		<>
			{/* Month Title */}
			<Typography>
				{props.month}
			</Typography>

			{/* Weekday Names */}
			<Box sx={{ flexGrow: 1, m: 2 }}>
				<Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 7, sm: 7, md: 7 }}>
					{Array.from(days).map((_, index) => (
						<Grid key={index} size={{ xs: 1, sm: 1, md: 1 }}>
							<Item sx={{ color: color(props.day % 7, index + 1), bgcolor: bgColor(props.day % 7, index + 1) }}>{days[index]}</Item>
						</Grid>
					))}
				</Grid>
			</Box>

			{/* Day Numbers */}
			<Box sx={{ flexGrow: 1, m: 2 }}>
				<Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 7, sm: 7, md: 7 }}>
					{Array.from(Array(28)).map((_, index) => (
						<Grid key={index} size={{ xs: 1, sm: 1, md: 1 }}>
							<Item sx={{ color: color(props.day, index + 1), bgcolor: bgColor(props.day, index + 1) }}>{index + 1}</Item>
						</Grid>
					))}
				</Grid>
			</Box>
		</>
	)
}

export default MyCalendar
