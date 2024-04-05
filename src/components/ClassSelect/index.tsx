import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ClassSelect() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={classes}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Class" />}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const classes = [{ label: 'Economy Class' }, { label: 'Business Class' }];
