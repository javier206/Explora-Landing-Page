import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { menuData } from "../../data/MenuData"

const NavbarLinks = () => {
  return (
    <div>
      {/* <NavMenu> */}
        {/* {menuData.map((item, index) => (
          <NavLink to={item.link} key={index}>
            {item.title}
          </NavLink> */}
      {/* </NavMenu> */}
      <NavLink to="/Place">Lugares</NavLink>
      <NavLink to="/Traveler">Nosotros</NavLink>
      <NavLink to="/Stat">Servicios</NavLink>
      <NavLink to="/Contact">Contacto</NavLink>
    </div>
  )
}

export default NavbarLinks

/* const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;
  @media (max-width: 768px) 
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
` */
const NavLink = styled(Link)`
  text-decoration: none;
  color: #fff;
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