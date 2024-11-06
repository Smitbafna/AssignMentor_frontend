
import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
import MultiActionAreaCard from './Card';
 

export default function Orgselect(){
const [OrgsOfPerson,setOrgsOfPerson]=useState({});
const [error, setError] = useState(null);

useEffect(()=>{
const fetchOrgs =async () =>{
  try{
    const response = await axios.get('http://127.0.0.1:8000/getOrgsOfUser/<str:email>/',{
      headers:{
        Authorization:`Bearer ${localStorage.getItem('token')}`,
      },

    });
    setOrgsOfPerson(response.data)
  }catch(err){
    setError('Failed to load orgs');
  }
};
fetchOrgs();
},[]);

return (
  <div>
    {OrgsOfPerson.map((org) => (
      <Typography key={org.id} variant="h6" component="div">
        {org.name} {/* Display the name of each organization */}
      </Typography>
    ))}
  </div>
);
}