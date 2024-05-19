import React, { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import FlightSkeleton from '../FlightSkeleton';
import { Link } from 'react-router-dom';
import { getFlights } from './flights';
import { AirportType } from '../AirportSelect/airports';

import { saveDictionaryAsCookie } from '../../pages/functions/getFlightState';
import Swal from 'sweetalert2';

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

  function Book(flight: Flight) {
    saveDictionaryAsCookie('flight', flight);

    // Fire loading alert
    Swal.fire({
      title: 'Booking Flight',
      text: 'Loading flight, please wait...',
      timer: 3000,
    }).then(() => {
      // Redirect to booking details page
      window.location.href = '/booking-details';
    });
  }

  return (
    <>
      {loading ? (
        Array.from({ length: 3 }, (_, i) => <FlightSkeleton key={i}/>)
      ):
        flights.map((flight, idx) => (
          <Box sx={{ border: 'solid', borderRadius: 2 }} key={idx}>
            <Stack direction="row" spacing={3} margin={2}>
              <Typography>
                {flight.departureCity} to {flight.destinationCity}
              </Typography>
              <Typography>
                {flight.departureTime} - {flight.arrivalTime}
              </Typography>
              <Typography>${flight.cost}</Typography>
              <Button variant="outlined" onClick={(e) => Book(flight)}>Book</Button>
            </Stack>
          </Box>
        ))}
    </>
  );
};
export default FlightSelection;
