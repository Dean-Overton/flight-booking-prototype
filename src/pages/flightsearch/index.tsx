import { useState, useEffect, useRef } from 'react';
import flightLogo from '/flightlogo.svg';
import '../../App.css';
import '@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css';
import 'react-calendar/dist/Calendar.css';

// Form Components
import AirportSelect from '../../components/AirportSelect';
import { AirportType } from '../../components/AirportSelect/airports';
import ClassSelect from '../../components/ClassSelect';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import FlightSelections from '../../components/FlightSelection';
import { Box, Button, Container, Typography } from '@mui/material';
import CountSelect from '../../components/CountSelect';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';

import HeaderImage from '../pageHeader.png';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const FlightSearch = () => {
    const [dateValue, setDateValue] = useState<Value>([new Date(), new Date()]);
    const [startDate, setStartDate] = useState<Date | null>(null);
    useEffect(() => {
      if (Array.isArray(dateValue)) {
        setStartDate(dateValue[0]);
      } else {
        setStartDate(dateValue);
      }
    }, [dateValue]);

    const [source, setSource] = useState<null|AirportType>(null);
    const [dest, setDest] = useState<null|AirportType>(null);
    const passengerCountRef = useRef(null);
    const [showFlights, setShowFlights] = useState(false);
    const handleSearch = () => {
      if (!source || !dest || !startDate) {
        return;
      }
      if (source.iata_code === dest.iata_code) {
        return;
      }
      setShowFlights(true);
    };
    
    return (
      <>
        <img src={HeaderImage} alt="Background" style={{ width: '100%', height: '75%', position: 'absolute', top: 0, left: 0, zIndex: -1 }} />

        <Box sx={{position: 'absolute', top: 0, left:0, width:'100%'}}>          
            <Box>
              <a href="https://flightdreamair-40r1--5173--7dbe22a9.local-credentialless.webcontainer.io/">
                <img src={flightLogo} className="logo" alt="FlightDreamAir logo" />
              </a>
              <Typography variant='h2'>FlightDreamAir</Typography>
            </Box>
            <Box sx={{mt: 5, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Stack mb={3}>
            <Paper
              elevation={5}
              sx={{
                borderRadius: 3,
                p: 2,
              }}
            >
              <Stack direction="row" spacing={2}>
                <AirportSelect 
                  labelText="Leaving From" 
                  airportOptionCallback={setSource}
                  />
                <AirportSelect 
                labelText="To Destination" 
                airportOptionCallback={setDest}/>
              </Stack>
              <Stack mt={2} direction="row" spacing={2}>
                <DateRangePicker onChange={setDateValue} value={dateValue} />
              </Stack>
              <Stack mt={2} direction="row" spacing={2}>
                <ClassSelect />
                <CountSelect ref={passengerCountRef}/>
              </Stack>
              <Button sx={{ mt: 2 }} variant="contained" onClick={handleSearch}>
                Search
              </Button>
            </Paper>
    
            <Stack mt={3} spacing={2}>
              {showFlights && (
                <FlightSelections 
                  source={source!} 
                  destination={dest!} 
                  date={startDate}
                  passengers={passengerCountRef.current!.value}/>
              )}
            </Stack>
            </Stack>
            </Box>
          </Box>
        </>
      );
};
export default FlightSearch;