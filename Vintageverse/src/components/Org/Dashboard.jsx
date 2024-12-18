import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { useDemoRouter } from '@toolpad/core/internal';
import AssignmentIcon from '@mui/icons-material/Assignment';
import BackToTop from './Organizations';


const NAVIGATION = [
  {
    segment: 'dashboard',
    title: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    segment: 'organizations',
    title: 'Organizations',
    icon: <DashboardIcon />,
    children: [
      {
        segment: 'img',
        title: 'Information Management Group',
        icon: <DashboardIcon />,
      },
      {
        segment: 'watchout',
        title: 'Watch Out !',
        icon: <DashboardIcon />,
      },
    ],
  },
  {
    segment: 'users',
    title: 'Review',
    icon: <DashboardIcon />,
  },

];

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
  title: 'AssignMentor', // Set your custom app title here
  logo: (
    <Box sx={{ paddingTop: '8px' }}> 
      <AssignmentIcon />
    </Box>
  ), // Optional: Set a logo if you have one
};
function DemoPageContent({ pathname }) {

  let content;

  // Define content based on pathname
  switch (pathname) {
    case '/dashboard':
      content = <Typography>Dashboard Overview</Typography>;
      break;
    case '/organizations':
      content = <Typography>Organizations</Typography>;
      break;
      case '/organizations/img':
      content = <Typography><BackToTop/></Typography>;
      break;
    default:
      content = <Typography variant="h4" sx={{
        padding: 2,
        fontWeight: 'bold',
        fontStyle: 'italic',
        backgroundColor: 'background.paper',
        borderRadius: 2,
        boxShadow: 2,
      }}>Welcome to the {pathname} page</Typography>;
  }

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
      <Typography>Dashboard content for {pathname}</Typography>
    </Box><div>{ content }</div>
    </div>
  );
}

DemoPageContent.propTypes = {
  pathname: PropTypes.string.isRequired,
};

function DashboardLayoutAccount(props) {
  const { window } = props;

  const [session, setSession] = React.useState({
    user: {
      name: 'Bharat Kashyap',
      email: 'bharatkashyap@outlook.com',
      image: 'https://avatars.githubusercontent.com/u/19550456',
    },
  });

  const authentication = React.useMemo(() => {
    return {
      signIn: () => {
        setSession({
          user: {
            name: 'Bharat Kashyap',
            email: 'bharatkashyap@outlook.com',
            image: 'https://avatars.githubusercontent.com/u/19550456',
          },
        });
      },
      signOut: () => {
        setSession(null);
      },
    };
  }, []);

  const router = useDemoRouter('/');

  // Remove this const when copying and pasting into your project.
  const demoWindow = window !== undefined ? window() : undefined;

  return (
    // preview-start
    <AppProvider
      session={session}
      authentication={authentication}
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      branding={BRANDING}
      window={demoWindow}
    >
      <DashboardLayout>
        <DemoPageContent pathname={router.pathname} />
      </DashboardLayout>
    </AppProvider>
    // preview-end
  );
}

DashboardLayoutAccount.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default DashboardLayoutAccount;
