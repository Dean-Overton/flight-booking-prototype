import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import LoadingButton from '@mui/lab/LoadingButton';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import LockIcon from '@mui/icons-material/Lock';
import Swal from 'sweetalert2';
import { setCookie } from 'typescript-cookie';
import { saveDictionaryAsCookie } from '../../../functions/getFlightState';


interface PaymentSummaryProps {
    flightDetails: any,
    flightSetCallback: (newFlightDetails: any) => void,
}
const OutlinedCard = ({flightDetails, flightSetCallback}: PaymentSummaryProps) => {
    const [paymentLoading, setPaymentLoading] = React.useState(false);

    const cost = flightDetails['cost'];
    const tax = Math.round((cost * 0.1)*100)/100;
    const serviceFee = 20;

    const totalCost  = (cost + tax + serviceFee).toString();

    function makePaymentClick () {
        setPaymentLoading(true);
        setCookie('payment', 'success')       
        saveDictionaryAsCookie('flight', {
            ...flightDetails,
            cost: 0,
            paidAmount: totalCost});
        setTimeout(() => {
            setPaymentLoading(false);
            Swal.fire({
                title: 'Payment Successful!',
                text: 'Your payment has been processed successfully, and flight tickets have been sent to your email. Thank you for choosing FlightDreamAir! Write down your confirmation number: #FDA172',
                icon: 'success',
                confirmButtonText: 'Ok',
                willClose: () => {
                    window.location.href = '/';
                }
            });
        }, 2000);
    }
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <React.Fragment>
            <CardContent>
            <Typography variant="h5" component="div">
                Payment Summary
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Payment protected by FlightDreamAir 
            </Typography>

            <Stack direction="row" justifyContent="space-between">
                <Typography variant="body2">Base Fare: </Typography>
                <Typography variant="body2">${cost}</Typography>
            </Stack>
            <Stack mt={1}direction="row" justifyContent="space-between">
                <Typography variant="body2">Discount: </Typography>
                <Typography variant="body2">{0}</Typography>
            </Stack>
            <Stack mt={1}direction="row" justifyContent="space-between">
                <Typography variant="body2">Tax: </Typography>
                <Typography variant="body2">${tax}</Typography>
            </Stack>
            <Stack mt={1}direction="row" justifyContent="space-between">
                <Typography variant="body2">Service Fee: </Typography>
                <Typography variant="body2">${serviceFee}</Typography>
            </Stack>
            <hr/>
            <Stack mt={1}direction="row" justifyContent="space-between">
                <Typography variant="body2">Total Cost: </Typography>
                <Typography variant="body2">${totalCost}</Typography>
            </Stack>
            </CardContent>
            <CardActions>
            <LoadingButton 
                variant="contained" 
                endIcon={<LockIcon/>}
                onClick={()=>makePaymentClick()}
                loading={paymentLoading}
                fullWidth
                sx={{mx:'auto'}}>
                    <span>Pay Now</span>
                </LoadingButton>
            </CardActions>
        </React.Fragment>
    </Card>
    </Box>
  );
}
export default OutlinedCard;
