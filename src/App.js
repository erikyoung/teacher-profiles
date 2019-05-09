import React from 'react';
import Default from './pages/Default'; 
import HowToUse from './pages/HowToUse'; 
import Teachers from './pages/Teachers.js'; 
import Home from './pages/Home'; 
import SingleTeachers from './pages/SingleTeachers'; 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 

function App() {
  return (
    <Router>
      <main>
        <Switch>
            {/* navbar goes here */}
            
              
              <Route path='/' exact component={Home} />
              <Route path='/teachers' exact component={Teachers} />
              <Route path='/teachers/:id' component={SingleTeachers} />
              <Route path='/howtouse' exact component={HowToUse} />
              <Route component={Default} />
            
        </Switch>
      </main>
    </Router>


    
  );
}

export default App;
