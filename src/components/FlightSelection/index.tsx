import React, { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import FlightSkeleton from '../FlightSkeleton';
import { Link } from 'react-router-dom';
import { getFlights } from './flights';
import { AirportType } from '../AirportSelect/airports';

interface Flight {
  departureDate: string;
  arrivalDate: string;
  departureTime: string;
  arrivalTime: string;
  departureCity: string;
  destinationCity: string;
  stopOver: string;
  flightLength: string;
  cost: number;
}

interface FlightSearchProps {
  source: AirportType; // Prop name with its type (string)
  destination: AirportType;
  date: Date|null;
  passengers: number;
}


const FlightSelection : React.FC<FlightSearchProps> = ({ source, destination, date, passengers }) => {
  // TODO: fetch data from backend
  // Maybe move skeleton to here

  const LOAD_TIME = 3000;
  const [loading, setLoading] = useState(true);

  const [flights, setFlights] = useState<Flight[]>([]);
  // Update flights when source, destination changes and date changes

  useEffect(()=>{
    setFlights(getFlights(source, destination, date? date : new Date(), passengers));

    setLoading(true);
    const timeoutID = setTimeout(() => {
        setLoading(false);
    }, LOAD_TIME);
    return () => {
        clearTimeout(timeoutID);
    }
  }, [source, destination]);

  return (
    <>
      {loading ? (
        Array.from({ length: 3 }, (_, i) => <FlightSkeleton key={i}/>)
      ):
        flights.map((flight, idx) => (
          <Box sx={{ border: 'solid', borderRadius: 2 }}>
            <Stack direction="row" spacing={3} margin={2}>
              <Typography>
                {flight.departureCity} to {flight.destinationCity}
              </Typography>
              <Typography>
                {flight.departureTime} - {flight.arrivalTime}
              </Typography>
              <Typography>${flight.cost}</Typography>
              <Link to={`/booking/${flight.departureCity}/${flight.destinationCity}`} 
                  state={ flight }
                  style={{ textDecoration: 'none' }}>
                <Button variant="outlined">Book</Button>
              </Link>
            </Stack>
          </Box>
        ))}
    </>
  );
};
export default FlightSelection;
