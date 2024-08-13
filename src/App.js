import React from "react";
import "./App.css";
import earthImage from './Assets/earth.png'; 
import Image from './Assets/1542298796.jpg'; 
import natureImage from './Assets/nature.jpg'; 
import cultureImage from './Assets/work culture.png'; 
const App = () => {
  return (
    <div className="app">
      
      <header className="header">
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#download">Download</a>
          <a href="#career">Career</a>
          <a href="#pricing">Pricing</a>
        </nav>
      </header>

      
      <section className="youtube-video">
        <div className="video-placeholder">
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/G9MfYtYEeQs" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen>
          </iframe>
        </div>
      </section>


      
      <section className="building-future">
        <h1>Building the Future</h1>
        <div className="future-background"></div>
      </section>

      
      <section className="features">
        <div className="feature-image">
          <img src={cultureImage} alt="Feature 1" />
        </div>
        <div className="feature-text">
          <h2>
            Features <span className="highlight">Ought</span> <br /> to Partake
          </h2>
        </div>
        <div className="feature-image">
          <img src= {Image} alt="Feature 2" />
        </div>
        <div className="feature-image">
          <img src= {earthImage} alt="Feature 3" />
        </div>
      </section>


    
      <section className="inspiration">
        <div className="inspiration-content">
          <img 
            src={natureImage} 
            alt="Inspiration Background"
            className="inspiration-image"
          />
          <div className="inspiration-text">
            <h2>Every Inspiration from Nature</h2>
            <p>Get started using our services with a 30-day free trial</p>
            <button className="try-button">Try it now</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
