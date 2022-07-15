import React from 'react'
import ReactDOM from 'react-dom/client';

import { HelloWorldApp } from './HelloWorldApp';
import { FirstApp } from './FirstApp';

import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render (
  <React.StrictMode>
    <HelloWorldApp/> {/*Hago l allamada a la function App()*/}
    <FirstApp title="Hola, Soy Steve" subtitle={12345}/>
  </React.StrictMode>
);
