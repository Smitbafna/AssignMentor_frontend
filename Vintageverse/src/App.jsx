import * as React from 'react';
import { extendTheme, styled } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import DescriptionIcon from '@mui/icons-material/Description';
import LayersIcon from '@mui/icons-material/Layers';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import Grid from '@mui/material/Grid2';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
const NAVIGATION = [
  {
    kind: 'header',
    title: 'Main items',
  },
  {
    segment: 'dashboard',
    title: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    segment: 'orders',
    title: 'Orders',
    icon: <ShoppingCartIcon />,
  },
  {
    kind: 'divider',
  },
  {
    kind: 'header',
    title: 'Vintage Games',
  },
  {
    segment: 'flappybird',
    title: 'Flappy bird',
    icon: <BarChartIcon />,
    children: [
      {
        segment: 'sales',
        title: 'Sales',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'traffic',
        title: 'Traffic',
        icon: <DescriptionIcon />,
      },
    ],
  },
  {
    segment: 'integrations',
    title: 'Integrations',
    icon: <LayersIcon />,
  },
];

const demoTheme = extendTheme({
  colorSchemes: { light: true, dark: true },
  colorSchemeSelector: 'class',
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

function useDemoRouter(initialPath) {
  const [pathname, setPathname] = React.useState(initialPath);

  const router = React.useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => setPathname(String(path)),
    };
  }, [pathname]);

  return router;
}

const Skeleton = styled('div')(({ theme, height }) => ({
  backgroundColor: theme.palette.action.hover,
  borderRadius: theme.shape.borderRadius,
  height,
  content: '" "',
}));


function OrdersLayout() {
  return (
    <Grid container spacing={1}>
      {/* Add your specific grid structure for Orders here */}
      <Grid size={12}>
        <Skeleton height={50} />
      </Grid>
      <Grid size={6}>
        <Skeleton height={100} />
      </Grid>
      <Grid size={6}>
        <Skeleton height={100} />
      </Grid>
      {/* Additional grids as needed */}
    </Grid>
  );
}

function SalesLayout() {
  return (
    <Grid container spacing={1}>
      {/* Add your specific grid structure for Orders here */}
      <Grid size={12}>
        <Skeleton height={50} />
      </Grid>
      <Grid size={6}>
        <Skeleton height={100} />
      </Grid>
      <Grid size={6}>
        <Skeleton height={100} />
      </Grid>
      {/* Additional grids as needed */}
    </Grid>
  );
}

function PollsLayout() {
  return (
    <Grid container spacing={1}>
      {/* Add your specific grid structure for Orders here */}
      <Grid size={12}>
        <Skeleton height={50} />
      </Grid>
      <Grid size={6}>
        <Skeleton height={100} />
      </Grid>
      <Grid size={6}>
        <Skeleton height={100} />
      </Grid>
      {/* Additional grids as needed */}
    </Grid>
  );
}

function DashboardLayoutContent() {
  return (
    <Grid container spacing={1}>
      {/* Render the default dashboard grids here */}
      <Grid size={5} />
      <Grid size={12}>
        <Skeleton height={14} />
      </Grid>
      <Grid size={12}>
        <Skeleton height={14} />
      </Grid>
      <Grid size={4}>
        <Skeleton height={100} />
      </Grid>
      <Grid size={8}>
        <Skeleton height={100} />
      </Grid>
      <Grid size={12}>
        <Skeleton height={150} />
      </Grid>
      <Grid size={12}>
        <Skeleton height={14} />
      </Grid>
      <Grid size={3}>
        <Skeleton height={100} />
      </Grid>
      <Grid size={3}>
        <Skeleton height={100} />
      </Grid>
      <Grid size={3}>
        <Skeleton height={100} />
      </Grid>
      <Grid size={3}>
        <Skeleton height={100} />
      </Grid>
    </Grid>
  );
}

export default function DashboardLayoutBasic(props) {
  const { window } = props;
  const router = useDemoRouter('/dashboard');
  const demoWindow = window ? window() : undefined;
  const [loading, setLoading] = React.useState(true);

  // Simulate loading with a timeout
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 2 seconds
    }, 2000);

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);
  const renderLayout = () => {
    switch (router.pathname) {
      case '/orders':
        return <OrdersLayout />;
        case '/flappybird/sales':
        return <SalesLayout />;
      case '/integrations':
        return <PollsLayout />; // Assuming you create a PollsLayout function
      case '/dashboard':
      default:
        return <DashboardLayoutContent />;
    }
  };

  return (
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      window={demoWindow}
    >
      <DashboardLayout>
      <PageContainer>
          {loading ? (
            // Show skeleton grids while loading
            <Grid container spacing={1}>
              <Grid size={12}>
                <Skeleton height={50} />
              </Grid>
              <Grid size={6}>
                <Skeleton height={100} />
              </Grid>
              <Grid size={6}>
                <Skeleton height={100} />
              </Grid>
              <Grid size={12}>
                <Skeleton height={150} />
              </Grid>
            </Grid>
          ) : (
            renderLayout() // Render the actual layout once loading is done
          )}
        </PageContainer>
      </DashboardLayout>
    </AppProvider>
  );
}