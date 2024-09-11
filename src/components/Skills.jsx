import React from "react";

const defaultSkills = [
  {
    name: "HTML",
    percantage: "90%",
  },
  {
    name: "CSS",
    percantage: "85%",
  },
  {
    name: "Javascript",
    percantage: "75%",
  },
  {
    name: "React",
    percantage: "70%",
  },
  {
    name: "Node JS",
    percantage: "60%",
  },
  {
    name: "Express JS",
    percantage: "60%",
  },
  {
    name: "MongoDB",
    percantage: "90%",
  },
];

const Skills = () => {
  return (
    <div className="container" id="skills">
      <div id="head">
        <h1 className="text-center fw-bold">Skills</h1>
        <p className="small m-auto">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
          quam dignissimos neque nostrum magnam! Minus omnis similique quaerat
          placeat enim?
        </p>
      </div>

      <div className="skills row mt-5 g-4">
        {defaultSkills.map((item, index) => {
          return (
            <div key={index} className="skill col-12 col-sm-6 pe-4 pe-sm-5">
              <div className="d-flex justify-content-between pb-2">
                <span>{item.name}</span>
                <span>{item.percantage}</span>
              </div>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="0"
                  style={{ width: item.percantage }}
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
