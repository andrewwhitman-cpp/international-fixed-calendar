import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateField } from '@mui/x-date-pickers/DateField';

export default function BasicDateField(props) {
  const handleChange = (d) => {
    props.f(d)
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateField']}>
        <DateField label="Date" 
                   format="MM/DD/YYYY"
                   onChange={(new_value) => handleChange(new_value)} />
      </DemoContainer>
    </LocalizationProvider>
  );
}
