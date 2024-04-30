import { useState } from 'react';
import FlightBookingStepper from './stepper';
import '../../App.css';

import { Typography, Paper, Box } from '@mui/material';
import ExtrasTab from './extras-tab';
import SeatSelection from './seat-selection';

const Booking = () => {
    const [progress, setProgress] = useState(0);
    return (
        <Paper sx={{p:2}}>
            <Typography variant="h3">Booking Details</Typography>
            <Typography variant="subtitle1">Current Flight</Typography>
            <FlightBookingStepper progress={progress}/>
            <Box sx={{mt:3}}>
                {progress == 0 && <ExtrasTab/>}
                {progress == 1 && <SeatSelection numberOfPassengers={2}/>}
            </Box>
        </Paper>
    );
}
export default Booking;