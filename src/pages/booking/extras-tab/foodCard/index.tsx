import { useState, useEffect } from 'react';
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
  flightDetails: any,
  flightSetCallback: (newFlightDetails: any) => void
}
const FoodCard = ({flightDetails, flightSetCallback}: FoodCardProps) => {
  const costNumber = 8;
  
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(flightDetails.addons?.includes("In-Flight Meal") ?? false);
  }, [flightDetails.addons]);

  const handleCheckBoxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    
    if (event.target.checked) {      
      flightSetCallback({...flightDetails, 
        addons: [...flightDetails['addons'], "In-Flight Meal"],
        cost: flightDetails['cost'] + costNumber
      });
      setChecked(true);
    } else {
      flightSetCallback({...flightDetails, 
        addons: flightDetails['addons'].filter(
          (addon: string) => addon !== "In-Flight Meal"),
        cost: flightDetails['cost'] - costNumber
      });
      setChecked(false);
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
          <FormControlLabel sx={{ml:1}} control={
            <Checkbox checked={checked} onClick={handleCheckBoxChange}/>
            } label="Inlcude this." />
          <Button size="small">Ingredients</Button>
        </CardActions>
      </Card>
    </Box>
  );
}
export default FoodCard;