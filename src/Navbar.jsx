import React, { useState } from 'react'
import GitHubLogoSVG from './assets/GhLogo'
import LinkedinLogo from './assets/LinkedinLogo'
import LogoSVG from './assets/LogoSVG'
import DarkMode from './DarkMode'

function Navbar() {

  const [active, setActive] = useState("navbar-main-container")
  const [toggleIcon, setToggleIcon] = useState("nav-toggler")

  const navToggle = () => {
    active === "navbar-main-container"
      ? setActive("navbar-main-container nav-active")
      : setActive("navbar-main-container");

    toggleIcon === "nav-toggler"
      ? setToggleIcon("nav-toggler toggle")
      : setToggleIcon("nav-toggler")
  }

  return (
    <>
      <menu className={active}>
        <div className="navbar-logo">
          <a href="#home" onClick={() => setActive("navbar-main-container") & setToggleIcon("nav-toggler")}>
            <LogoSVG />
          </a>
          <span>Santiago</span>
          <span>Quinteros</span>
        </div>
        <div className="navbar-body">
          <div className="navbar-links">
            <a href="#home" onClick={() => setActive("navbar-main-container") & setToggleIcon("nav-toggler")} style={{ color: "#909096" }} id="home-nav">Home</a>
            <a href="#about" onClick={() => setActive("navbar-main-container") & setToggleIcon("nav-toggler")} style={{ color: "#909096" }} id="about-nav">Sobre mi</a>
            <a href="#projects" onClick={() => setActive("navbar-main-container") & setToggleIcon("nav-toggler")} style={{ color: "#909096" }} id="projects-nav">Proyectos</a>
            <a href="#contact" onClick={() => setActive("navbar-main-container") & setToggleIcon("nav-toggler")} style={{ color: "#909096" }} id="contact-nav">Contacto</a>
          </div>
          <div className="navbar-social">
            <a href="https://www.linkedin.com/in/santiquinteros/" target={"_blank"}><LinkedinLogo fill="#909096" onClick={() => setActive("navbar-main-container") & setToggleIcon("nav-toggler")} /></a>
            <a href="https://github.com/santtiq/" target={"_blank"}><GitHubLogoSVG fill="#909096" onClick={() => setActive("navbar-main-container") & setToggleIcon("nav-toggler")} /></a>
          </div>
        </div>
      </menu>
      <div className="toggles">
        <div onClick={navToggle} className={toggleIcon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        <div className="DarkToggle">
          <DarkMode />
        </div>
      </div>
    </>
  )
}

export default Navbar