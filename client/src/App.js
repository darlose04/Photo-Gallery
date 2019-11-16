import React, { useState, useCallback } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/App.css";
import { StripeProvider } from "react-stripe-elements";

import Navbar from "./components/layout/Navbar";
// import Footer from "./components/layout/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import AllPictures from "./components/photopages/AllPictures";
import Purchases from "./components/Purchases";
import photos from "./photos";

const App = () => {
  // const [images, setImages] = useState([]);
  const [show, setShow] = useState(false);
  // const [showModal, setShowModal] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <StripeProvider apiKey="pk_test_Afs1Cv9uH1rq7pEMVj4sGkg1008oAeMGRP">
      <Router>
        <div className="App">
          <Navbar
            show={show}
            handleClose={handleClose}
            handleShow={handleShow}
          />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route
                exact
                path="/portfolio"
                render={props => (
                  <AllPictures
                    photos={photos}
                    openLightbox={openLightbox}
                    closeLightbox={closeLightbox}
                    currentImage={currentImage}
                    viewerIsOpen={viewerIsOpen}
                  />
                )}
              />
              <Route exact path="/about" component={About} />
              <Route
                exact
                path="/purchases"
                render={props => <Purchases photos={photos} />}
              />
              <Route exact path="/contact" component={Contact} />
            </Switch>
          </div>
          {/* <Footer /> */}
        </div>
      </Router>
    </StripeProvider>
  );
};

export default App;
