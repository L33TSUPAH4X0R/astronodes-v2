import React, { useState } from "react";
import NavbarMobile from "./NavbarMobile";

import {
  Nav,
  NavLink,
  Hamburger,
  NavMenu,
  NavBtn,
  Pline,
  Lang,
  Logo,
} from "./NavbarElements";

const Navbar = () => {
  const [extendNavbar, setExtendNavbar] = useState(false);

  const extendNavbarHandler = () => {
    setExtendNavbar((curr) => !curr);
    console.log(extendNavbar);
  };

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
        <Hamburger
          onClick={() => {
            setExtendNavbar((curr) => !curr);
          }}
        />
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
        {extendNavbar && (
          <NavbarMobile extendNavbarHandler={extendNavbarHandler} />
        )}
      </Nav>
    </React.Fragment>
  );
};

export default Navbar;
