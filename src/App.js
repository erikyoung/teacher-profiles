import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Default from './pages/Default'; 
import HowToUse from './pages/HowToUse'; 
import Teachers from './pages/Teachers.js'; 

function App() {
  return (
    <div className="App">
      <h1> Howdy</h1>
      <p>Test copy to see if font connects</p>
      <button className="btn btn-primary">Test Button</button>
      <Default />
      <HowToUse />
      <Teachers />
    </div>
  );
}

export default App;
