import React from 'react';
import { googleOut } from '../api/auth';


const LogoutButton = () => {
  
  return (
  
      <button onClick={() => googleOut()}>
        Log Out
      </button>
    
  )
}

export default LogoutButton