import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { forwardRef } from 'react';

const CountSelect = forwardRef((props, ref) => {
  const selectableAges = Array.from({ length: 10 }, (_, index) => (index + 1).toString());

  return (
    <Autocomplete
      disablePortal
      defaultValue={'1'}
      id="combo-box-demo"
      options={selectableAges}
      sx={{ width: 300 }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Passenger Count"
          inputRef={ref}
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
});
export default CountSelect;