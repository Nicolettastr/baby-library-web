import React from "react";
import NavbarLis from "./navbarLis.jsx";

const Navbar = (props) => {
  const data = props.dataNav.map((element, index) => {
    return (
      <NavbarLis
        key={index}
        class={element.class}
        url={element.url}
        name={element.name}
      />
    );
  });

  return (
    <>
        <nav className="main-nav">
          <figure className="nav-figure">
            <img src={props.koala} alt="logo de koala" />
          </figure>
          <div className="ul-container">
            <ul className="menu active" id="menu">
              {data}
            </ul>
          </div>
        </nav>
    </>
  );
};

export default Navbar;
