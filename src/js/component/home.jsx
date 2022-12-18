import React from "react";

//COMPONENTS
import Navbar from "./navbar.jsx";
import IntroImage from "./introImage.jsx";
import BigCloud from "./bigCloud.jsx";
import Sun from "./sun.jsx";
import Info from "./info.jsx";
import LittleCloud from "./littleCloud.jsx";
import MediumCloud from "./mediumCloud.jsx";
import FarmImages from "./farmImages.jsx";

//IMAGES
import koala from "../../img/personajes/koala.png";
import sol from "../../img/personajes/sol.png";
import vaca from "../../img/personajes/vaca2.png";
import girasolBtn from "../../img/personajes/girasolBtn.png";

//JSON files
import dataCloud from "../dataCloud.json"
import dataNav from "../dataNav.json";
import dataLittleCloud from "../dataLittleCloud.json"
import dataInfo from "../dataInfo.json"
import dataFarm from "../dataFarm.json"
import dataBoton from "../dataBoton.json"

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
    <section className="lets-go-section">
      <FarmImages dataFarm={dataFarm} vaca={vaca} girasolBtn={girasolBtn} boton={dataBoton}/>
    </section>
	  </main>
    </>
  );
};

export default Home;
