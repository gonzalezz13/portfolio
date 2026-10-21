import './Stack.css'
import { FaCode, FaDesktop, FaDatabase, FaTools } from 'react-icons/fa'

function Stack() {
    return (
        <section className="stack section" id="habilidades">
            <div class="container">
                <span className="section-label">02 // STACK & METODOLOGÍA</span>
                <h2 className="section-title">Habilidades técnicas</h2>
                <p className="stack__intro">
                    Conjunto de tecnologías con las que trabajo de forma habitual, fundamentadas en lógica estructurada y estándares web limpios.
                </p>

                <div className="stack__grid">
                    <div className="stack__card">
                        <div className="stack__card-start">
                            <div className="stack__card-icon"><FaDesktop /></div>
                            <h3 className="stack__card-title">Frontend</h3>
                        </div>
                        <div className="stack__tags">
                            <span className="stack__tag">HTML5</span>
                            <span className="stack__tag">CSS3</span>
                            <span className="stack__tag">SCSS</span>
                            <span className="stack__tag">Bootstrap</span>
                            <span className="stack__tag">Flexbox & Grid</span>
                            <span className="stack__tag">Angular</span>
                            <span className="stack__tag">React</span>
                            <span className="stack__tag">Responsive Design</span>
                            <span className="stack__tag">Figma</span>
                        </div>
                        <div className="stack__card-practice">
                            <h4>Aplicación práctica:</h4>
                            <p>Hice la web de una barbería con Angular, pensada primero para el móvil y desplegada en producción mediante Vercel. Con ella aprendí a organizar una aplicación en componentes y rutas. Ahora estoy con React montando mi propio portfolio.</p>
                        </div>
                    </div>
                    <div className="stack__card">
                        <div className="stack__card-start">
                            <div className="stack__card-icon"><FaDatabase /></div>
                            <h3 className="stack__card-title">Backend</h3>
                        </div>
                        <div className="stack__tags">
                            <span className="stack__tag">Java</span>
                            <span className="stack__tag">Spring Boot</span>
                            <span className="stack__tag">MySQL</span>
                            <span className="stack__tag">SQLite</span>
                            <span className="stack__tag">PostgreSQL</span>
                            <span className="stack__tag">APIs REST</span>
                            <span className="stack__tag">JSON</span>
                        </div>
                        <div className="stack__card-practice">
                            <h4>Aplicación práctica:</h4>
                            <p>Mi base de backend es Java con Spring Boot, desde mi formación en DAW. Con ella desarrollé el TFG, implementando APIs REST, autenticación y persistencia con bases de datos relacionales.</p>
                        </div>
                    </div>
                    <div className="stack__card">
                        <div className="stack__card-start">
                            <div className="stack__card-icon"><FaCode /></div>
                            <h3 className="stack__card-title">Lenguajes</h3>
                        </div>
                        <div className="stack__tags">
                            <span className="stack__tag">Java</span>
                            <span className="stack__tag">TypeScript</span>
                            <span className="stack__tag">JavaScript</span>
                            <span className="stack__tag">Python</span>
                            <span className="stack__tag">SQL</span>
                            <span className="stack__tag">Bash</span>
                            <span className="stack__tag">Markdown</span>
                        </div>
                        <div className="stack__card-practice">
                            <h4>Aplicación práctica:</h4>
                            <p>TypeScript es mi lenguaje principal, junto con JavaScript, y es con el que desarrollo en Angular. Java es mi base en el lado del servidor, y estoy incorporando Python para ampliar capacidades y automatización.</p>
                        </div>
                    </div>
                    <div className="stack__card">
                        <div className="stack__card-start">
                            <div className="stack__card-icon"><FaTools /></div>
                            <h3 className="stack__card-title">Herramientas & Flujo</h3>
                        </div>
                        <div className="stack__tags">
                            <span className="stack__tag">Git & Github</span>
                            <span className="stack__tag">Vercel</span>
                            <span className="stack__tag">Semantic Commits</span>
                            <span className="stack__tag">Agile</span>
                            <span className="stack__tag">TortoiseSVN</span>
                            <span className="stack__tag">SharePoint</span>
                            <span className="stack__tag">npm & vite</span>
                        </div>
                        <div className="stack__card-practice">
                            <h4>Aplicación práctica:</h4>
                            <p>Guardo mis proyectos con Git y GitHub manteniendo control de versiones y rollback ante errores. Publico mis webs en Vercel y uso Node y npm para gestionar las herramientas de cada proyecto.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Stack