import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import AllEvents from './components/AllEvents';

const App = () => {
  
    return (
      <div className="App">
        <Router>
            <Route path={"/"} exact component={Home} />
            <Route path={"/allevents"} exact component={AllEvents} />
        </Router>
      </div>
    );
  
}

export default App;
