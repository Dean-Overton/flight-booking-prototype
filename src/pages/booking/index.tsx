import { useState } from 'react';
import FlightBookingStepper from './stepper';
import '../../App.css';

import { Typography, Paper, Box, Button, Stack } from '@mui/material';
import ExtrasTab from './extras-tab';
import SeatSelection from './seat-selection';
import Payment from './payment';
import { useParams } from 'react-router-dom';

const Booking = () => {
    const {source, destination} = useParams();
    const [totalCost, setCost] = useState(375);
    const [progress, setProgress] = useState(0);
    const [seats, setSeats] = useState([]);

    function back() {
        if (progress > 0) {
            setProgress(progress-1)
        }
    }
    function next() {
        if (progress < 2) {
            setProgress(progress+1)
        }
    }

    return (
        <Paper sx={{p:2, mx:'auto', width:'80%'}}>
            <Typography variant="h3">Booking Details</Typography>
            <Typography variant="subtitle1">Current Flight: {source} - {destination}</Typography>
            <Typography variant="subtitle1">Total Cost: ${totalCost}</Typography>
            <FlightBookingStepper progress={progress}/>
            {seats.length!=0 &&<Typography variant="subtitle1">Selected Seats: {seats.map(seat => (
                `${seat}, `
            ))}</Typography>}
            <Stack direction="row" mt={2} justifyContent="space-between" alignItems="center" spacing={2}>
                <Button onClick={()=>back()} variant="contained" color="secondary">Back</Button>
                <Button onClick={()=>next()} variant="contained" color="secondary">Next</Button>
            </Stack>
            <Box sx={{mt:3}}>
                {progress == 0 && <ExtrasTab totalCost={totalCost} costSetCallback={setCost}/>}
                {progress == 1 && <SeatSelection numberOfPassengers={2} seatsSelectedCallback={setSeats}/>}
                {progress == 2 && <Payment/>}
            </Box>
        </Paper>
    );
}
export default Booking;