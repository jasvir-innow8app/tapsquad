import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Home';
import ContactUs from '../Contact/contactUs';
import Team from '../TapsquadTeam';

const RouteContainer = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/team" element={<Team />} />

    </Routes>
  );
};

export default RouteContainer;
