import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Landscape from "./components/photopages/Landscape";
import Portrait from "./components/photopages/Portrait";

// landscape image imports
import cottoncandy from "./LoganPhotos/CottonCandySunrise.jpg";
import railroad from "./LoganPhotos/DesertedRailroad.jpg";
import grandspring from "./LoganPhotos/GrandPrismaticSpring.jpg";
import loneeagle from "./LoganPhotos/LoneEagleSunset.jpg";
import giantshoulders from "./LoganPhotos/OntheShouldersofGiants.jpg";
import reflections from "./LoganPhotos/Reflections.jpg";

// portrait image imports
import waterfalls from "./LoganPhotos/ChasingWaterfalls.jpg";
import eyetoeye from "./LoganPhotos/EyeToEye.jpg";
import lastlight from "./LoganPhotos/LastLight.jpg";
import snakeriver from "./LoganPhotos/SnakeRiverOverlook.jpg";
import archway from "./LoganPhotos/TheArchwayToTheWest.jpg";
import upsidedown from "./LoganPhotos/TheUpsideDown.jpg";

const App = () => {
  // const [pictures, setPictures] = useState([]);

  const landscapeImages = [
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

  const portraitImages = [
    {
      name: "Chasing Waterfalls",
      url: waterfalls,
      orientation: "portrait",
      price: "$25.00"
    },
    {
      name: "Eye to Eye",
      url: eyetoeye,
      orientation: "portrait",
      price: "$25.00"
    },
    {
      name: "Last Light",
      url: lastlight,
      orientation: "portrait",
      price: "$25.00"
    },
    {
      name: "Snake River Overlook",
      url: snakeriver,
      orientation: "portrait",
      price: "$25.00"
    },
    {
      name: "The Archway to the West",
      url: archway,
      orientation: "portrait",
      price: "$25.00"
    },
    {
      name: "The Upside Down",
      url: upsidedown,
      orientation: "portrait",
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
              render={props => <Landscape landscapeImages={landscapeImages} />}
            />
            <Route
              exact
              path='/prints/portrait'
              render={props => <Portrait portraitImages={portraitImages} />}
            />
            <Route exact path='/about' component={About} />
            <Route exact path='/contact' component={Contact} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
