import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import PaymentSummaryCard from './payment-summary';
import FlightSummaryCard from './flight-summary';
import PaymentOptionsCard from './payment-options';

interface PaymentProps
{
    totalCost: number,
    seats: string[],
}

const Payment = ({totalCost, seats}:PaymentProps) => {
    return (
        <>
        <Box>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <PaymentOptionsCard/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <FlightSummaryCard/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <PaymentSummaryCard cost={totalCost} seats={seats}/>
                </Grid>
            </Grid>
        </Box>
        </>
    );
}
export default Payment;