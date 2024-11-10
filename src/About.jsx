import { Typography, List, ListItem, ListItemText } from "@mui/material"
import { MyMonth } from './MyDate.js'

function About() {
    const monthNames = []

    for (let i = 0; i < Object.keys(MyMonth).length; i++) {
        monthNames.push(
            <ListItem key={i}>
                <ListItemText primary={
                    "Month" + ' ' + i + ' : ' +
                    MyMonth[i] +
                    ((i == 0) ?
                        " (New Year's Day and Leap Day)" :
                        " (Days 1-28)")
                } />
            </ListItem>
        );
    }

    return (
        <>
            <Typography>
                My Calendar Months:
            </Typography>

            <List>
                {monthNames}
            </List>
        </>
    )
}

export default About
