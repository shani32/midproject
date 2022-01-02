import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
console.log(window.location.origin)
ReactDOM.render(
 <React.StrictMode>

  {/* domain={domain}
  clientId={clientId}
  redirectUri={window.location.origin} */}
    <App />
  </React.StrictMode> ,
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))

