import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Programs from "./Components/Programs/Programs";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";

const App = () => {
  const [playVideo, setplayVideo] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subtitle="Our Program" title="What We Offer"></Title>
        <Programs />
        <About setplayVideo={setplayVideo}></About>
        <Title subtitle="Gallery" title="Campus Photos"></Title>
        <Campus />
        <Title subtitle="Testimonials" title="What Students Says"></Title>
        <Testimonials />
        <Title subtitle="Contact Us" title="Get in Touch"></Title>
        <Contact />
        <Footer />
      </div>
      <VideoPlayer playVideo={playVideo} setplayVideo={setplayVideo} />
    </div>
  );
};

export default App;
