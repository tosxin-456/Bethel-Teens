import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home/Home';
// import About from './pages/about/About';
import Navbar from './components/navBar';
import  About  from './pages/about/About';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
         <Route  path = '/aboutUs' Component={<About/>}>
          </Route>
        <Route  path="/">
          <Home />
        </Route>
      
      </Switch>
    </Router>
  );
}

export default App;
