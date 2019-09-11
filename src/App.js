import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Landscape from "./components/photopages/Landscape";
import Portrait from "./components/photopages/Portrait";

// image imports
import cottoncandy from "./LoganPhotos/CottonCandySunrise.jpg";
import railroad from "./LoganPhotos/DesertedRailroad.jpg";
import grandspring from "./LoganPhotos/GrandPrismaticSpring.jpg";
import loneeagle from "./LoganPhotos/LoneEagleSunset.jpg";
import giantshoulders from "./LoganPhotos/OntheShouldersofGiants.jpg";
import reflections from "./LoganPhotos/Reflections.jpg";

const App = () => {
  // const [pictures, setPictures] = useState([]);

  const pictures = [
    {
      name: "Cotton Candy Sunrise",
      url: cottoncandy,
      orientation: "landscape",
      price: "$25.00"
    },
    {
      name: "Deserted Railroad",
      url: railroad,
      orientation: "landscape",
      price: "$25.00"
    },
    {
      name: "Grand Prismatic Spring",
      url: grandspring,
      orientation: "landscape",
      price: "$25.00"
    },
    {
      name: "Lone Eagle Sunset",
      url: loneeagle,
      orientation: "landscape",
      price: "$25.00"
    },
    {
      name: "On the Shoulders of Giants",
      url: giantshoulders,
      orientation: "landscape",
      price: "$25.00"
    },
    {
      name: "Reflections",
      url: reflections,
      orientation: "landscape",
      price: "$25.00"
    }
  ];

  return (
    <Router>
      <div className='App'>
        <Header />
        <div className='container'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route
              exact
              path='/prints/landscape'
              render={props => <Landscape pictures={pictures} />}
            />
            <Route exact path='/prints/portrait' component={Portrait} />
            <Route exact path='/about' component={About} />
            <Route exact path='/contact' component={Contact} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
