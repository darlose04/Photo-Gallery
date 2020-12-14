import React, { useState, useCallback, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/App.css";
import axios from "axios";

import Navbar from "./components/layout/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import AllPictures from "./components/photopages/AllPictures";
import Purchases from "./components/Purchases";

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [show, setShow] = useState(false);
  // const [showModal, setShowModal] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const getPhotos = async () => {
    const res = await axios.get(
      "https://lcwphotography.herokuapp.com/images/files"
      // "http://localhost:3003/images/files"
    );

    let photoArr = [];

    for (var i = 0; i < res.data.length; i++) {
      let newObj = {
        id: res.data[i]._id,
        name: res.data[i].title,
        src: `https://lcwphotography.herokuapp.com/images/image/${res.data[i].file.filename}`,
        width: res.data[i].width,
        height: res.data[i].height,
      };

      photoArr.unshift(newObj);
    }

    setPhotos(photoArr);
  };

  useEffect(() => {
    getPhotos();
  }, []);

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
    <Router>
      <div className="App">
        <Navbar show={show} handleClose={handleClose} handleShow={handleShow} />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/portfolio"
              render={(props) => (
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
              render={(props) => <Purchases photos={photos} />}
            />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </div>
        {/* <Footer /> */}
      </div>
    </Router>
  );
};

export default App;
