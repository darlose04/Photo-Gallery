import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import "./App.css";

import Header from "./components/layout/Header";
// import Footer from "./components/layout/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import AllPictures from "./components/photopages/AllPictures";

// landscape image imports
import cottoncandy from "./LoganPhotos/CottonCandySunrise.jpg";
import railroad from "./LoganPhotos/DesertedRailroad.jpg";
import grandspring from "./LoganPhotos/GrandPrismaticSpring.jpg";
import loneeagle from "./LoganPhotos/LoneEagleSunset.jpg";
import giantshoulders from "./LoganPhotos/OntheShouldersofGiants.jpg";
import reflections from "./LoganPhotos/Reflections.jpg";
import rustic from "./LoganPhotos/RusticBarn.jpg";
import schwabacher from "./LoganPhotos/SchwabacherSunrise.jpg";
import swissamerica from "./LoganPhotos/SwitzerlandofAmerica.jpg";
import teton from "./LoganPhotos/TetonSunrise.jpg";
import hazybells from "./LoganPhotos/TheHazyBells.jpg";
import flatirons from "./LoganPhotos/TheMajesticFlatirons.jpg";
import windowwest from "./LoganPhotos/TheWindowToTheWest.jpg";

// portrait image imports
import waterfalls from "./LoganPhotos/ChasingWaterfalls.jpg";
import eyetoeye from "./LoganPhotos/EyeToEye.jpg";
import lastlight from "./LoganPhotos/LastLight.jpg";
import snakeriver from "./LoganPhotos/SnakeRiverOverlook.jpg";
import archway from "./LoganPhotos/TheArchwayToTheWest.jpg";
import upsidedown from "./LoganPhotos/TheUpsideDown.jpg";

const App = () => {
  const [pictures, setPictures] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const photos = [
    {
      id: 1,
      name: "Cotton Candy Sunrise",
      src: cottoncandy,
      orientation: "landscape",
      price: "$25.00",
      width: 4,
      height: 3
    },
    {
      id: 2,
      name: "Deserted Railroad",
      src: railroad,
      orientation: "landscape",
      price: "$25.00",
      width: 4,
      height: 3
    },
    {
      id: 3,
      name: "Snake River Overlook",
      src: snakeriver,
      orientation: "portrait",
      price: "$25.00",
      width: 3,
      height: 4
    },
    {
      id: 4,
      name: "Grand Prismatic Spring",
      src: grandspring,
      orientation: "landscape",
      price: "$25.00",
      width: 4,
      height: 3
    },
    {
      id: 5,
      name: "Lone Eagle Sunset",
      src: loneeagle,
      orientation: "landscape",
      price: "$25.00",
      width: 4,
      height: 3
    },
    {
      id: 6,
      name: "On the Shoulders of Giants",
      src: giantshoulders,
      orientation: "landscape",
      price: "$25.00",
      width: 4,
      height: 3
    },
    {
      id: 7,
      name: "Reflections",
      src: reflections,
      orientation: "landscape",
      price: "$25.00",
      width: 4,
      height: 3
    },
    {
      id: 8,
      name: "Chasing Waterfalls",
      src: waterfalls,
      orientation: "portrait",
      price: "$25.00",
      width: 3,
      height: 4
    },

    {
      id: 9,
      name: "Last Light",
      src: lastlight,
      orientation: "portrait",
      price: "$25.00",
      width: 3,
      height: 4
    },

    {
      id: 10,
      name: "Rustic Barn",
      src: rustic,
      orientation: "landscape",
      price: "$25.00",
      width: 4,
      height: 3
    },
    {
      id: 11,
      name: "The Archway to the West",
      src: archway,
      orientation: "portrait",
      price: "$25.00",
      width: 3,
      height: 4
    },
    {
      id: 12,
      name: "Schwabacher Sunrise",
      src: schwabacher,
      orientation: "landscape",
      price: "$25.00",
      width: 4,
      height: 3
    },
    {
      id: 13,
      name: "Eye to Eye",
      src: eyetoeye,
      orientation: "portrait",
      price: "$25.00",
      width: 3,
      height: 4
    },
    {
      id: 14,
      name: "Switzerland of America",
      src: swissamerica,
      orientation: "landscape",
      price: "$25.00",
      width: 4,
      height: 3
    },
    {
      id: 15,
      name: "The Upside Down",
      src: upsidedown,
      orientation: "portrait",
      price: "$25.00",
      width: 3,
      height: 4
    },
    {
      id: 16,
      name: "Teton Sunrise",
      src: teton,
      orientation: "landscape",
      price: "$25.00",
      width: 4,
      height: 3
    },
    {
      id: 17,
      name: "The Hazy Bells",
      src: hazybells,
      orientation: "landscape",
      price: "$25.00",
      width: 4,
      height: 3
    },
    {
      id: 18,
      name: "The Majestics Flatirons",
      src: flatirons,
      orientation: "landscape",
      price: "$25.00",
      width: 4,
      height: 3
    },
    {
      id: 19,
      name: "The Window to the West",
      src: windowwest,
      orientation: "landscape",
      price: "$25.00",
      width: 4,
      height: 3
    }
  ];

  return (
    <Router>
      <div className='App'>
        <Header show={show} handleClose={handleClose} handleShow={handleShow} />
        <div className='container'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route
              exact
              path='/portfolio'
              render={props => <AllPictures photos={photos} />}
            />
            <Route exact path='/about' component={About} />
            <Route exact path='/contact' component={Contact} />
          </Switch>
        </div>
        {/* <Footer /> */}
      </div>
    </Router>
  );
};

export default App;
