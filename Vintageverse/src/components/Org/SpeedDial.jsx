import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import CreateIcon from '@mui/icons-material/Create';
import UpdateIcon from '@mui/icons-material/Update';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DeleteIcon from '@mui/icons-material/Delete';
import ShareIcon from '@mui/icons-material/Share';
import ScrollDialog from './assets/CreateAssignmentDialoguebox';

const actions = [
    { icon: <CreateIcon />, name: 'Create' },
    { icon: <UpdateIcon />, name: 'Update' },
    { icon: <RemoveRedEyeIcon />, name: 'Review' },
    { icon: <DeleteIcon />, name: 'Delete' },
    { icon: <ShareIcon />, name: 'Share' },
];

export default function BasicSpeedDial() {
  const [openDialog, setOpenDialog] = React.useState(false);

  const handleCreateClick = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={action.name === 'Create' ? handleCreateClick : undefined}
          />
        ))}
      </SpeedDial>

      {/* Pass open and onClose props to ScrollDialog */}
      <ScrollDialog open={openDialog} onClose={handleCloseDialog} />
    </Box>
  );
}
