import React, { useEffect, useState } from 'react'
import Filters from './Filters'
import List from './List'

import logo from './logo.svg';
import './App.css';

function App() {


  return (
    <div className="App">
      <div>
        <h1>SpaceX Launch Programs</h1>
      </div>
      <div className='container'>
        <Filters />
        <List />
      </div>
    </div>
  );
}

export default App;
