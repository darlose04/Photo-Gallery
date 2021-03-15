import React from "react";
import "../styles/About.css";
import Headshot from "../photos/FullSizeRender.jpg";

const About = () => {
  const cardStyle = {
    maxWidth: 1100,
    backgroundColor: "rgba(0,0,0,0.8)",
    fontSize: "1.02rem",
  };

  return (
    <div className="mt-3">
      <div className="card about pl-2" style={cardStyle}>
        <div className="row no-gutters">
          <div className="col-md-6">
            <img
              className="header rounded float-left mt-4 ml-2 mb-3"
              src={Headshot}
              alt="headshot"
            />
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h2 className="card-title card-about">About Logan</h2>
              <p className="card-text about-p">
                My name is Logan Wilson and I am just a thirty-something trying
                to turn my hobby of photography into something more. I have my
                dad to thank for getting me interested in photography at a young
                age. Every family vacation, holiday, birthday, and sporting
                event, my dad would be the photographer. Capturing those moments
                was important to my dad, no matter how much my brother and I
                complained while posing for the thousandth picture on one of our
                childhood vacations. As I got older though, I began to
                appreciate what my dad did and why he did it. Capturing a moment
                is something special. Even the best of memories will fade with
                age, but a picture can spark that memory and bring back all the
                feelings that come with it. There is nothing more magical than
                freezing a moment in time and being able to keep it forever.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="card mt-2" style={cardStyle}>
        <div className="card-body">
          <h3 className="card-title text-white">
            <u>Production Partners</u>
          </h3>
          <ul className="card-text list-unstyled">
            <li>
              <h5>
                <strong>
                  <a className="text-white" href="https://www.bayphoto.com/">
                    Bay Photo Lab
                  </a>
                </strong>
              </h5>
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i> Scotts Valley, CA
            </li>
            <li>
              Bay Photo Lab handles all of my printing needs. I chose Bay Photo
              Lab because they offer high quality prints with excellent
              craftsmanship at a reasonable price.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
