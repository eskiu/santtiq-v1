import React from 'react'
import CV from './assets/CV.pdf'
import Newpage from './assets/NewPage'

function Header() {


    return (
        <header className="header__main__container" id='home'>
            <div className="header__container">
                <div className="header__container__text">
                    <h1 className="header__container__text__title">Hola,</h1>
                    <h1 className='header__container__second__tittle'>Soy Santi,</h1>
                    <h1 className="header__container__text__subtitle">Frontend Developer</h1>
                    <h1 className='tittle-small'>Frontend</h1>
                    <h1 className='tittle-small'>Developer</h1>
                    <div className="buttons-header">
                        <a href="#contact" rel='contact' className='btn-contact mg-right btn-contact-text'>CONTACTAME</a>
                        <a href={CV} rel='contact' className='btn-contact' target={"_blank"}>DESCARGAR CV &nbsp;<Newpage /></a>
                    </div>
                </div>
            </div>
            <div id="wrapper">
                <a id="wrapper-inner" href="#projects">
                    <div id="scroll-down">
                        <span className="arrow-down"></span>
                        <span id="scroll-title">
                            Projects
                        </span>
                    </div>
                </a>
            </div>
        </header>
    )
}

export default Header