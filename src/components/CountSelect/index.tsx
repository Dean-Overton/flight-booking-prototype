import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function CountSelect() {
  const selectableAges = Array.from({ length: 10 }, (_, index) => ({
    label: index + 1,
  }));

  return (
    <Autocomplete
      disablePortal
      defaultValue={1}
      id="combo-box-demo"
      options={selectableAges}
      sx={{ width: 300 }}
      renderInput={(params) => (
        <TextField {...params} label="# of Passengers" />
      )}
    />
  );
}
