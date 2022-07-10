import React from 'react'
import ReactDOM from 'react-dom/client';

import { HelloWorldApp } from './HelloWorldApp';


ReactDOM.createRoot(document.getElementById('root')).render (
  <React.StrictMode>
    <HelloWorldApp/> {/*Hago l allamada a la function App()*/}
  </React.StrictMode>
);
