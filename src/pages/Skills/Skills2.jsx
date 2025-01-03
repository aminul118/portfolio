import Marquee from "react-fast-marquee";
import html from "../../assets/skills/html.png";
import css from "../../assets/skills/css.png";
import tailwind from "../../assets/skills/tailwind-css.png";
import daisy from "../../assets/skills/daisy-ui.png";
import JavaScript from "../../assets/skills/JavaScript.png";
import react from "../../assets/skills/react.png";
import reactRouter from "../../assets/skills/react-router-dom.png";
import firebase from "../../assets/skills/firebase.png";
import mongodb from "../../assets/skills/mongodb.png";
import nodeJs from "../../assets/skills/node-js.png";
import expressJs from "../../assets/skills/express-js.png";
import axios from "../../assets/skills/axios.png";
import jwt from "../../assets/skills/jwt.png";

const Skills2 = () => {
  return (
    <div className="container mx-auto flex items-center ">
      <div className="w-36 bg-slate-500 h-36 hidden md:flex items-center justify-center">
        <h1 className="text-3xl text-white">Skills</h1>
      </div>
      <Marquee>
        <img className="w-36" src={html} alt="" />
        <img className="w-36" src={css} alt="" />
        <img className="w-36" src={tailwind} alt="" />
        <img className="w-36" src={daisy} alt="" />
        <img className="w-36" src={JavaScript} alt="" />
        <img className="w-36" src={react} alt="" />
        <img className="w-36" src={reactRouter} alt="" />
        <img className="w-36" src={axios} alt="" />
        <img className="w-36" src={firebase} alt="" />
        <img className="w-36" src={mongodb} alt="" />
        <img className="w-36" src={nodeJs} alt="" />
        <img className="w-36" src={expressJs} alt="" />
        <img className="w-36" src={jwt} alt="" />
      </Marquee>
    </div>
  );
};

export default Skills2;
