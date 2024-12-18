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
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
import Signinwithbg from './components/SignIn/Signinwithbg';
import OAuthSignInwithbg from './components/SignIn/OAuthSignInwithbg';
import Orgselect from './components/OrgSelect/Orgselect';
import Dashboard from './components/Org/Dashboard';
import LandingPagewithbg from './components/LandingPage/LandingPagewithbg';
import { Box } from '@mui/material';
import DashboardLayoutSidebarHidden from'./components/LandingPage/LandingPagewithbg'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter(
  [{
    path:"/",
    element:<LandingPagewithbg/>
  },
  {
    path:"/signin",
    element:<Signinwithbg/>
  },
  {
    path:"/oauthsignin",
    element:<OAuthSignInwithbg/>
  },
   {
    path:"/orgselect",
    element:<Orgselect/>
  },
  {
    path:"/dashboard",
    element:<Dashboard/>
  },

]);

function App(){
  return(
    <div>
      <RouterProvider router ={router}/>
    </div>
  )
}

export default App;

