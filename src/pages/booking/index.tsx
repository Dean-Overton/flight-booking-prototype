import FlightBookingStepper from './stepper';

import { Typography, Paper } from '@mui/material';

const Booking = () => {
    return (
        <Paper>
            <Typography variant="h3">Booking Details</Typography>
            <FlightBookingStepper/>
        </Paper>
    );
}
export default Booking;