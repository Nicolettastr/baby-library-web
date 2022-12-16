import React from "react";

const BigCloud = (props) => {
  const cloud = props.dataCloud.map((item, index) => {
    return (
      <div className={`cloudAnimation ${item.section}`} key={index}>
        <div className={`upSection-cloud ${props.class} ${item.classOne} `} ></div>
        <div className={`downSection-cloud ${props.class} ${item.classTwo}`}></div>
      </div>
    )
  });

  return (
    <>
      {cloud}
    </>
  );
};

export default BigCloud;
