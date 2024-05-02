import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import SendIcon from '@mui/icons-material/Send';


export default function FlightSummaryCard() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <React.Fragment>
            <CardContent>
            <Typography variant="h5" component="div">
                Flight Summary
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Sat, August 18, 2024
            </Typography>

            <Stack mt={2} direction="row" justifyContent="space-between">
                <FlightTakeoffIcon/>
                <FlightLandIcon/>
            </Stack>
            <Stack mt={1} direction="row" justifyContent="space-between">
                <Typography variant="body1">2:25 PM </Typography>
                <Typography variant="body1">4:15 PM</Typography>
            </Stack>
            <Stack direction="row" justifyContent="space-between">
                <Typography variant="body1">SYD</Typography>
                <SendIcon/>
                <Typography variant="body1">MEL</Typography>
            </Stack>
            <Stack direction="row" justifyContent="space-between">
                <Typography variant="body2">18/08 </Typography>
                <Typography variant="body2">18/08</Typography>
            </Stack>
            </CardContent>
        </React.Fragment>
    </Card>
    </Box>
  );
}
