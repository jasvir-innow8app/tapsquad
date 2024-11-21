import './App.css';
import './style.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from "../src/Home"
import ContactUs from './Contact/contactUs';
import RouteContainer from './routes/RouteContainer';
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div>
        <RouteContainer />


      </div>
    </BrowserRouter>
  );
}





export default App;
