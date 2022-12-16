import React from "react";
import koala from "../../img/personajes/koala.png";
import Navbar from "./navbar.jsx";
import dataNav from "../dataNav.json";
import IntroImage from "./introImage.jsx";
import BigCloud from "./bigCloud.jsx";

//create your first component
const Home = () => {
  return (
    <>
      <header>
        <Navbar koala={koala} dataNav={dataNav} />
      </header>
	  <main>
		<section className="intro">
			<IntroImage/>
		</section>
		<section className="info-section">
			<h2>Aprende y juega</h2>
      <BigCloud/>
		</section>
	  </main>
    </>
  );
};

export default Home;
