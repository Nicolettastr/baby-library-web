import React from "react";

const NavbarLis = (props) => {
  return (
    <>
      <li className={props.class}>
        <a href={props.url}>{props.name}</a>
      </li>
    </>
  );
};

export default NavbarLis;