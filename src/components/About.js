import React from "react";
import '../styles/About.css'


const About = () => {
  const cardStyle = {
    maxWidth: 1050
  };

  return (
    <div className='mt-3'>
      <div className='card about' style={cardStyle}>
        <div className='row no-gutters'>
          <div className='col-md-6'>
            <img
              className='header rounded float-left mt-4 ml-2'
              src='http://lcwphotos.imgix.net/FullSizeRender.jpg'
              alt='headshot'
            />
          </div>
          <div className='col-md-6'>
            <div className='card-body'>
              <h2 className='card-title'>About Logan</h2>
              <p className='card-text'>
                My name is Logan Wilson and I am just a twenty-something trying
                to turn my hobby of photography into something more. I have my
                dad to thank for getting me interested in photography at a young
                age. Every family vacation, holiday, birthday, and sporting
                event, my dad would be the photographer. Capturing those moments
                was important to my dad, no matter how much my brother and I
                complained while posing for the thousandth picture on one of our
                childhood vacations. As I got older though, I began to
                appreciate what my dad did and why he did it. Capturing a moment
                is something special. Even the best of memories will ade with
                age, but a picture can spark that memory and bring back all the
                feelings that come with it. There is nothing more magical than
                freezing a moment in time and being able to keep it forever.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
