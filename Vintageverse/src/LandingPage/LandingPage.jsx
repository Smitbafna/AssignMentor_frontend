import React from 'react';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
import { Box, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'; 
  function LandingPage(){
    const navigate = useNavigate(); 
    const handleSignInClick = () => {
      navigate('/signin'); // Navigate to the sign-in page
    };
    const handleSignInwithOAuthClick = () => {
      navigate('/oauthsignin'); // Navigate to the sign-in page
    };
  
    return (
      <Box
        display="flex"
        flexDirection="column" // Set to column to stack items vertically
        justifyContent="center"
        alignItems="center"
      >
       <Box mb={4}> <Typography variant="h2">Welcome to AssignMentor  !</Typography></Box>
       <Box mb={4}><Typography variant="h5">Your Personal mentor for all assignments ..</Typography></Box>
       <Box mb={4}><Button variant="contained" endIcon={<ArrowForwardIcon />}  onClick={handleSignInClick}>
        Sign in
      </Button></Box>
      <Box mb={4}><Button variant="contained" endIcon={<ArrowForwardIcon />}  onClick={handleSignInwithOAuthClick}>
        Sign in with OAuth
      </Button></Box>
      </Box>
    );

 }
 export default LandingPage;