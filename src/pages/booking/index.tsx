import { useEffect, useState } from 'react';
import FlightBookingStepper from './stepper';
import '../../App.css';

import { Typography, Paper, Box, Button, Stack } from '@mui/material';
import ExtrasTab from './extras-tab';
import SeatSelection from './seat-selection';
import Payment from './payment';

import { getDictionaryFromCookie } from '../functions/getFlightState';

const Booking = () => {
    const flight = getDictionaryFromCookie('flight');

    const [flightBookingDetails, setFlightBookingDetails] = useState(flight);
    
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Check if flight is undefined, if so redirect to home
        
        if (flight == null) {
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
                <Typography variant="subtitle1">Current Flight: {flight.departureCity} - {flight.destinationCity}</Typography>
                <Typography variant="subtitle1">Total Cost: ${flightBookingDetails['cost']}</Typography>
                {progress!=2 && flightBookingDetails['seats'] != null && 
                    <Typography variant="subtitle1">Selected Seats: {
                        flightBookingDetails['seats'].map((seat: string) => (
                        `${seat}, `))}
                    </Typography>
                }
                </>
            )}
            <FlightBookingStepper progress={progress}/>
            <Stack direction="row" mt={2} justifyContent="space-between" alignItems="center" spacing={2}>
                {progress != 0 ? <Button onClick={()=>back()} variant="contained" color="secondary">Back</Button> : <Box/>}
                {progress != 2 && <Button onClick={()=>next()} variant="contained" color="secondary">Next</Button>}
            </Stack>
            <Box sx={{mt:3}}>
                {progress == 0 && <ExtrasTab flightDetails={flightBookingDetails} flightSetCallback={setFlightBookingDetails}/>}
                {progress == 1 && <SeatSelection numberOfPassengers={flight.passengers} flightDetails={flightBookingDetails} flightSetCallback={setFlightBookingDetails}/>}
                {progress == 2 && <Payment flightDetails={flightBookingDetails} flightSetCallback={setFlightBookingDetails}/>}
            </Box>
        </Paper>
        </Box>
        </>
    );
}
export default Booking;