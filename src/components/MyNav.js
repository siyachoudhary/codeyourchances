import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import "./MyNav.css"

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { useState, useEffect, useRef } from "react";
import { NavDropdown } from "react-bootstrap";

export const MyNav = () => {
  
  const [navOpen, setNavOpen] = useState(false);

  const windowSize = useRef([window.innerWidth, window.innerHeight]);

  const [y, setY] = useState(0);

  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const showDropdown = (e)=>{
      setShow(!show);
  }
  const hideDropdown = e => {
      setShow(false);
  }

  const checkOpen = e => {
    if(window.innerWidth<991){
      if(show){
        setShow(false);
      }else{
        setShow(!show);
      }
    }
  }

  const checkOpen2 = e => {
    if(window.innerWidth<991){
      if(show2){
        setShow2(false);
      }else{
        setShow2(!show);
      }
    }
  }

  const handleNavigation = (e) => {

    const window = e.currentTarget;
    

    if (y > window.scrollY || y < window.scrollY) {

      if (window.innerWidth <= 991 && document.getElementById("responsive-navbar-nav").classList.contains("show")) {

        document.getElementById("responsive-navbar-nav").classList.remove("show");
        document.getElementById("toggle_btn").classList.remove("open");
        setNavOpen(navOpen => !navOpen);

      }

      else if (window.innerWidth > 991 && document.getElementById("responsive-navbar-nav").classList.contains("show")) {

        document.getElementById("responsive-navbar-nav").classList.remove("show");

      }

    }

    setY(window.y);

  };

  // const handleClickOutside = () => {

  //   if (window.innerWidth <= 991 && document.getElementById("responsive-navbar-nav").classList.contains("show")) {

  //     document.getElementById("responsive-navbar-nav").classList.remove("show");
  //     document.getElementById("toggle_btn").classList.remove("open")
  //     setNavOpen(navOpen => !navOpen)

  //   }

  //   setY(window.y);

  // };

  

  useEffect(() => {

    setY(window.scrollY);
    window.addEventListener("scroll", (e) => handleNavigation(e));

    if (windowSize.current[0] <= 991) {

      document.getElementById("responsive-navbar-nav").classList.add("collapsing");
      document.getElementById("responsive-navbar-nav").classList.remove("collapse");

    }

  }, []);

  const toggleNav = () => {

    if (windowSize.current[0] <= 991) {

      document.getElementById("responsive-navbar-nav").classList.add("collapsing");

      if (!navOpen) {

        document.getElementById("toggle_btn").classList.add("open")
        document.getElementById("responsive-navbar-nav").classList.add("show");

      }
      
      else {

        document.getElementById("toggle_btn").classList.remove("open")
        document.getElementById("responsive-navbar-nav").classList.remove("show");

      }

      setNavOpen(navOpen => !navOpen);

    }

  }

  return (

    <div>
      
        <Navbar collapseOnSelect expand = "lg" variant = "light" className = "myNavbar fixed-top" >

          <Container>
          <Navbar.Brand href = "/codeyourchances/"> <img src = {process.env.PUBLIC_URL + "/images/logo.png"} alt = "CYC" className = "Shadowed Col" /> </Navbar.Brand>

            <button className = "navbar-toggler second-button toggleBtn" type = "button" data-toggle = "collapse" data-target = "#responsive-navbar-nav"
              aria-controls = "responsive-navbar-nav" aria-expanded = "false" aria-label = "Toggle navigation" onClick = {toggleNav}>
              <div className = "animated-icon2" id = {"toggle_btn"}><span></span><span></span><span></span><span></span></div>
            </button>
            

            <Navbar.Collapse id = "responsive-navbar-nav" className = "navbar-collapse">

              <Nav className = "me-auto" />

              <Nav className = "links">

                <CustomLink href = {"/codeyourchances/"}>Home</CustomLink>
                <CustomLink href = {"/codeyourchances/about"}>About</CustomLink>
                <CustomLink href = {"/codeyourchances/apps"}>CYC Apps</CustomLink>
                {/* <CustomLink href = {"/cyc-website/team"}>Team</CustomLink> */}
                <NavDropdown show={show}
                  onMouseEnter={() => setShow(!show)} 
                  onMouseLeave={() => setShow(false)} 
                  onClick={checkOpen}
                  title="Team" id="collasible-nav-dropdown" 
                  className={"navItem"} 
                  to="/codeyourchances/team">

                  <NavDropdown.Item href="/codeyourchances/team">The CYC Team</NavDropdown.Item>
                  <NavDropdown.Divider />
                  {/* <NavDropdown.Item href="/cyc-website/team#youthBoard" smooth>Youth Leadership Board</NavDropdown.Item>
                  <NavDropdown.Divider /> */}
                  <NavDropdown.Item href="/codeyourchances/apply">Apply</NavDropdown.Item>
                </NavDropdown>
                {/* <CustomLink href = {"/codeyourchances/projects"}>Projects</CustomLink> */}
                <NavDropdown show={show2}
                  onMouseEnter={() => setShow2(!show)} 
                  onMouseLeave={() => setShow2(false)} 
                  onClick={checkOpen2}
                  title="Projects" id="collasible-nav-dropdown" 
                  className={"navItem"} 
                  to="/codeyourchances/team">

                  <NavDropdown.Item href="/codeyourchances/projects">All Projects</NavDropdown.Item>
                  <NavDropdown.Divider />
                  {/* <NavDropdown.Item href="/cyc-website/team#youthBoard" smooth>Youth Leadership Board</NavDropdown.Item>
                  <NavDropdown.Divider /> */}
                  <NavDropdown.Item href="/codeyourchances/film-festivals">Film Festivals</NavDropdown.Item>
                </NavDropdown>

                <CustomLink href = {"/codeyourchances/donate"}>Donate</CustomLink>

              </Nav>

            </Navbar.Collapse>

          </Container>

        </Navbar>   

    </div>

  )

  function CustomLink({href, children, ...props}){
    const path = window.location.pathname
    return (
        path === href ?
        <Nav.Link href={href} {...props} className={"active navItem"}>{children}</Nav.Link>:
            <Nav.Link href={href} {...props} className={"navItem"}>{children}</Nav.Link>
    )

  }

}
