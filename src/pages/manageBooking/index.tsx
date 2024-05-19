import { useState, useEffect } from 'react';
import flightLogo from '/flightlogo.svg';
import '../../App.css';
import '@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css';
import 'react-calendar/dist/Calendar.css';

import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { Box, Button, Checkbox, Divider, FormControlLabel, Grid, TextField, Typography } from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';

import FlightReviewPanel from './flightReview';

const ManageBooking = () => {
    const [booking, showBooking] = useState(false);
    const [bookingNumber, setBookingNumber] = useState('');
    useEffect(() => {
        if (bookingNumber !== '') {
            showBooking(true);
        }
    }, [bookingNumber]);
    return (
        <>
                <a href="https://flightdreamair-40r1--5173--7dbe22a9.local-credentialless.webcontainer.io/">
                    <img src={flightLogo} className="logo" alt="FlightDreamAir logo" />
                </a>
                {booking == false ? (
                <Paper
                    elevation={5}
                    sx={{
                        borderRadius: 3,
                        p: 4,
                        mx: 20,
                    }}
                >
                    <Typography variant='h3'>Manage Booking</Typography>
                    <Typography variant='subtitle1'>Enter your booking information to find your flight</Typography>
                    <Stack sx={{mx:10}} spacing={2}>
                        <TextField
                            id="outlined-basic"
                            label="Booking Number"
                            placeholder="#FDA456"
                            variant="outlined"
                            fullWidth
                        />
                        <TextField
                            id="outlined-basic"
                            label="Last Name"
                            placeholder="Doe"
                            variant="outlined"
                            fullWidth
                        />
                        <FormControlLabel
                            control={<Checkbox defaultChecked />}
                            label={<Typography>I agree to the <a href='/'>Terms and Conditions</a></Typography>}
                        />
                        <Button 
                            variant="contained" 
                            endIcon={<SearchIcon/>}
                            onClick={() => setBookingNumber('FDA456')}
                            fullWidth>
                            Find Booking
                        </Button>
                    </Stack>
                </Paper>
                ):(
                    <FlightReviewPanel/>
                )}
        </>
      );
};
export default ManageBooking;