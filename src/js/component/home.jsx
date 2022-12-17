import React from "react";

//COMPONENTS
import Navbar from "./navbar.jsx";
import IntroImage from "./introImage.jsx";
import BigCloud from "./bigCloud.jsx";
import Sun from "./sun.jsx";
import Info from "./info.jsx";
import LittleCloud from "./littleCloud.jsx";

//IMAGES
import koala from "../../img/personajes/koala.png";
import sol from "../../img/personajes/sol.png"

//JSON files
import dataCloud from "../dataCloud.json"
import dataNav from "../dataNav.json";
import dataLittleCloud from "../dataLittleCloud.json"
import dataInfo from "../dataInfo.json"
import MediumCloud from "./mediumCloud.jsx";

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
      <Sun sun={sol}/>
      <BigCloud class="place" dataCloud={dataCloud}/>
      <MediumCloud/>
      <LittleCloud class="place" dataLittleCloud={dataLittleCloud}/>
      <Info dataInfo={dataInfo}/>
		</section>
	  </main>
    </>
  );
};

export default Home;
