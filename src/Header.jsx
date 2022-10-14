import React from 'react'
import CV from './assets/CV.pdf'
import Newpage from './assets/NewPage'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

function Header() {

    const { ref: ref, inView: inView } = useInView({ threshold: 1 });
    let homeHash = document.querySelector('#home-nav');
    let projectsHash = document.querySelector('#projects-nav');
    let aboutHash = document.querySelector('#about-nav')
    let contactHash = document.querySelector('#contact-nav');

    useEffect(() => {
        if (inView) {
            homeHash.classList.add('violet')
            projectsHash?.classList?.remove('violet');
            aboutHash?.classList?.remove('violet');
            contactHash?.classList?.remove('violet');
        }
    }, [inView])

    return (
        <header className="header__main__container" id='home' ref={ref}>
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
            <div className='wrapper'>
                <a href="#projects" className='wrapper-inner'>
                    <div className='scroll-down'>
                        <span className="arrow-down"></span>
                        <span className='scroll-title'>
                            Projects
                        </span>
                    </div>
                </a>
            </div>
        </header>
    )
}

export default Header