import './Experience.css'
import { FaBriefcase, FaGraduationCap, FaMedal } from 'react-icons/fa'
import { BsPatchCheck, BsCheck2 } from 'react-icons/bs'

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
                            <p className="experience__info-location">La Pobla de Vallbona, Valencia</p>
                            <p className="experience__info-role">Soporte y Desarrollo Web</p>
                            <p className="experience__info-desc">Mantenimiento de aplicaciones internas, automatizaciones con scripts y resolución de incidencias en producción.</p>
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
                                <span className="experience__info-time">Mayo 2026 - Presente</span>
                            </div>
                            <p className="experience__info-location">Valencia</p>
                            <p className="experience__info-role">Desarrollo de proyectos</p>
                            <p className="experience__info-desc">Diseño y desarrollo de proyectos personales y de páginas webs funcionales, e-commerce y aplicaciones con enfoque directo al rendimiento y código limpio.</p>
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
                        <div className="experience__info">
                            <div className="experience__info-title">
                                <h4>Técnico Superior en Desarrollo de Aplicaciones Web (DAW)</h4>
                                <span className="experience__info-time">2023 - 2026</span>
                            </div>
                            <p className="experience__info-location">Linkia FP</p>
                            <p className="experience__info-role" style={{ color: '#4ade80', backgroundColor: 'rgba(74, 222, 128, 0.1)' }}><BsPatchCheck />Título Oficial Homologado</p>
                            <p className="experience__info-desc">Formación orientada a arquitectura cliente/servidor, diseño de bases de datos, patrones MVC y seguridad web.</p>
                            <div className="experience__info-tags">
                                <span className="experience__tag">DAW Oficial</span>
                                <span className="experience__tag">100% Superado</span>
                            </div>
                        </div>
                        <div className="experience__info">
                            <div className="experience__info-title">
                                <h4>Bachillerato Ciencias Sociales</h4>
                                <span className="experience__info-time">2021 - 2023</span>
                            </div>
                            <p className="experience__info-location">IES L'Eliana</p>
                            <p className="experience__info-desc">Fundamentos sólidos en economía, matemáticas aplicadas y análisis estadístico orientado a la comprensión del entorno socioeconómico y resolución de problemas cuantitativos.</p>
                        </div>
                    </div>
                    <div className="experience__card">
                        <div className="experience__card-start">
                            <div className="experience__card-icon"><FaMedal /></div>
                            <h3 className="experience__card-title">Certificaciones & Cursos</h3>
                        </div>
                        <div className="experience__info">
                            <div className="experience__info-title">
                                <h4>Ciberseguridad Avanzada Entornos de las Tecnologías de la Operación</h4>
                                <span className="experience__info-moment">Agosto 2025</span>
                            </div>
                            <div className="experience__info-title">
                                <p className="experience__info-location">Aprendea</p>
                                <p className="experience__info-verification"><BsCheck2 />Verificado</p>
                            </div>
                        </div>
                        <div className="experience__info">
                            <div className="experience__info-title">
                                <h4>Certificado Desarrollo con IA</h4>
                                <span className="experience__info-moment">Marzo 2026</span>
                            </div>
                            <div className="experience__info-title">
                                <p className="experience__info-location">BIG School</p>
                                <p className="experience__info-verification"><BsCheck2 />Verificado</p>
                            </div>
                        </div>
                        <div className="experience__info">
                            <div className="experience__info-title">
                                <h4>Aprende SQL -- Curso Completo</h4>
                                <span className="experience__info-moment">Septiembre 2026</span>
                            </div>
                            <div className="experience__info-title">
                                <p className="experience__info-location">midudev</p>
                                <p className="experience__info-verification"><BsCheck2 />Verificado</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Experience