import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import JSONPretty from 'react-json-pretty';

const Profile = () => {
    const {user, isAuthenticated} = useAuth0();
  return (
    isAuthenticated && (
        <div>
          <img style={{height:62 , width:62, borderRadius: "50%"}} src={user.picture} alt={user.name} /> 
          <h3>{user.name}</h3>
         <p>{user.email}</p>
        </div>
      )
  );
}

export default Profile;

