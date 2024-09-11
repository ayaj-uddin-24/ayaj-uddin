import React from "react";
import p1_img from "../assets/p1.png";
import p2_img from "../assets/p2.png";
import p3_img from "../assets/p3.png";

const defaultProjects = [
  {
    img: p1_img,
    title: "BD Cloths Store",
    content: "This is cloths store using MERN Stack",
    link: "https://bd-cloths-shop.onrender.com/",
  },
  {
    img: p2_img,
    title: "TechCluder Corporate Website",
    content: "This is a simple corporate website using MERN Stack",
    link: "https://college-project-lf8l.onrender.com/",
  },
  {
    img: p3_img,
    title: "BD Food Store",
    content: "This is BD food ordering website using React JS",
    link: "https://bd-food-shop-frontend.onrender.com/",
  },
];

const Project = () => {
  return (
    <div className="container" id="projects">
      <div id="head">
        <h1 className="text-center fw-bold">Latest Projects</h1>
        <p className="small m-auto">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
          quam dignissimos neque nostrum magnam! Minus omnis similique quaerat
          placeat enim?
        </p>
      </div>

      <div className="projects mt-5">
        {defaultProjects.map((item, index) => {
          return (
            <a href={item.link} target="_blank" className="sample me-2 me-sm-0" key={index}>
              <div className="project">
                <div className="layer"></div>
                <img src={item.img} alt="" />
                <div className="project-body">
                  <h3>{item.title}</h3>
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
          className="btn btn-outline-primary"
          target="_blank"
        >
          See more
        </a>
      </div>
    </div>
  );
};

export default Project;
