/* import * as React from "react" */
import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FaBars } from "react-icons/fa"
import NavbarLinks from "./NavLink.js"

const Navitation = () => {
  const [NavbarOpen, setNavbarOpen] = useState(false)
  return (
    <Nav>
      <NavLink to="/">EXPLORA</NavLink>
      <NavToggle
        NavbarOpen={NavbarOpen}
        onClick={() => setNavbarOpen(!NavbarOpen)}
      >
        {NavbarOpen ? <Bars open /> : <Bars />}
      </NavToggle>
      {NavbarOpen ? (
        <Navbox>
          <NavbarLinks />
        </Navbox>
      ) : (
        <Navbox open>
          <NavbarLinks />
        </Navbox>
      )}

      {/* <NavBtn>
        <Button primary="true" round="true" to="/trips">
          Book a flight
        </Button>
      </NavBtn> */}
    </Nav>
  )
}

export default Navitation

const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 100;
  position: relative;
`
const NavLink = styled(Link)`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`

const Bars = styled(FaBars)`
background-color: #000Navitation;
width: 30px;
height: 30px;
transition: all .3s linear;
align-self: center;
position: relative;
transform: ${props => (props.open ? "rotate(-90deg)" : "inherit")};

::before,
::after {
  width: 30px;
  height: 30px;
  background-color: #fff;
  content: "";
  position: absolute;
  transition: all 0.3s linear;
}

::before {
  transform: ${props =>
    props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
  top: -10px;
}

::after {
  opacity: ${props => (props.open ? "0" : "1")};
  transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
  top: 10px;

`
const Navbox = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    padding-top: 7vh;
    background-color: rgba(0,0,0,0.5);
    transition: all 0.3s ease-in;
    top: 8vh;
    left: ${props => (props.open ? "-100%" : "0")};
  }
`

const NavToggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 0 10vw;

  @media (max-width: 768px) {
    display: flex;
    margin-right: 1rem;
  }
`
const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 768px) {
    display: none !important;
  }
`
