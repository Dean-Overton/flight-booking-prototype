import { useEffect, useState } from 'react';
import FlightBookingStepper from './stepper';
import '../../App.css';

import { Typography, Paper, Box, Button, Stack } from '@mui/material';
import ExtrasTab from './extras-tab';
import SeatSelection from './seat-selection';
import Payment from './payment';
import { useLocation, useParams } from 'react-router-dom';

import HeaderImage from '../pageHeader.png';

const Booking = () => {
    const location = useLocation();
    const state = location.state;
    const flight = state[0];
    const [totalCost, setCost] = useState(375);
    const [progress, setProgress] = useState(0);
    const [seats, setSeats] = useState([]);
    
    useEffect(() => {
        // Check if flight is undefined, if so redirect to home
        
        if (state == undefined) {
            window.location.href = '/';
        }
    }, []);

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
        <>
        <img src={HeaderImage} alt="Background" style={{ width: '100%', height: '75%', position: 'absolute', top: 0, left: 0, zIndex: -1 }} />

        <div style={{position: 'absolute', top: 0, left:0, width:'100%'}}>            
        <Box 
            sx={{
                mx: {xs: 2, md: 20},
                mt: 3,
            }}
                >
        <Paper sx={{p:2, mx:'auto'}}>
            <Typography variant="h3" mb={2}>Booking Details</Typography>
            {progress !=2 && (
                <>
                <Typography variant="subtitle1">Current Flight: {state.departureCity} - {state.destinationCity}</Typography>
                <Typography variant="subtitle1">Total Cost: ${totalCost}</Typography>
                {progress!=2 && seats.length!=0 &&<Typography variant="subtitle1">Selected Seats: {seats.map(seat => (
                `${seat}, `
            ))}</Typography>}
                </>
            )}
            <FlightBookingStepper progress={progress}/>
            <Stack direction="row" mt={2} justifyContent="space-between" alignItems="center" spacing={2}>
                {progress != 0 ? <Button onClick={()=>back()} variant="contained" color="secondary">Back</Button> : <Box/>}
                {progress != 2 && <Button onClick={()=>next()} variant="contained" color="secondary">Next</Button>}
            </Stack>
            <Box sx={{mt:3}}>
                {progress == 0 && <ExtrasTab totalCost={totalCost} costSetCallback={setCost}/>}
                {progress == 1 && <SeatSelection numberOfPassengers={state.passengers} seatsSelectedCallback={setSeats} seatsSelectedValue={seats}/>}
                {progress == 2 && <Payment totalCost={totalCost} seats={seats}/>}
            </Box>
        </Paper>
        </Box>
        </div>
        </>
    );
}
export default Booking;