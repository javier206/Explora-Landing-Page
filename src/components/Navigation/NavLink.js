import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const NavLinks = () => {
  return (
    <div>
      <NavLink to="/Place">Lugares</NavLink>
      <NavLink to="/Traveler">Nosotros</NavLink>
      <NavLink to="/Stat">Servicios</NavLink>
      <NavLink to="/Contact">Contacto</NavLink>
    </div>
  )
}

export default NavLinks

const NavLink = styled(Link)`
  text-decoration: none;
  color: #000;
  font-size: 1.2rem;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: goldenrod;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: goldenrod;
    ::after {
      width: 100%;
    }
  }

  @media screen and (max-width:768px){
    display: block;
    margin: 10vh;
    font-size: 1.5rem;
  }
`