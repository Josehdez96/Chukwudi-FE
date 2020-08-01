import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from '../pages/Home/Home';

const Principal = () => (
  <BrowserRouter>
    <Route exact path='/' component={Home} />
  </BrowserRouter>
);

export default Principal;