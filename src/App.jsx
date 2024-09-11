import React from "react";
import { ToastContainer } from "react-toastify";
import "../node_modules/react-toastify/dist/ReactToastify.css";

// Import the components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Project from "./components/Project";
import Skills from "./components/Skills";

const App = () => {
  return (
    <>
      <ToastContainer />
      <Navbar />
      <Hero />
      <Services />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
