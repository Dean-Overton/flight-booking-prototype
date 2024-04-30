import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const card = (
  <React.Fragment>
    <CardContent>
      <Typography variant="h5" component="div">
        Insurance
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        $23
      </Typography>
      <Typography variant="body2">
      Ensure peace of mind with our optional insurance coverage. Select this checkbox to safeguard your journey against unforeseen circumstances, providing you with comprehensive protection throughout your trip. Travel confidently knowing that you're covered every step of the way.
      </Typography>
    </CardContent>
    <CardActions>
      <FormControlLabel sx={{ml:1}} control={<Checkbox defaultChecked />} label="Yes, include this." />
      <Button size="small">Terms and Conditions</Button>
    </CardActions>
  </React.Fragment>
);

export default function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
