import * as React from 'react';
import { AppProvider } from '@toolpad/core/AppProvider';
import { SignInPage } from '@toolpad/core/SignInPage';
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';

const providers = [{ id: 'credentials', name: 'Email and password' }];


const signIn = async (provider, formData) => {
  return new Promise((resolve, reject) => {
    const data = new URLSearchParams();
    data.append('email', formData.get('email'));
    data.append('password', formData.get('password'));

    fetch('http://localhost:8000/ars/api/token/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: data,
    })
      .then((response) => {
        console.log('Response status:', response.status); // Log the response status
        if (!response.ok) {
          console.log('Error: Invalid Credentials');
          resolve({
            type: 'CredentialsSignin',
            error: 'Invalid Credentials',
            status: response.status,
          });
        } else {
          response.json().then((data) => {
            console.log('Response data:', data); // Log the data received from the server
            // Store tokens in localStorage
            localStorage.setItem('accessToken', data.access);
            localStorage.setItem('refreshToken', data.refresh);

            // Use context to update the global state (React Context or Redux)
            // useAuth().login(data.access, data.refresh); // This assumes the useAuth context is available

            // Redirect to the dashboard
            console.log('Redirecting to dashboard');
            window.location.href = '/dashboard';  // Update to the actual route if needed

            // Resolve the promise after the redirect
            resolve({
              type: 'CredentialsSignin',
              error: null,
              accessToken: data.access,
              refreshToken: data.refresh,
            });
          }).catch((err) => {
            console.log('Error parsing response JSON:', err);
            reject({
              type: 'ResponseParseError',
              error: err.message,
            });
          });
        }
      })
      .catch((error) => {
        console.log('Network error:', error);
        reject({
          type: 'NetworkError',
          error: error.message,
        });
      });
  });
};



export default function NotificationsSignInPageError() {
  const theme = useTheme();
  return (
    // preview-start
    <AppProvider theme={theme}>
      
        <SignInPage signIn={signIn} providers={providers} />
   
    </AppProvider>
    // preview-end
  );

}