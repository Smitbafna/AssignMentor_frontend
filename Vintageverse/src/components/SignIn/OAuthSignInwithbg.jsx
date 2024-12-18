import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { useDemoRouter } from '@toolpad/core/internal';
import AssignmentIcon from '@mui/icons-material/Assignment';
import OAuthSignInPage from './OAuthSignInPage';

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

const BRANDING = {
  title: <Typography><h3>AssignMentor</h3></Typography>, // Set your custom app title here
  logo: (
    <Box sx={{ paddingTop: '8px' }}> 
      <AssignmentIcon />
    </Box>
  ), // Optional: Set a logo if you have one
};



function DemoPageContent() {
  return (
    <div>
      <Box
        sx={{
          py: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <OAuthSignInPage />
      </Box>
    </div>
  );
}

DemoPageContent.propTypes = {
  pathname: PropTypes.string.isRequired,
};

function OAuthSignInwithbg(props) {
  const { window } = props;

  const router = useDemoRouter('/');

  // Remove this const when copying and pasting into your project.
  const demoWindow = window !== undefined ? window() : undefined;

  return (
    <AppProvider router={router} theme={demoTheme} window={demoWindow} branding={BRANDING}>
      <DashboardLayout hideNavigation>
        <DemoPageContent pathname={router.pathname} />
      </DashboardLayout>
    </AppProvider>
  );
}

OAuthSignInwithbg.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default OAuthSignInwithbg;
