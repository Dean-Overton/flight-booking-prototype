import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

interface FoodCardProps 
{
    totalCost:number,
    costSetCallback: (cost:number) => void,
}
const FoodCard = ({totalCost, costSetCallback}: FoodCardProps) => {
  const costNumber = 8;
  const handleCheckBoxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      costSetCallback(totalCost + costNumber);
    } else {
      costSetCallback(totalCost - costNumber);
    }
  };
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" component="div">
            In-Flight Meal
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            ${costNumber}
          </Typography>
          <Typography variant="body2">
          Enjoy a choice of either Chicken Goiza or Vegetable Palamti.
          </Typography>
        </CardContent>
        <CardActions>
          <FormControlLabel sx={{ml:1}} control={<Checkbox onClick={handleCheckBoxChange}/>} label="Inlcude this." />
          <Button size="small">Ingredients</Button>
        </CardActions>
      </Card>
    </Box>
  );
}
export default FoodCard;