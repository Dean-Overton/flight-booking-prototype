import './App.css';
import '@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css';
import 'react-calendar/dist/Calendar.css';
import { Route, Routes } from 'react-router-dom';

// Importing pages
import Booking from './pages/booking';
import FlightSearch from './pages/flightsearch';

function App() {
  return (
    <Routes>
      <Route path="/" element={<FlightSearch />} />
      <Route path="/booking/:source/:destination" element={<Booking />} />
    </Routes>
  );
}

export default App;
