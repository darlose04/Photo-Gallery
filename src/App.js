import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Prints from "./components/Prints";

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Header />
        <div className='container'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/prints' component={Prints} />
            <Route exact path='/about' component={About} />
            <Route exact path='/contact' component={Contact} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
