import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import AccordionExpandIcon from './assets/Assignment';
import { Box, SpeedDial } from '@mui/material';
import BasicSpeedDial from './SpeedDial';
export default function ColorToggleButton() {
  const [alignment, setAlignment] = React.useState('reviewee');


  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };



  return (
    <div>
         <Box display="flex" justifyContent="center" my={2}>
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton value="reviewee">Reviewee Role Assignments</ToggleButton>
      <ToggleButton value="reviewer">Reviewer Role Assignments</ToggleButton>
    </ToggleButtonGroup>
    </Box>
    <Box my={2} />
    <div>
        {alignment === 'reviewee' && (
          <Box mb={2}>
          <AccordionExpandIcon />
        </Box>
        )}
        {alignment === 'reviewer' && (
          <Box mb={2}> 
          <AccordionExpandIcon /><div>
        <BasicSpeedDial/>
      </div>
        </Box>
        )}
      </div>
      
    </div>
  );
}
