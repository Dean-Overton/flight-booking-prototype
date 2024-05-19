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
import { Button, TextField } from '@mui/material';

import Paypal from './paypal.png';
import SvgIcon from '@mui/material/SvgIcon';

export const PaypalButton = (props: any) => {
  return (
    <Button 
      variant="outlined"
      onClick={props.onClick}>
        <img src={Paypal} alt="Logo" style={{ width: 24, height: 24, marginRight:12 }} /> Paypal
    </Button>
  );
}

export default function PaymentOptionsCard() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <React.Fragment>
            <CardContent>
            <Typography variant="h5" component="div" mb={2}>
                Payment Method
            </Typography>

            <Stack spacing={2}>
            <PaypalButton/>
            <TextField id="standard-basic" label="Email" variant="standard" placeholder='john@gmail.com' />
            </Stack>
            </CardContent>
        </React.Fragment>
    </Card>
    </Box>
  );
}
