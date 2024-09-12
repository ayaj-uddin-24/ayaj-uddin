import React from "react";
import fullStack_img from "../assets/fullstack.svg";
import dataSciencs_img from "../assets/data_science.svg";

const Services = () => {
  return (
    <div className="container" id="services">
      <div id="head">
        <h1 className="text-center fw-bold">Services</h1>
        <p className="small m-auto">
          Here is a simple description of my services that I provide.
        </p>
      </div>
      <div className="row align-items-center mt-5 pt-5">
        <div className="col-12 col-md-6">
          <img src={fullStack_img} className="img-fluid" alt="" />
        </div>
        <div className="col-12 col-md-6 mt-4 mt-md-0">
          <h2 className="pb-4">MERN Stack Web Development</h2>

          <div className="list">
            <p>⚡ Building responsive website front end using React-Redux</p>
            <p>
              ⚡ Developing full stack applications using React JS and Node JS
            </p>
            <p>⚡ Creating website backend in Node, Express & MongoDB</p>
          </div>
        </div>
      </div>
      <div className="row align-items-center pt-5 mt-md-5" id="web-design">
        <div className="col-12 col-md-6">
          <h2 className="pb-4">Front End Website Design</h2>

          <div className="list">
            <p>
              ⚡ creates the visual appearance and user experience of websites
            </p>
            <p>
              ⚡ Use design tools to create layouts, color schemes, and
              typography.
            </p>
            <p>
              ⚡ ensure that the website is easy to navigate and visually
              appealing on different devices.
            </p>
          </div>
        </div>
        <div className="col-12 col-md-6 mt-4 mt-md-0">
          <img src={dataSciencs_img} className="img-fluid" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Services;
