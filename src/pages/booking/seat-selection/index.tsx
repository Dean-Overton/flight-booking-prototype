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

interface SeatSelectionProps {
    numberOfPassengers: number,
}
const SeatSelection = (props: SeatSelectionProps) => {
    const seatRows = 30;
    const seatGroups = [2, 2]
    const seatRowletters = ['A', 'B', 'C', 'D'];

    useEffect(() => {
        const sumOfGroups = seatGroups.reduce((acc, current) => acc + current, 0);
        if (sumOfGroups != seatRowletters.length) {

        }
      }, [seatGroups, seatRowletters]);
    const seatCodes = [];
    const seatMap: { [code: string]: boolean }  = {}
    for (let i = 0; i < seatRows; i++) {
        for (let j = 0; j < 4; j++) {
            const seatCode = `${seatRowletters[j]}${i+1}`
            seatCodes.push(seatCode);

            seatMap[seatCode] = false;
        }
    }
    const [seatAvailability, setSeatAvailability] = useState(seatMap);
    
    const [seatsSelected, setSeatsSelected] = useState(0);

    const handleSeatSelectChange = (code: string) => (event: React.ChangeEvent<HTMLInputElement>)  => {
        if (seatsSelected < props.numberOfPassengers && seatsSelected > 0) {
            setSeatAvailability({ ...seatAvailability, [code]: event.target.checked });
            if (event.target.checked == true){
                setSeatsSelected(seatsSelected+1);
            } else {
                setSeatsSelected(seatsSelected-1);
            }
        }
        if (seatsSelected == props.numberOfPassengers && event.target.checked == false){
            setSeatsSelected(seatsSelected-1);
            setSeatAvailability({ ...seatAvailability, [code]: event.target.checked });
        }
        if (seatsSelected == 0 && event.target.checked == true){
            setSeatsSelected(seatsSelected+1);
            setSeatAvailability({ ...seatAvailability, [code]: event.target.checked });
        }
    }
    
    return (
        <>
        <Box width={300} sx={{m: '0 auto'}}>
            <Typography sx={{my:2}} variant="h5">{props.numberOfPassengers-seatsSelected} seats remaining</Typography>
            <Stack 
                direction="row"
                divider={<Divider orientation="vertical" flexItem />}
                spacing={3}
            >
                <Typography>L Window</Typography>
                <Typography>L Isle</Typography>
                <Typography>R Isle</Typography>
                <Typography>R Window</Typography>
            </Stack>
            <Grid container spacing={1}>
                {seatCodes.map(seatCode => (
                <Grid item xs={3}>
                    <Tooltip title={seatCode}>
                    <Checkbox
                        checked={seatAvailability[seatCode]}
                        name={seatCode}
                        onChange={handleSeatSelectChange(seatCode)}
                        inputProps={{ 'aria-label': 'controlled' }}
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