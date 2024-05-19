import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import SendIcon from '@mui/icons-material/Send';
import { useLocation } from 'react-router-dom';

interface FlightSummaryProps
{
    flightDetails: any,
    flightSetCallback: (newFlightDetails: any) => void,
}
const FlightSummaryCard = (props: FlightSummaryProps) => {
    
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <React.Fragment>
            <CardContent>
            <Typography variant="h5" component="div">
                Flight Summary
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {props.flightDetails['departureDate']}
            </Typography>

            <Stack mt={2} direction="row" justifyContent="space-between">
                <FlightTakeoffIcon/>
                <FlightLandIcon/>
            </Stack>
            <Stack mt={1} direction="row" justifyContent="space-between">
                <Typography variant="body1">{props.flightDetails['departureTime']}</Typography>
                <Typography variant="body1">{props.flightDetails['arrivalTime']}</Typography>
            </Stack>
            <Stack direction="row" justifyContent="space-between">
                <Typography variant="body2">{props.flightDetails['departureDate']} </Typography>
                <Typography variant="body2">{props.flightDetails['arrivalDate']}</Typography>
            </Stack>
            <Stack direction="row" mt={1}  justifyContent="space-between">
                <Typography variant="body1">{props.flightDetails['departureCode']}</Typography>
                <SendIcon/>
                <Typography variant="body1">{props.flightDetails['destinationCode']}</Typography>
            </Stack>
            <Stack direction="row" justifyContent="space-between">
                <Typography variant="body2">{props.flightDetails['departureCity']}</Typography>
                <Typography variant="body2">{props.flightDetails['destinationCity']}</Typography>
            </Stack>
            </CardContent>
        </React.Fragment>
    </Card>
    </Box>
  );
}
export default FlightSummaryCard;