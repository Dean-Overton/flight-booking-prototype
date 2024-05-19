import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import InsuranceCard from './insuranceCard';
import FoodCard from './foodCard';


interface ExtraTabProps 
{
    flightDetails: any,
    flightSetCallback: (newFlightDetails: any) => void
}

const ExtrasTab = ({flightDetails, flightSetCallback}: ExtraTabProps) => {
    if (flightDetails['addons'] == null) {
        flightSetCallback({...flightDetails, 
            addons: [],
        });
    }
    
    return (
        <>
        <Box>
            <Grid container spacing={2}>
                <Grid item xs={12} lg={6}>
                    <InsuranceCard flightDetails={flightDetails} flightSetCallback={flightSetCallback}/>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <FoodCard flightDetails={flightDetails} flightSetCallback={flightSetCallback}/>
                </Grid>
            </Grid>
        </Box>
        </>
    );
}
export default ExtrasTab;