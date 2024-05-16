import { useState, useEffect } from 'react';
import flightLogo from '/flightlogo.svg';
import '../../App.css';
import '@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css';
import 'react-calendar/dist/Calendar.css';

import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { Box, Button, Checkbox, Divider, FormControlLabel, Grid, TextField, Typography } from '@mui/material';

import HeaderImage from '../pageHeader.png';
import SearchIcon from '@mui/icons-material/Search';

import DeleteIcon from '@mui/icons-material/Delete';

const ManageBooking = () => {
    const [booking, showBooking] = useState(false);
    const [bookingNumber, setBookingNumber] = useState('hbh182');
    useEffect(() => {
        if (bookingNumber !== '') {
            showBooking(true);
        }
    }, [bookingNumber]);
    return (
        <>
            <img src={HeaderImage} alt="Background" style={{ width: '100%', height: '75%', position: 'absolute', top: 0, left: 0, zIndex: -1 }} />

            <div style={{position: 'absolute', top: 0, left:0, width:'100%'}}>            
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
                            fullWidth>
                            Find Booking
                        </Button>
                    </Stack>
                </Paper>
                ):(
                    <Paper
                        elevation={5}
                        sx={{
                            borderRadius: 3,
                            p: 2,
                            mx: { xs: 2, md: 20 },
                            mb: 5
                        }}
                        >
                        <Typography variant='subtitle1'>Confirmation Number: #{bookingNumber}</Typography>
                        <Box sx={{ p: 2, border: '1px dashed grey' }}>
                            <Typography variant='h5'>Flight Information</Typography>
                            <Divider />
                            <Grid container spacing={2} mb={3}>
                                <Grid item xs={3}>
                                    <Typography variant='subtitle2'>Length</Typography>
                                    <Typography variant='body1'>6 hr</Typography>
                                </Grid>

                                <Grid item xs={3}>
                                    <Typography variant='subtitle2'>Time</Typography>
                                    <Typography variant='body1'>12:00 - 16:00</Typography>
                                </Grid>
                                <Grid item xs={3}>
                                    <Typography variant='subtitle2'>Departure</Typography>
                                    <Typography variant='body1'>JFK</Typography>
                                </Grid>
                                <Grid item xs={3}>
                                    <Typography variant='subtitle2'>Arrival</Typography>
                                    <Typography variant='body1'>LAX</Typography>
                                </Grid>
                            </Grid>
                            <Divider/>
                            <Typography variant='h5'>Passenger Information</Typography>
                            <Grid container spacing={2} mb={3}>
                                <Grid item xs={3}>
                                    <Typography variant='subtitle2'>Name:</Typography>
                                    <Typography variant='body1'>John Doe</Typography>
                                    <Typography variant='subtitle2'>Seat:</Typography>
                                    <Typography variant='body1'>C6</Typography>
                                </Grid>
                                <Grid item xs={3}>
                                    <Typography variant='subtitle2'>Name</Typography>
                                    <Typography variant='body1'>Kimal Ray</Typography>
                                    <Typography variant='subtitle2'>Seat:</Typography>
                                    <Typography variant='body1'>D6</Typography>
                                </Grid>
                            </Grid>
                            <Divider/>
                            <Typography variant='h6'>Insurance: Included</Typography>
                            <Typography variant='h6'>In-flight Food: Included</Typography>
                            <Typography variant='h6'>In-flight Entertainment: Included</Typography>
                            <Typography variant='h6'>Total: $500</Typography>
                            <Divider/>
                            <Stack 
                                direction='row' 
                                spacing={5}
                                justifyContent="space-around"
                                alignItems="center"
                                px={3}
                                py={2}
                                >
                                <Button variant="contained" color='secondary' startIcon={<DeleteIcon/>}>Cancel Booking</Button>
                                <Button variant="contained" color='primary'>Check-in</Button>
                            </Stack>
                        </Box>
                    </Paper>
                )}
            </div>
        </>
      );
};
export default ManageBooking;