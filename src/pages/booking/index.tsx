import { useState } from 'react';
import FlightBookingStepper from './stepper';
import '../../App.css';

import { Typography, Paper, Box } from '@mui/material';
import ExtrasTab from './extras-tab';

const Booking = () => {
    const [progress, setProgress] = useState(0);
    return (
        <Paper>
            <Typography variant="h3">Booking Details</Typography>
            <Typography variant="subtitle1">Current Flight</Typography>
            <FlightBookingStepper progress={progress}/>
            <Box>
                {progress == 0 && <ExtrasTab/>}
            </Box>
        </Paper>
    );
}
export default Booking;