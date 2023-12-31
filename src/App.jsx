import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home/Home';
import Navbar from './components/navBar';
import About from './pages/about';
import Slider from './pages/Slider';
import EntireGallery from './pages/entireGallery';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/Gallery" component={EntireGallery} />
        <Route path="/aboutUs" component={About} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;

