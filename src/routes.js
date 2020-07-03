import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

import Home from './pages/Home'

function routes() {
    return (
      <BrowserRouter>
      <Route component={Home} path="/" exact />
      </BrowserRouter>
    );
  }
  
  export default routes;