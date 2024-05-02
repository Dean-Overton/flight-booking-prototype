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
import { Button } from '@mui/material';

import SvgIcon from '@mui/material/SvgIcon';
import VisaSvg from 'visa.svg';

export default function PaymentOptionsCard() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <React.Fragment>
            <CardContent>
            <Typography variant="h5" component="div">
                Payment Method
            </Typography>

            <Button 
                variant="outlined">Paypal</Button>
            </CardContent>
        </React.Fragment>
    </Card>
    </Box>
  );
}
