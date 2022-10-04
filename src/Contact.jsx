import React from 'react'
import LinkedinXL from './assets/LinkedinXL'

function Contact() {
    return (
        <div className="contact__main__container" id='contact'>
            <div className="contact__main">
                <h2 className="contact__main__title">Contacto.</h2>
                <div className="contact__main__info">
                    <form action="https://formspree.io/f/xnqoqzjy" method="POST">
                        <div className="contact__main__info__form">
                            <div className='wrap-input'>
                                <input type="email" name="email" id="email" className='input' required />
                                <span className="focus-input" placeholder='EMAIL:'></span>
                            </div>
                            <div className='wrap-input'>
                                <input type="text" name="name" id="name" className='input' required />
                                <span className="focus-input" placeholder='NOMBRE:'></span>
                            </div>
                        </div>
                        <div className='wrap-input'>
                            <textarea name="message" id="message" cols="150" rows="10" className='input' required ></textarea>
                            <span className="focus-input" placeholder='MENSAJE:'></span>
                        </div>
                        <button className="btn-contact">
                            Contactame
                        </button>
                    </form>
                </div>
            </div>
            <div className="other-contact">
                <h2>También podes contactarme vía: </h2>
                <a href="https://www.linkedin.com/in/santiquinteros/" target={"_blank"}>
                    <LinkedinXL />
                </a>
            </div>
        </div>
    )
}

export default Contact