import './Experience.css'
import { FaBriefcase, FaGraduationCap, FaMedal } from 'react-icons/fa'

function Experience() {
    return (
        <section className="experience section" id="experiencia">
            <div class="container">
                <span className="section-label">04 // TRAYECTORIA</span>
                <h2 className="section-title">Experiencia y formación</h2>
                <p className="experience__intro">
                    Trayectoria profesional en entornos reales, base académica oficial y cualificaciones técnicas complementarias.
                </p>

                <div className="experience__grid">
                    <div className="experience__card">
                        <div className="experience__card-start">
                            <div className="experience__card-icon"><FaBriefcase /></div>
                            <h3 className="experience__card-title">Experiencia Laboral</h3>
                        </div>
                        <div className="experience__info">
                            <div className="experience__info-title">
                                <h4>Prácticas FCT - RNB Cosméticos</h4>
                                <span className="experience__info-time">Enero 2026 - Mayo 2026</span>
                            </div>
                            <p>La Pobla de Vallbona, Valencia</p>
                            <p>Soporte y Desarrollo Web</p>
                            <p>Mantenimiento de aplicaciones internas, automatizaciones con scripts y resolución de incidencias en producción.</p>
                            <div className="experience__info-tags">
                                <span className="experience__tag">Angular</span>
                                <span className="experience__tag">.NET</span>
                                <span className="experience__tag">MySQL</span>
                                <span className="experience__tag">Bash</span>

                            </div>
                        </div>
                        <div className="experience__info">
                            <div className="experience__info-title">
                                <h4>Desarrollador Web Freelance</h4>
                                <span className="experience__info-time experience__info-time--freelance">Mayo 2026 - Presente</span>
                            </div>
                            <p>Valencia</p>
                            <p>Desarrollo de proyectos</p>
                            <p>Diseño y desarrollo de proyectos personales y de páginas webs funcionales, e-commerce y aplicaciones con enfoque directo al rendimiento y código limpio.</p>
                            <div className="experience__info-tags">
                                <span className="experience__tag">React</span>
                                <span className="experience__tag">Tailwind</span>
                                <span className="experience__tag">Vite</span>
                                <span className="experience__tag">Shopify</span>

                            </div>
                        </div>
                    </div>
                    <div className="experience__card">
                        <div className="experience__card-start">
                            <div className="experience__card-icon"><FaGraduationCap /></div>
                            <h3 className="experience__card-title">Formación Académica</h3>
                        </div>
                    </div>
                    <div className="experience__card">
                        <div className="experience__card-start">
                            <div className="experience__card-icon"><FaMedal /></div>
                            <h3 className="experience__card-title">Certificaciones & Cursos</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Experience