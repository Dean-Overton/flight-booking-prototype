import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import Stack from '@mui/material/Stack';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Checkbox from '@mui/material/Checkbox';
import Tooltip from '@mui/material/Tooltip';
import Divider from '@mui/material/Divider';
import { Typography } from '@mui/material';
import ChairCheckBox from './chairCheckbox';

interface SeatSelectionProps {
    numberOfPassengers: number,
    seatsSelectedCallback: (newSeats: string[]) => void;
}
const SeatSelection = (props: SeatSelectionProps) => {
    const seatRows = 30;
    const seatGroups = [2, 2]
    const seatRowletters = ['A', 'B', 'C', 'D'];

    // useEffect(() => {
    //     const sumOfGroups = seatGroups.reduce((acc, current) => acc + current, 0);
    //     if (sumOfGroups != seatRowletters.length) {

    //     }
    //   }, [seatGroups, seatRowletters]);
    const seatCodes = [];
    const seatMap: { [code: string]: boolean }  = {}
    const seatDisabledMap: { [code: string]: boolean }  = {}
    for (let i = 0; i < seatRows; i++) {
        for (let j = 0; j < 4; j++) {
            const seatCode = `${seatRowletters[j]}${i+1}`
            seatCodes.push(seatCode);
            
            seatDisabledMap[seatCode] = Math.random() >= 0.5;

            seatMap[seatCode] = false;
        }
    }
    const [disabledSeats, setDisabledSeats] = useState(seatDisabledMap);
    const [seatAvailability, setSeatAvailability] = useState(seatMap);
    
    const [seatsSelectedCount, setseatsSelectedCount] = useState(0);
    const [selectedSeatCodes, setSelectedSeatCodes] = useState<string[]>([]);


    const handleSeatSelectChange = (code: string) => (event: React.ChangeEvent<HTMLInputElement>)  => {
        if (event.target.checked == false){
            if (seatsSelectedCount == 0) {
                return;
            }

            setSeatAvailability({ ...seatAvailability, [code]: event.target.checked });
            setseatsSelectedCount(seatsSelectedCount-1);
            const newCodes = selectedSeatCodes.filter(item => item !== code);
            setSelectedSeatCodes(newCodes);
            props.seatsSelectedCallback(newCodes);
        } else {
            if (seatsSelectedCount >= props.numberOfPassengers) {
                return;
            }

            setSeatAvailability({ ...seatAvailability, [code]: event.target.checked });
            setseatsSelectedCount(seatsSelectedCount+1);
            const newCodes = [...selectedSeatCodes, code];
            setSelectedSeatCodes(newCodes);
            props.seatsSelectedCallback(newCodes);
        }
    }
    
    return (
        <>
            <Box>
                <Typography sx={{my:2}} variant="h5">{props.numberOfPassengers-seatsSelectedCount} seats remaining</Typography>
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
                    {seatCodes.map(seatCode => (
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
        </>
    );
}
export default SeatSelection;