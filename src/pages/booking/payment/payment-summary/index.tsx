import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import LoadingButton from '@mui/lab/LoadingButton';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import LockIcon from '@mui/icons-material/Lock';


export default function OutlinedCard() {
    const [paymentLoading, setPaymentLoading] = React.useState(false);

    function makePaymentClick () {
        setPaymentLoading(true);
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
                <Typography variant="body2">${0}</Typography>
            </Stack>
            <Stack mt={1}direction="row" justifyContent="space-between">
                <Typography variant="body2">Discount: </Typography>
                <Typography variant="body2">{0}</Typography>
            </Stack>
            <Stack mt={1}direction="row" justifyContent="space-between">
                <Typography variant="body2">Tax: </Typography>
                <Typography variant="body2">${0}</Typography>
            </Stack>
            <Stack mt={1}direction="row" justifyContent="space-between">
                <Typography variant="body2">Service Fee: </Typography>
                <Typography variant="body2">${0}</Typography>
            </Stack>
            <hr/>
            <Stack mt={1}direction="row" justifyContent="space-between">
                <Typography variant="body2">Total Cost: </Typography>
                <Typography variant="body2">{0}</Typography>
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
