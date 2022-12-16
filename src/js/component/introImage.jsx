import React from "react";
import safa from "../../img/portadaIntro/safa.jpg";
import welcome from "../../img/portadaIntro/welcome.png"

const IntroImage = () => {
  return (
    <>
      <div className="intro-img-container">
        <figure className="intro-figure">
          <img src={safa} alt="Safary intro image" />
        </figure>
        <figure className="intro-welcome">
            <img src={welcome} alt="welcome!" />
        </figure>
      </div>
    </>
  );
};

export default IntroImage;
