import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export const Nav = styled.nav`
  background: #f7f4f5;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1200px) / 2);
  z-index: 999;
  position: fixed; /* Set the navbar to fixed position */
  width: 100%; /* Full width */
  font-size: 12px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 8%);
`;

export const NavLink = styled(Link)`
  color: #000000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: #b70404;
  }

  &:hover {
    transition: all 0.5s ease-in-out;
    color: #858585;
  }
`;

export const Logo = styled.a`
  color: #000000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 113%;
  cursor: pointer;
`;

export const Hamburger = styled(FaBars)`
  display: none;
  color: #423f3f;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;

    &:hover {
      transition: all 0.5s ease-in-out;
      color: #858585;
    }
  }
`;
export const Times = styled(FaTimes)`
  display: none;
  color: #423f3f;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;

    &:hover {
      transition: all 0.5s ease-in-out;
      color: #858585;
    }
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 960px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 960px) {
    display: none;
  }
`;

export const Lang = styled.a`
  color: #000000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:active {
    color: yellow;
  }
`;

export const Pline = styled.hr`
  transform: rotate(90deg);
  width: 50px;
`;
