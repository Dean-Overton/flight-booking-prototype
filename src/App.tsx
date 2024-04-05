import React, { useState, useEffect } from 'react';
import flightLogo from '/flightlogo.svg';
import './App.css';
import '@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css';
import 'react-calendar/dist/Calendar.css';

// Form Components
import CountrySelect from './components/CountrySelect';
import ClassSelect from './components/ClassSelect';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import FlightSkeleton from './components/FlightSkeleton';
import { Button } from '@mui/material';
import CountSelect from './components/CountSelect';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

function App() {
  const [value, onChange] = useState<Value>([new Date(), new Date()]);

  const [loadingTime, setLoadTime] = useState(0);
  const [loadingInvervalID, setloadingInvervalID] =
    useState<NodeJS.Timeout | null>(null);
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);

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
  const handleSearch = () => {
    setLoadTime(3);
    if (!loading) {
      setloadingInvervalID(
        setInterval(() => {
          setLoadTime((prevTimer) => prevTimer - 1);
        }, 1000)
      );
      setLoading(true);
    }
  };
  return (
    <>
      <div>
        <a href="https://flightdreamair-40r1--5173--7dbe22a9.local-credentialless.webcontainer.io/">
          <img src={flightLogo} className="logo" alt="FlightDreamAir logo" />
        </a>
        <h1 className="title">FlightDreamAir</h1>
        <Paper
          elevation={5}
          sx={{
            borderRadius: 3,
            p: 2,
          }}
        >
          <Stack direction="row" spacing={2}>
            <CountrySelect labelText="Leaving From" />
            <CountrySelect labelText="To Destination" />
          </Stack>
          <Stack mt={2} direction="row" spacing={2}>
            <DateRangePicker onChange={onChange} value={value} />
          </Stack>
          <Stack mt={2} direction="row" spacing={2}>
            <ClassSelect />
            <CountSelect />
          </Stack>
          <Button sx={{ mt: 2 }} variant="contained" onClick={handleSearch}>
            Search
          </Button>
        </Paper>

        <Stack mt={3} spacing={2}>
          {loading && Array.from({ length: 3 }, () => <FlightSkeleton />)}
        </Stack>
      </div>
    </>
  );
}

export default App;
