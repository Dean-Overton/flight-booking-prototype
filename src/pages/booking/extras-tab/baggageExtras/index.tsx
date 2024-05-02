import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function BaggageExtras() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" component="div">
            Baggage
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            $8
          </Typography>
          <Typography variant="body2">
          Enjoy a choice of either Chicken Goiza or Vegetable Palamti.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
