import React, { useState } from "react";
import Navbar from "./componets/Navbar/Navbar";
import Hero from "./componets/Hero/Hero";
import Programs from "./componets/Programs/Programs";
import Title from "./componets/Title/Title";
import About from "./componets/About/About";
import Campus from "./componets/Campus/Campus";
import Testimonials from "./componets/Testimonials/Testimonials";
import Contact from "./componets/Contact/Contact";
import Footer from "./componets/Footer/Footer";
import VideoPlayer from "./componets/VideoPlayer/VideoPlayer";

const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="Our MOVIES" title="What We Offer" />
        <Programs />
        <About setPlayState={setPlayState} />
        <Title subTitle="Gallery" title="Movies Photoes" />
        <Campus />
        <Title subTitle="TESTIMONIALS" title="What Directors Says" />
        <Testimonials />
        <Title subTitle="Contact Us" title="Get in Touch" />
        <Contact />
        <Footer />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  );
};

export default App;
