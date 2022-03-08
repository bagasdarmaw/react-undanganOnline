import React from 'react';

import { Header, Fitur, Harga } from './container';

import { Navbar } from './components';
import './App.css';


const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Fitur />
      <Harga />
    </div>
  )
}

export default App 