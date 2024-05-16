import './App.css';
import '@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css';
import 'react-calendar/dist/Calendar.css';
import { Route, Routes } from 'react-router-dom';

// Importing pages
import Booking from './pages/booking';
import FlightSearch from './pages/flightsearch';
import ManageBooking from './pages/manageBooking';
import createTheme from '@mui/material/styles/createTheme';
import ThemeProvider from '@mui/material/styles/ThemeProvider';

const theme = createTheme({
  typography: {
    subtitle1: {
      fontWeight: 500,
      color: 'gray'
    },
    subtitle2: {
      fontWeight: 600,
    },
    body1: {
      fontWeight: 500,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<FlightSearch />} />
        <Route path="/booking/:source/:destination" element={<Booking />} />
        <Route path="/manage-booking" element={<ManageBooking />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
