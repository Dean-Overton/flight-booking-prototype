import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import PaymentSummaryCard from './payment-summary';
import FlightSummaryCard from './flight-summary';
import PaymentOptionsCard from './payment-options';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Payment = () => {
    return (
        <>
        <Box>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <PaymentOptionsCard/>
                    <FlightSummaryCard/>
                    <PaymentSummaryCard/>
                </Grid>
            </Grid>
        </Box>
        </>
    );
}
export default Payment;