import React from "react";
import koala from "../../img/personajes/koala.png";
import Navbar from "./navbar.jsx";
import dataNav from "../dataNav.json";
import IntroImage from "./introImage.jsx";

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
			
		</section>
	  </main>
    </>
  );
};

export default Home;
