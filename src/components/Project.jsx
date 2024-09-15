import React from "react";
import p1_img from "../assets/p1.png";
import p2_img from "../assets/p2.png";
import p3_img from "../assets/p3.png";

const defaultProjects = [
  {
    img: p1_img,
    title: "BD Cloths Store",
    content:
      " An eCommerce platform featuring a dynamic user interface and a robust product catalog, built using React and Node.js.",
    link: "https://bd-cloths-shop.onrender.com/",
  },
  {
    img: p2_img,
    title: "TechCluder Corporate Website",
    content:
      "A tech community website offering resources, blogs, and user interaction features, built using the MERN stack.",
    link: "https://college-project-lf8l.onrender.com/",
  },
  {
    img: p3_img,
    title: "BD Food Store",
    content:
      "An online food delivery platform providing seamless ordering and tracking features, developed using React and MongoDB.",
    link: "https://bd-food-shop-frontend.onrender.com/",
  },
];

const Project = () => {
  return (
    <div className="container" id="projects">
      <div id="head">
        <h1 className="text-center fw-bold">Latest Projects</h1>
        <p className="small m-auto">
          Here are a few of my recent web development projects, showcasing my
          skills in building scalable, responsive, and user-friendly
          applications.
        </p>
      </div>

      <div className="projects mt-5">
        {defaultProjects.map((item, index) => {
          return (
            <a
              href={item.link}
              target="_blank"
              className="sample me-2 me-sm-0"
              key={index}
            >
              <div className="project">
                <div className="layer"></div>
                <img src={item.img} alt="" />
                <div className="project-body">
                  <h3 className="fw-bold">{item.title}</h3>
                  <p>{item.content}</p>
                </div>
              </div>
            </a>
          );
        })}
      </div>
      <div className="w-100 m-auto text-center mt-5">
        <a
          href="https://github.com/ayaj-uddin-24?tab=repositories"
          className="btn btn-primary"
          target="_blank"
        >
          See more
        </a>
      </div>
    </div>
  );
};

export default Project;
