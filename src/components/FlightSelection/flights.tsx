import { AirportType } from '../AirportSelect/airports';

function getFlights(source: AirportType, destination: AirportType, date: Date, passengers: number): Flight[] {
    // Loop 5 times to generate 5 random flights
    const flights: Flight[] = [];
    for (let i = 0; i < 3; i++) {
        // Convert date to string for flight object
        const dateString = date.toISOString().split('T')[0];
        
        // Generate random 24-hour time for departure and arrival
        const departureTime = Math.floor(Math.random() * 24);
        // Put departure time in 24-hour format
        const departureTimeString = departureTime < 10 ? '0' + departureTime + ':00' : departureTime + ':00';
        // Generate random length of flight with 'h' appended
        const length = Math.floor(Math.random() * 5) + 1;
        const lengthString = length + 'h';
        
        // Arrival time is length after departure
        const arrivalTime = departureTime + length;
        // Put arrival time in 24-hour format
        const arrivalTimeString = arrivalTime < 10 ? '0' + arrivalTime + ':00' : arrivalTime + ':00';

        // Generate a random cost between 100 and 500
        const cost = Math.round((Math.random() * 400 + 100)*100)/100;


        flights.push({
            departureDate: dateString,
            arrivalDate: dateString,
            departureTime: departureTimeString,
            arrivalTime: arrivalTimeString,
            departureCity: source.city,
            departureCode: source.iata_code,
            destinationCity: destination.city,
            destinationCode: destination.iata_code,
            stopOver: 'Direct',
            passengers: passengers,
            flightLength: lengthString,
            cost: cost,
        });
    }
    return flights;
}

export { getFlights };
interface Flight {
    departureDate: string;
    arrivalDate: string;
    departureTime: string;
    arrivalTime: string;
    departureCity: string;
    departureCode: string;
    destinationCity: string;
    destinationCode: string;
    stopOver: string;
    passengers: number;
    flightLength: string;
    cost: number;
}