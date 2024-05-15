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

interface Flight {
    departureDate: string;
    arrivalDate: string;
    departureTime: string;
    arrivalTime: string;
    departureCity: string;
    destination: string;
    stopOver: string;
    length: string;
    cost: number;
  }
const FlightSummaryCard = () => {
    const location = useLocation();
    const flight = useState<Flight>(location.state.flight);
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <React.Fragment>
            <CardContent>
            <Typography variant="h5" component="div">
                Flight Summary
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {flight}
            </Typography>

            <Stack mt={2} direction="row" justifyContent="space-between">
                <FlightTakeoffIcon/>
                <FlightLandIcon/>
            </Stack>
            <Stack mt={1} direction="row" justifyContent="space-between">
                <Typography variant="body1">{flight.departureTime}</Typography>
                <Typography variant="body1">{flight.arrivalTime}</Typography>
            </Stack>
            <Stack direction="row" justifyContent="space-between">
                <Typography variant="body1">SYD</Typography>
                <SendIcon/>
                <Typography variant="body1">MEL</Typography>
            </Stack>
            <Stack direction="row" justifyContent="space-between">
                <Typography variant="body2">{flight.departureDate} </Typography>
                <Typography variant="body2">{flight.arrivalDate}</Typography>
            </Stack>
            </CardContent>
        </React.Fragment>
    </Card>
    </Box>
  );
}
export default FlightSummaryCard;