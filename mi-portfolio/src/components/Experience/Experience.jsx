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
        </section>
    )
}

export default Experience