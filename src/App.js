import React from 'react';
import './App.css';
import Navbar from './component/Navbar'

import Home from './contents/Home'
import About from './contents/About'
import Education from './contents/Education'
import Contact from './contents/Contact'

import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path='/about'>
          <About/>
        </Route>
        <Route exact path='/education'>
          <Education/>
        </Route>
        <Route exact path='/contact'>
          <Contact/>
        </Route>
    </div>
    </Router>
    
  );
}

export default App;
