import React from "react";
import Me from "../../assets/avatar-1.svg";
import HeaderSocials from "./HeaderSocials";
import "./home.css";
import Scrolldown from "./Scrolldown";
import Shapes from "./Shapes";

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home_img" />
        <h1 className="home_name">KHALID HASAN</h1>
        <span className="home_education">I'm Front-End developer</span>

        <HeaderSocials />

        <Scrolldown />

        <a href="#contact" className="btn">
          Hire Me
        </a>
      </div>

      <Shapes />
    </section>
  );
};

export default Home;
