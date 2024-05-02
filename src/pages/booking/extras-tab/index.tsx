import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import InsuranceCard from './insuranceCard';
import FoodCard from './foodCard';


interface ExtraTabProps 
{
    totalCost: number,
    costSetCallback: (cost:number) => void
}

const ExtrasTab = ({totalCost, costSetCallback}: ExtraTabProps) => {
    return (
        <>
        <Box>
            <Grid container spacing={2}>
                <Grid item xs={12} lg={6}>
                    <InsuranceCard totalCost={totalCost} costSetCallback={costSetCallback}/>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <FoodCard totalCost={totalCost} costSetCallback={costSetCallback}/>
                </Grid>
            </Grid>
        </Box>
        </>
    );
}
export default ExtrasTab;