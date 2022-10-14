import React, { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import LinkedinXL from './assets/LinkedinXL'
import GithubXL from './assets/GithubXL';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useInView } from 'react-intersection-observer'


function Contact() {

    const initialValues = { name: "", email: "", message: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [sending, setSending] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { ref: ref, inView: inView } = useInView({ threshold: 0.05 });

    let homeHash = document.querySelector('#home-nav');
    let projectsHash = document.querySelector('#projects-nav');
    let aboutHash = document.querySelector('#about-nav');
    let contactHash = document.querySelector('#contact-nav');


    useEffect(() => {
        if (inView) {
            contactHash?.classList?.add('violet');
            aboutHash?.classList?.remove('violet');
            projectsHash?.classList?.remove('violet');
            homeHash?.classList?.remove('violet');
        }
    }, [inView])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmitting(true);
    };

    useEffect(() => {

        if (Object.keys(formErrors).length === 0 && isSubmitting) {
            setSending(true);
            (emailjs.send(import.meta.env.VITE_APP_SERVICE_ID, import.meta.env.VITE_APP_TEMPLATE_ID, formValues, import.meta.env.VITE_APP_PUBLIC_KEY))
                .then(() => {
                    setFormValues(initialValues);
                    setIsSubmitting(false);
                    setSending(false);
                    toast.success('Mensaje enviado correctamente!', {
                        position: "bottom-center",
                        autoClose: 2500,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }).catch(err => {
                    setIsSubmitting(false);
                    toast.error(`Error al enviar el mensaje. (${err.status}) - Por favor contactarse vía Linkedin.`, {
                        position: "bottom-center",
                        autoClose: 2500,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                })
        }

    }, [formErrors]);

    const validate = (values) => {
        const errors = {};
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

        if (!values.name) {
            errors.name = "Por favor, ingrese un nombre sin numeros ni carácteres especiales.";
        }
        if (!values.email) {
            errors.email = "Ingerese su email!";
        } else if (!regex.test(values.email)) {
            errors.email = "Email inválido. Por favor, revise e ingrese nuevamente un email válido.";
        }
        if (!values.message) {
            errors.message = "Ingrese un mensaje!";
        }

        return errors;
    }

    return (
        <>
            <div className="contact__main__container" id='contact' ref={ref}>
                <div className="contact__main">
                    <h2 className="contact__main__title">Contacto.</h2>
                    <div className="contact__main__info">
                        <form onSubmit={handleSubmit}>
                            <div className="contact__main__info__form">
                                <div className='wrap-input'>
                                    <input type="email" name="email" id="email" className='input' value={formValues.email} onChange={handleChange} />
                                    <span className="focus-input" placeholder='EMAIL:'></span>
                                    <p className='errorMessage'>{formErrors.email}</p>
                                </div>
                                <div className='wrap-input'>
                                    <input type="text" name="name" id="name" className='input' value={formValues.name} onChange={handleChange} />
                                    <span className="focus-input" placeholder='NOMBRE:'></span>
                                    <p className='errorMessage'>{formErrors.name}</p>
                                </div>
                            </div>
                            <div className='wrap-input'>
                                <textarea name="message" id="message" cols="150" rows="10" className='input' value={formValues.message} onChange={handleChange} ></textarea>
                                <span className="focus-input" placeholder='MENSAJE:'></span>
                                <p className='errorMessage'>{formErrors.message}</p>
                            </div>
                            <button className="btn-contact" disabled={sending}>
                                {sending ? 'Enviando...' : 'Enviar'}
                            </button>
                        </form>
                    </div>
                </div>
                <div className="other-contact">
                    <h2>También podes contactarme vía: </h2>
                    <a href="https://www.linkedin.com/in/santiquinteros/" target={"_blank"}>
                        <LinkedinXL />
                    </a>
                    <a href="https://github.com/santtiq/" target={"_blank"}>
                        <GithubXL />
                    </a>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default Contact