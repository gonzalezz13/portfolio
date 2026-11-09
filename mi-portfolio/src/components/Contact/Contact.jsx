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

                <div className="contact__flex">
                    <div className="contact__space">
                        <div className="contact__space-icon"><MdOutlineMail /></div>
                        <p className="contact__space-intro">Email Directo</p>
                        <h3 className="contact__space-title">vagonzalezz13@gmail.com</h3>
                    </div>
                    <div className="contact__space">
                        <div className="contact__space-icon"><LuMapPin /></div>
                        <p className="contact__space-intro">Ubicación</p>
                        <h3 className="contact__space-title">Valencia, España</h3>
                    </div>
                    <div className="contact__space">
                        <div className="contact__space-icon"><MdOutlineLocalPhone /></div>
                        <p className="contact__space-intro">Teléfono / WhatsApp</p>
                        <h3 className="contact__space-title">Disponible bajo solicitud</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact