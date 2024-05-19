import { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import Divider from '@mui/material/Divider';
import { Typography } from '@mui/material';
import ChairCheckBox from './chairCheckbox';

interface SeatSelectionProps {
    flightDetails: any,
    flightSetCallback: (newFlightDetails: any) => void,
    numberOfPassengers: number,
}
const seatRowletters = ['A', 'B', 'C', 'D'];
function generateDisabledSeats(currentSeats: string[]) {
    const seatDisabledMap: { [code: string]: boolean }  = {}
    console.log("currentSeats", currentSeats)
    for (let i = 0; i < 30; i++) {
        for (let j = 0; j < 4; j++) {
            const seatCode = `${seatRowletters[j]}${i+1}`
            if (currentSeats.includes(seatCode)) {
                seatDisabledMap[seatCode] = false;
            } else {
                seatDisabledMap[seatCode] = Math.random() >= 0.5;
            }
        }
    }
    return seatDisabledMap;
}
const SeatSelection = (props: SeatSelectionProps) => {
    const seatMap: { [code: string]: boolean }  = {}

    if (props.flightDetails['seats'] == null) {
        props.flightSetCallback({...props.flightDetails, 
            seats: [],
        });
    }
    const disabledSeats = useState(generateDisabledSeats(props.flightDetails['seats']));
    const seatCodes = Object.keys(disabledSeats[0]) as string[];
    seatCodes.forEach(seatCode => {
        if (props.flightDetails['seats'].includes(seatCode)) {
            seatMap[seatCode] = true;
        } else {
            seatMap[seatCode] = false;
        }
        
    });
    const [seatAvailability, setSeatAvailability] = useState(seatMap);
    const [seatsSelectedCount, setseatsSelectedCount] = useState(props.flightDetails['seats'].length);
    const [selectedSeatCodes, setSelectedSeatCodes] = useState<string[]>(props.flightDetails['seats']);


    const handleSeatSelectChange = (code: string) => (event: React.ChangeEvent<HTMLInputElement>)  => {
        if (event.target.checked == false){
            if (seatsSelectedCount == 0) {
                return;
            }

            setSeatAvailability({ ...seatAvailability, [code]: event.target.checked });
            setseatsSelectedCount(seatsSelectedCount-1);
            const newCodes = selectedSeatCodes.filter(item => item !== code);
            setSelectedSeatCodes(newCodes);
            props.flightSetCallback({ ...props.flightDetails, 
                seats: newCodes 
            });
        } else {
            if (seatsSelectedCount >= props.numberOfPassengers) {
                return;
            }

            setSeatAvailability({ ...seatAvailability, [code]: event.target.checked });
            setseatsSelectedCount(seatsSelectedCount+1);
            const newCodes = [...selectedSeatCodes, code];
            setSelectedSeatCodes(newCodes);
            props.flightSetCallback({ ...props.flightDetails, 
                seats: newCodes 
            });
        }
    }
    
    return (
        <>
            <Box>
                <Typography sx={{my:2}} variant="h5">{props.numberOfPassengers-seatsSelectedCount} seats remaining</Typography>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <Box sx={{border: 'dashed', borderColor: 'grey', borderRadius: 5, p: 3}}>
                <Stack 
                    direction="row"
                    divider={<Divider orientation="vertical" flexItem />}
                    spacing={3}
                    width={250}
                >
                    <Typography>L Window</Typography>
                    <Typography>L Isle</Typography>
                    <Typography>R Isle</Typography>
                    <Typography>R Window</Typography>
                </Stack>
                <Grid container spacing={1} width={300} mx='auto'>
                    {seatCodes.map((seatCode:string) => (
                    <Grid item xs={3}>
                        <Tooltip title={seatCode}>
                        <ChairCheckBox
                            checked={seatAvailability[seatCode]}
                            name={seatCode}
                            onChange={handleSeatSelectChange(seatCode)}
                            inputProps={{ 'aria-label': 'controlled' }}
                            disabled={disabledSeats[seatCode]}
                        />
                        </Tooltip>
                    </Grid>
                    ))}
                </Grid>
                </Box>
                </div>
            </Box>
        </>
    );
}
export default SeatSelection;