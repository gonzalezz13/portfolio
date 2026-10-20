import './Profile.css'

function Profile() {
    return (
        <section className="profile section" id="sobre-mi">
            <div className="container">
                <span className="section-label">01 // PERFIL</span>
                <h2 className="section-title">Sobre mí</h2>

                <div className="profile__grid">
                    <div className="profile__photo-col">
                        <div className="profile__photo">
                            <img src="/foto-vicente.png" alt="Foto retrato Vicente" />
                        </div>
                        <p className="profile__name">Vicente Arnal González</p>
                        <p className="profile__location">Valencia, ES</p>
                    </div>
                    <div className="profile__info-col">
                        <p className="profile__bio">
                            Soy Desarrollador Web Full Stack, formado en <strong>Desarrollo de Aplicaciones Web (DAW)</strong> en Valencia.
                            Actualmente estoy ampliando mis conocimientos, profundizando en las tecnologías que ya conozco y llevándolas a la práctica a través de proyectos propios.
                        </p>
                        <p className="profile__bio">
                            Me gusta entender cómo funcionan las cosas por dentro, resolver problemas y encontrar mejores formas de desarrollar. Mi objetivo es seguir creciendo como desarrollador, aprender nuevas tecnologías y construir proyectos cada vez más completos, cuidando tanto el código como la experiencia de quien los utiliza.
                        </p>
                        <div className="profile__details">
                            <div className="profile__detail">
                                <span className="profile__detail-label">Formación</span>
                                <span className="profile__detail-value">Ciclo Formativo Grado Superior DAW</span>
                            </div>
                            <div className="profile__detail">
                                <span className="profile__detail-label">Enfoque técnico</span>
                                <span className="profile__detail-value"><strong>Full-Stack Developer</strong> (React / SpringBoot / MySQL)</span>
                            </div>
                            <div className="profile__detail">
                                <span className="profile__detail-label">Modalidad preferida</span>
                                <span className="profile__detail-value">Presencial (Valencia), Híbrido o Remoto</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Profile;