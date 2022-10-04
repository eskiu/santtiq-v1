import React from 'react'
import portrait from './assets/IMG_2521.jpg'
import CV from './assets/CV.pdf'
import Newpage from './assets/NewPage'

function About() {
    return (
        <div className="about__main__container" id='about'>
            <div className="about__main">
                <h2 className="about__main__title">Sobre mí.</h2>
                <div className="about__main__info">
                    <p>
                        Apasionado por la tecnología y las experiencias de usuario intuitivas y dinámicas.
                        <br />
                        Estudiando Ingenieria en Sistemas y especializándome en desarrollo web.
                    </p>
                </div>
                <div className="buttons-header">
                    <a href="#contact" rel='contact' className='btn-contact mg-right btn-contact-text'>CONTACTAME</a>
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