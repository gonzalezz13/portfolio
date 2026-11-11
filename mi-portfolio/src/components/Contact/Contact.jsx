import './Contact.css'
import { MdOutlineMail, MdOutlineLocalPhone } from "react-icons/md";
import { LuMapPin } from "react-icons/lu";

function Contact() {
    return (
        <section className="contact section" id="contact">
            <div className="container">
                <span className="section-label">05 // COMUNICACIÓN</span>
                <h2 className="section-title">Contacto</h2>
                <p className="contact__intro">
                    ¿Tienes una vacante técnica en tu equipo o necesitas desarrollar una aplicación web? Escríbeme y responderé en menos de 24 horas laborables.
                </p>

                <div className="contact__layout">
                    <div className="contact__info">
                        <div className="contact__flex">
                            <div className="contact__space">
                                <div className="contact__space-icon"><MdOutlineMail /></div>
                                <div className="contact__space-content">
                                    <p className="contact__space-intro">Email Directo</p>
                                    <h3 className="contact__space-title">vagonzalezz13@gmail.com</h3>
                                </div>
                            </div>
                            <div className="contact__space">
                                <div className="contact__space-icon"><LuMapPin /></div>
                                <div className="contact__space-content">
                                    <p className="contact__space-intro">Ubicación</p>
                                    <h3 className="contact__space-title">Valencia, España</h3>
                                </div>
                            </div>
                            <div className="contact__space">
                                <div className="contact__space-icon"><MdOutlineLocalPhone /></div>
                                <div className="contact__space-content">
                                    <p className="contact__space-intro">Teléfono / WhatsApp</p>
                                    <h3 className="contact__space-title">Disponible bajo solicitud</h3>
                                </div>
                            </div>
                        </div>

                        <div className="contact__profile">
                            <p>Perfiles profesionales</p>
                            <div className="contact__profile-links">
                                <a href="https://github.com/gonzalezz13">github.com/gonzalezz13</a>
                                <span className="contact__profile-dot"></span>
                                <a href="https://www.linkedin.com/in/vicentearnal/">Linkedin</a>
                            </div>
                        </div>

                        <div className="contact__cv">
                            <span className="contact__cv-dot"></span>
                            <p>CV en formato PDF disponible previa solicitud vía formulario</p>
                        </div>
                    </div>
                    <div className="contact__form-wrapper">
                        <form action="/enviar" method="post" className="contact__form">
                            <div className="fila">
                                <div className="campo">
                                    <label htmlFor="nombre">Nombre o Empresa</label>
                                    <input type="text" id="nombre" name="nombre" placeholder="Ej. Mario González"></input>
                                </div>
                                <div className="campo">
                                    <label htmlFor="email">Correo electrónico</label>
                                    <input type="email" id="email" name="email" placeholder="laura@empresa.com"></input>
                                </div>
                            </div>
                            <div className="campo">
                                <label htmlFor="asunto">Asunto</label>
                                <input type="text" id="asunto" name="asunto" placeholder="Oportunidad Junior / Proyecto Web"></input>
                            </div>

                            <div className="campo">
                                <label htmlFor="mensaje">Mensaje</label>
                                <textarea id="mensaje" name="mensaje" rows="5" placeholder="Detalla tu propuesta, requerimientos o vacante..." required></textarea>
                            </div>

                            <button type="submit">Enviar mensaje</button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Contact