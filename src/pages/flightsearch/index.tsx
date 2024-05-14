import { useState } from 'react';
import flightLogo from '/flightlogo.svg';
import '../../App.css';
import '@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css';
import 'react-calendar/dist/Calendar.css';

// Form Components
import CountrySelect from '../../components/CountrySelect';
import ClassSelect from '../../components/ClassSelect';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import FlightSelections from '../../components/FlightSelection';
import { Button } from '@mui/material';
import CountSelect from '../../components/CountSelect';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

function generateRandomString(length: number) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const Booking = () => {
    const [value, onChange] = useState<Value>([new Date(), new Date()]);

    const [source, setSource] = useState('hj');
    const [dest, setDest] = useState('iji');
    const [rend, setRendFlights] = useState(false);
    const handleSearch = () => {
      setRendFlights(true);
      setSource(generateRandomString(3))
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
                <CountrySelect labelText="Leaving From"/>
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
              {rend && (
                <FlightSelections sourceCode={source} destinationCode={dest}/>
              )}
            </Stack>
          </div>
        </>
      );
};
export default Booking;