import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import { Home, About, Contact} from './components';

import { Route } from 'react-router-dom';

const App = () => (
  <div>
    <Navigation /> 
  </div>
)

export default App;
