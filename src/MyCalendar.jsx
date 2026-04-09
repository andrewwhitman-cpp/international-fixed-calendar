import * as React from 'react';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Paper, Typography, IconButton } from '@mui/material';
import Grid from '@mui/material/Grid2';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function MyCalendar(props) {
	const [currentMonth, setCurrentMonth] = useState(props.month);
	const [currentDay, setCurrentDay] = useState(props.day);

	const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

	const Item = styled(Paper)(({ theme }) => ({
		backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
		...theme.typography.body2,
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary,
		transition: 'all 0.3s ease',
		cursor: 'pointer',
		'&:hover': {
			backgroundColor: theme.palette.mode === 'dark' ? '#2C3E50' : '#E8F5E9',
			transform: 'scale(1.02)',
			boxShadow: theme.shadows[4],
		},
	}));

	const MonthHeader = styled(Box)(({ theme }) => ({
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: theme.spacing(2),
		padding: theme.spacing(1),
		borderRadius: theme.shape.borderRadius,
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.primary.contrastText,
	}));

	const isCurrentDay = (index) => index + 1 === currentDay;

	const handlePrevMonth = () => {
		// Add logic for previous month
		console.log('Previous month');
	};

	const handleNextMonth = () => {
		// Add logic for next month
		console.log('Next month');
	};

	return (
		<Box sx={{ maxWidth: 800, margin: 'auto', p: 3 }}>
			<MonthHeader>
				<IconButton onClick={handlePrevMonth} sx={{ color: 'inherit' }}>
					<ChevronLeftIcon />
				</IconButton>
				<Typography variant="h5" sx={{ fontWeight: 'bold' }}>
					{currentMonth}
				</Typography>
				<IconButton onClick={handleNextMonth} sx={{ color: 'inherit' }}>
					<ChevronRightIcon />
				</IconButton>
			</MonthHeader>

			{/* Weekday Names */}
			<Box sx={{ mb: 2 }}>
				<Grid container spacing={1}>
					{days.map((day, index) => (
						<Grid xs={1.7} key={index}>
							<Typography 
								variant="subtitle2" 
								sx={{ 
									fontWeight: 'bold',
									color: 'primary.main',
									textAlign: 'center'
								}}
							>
								{day}
							</Typography>
						</Grid>
					))}
				</Grid>
			</Box>

			{/* Calendar Grid */}
			<Box>
				<Grid container spacing={1}>
					{Array.from(Array(28)).map((_, index) => (
						<Grid xs={1.7} key={index}>
							<Item
								elevation={isCurrentDay(index) ? 8 : 1}
								sx={{
									bgcolor: isCurrentDay(index) ? 'primary.light' : 'background.paper',
									color: isCurrentDay(index) ? 'primary.main' : 'text.primary',
									fontWeight: isCurrentDay(index) ? 'bold' : 'normal',
								}}
							>
								{index + 1}
							</Item>
						</Grid>
					))}
				</Grid>
			</Box>
		</Box>
	);
}

export default MyCalendar;
