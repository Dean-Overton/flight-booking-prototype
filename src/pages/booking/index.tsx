import FlightBookingStepper from './stepper';
import '../../App.css';

import { Typography, Paper } from '@mui/material';

const Booking = () => {
    return (
        <Paper>
            <Typography variant="h3">Booking Details</Typography>
            <FlightBookingStepper progress={2}/>
        </Paper>
    );
}
export default Booking;