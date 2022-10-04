import React from 'react'
import whohasmore1C from './assets/whohasmore1-c.jpg'
import whohasmore2C from './assets/whohasmore2-c.jpg'
import whohasmore3C from './assets/whohasmore3-c.jpg'
import shirty1C from './assets/shirty1-c.jpg'
import shirty2C from './assets/shirty2-c.jpg'
import shirty3C from './assets/shirty3-c.jpg'
import temple1C from './assets/temple1-c.jpg'
import temple2C from './assets/temple2-c.jpg'
import temple3C from './assets/temple3-c.jpg'
import flagger from './assets/flagger-c.jpg'
import NewPage from './assets/NewPage'
import ReactLogo from './assets/ReactLogo'
import SassLogo from './assets/SassLogo'
import HtmlLogo from './assets/HtmlLogo'
import JavascriptLogo from './assets/JavascriptLogo'
import Firebase from './assets/Firebase'
import CssLogo from './assets/CssLogo'

function Projects() {
  return (
    <section className='projects__main__container' id='projects'>
      <div className="projects__main">
        <h2 className="projects__main__title">Proyectos.</h2>
        <div className="project-container">
          <article className='project' style={{ marginTop: "5rem" }}>
            <div className="text">
              <h3>TEMPLE</h3>
              <div className='tech-icons'><ReactLogo /> <JavascriptLogo /> <CssLogo /> <HtmlLogo /></div>
              <p>
                <strong>[Experiencia Freelance] ~ </strong>Primera experiencia freelance. El trabajo fue readaptar su homepage y optimizarla lo máximo posible.
                <br />
                <br />
                Para este trabajo se utilizó React logrando una <strong>SPA</strong>. Las animaciones fueron llevadas a cabo con <strong>Framer Motion</strong> y el estilado con <strong>CSS</strong>.
                Se consumió la API de Google para hacer uso de su mapa. El formulario de contacto fue validado con React Validator.
              </p>
              <a href="https://temple-ashen.vercel.app/" target={"_blank"}>temple-ashen.vercel.app <NewPage /></a>
            </div>
            <div className="imgs">
              <a href="https://temple-ashen.vercel.app/" target={"_blank"}>
                <img src={temple1C} alt="who has more" />
              </a>
              <a href="https://temple-ashen.vercel.app/" target={"_blank"}>
                <img src={temple2C} alt="who has more" />
              </a>
              <a href="https://temple-ashen.vercel.app/" target={"_blank"}>
                <img src={temple3C} alt="who has more" />
              </a>
            </div>
          </article>
          <article className='project'>
            <div className="text">
              <h3>WHO HAS MORE?</h3>
              <div className='tech-icons'><ReactLogo /> <JavascriptLogo /> <SassLogo /> <HtmlLogo /></div>
              <p>
                Es un juego que consiste en elegir entre dos países o islas, según lo que toque aleatoriamente, cuál de las dos opciones tiene más población.
                Se pueden elegir diversas regiones o todo el mundo en sí.
                <br />
                Éste proyecto fue basado en la idea del famoso <strong>"Higher or Lower"</strong>.
                <br />
                <br />
                Para ésta página se utilizó <strong>React (Vite)</strong>, haciendo uso de <strong>React Router</strong>, <strong>API Context</strong> y <strong>Hooks</strong>.
                Para el estilado utilicé <strong>SASS</strong>. También consumí la API de "Rest Countries" para traer la información y banderas de los distintos países.
              </p>
              <a href="https://whohasmore.vercel.app/" target={"_blank"}>whohasmore.vercel.app <NewPage /></a>
            </div>
            <div className="imgs">
              <a href="https://whohasmore.vercel.app/" target={"_blank"}>
                <img src={whohasmore1C} alt="who has more" />
              </a>
              <a href="https://whohasmore.vercel.app/" target={"_blank"}>
                <img src={whohasmore2C} alt="who has more" />
              </a>
              <a href="https://whohasmore.vercel.app/" target={"_blank"}>
                <img src={whohasmore3C} alt="who has more" />
              </a>
            </div>
          </article>
          <article className='project'>
            <div className="text">
              <h3>SHIRTY</h3>
              <div className='tech-icons'><ReactLogo /> <JavascriptLogo /> <CssLogo /> <HtmlLogo /> <Firebase /></div>
              <p>
                <strong>[Experiencia Académica] ~ </strong> Este e-commerce fue mi proyecto final para Codeacademy, terminando en el <strong>TOP 10</strong> general de los estudiantes. Es una tienda
                que presenta un catálogo de diversos productos así como también un carrito y su correspondiente checkout.
                <br />
                <br />
                Para este proyecto utilicé <strong>React (CRA)</strong> haciendo uso de <strong>React Router</strong>, <strong>API context</strong> y <strong>Hooks</strong>.
                Para validar el checkout usé React Validator y para almacenar la información del mismo empleé <strong>Firebase</strong>.
              </p>
              <a href="https://shirty.vercel.app/" target={"_blank"}>shirty.vercel.app <NewPage /></a>
            </div>
            <div className="imgs">
              <a href="https://shirty.vercel.app/" target={"_blank"}>
                <img src={shirty2C} alt="who has more" />
              </a>
              <a href="https://shirty.vercel.app/" target={"_blank"}>
                <img src={shirty3C} alt="who has more" />
              </a>
              <a href="https://shirty.vercel.app/" target={"_blank"}>
                <img src={shirty1C} alt="who has more" />
              </a>
            </div>
          </article>
          <article className="project-small mg-left">
            <div className="img">
              <a href="https://flagger-ten.vercel.app/" target={"_blank"}>
                <img src={flagger} alt="flagger" />
              </a>
            </div>
            <div className="text">
              <h3>FLAGGER</h3>
              <div className='tech-icons'><ReactLogo /> <JavascriptLogo /> <CssLogo /> <HtmlLogo /></div>
              <p>
                Idea obtenida de <strong>"Frontend Mentor".</strong> Consiste en presentar banderas de diferentes países mostrando, al oprimir, la información de cada uno en particular.
                <br />
                <br />
                Para este proyecto se utilizó <strong>React</strong> haciendo uso de <strong>React Router</strong> y <strong>Hooks</strong>.
                Para el estilado usé <strong>CSS</strong>. Por otro lado, la API que se consumió para extraer la información fue la de "Rest Countries".
              </p>
              <a href="https://flagger-ten.vercel.app/" target={"_blank"}>flagger-ten.vercel.app <NewPage /></a>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Projects