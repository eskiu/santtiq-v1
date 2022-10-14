import React, { useEffect } from 'react';
import portrait from './assets/IMG_2521.jpg';
import CV from './assets/CV.pdf';
import Newpage from './assets/NewPage';
import Mailto3 from './assets/Mailto3';
import { useInView } from 'react-intersection-observer';
import ReactLogo from './assets/ReactLogo'
import SassLogo from './assets/SassLogo'
import HtmlLogo from './assets/HtmlLogo'
import JavascriptLogo from './assets/JavascriptLogo'
import Firebase from './assets/Firebase'
import CssLogo from './assets/CssLogo'
import Bootstrap from './assets/bootstrap'

function About() {

    const { ref: ref, inView: inView } = useInView({ threshold: 1 });

    let homeHash = document.querySelector('#home-nav');
    let projectsHash = document.querySelector('#projects-nav');
    let aboutHash = document.querySelector('#about-nav');
    let contactHash = document.querySelector('#contact-nav');

    useEffect(() => {
        if (inView) {
            aboutHash?.classList?.add('violet');
            projectsHash?.classList?.remove('violet')
            contactHash?.classList?.remove('violet');
            homeHash?.classList?.remove('violet');
        }
    }, [inView])

    return (
        <div className="about__main__container" id='about' ref={ref}>
            <div className="about__main">
                <h2 className="about__main__title">Sobre mí.</h2>
                <div className="about__main__info">
                    <p>
                        Apasionado por la tecnología y las experiencias de usuario intuitivas y dinámicas.
                        <br />
                        Estudiando Ingenieria en Sistemas y especializándome en desarrollo web.
                    </p>
                </div>
                <div className="habilidades">
                    <ReactLogo />
                    <JavascriptLogo />
                    <SassLogo />
                    <CssLogo />
                    <HtmlLogo />
                    <Firebase />
                    <Bootstrap />
                </div>
                <div className="buttons-header">
                    <a href="mailto:santiquinteros.j@gmail.com" rel='contact' className='link-mail'>SANTIQUINTEROS.J@GMAIL.COM <Mailto3 /></a>
                    <a href={CV} rel='contact' className='btn-contact' target={"_blank"}>DESCARGAR CV &nbsp;<Newpage /></a>
                </div>
            </div>
            <div className="about__profile-img">
                <img src={portrait} alt="Jorge" />
            </div>
        </div>
    )
}

export default About