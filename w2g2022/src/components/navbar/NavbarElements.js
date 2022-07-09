import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  background: #5860a8;
  height: 85px;
  display: flex;
  justify-content:flex-end;
  padding: 0.2rem calc((100vw - 1000px) / 20);
  z-index: 12;
`;

export const NavLink = styled(Link)`
  color: #ffffff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #cccdcf;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #808080;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu1 = styled.div`

height: 85px;
display: flex;
justify-content:flex-start;
align-items: center;
padding: 0.2rem calc((100vw - 1000px) / 20);
z-index: 12;
`;
export const NavMenu2 = styled.div`
height: 85px;
display: flex;
justify-content:flex-end;
align-items: center;
padding: 0.2rem calc((100vw - 1000px) / 20);
z-index: 12;
`;
