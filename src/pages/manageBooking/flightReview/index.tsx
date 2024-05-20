import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { getDictionaryFromCookie, saveDictionaryAsCookie } from '../../functions/getFlightState';

// MUI COMPONENTS
import { Box, Button, Divider, Grid, Paper, Stack, Typography } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

// MUI ICONS
import DeleteIcon from '@mui/icons-material/Delete';
import LockIcon from '@mui/icons-material/Lock';

// COMPONENTS
import InsuranceCard from '../../booking/extras-tab/insuranceCard';
import FoodCard from '../../booking/extras-tab/foodCard';
import { PaypalButton } from '../../booking/payment/payment-options';

const FlightReviewPanel = () => {

    const flightDict = getDictionaryFromCookie('flight');
    if (flightDict === null || Object.keys(flightDict).length === 0) {
        Swal.fire({
            icon: 'error',
            title: 'No Booking Found',
            text: 'Please enter a valid booking number to view your booking.',
            willClose: () => {
                window.location.reload();
            }
        });
    }
    const [flight, setFlight] = useState(flightDict);
    useEffect(() => {
        console.log(flight);
    }, [flight]);

    // Calculate length from departure and arrival time
    if (flightDict !== null) {
        // departureTime = '10:00' - arrivalTime='12:00' length = 2
        const departureTime = flightDict['departureTime'];
        const arrivalTime = flightDict['arrivalTime'];
        const departureHour = parseInt(departureTime.split(':')[0]);
        const arrivalHour = parseInt(arrivalTime.split(':')[0]);
        const departureMinute = parseInt(departureTime.split(':')[1]);
        const arrivalMinute = parseInt(arrivalTime.split(':')[1]);
        let length = arrivalHour - departureHour;
        if (arrivalMinute - departureMinute > 0) {
            length += 1;
        }
        flightDict['length'] = length;
    }

    const handleCancel = () => {
        Swal.fire({
            title: 'Are you sure you want to cancel your booking?',
            text: 'You will not be able to recover this booking!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, cancel it!',
            cancelButtonText: 'No, keep it'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Cancelled!',
                    'Your booking has been cancelled.',
                    'success'
                ).then(() => {
                    // Remove flight cookie
                    saveDictionaryAsCookie('flight', {});
                    window.location.reload();
                });
            }
        });
    }

    const checkIn = () => {
        Swal.fire({
            title: 'Check-in successful!',
            text: 'You have successfully checked in for your flight.',
            icon: 'success',
            confirmButtonText: 'Close'
        });
    }

    const [paymentLoading, setPaymentLoading] = useState(false);
    function makePaymentClick () {
        setPaymentLoading(true);

        // Save new flight details to cookie
        const paidAmount = parseInt(flight['paidAmount'])+flight['cost'];
        console.log(flight);
        const newFlight = {
            ...flight,
            cost: 0,
            paidAmount: paidAmount
        }
        saveDictionaryAsCookie('flight', newFlight);
        setFlight(newFlight);

        setTimeout(() => {
            setPaymentLoading(false);
            Swal.fire({
                title: 'Payment Successful!',
                text: 'Your payment has been processed successfully. You will receive an updated booking confirmation shortly.',
                icon: 'success',
                confirmButtonText: 'Ok',
            });
        }, 2000);
    }

    return (
        <Paper
            elevation={5}
            sx={{
                borderRadius: 3,
                p: 2,
                mx: { xs: 2, md: 20 },
                mb: 5
            }}
            >
            {flightDict === null ? (
                <>
                <Typography variant='subtitle1'>No Booking Found</Typography>
                </>
            ):(
                <>
            <Typography variant='subtitle1'>Confirmation Number: #FDA172{flightDict['bookingNumber']}</Typography>
            <Box sx={{ p: 2, border: '1px dashed grey' }}>
                <Typography variant='h5'>Flight Information</Typography>
                <Divider />
                <Grid container spacing={2} mb={3}>
                    <Grid item xs={3}>
                        <Typography variant='subtitle2'>Length</Typography>
                        <Typography variant='body1'>{flightDict['length']} hr</Typography>
                    </Grid>

                    <Grid item xs={3}>
                        <Typography variant='subtitle2'>Time</Typography>
                        <Typography variant='body1'>{flightDict['departureTime']} - {flightDict['arrivalTime']}</Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography variant='subtitle2'>Departure</Typography>
                        <Typography variant='body1'>{flightDict['departureCode']}</Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography variant='subtitle2'>Arrival</Typography>
                        <Typography variant='body1'>{flightDict['destinationCode']}</Typography>
                    </Grid>
                </Grid>
                <Divider/>
                <Typography variant='h5'>Passenger Information</Typography>
                <Grid container spacing={2} mb={3}>
                    {flightDict['seats'].map((seat:string, idx: number) => (
                        <Grid item xs={3} key={seat}>
                            <Typography variant='subtitle2'>Seat {idx+1}:</Typography>
                            <Typography variant='body1'>{seat}</Typography>
                        </Grid>
                    ))}
                </Grid>
                <Divider/>
                <Typography variant='h6'>Insurance: {flightDict['addons'].includes('Insurance')? 'included': 'not included'}</Typography>
                {flightDict['addons'].includes('Insurance') == false? (
                    <Box width={500}>
                        <InsuranceCard flightDetails={flight} flightSetCallback={setFlight}/>
                    </Box>
                ): null}
                <Typography variant='h6'>In-flight Food: {flightDict['addons'].includes('Insurance')? 'included': 'not included'}</Typography>
                {flightDict['addons'].includes('In-Flight Meal') == false? (
                    <Box width={500}>
                        <FoodCard flightDetails={flight} flightSetCallback={setFlight}/>
                    </Box>
                ): null}
                <Typography variant='h6'>In-flight Entertainment: Included</Typography>
                <Typography variant='h6'>Paid: ${flightDict['paidAmount']}</Typography>
                {flight['cost'] > 0 && (
                <>
                    <Divider/>
                    <Card variant="outlined">
                    <CardContent>
                        <Stack>
                        <Typography variant='h5'>Payment</Typography>
                        <Typography variant='h6'>Cost Due: ${flight['cost']}</Typography>
                        <Stack spacing={2}>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                Payment protected by FlightDreamAir 
                            </Typography>
                            <PaypalButton/>
                            <LoadingButton 
                                variant="contained" 
                                endIcon={<LockIcon/>}
                                onClick={()=>makePaymentClick()}
                                loading={paymentLoading}
                                fullWidth
                                sx={{mx:'auto'}}>
                                    <span>Pay Now</span>
                            </LoadingButton>
                        </Stack>
                        </Stack>
                        </CardContent>
                    </Card>
                </>
                
                )}
                
                <Divider/>
                <Stack 
                    direction='row' 
                    spacing={5}
                    justifyContent="space-around"
                    alignItems="center"
                    px={3}
                    py={2}
                    >
                    <Button 
                        variant="contained" 
                        color='secondary' 
                        startIcon={<DeleteIcon/>} 
                        onClick={handleCancel}
                    >
                        Cancel Booking
                    </Button>
                    <Button 
                        variant="contained" 
                        color='primary'
                        onClick={checkIn}
                    >
                        Check-in
                    </Button>
                </Stack>
            </Box>
            </>)}
        </Paper>
    );
}
export default FlightReviewPanel;