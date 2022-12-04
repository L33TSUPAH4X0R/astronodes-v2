import React from "react";

import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  Pline,
  Lang,
  Logo,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <React.Fragment>
      <Nav>
        <Logo href="/">
          <img
            src={require("../../../assets/logo.png")}
            alt="ASTRONODES"
            width="90px"
            height="90px"
          />
          <h1 style={{ marginLeft: "10px" }}>ASTRONODES</h1>
        </Logo>
        <Bars />
        <NavMenu>
          <NavLink to="/">
            <h1>Home</h1>
          </NavLink>
          <NavLink to="/projects">
            <h1>Projects</h1>
          </NavLink>
          <NavLink to="/team">
            <h1>Team</h1>
          </NavLink>
          <NavLink to="/stake">
            <h1>Staking</h1>
          </NavLink>
          <NavLink to="/explorer">
            <h1>Explorer</h1>
          </NavLink>
        </NavMenu>
        <NavBtn>
          <Lang>EN</Lang>
          <Pline />
          <Lang>TR</Lang>
        </NavBtn>
      </Nav>
    </React.Fragment>
  );
};

export default Navbar;
