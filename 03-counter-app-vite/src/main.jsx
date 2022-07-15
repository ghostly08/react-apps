import React from 'react'
import ReactDOM from 'react-dom/client';

// :::::::::::: Import Functional Components ::::::::::: //

import { HelloWorldApp } from './HelloWorldApp';
import { FirstApp } from './FirstApp';
import { CounterApp } from './CounterApp';

// ::::::::::: Import CSS file ::::::::::::: //

import './styles.css';


// :::::::::::: Rendering in the DOM :::::::::::: //

ReactDOM.createRoot(document.getElementById('root')).render (
  <React.StrictMode>
    <CounterApp value={1234}/>
    {/* <HelloWorldApp/> {/*Hago l allamada a la function App()*/}
    {/* <FirstApp/> */}
  </React.StrictMode>
);
