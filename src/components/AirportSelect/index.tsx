import React, { forwardRef } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import airports from './airports';
import { AirportType } from './airports';

interface AirportSelectProps {
  labelText: string;
  airportOptionCallback: (airport: AirportType|null) => void;
}
const AirportSelect: React.FC<AirportSelectProps> = forwardRef(({ labelText, airportOptionCallback }, ref) => {
  return (
    <Autocomplete
      id="country-select-demo"
      sx={{ width: 300 }}
      options={airports}
      onChange={(event, value) => {
        airportOptionCallback(value);
      }}
      autoHighlight
      getOptionLabel={(option) => option.airport_name}
      groupBy={(option) => option.country_code}
      renderOption={(props, option) => (
        <Box
          component="li"
          sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
          {...props}
        >
          <img
            loading="lazy"
            width="20"
            srcSet={`https://flagcdn.com/w40/${option.country_code.toLowerCase()}.png 2x`}
            src={`https://flagcdn.com/w20/${option.country_code.toLowerCase()}.png`}
            alt=""
          />
          {option.airport_name} ({option.country_code})
           - {option.iata_code}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label={labelText}
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
export default AirportSelect;