import React from 'react';
import { googleSign } from '../api/auth';

const LoginButton = () => {


  return (
    
      <button onClick={() => (googleSign())}>
        Log In
      </button>
    
  )
}

export default LoginButton