import React, { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import FlightSkeleton from '../FlightSkeleton';

interface FlightSearchProps {
  sourceCode: string; // Prop name with its type (string)
  destinationCode: string;
}
const FlightSelection : React.FC<FlightSearchProps> = ({ sourceCode, destinationCode }) => {
  // TODO: fetch data from backend
  // Maybe move skeleton to here

  const [loadingTime, setLoadTime] = useState(3);
  const [loadingInvervalID, setloadingInvervalID] =
    useState<NodeJS.Timeout | null>(null);
  const [loading, setLoading] = useState(true);
  const [loaded, setLoaded] = useState(false);

  useEffect(()=>{
    setLoading(true);
    setLoaded(false);
    const intervalId = setInterval(() => {
      // This code will run every 1000 milliseconds (1 second)
      setLoadTime(prevCount => prevCount - 1);
    }, 1000);
    setloadingInvervalID(intervalId);
  }, []);

  useEffect(() => {
    setLoadTime(3);
    setLoaded(false);
    setLoading(true);
    const intervalId = setInterval(() => {
      setLoadTime(prevCount => prevCount - 1);
    }, 1000);
    setloadingInvervalID(intervalId);
  }, [sourceCode, destinationCode]);

  useEffect(() => {
    if (loadingTime <= 0) {
      clearInterval(loadingInvervalID);
      setLoading(false);
      setLoaded(true);
    }
  }, [loadingTime]);

  useEffect(() => {
    return () => {
      if (loadingInvervalID) {
        clearInterval(loadingInvervalID);
      }
    };
  }, [loadingInvervalID]);

  return (
    <>
      {loading && Array.from({ length: 3 }, () => <FlightSkeleton />)}
      {loaded && flights.map((flight) => (
        <Box sx={{ border: 'solid', borderRadius: 2 }}>
          <Stack direction="row" spacing={3} margin={2}>
            <Typography>
              {flight.departureCity} to {flight.destination}
            </Typography>
            <Typography>
              {flight.departureTime} - {flight.arrivalTime}
            </Typography>
            <Typography>${flight.cost}</Typography>
            <Button variant="outlined">Book</Button>
          </Stack>
        </Box>
      ))}
    </>
  );
};
export default FlightSelection;

interface Flight {
  departureTime: string;
  arrivalTime: string;
  departureCity: string;
  destination: string;
  stopOver: string;
  length: string;
  cost: number;
}

const flights: readonly Flight[] = [
  {
    departureTime: '14:30',
    arrivalTime: '16:30',
    departureCity: 'Sydney',
    destination: 'Brisbane',
    stopOver: 'Direct',
    length: '2h',
    cost: 129.5,
  },
  {
    departureTime: '15:15',
    arrivalTime: '18:45',
    departureCity: 'Sydney',
    destination: 'Perth',
    stopOver: 'Direct',
    length: '3h 30m',
    cost: 325,
  },
  {
    departureTime: '11:15',
    arrivalTime: '13:15',
    departureCity: 'Sydney',
    destination: 'Hobart',
    stopOver: 'Adelaide',
    length: '3h',
    cost: 250,
  },
];
