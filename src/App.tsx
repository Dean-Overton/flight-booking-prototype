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
import NavigationAppBar from './components/NavBar';
import Header from './components/Header';
import Box from '@mui/material/Box';

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
      <Header />
      <Box sx={{position: 'absolute', top: 0, left:0, width:'100%'}}>
        <NavigationAppBar />
        <Routes>
            <Route path="/" element={<FlightSearch />} />
            <Route path="/booking-details" element={<Booking />} />
            <Route path="/manage-booking" element={<ManageBooking />} />
        </Routes>
      </Box>
    </ThemeProvider>
  );
}

export default App;
