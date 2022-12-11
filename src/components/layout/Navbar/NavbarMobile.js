import {
  Times,
  Lang,
  Logo,
  Nav,
  NavBtn,
  NavLink,
  NavMenu,
  Pline,
} from "./NavbarMobileElements";
import React from "react";
import Wrapper from "../../Wrapper";

const NavbarMobile = (props) => {
  return (
    <Nav>
      <Times onClick={props.extendNavbarHandler} />
      <NavLink>DENEME</NavLink>
    </Nav>
  );
};

export default NavbarMobile;
