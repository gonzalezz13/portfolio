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
                            <img src="/" alt="Foto retrato Vicente" />
                        </div>
                        <p className="profile__name">Vicente Arnal González</p>
                        <p className="profile__location">Valencia, ES</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Profile;