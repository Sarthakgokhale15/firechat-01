import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import '../styles/customBtn.css';

export default function ColorButtons() {
  return (
      <div className='custom-btn'>
    <Stack direction="row" spacing={2} >
      {/* <Button color="secondary">Secondary</Button> */}
      {/* <Button variant="contained" color="success"> */}
        {/* Success */}
      {/* </Button> */}
      <Button variant="outlined" color="error">
        Explore
      </Button>
    </Stack>
    </div>
  );
}