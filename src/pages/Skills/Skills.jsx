import React from "react";

const Skills = () => {
  return (
    <aside>
      <h1 className="text-2xl py-3">Skills</h1>
      <div>
        <p>Html</p>
        <progress
          className="progress progress-success w-full"
          value="95"
          max="100"
        ></progress>
        <p>CSS</p>
        <progress
          className="progress progress-success w-full"
          value="90"
          max="100"
        ></progress>
        <p>Tailwind CSS</p>
        <progress
          className="progress progress-success w-full"
          value="90"
          max="100"
        ></progress>
        <p>JavaScript</p>
        <progress
          className="progress progress-success w-full"
          value="90"
          max="100"
        ></progress>
        <p>ES6</p>
        <progress
          className="progress progress-success w-full"
          value="90"
          max="100"
        ></progress>
        <p>React js</p>
        <progress
          className="progress progress-success w-full"
          value="90"
          max="100"
        ></progress>
        <p>Node js</p>
        <progress
          className="progress progress-success w-full"
          value="90"
          max="100"
        ></progress>
        <p>Express js</p>
        <progress
          className="progress progress-success w-full"
          value="90"
          max="100"
        ></progress>
        <p>Mongo DB</p>
        <progress
          className="progress progress-success w-full"
          value="90"
          max="100"
        ></progress>
      </div>
    </aside>
  );
};

export default Skills;
