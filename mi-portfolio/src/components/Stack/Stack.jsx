import './Stack.css'

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
                            <div className="stack__card-icon">🖥️</div>
                            <h3 className="stack__card-title">Frontend</h3>
                        </div>
                        <div className="stack__tags">
                            <span className="stack__tag">HTML5 Semántico</span>
                            <span className="stack__tag">CSS3 Moderno</span>
                            <span className="stack__tag">Flexbox & Grid</span>
                            <span className="stack__tag">Angular</span>
                            <span className="stack__tag">React</span>
                            <span className="stack__tag">Responsive Layouts</span>
                            <span className="stack__tag">Figma</span>
                        </div>
                        <div className="stack__card-practice">
                            <h4>Aplicación práctica:</h4>
                            <p>Maquetación con frameworks cuando se requiere máxima optimización, priorizando siempre la semántica y accesibilidad.</p>
                        </div>
                    </div>
                    <div className="stack__card">
                        <div className="stack__card-start">
                            <div className="stack__card-icon">⭐</div>
                            <h3 className="stack__card-title">Backend</h3>
                        </div>
                        <div className="stack__tags">
                            <span className="stack__tag">MySQL</span>
                            <span className="stack__tag">PostgreSQL</span>
                            <span className="stack__tag">Node.js</span>
                            <span className="stack__tag">Java</span>
                            <span className="stack__tag">REST API</span>
                            <span className="stack__tag">JSON</span>
                        </div>
                        <div className="stack__card-practice">
                            <h4>Aplicación práctica:</h4>
                            <p>Modelado relacional de datos normalizados, consultas indexadas, control de autenticación y validación estricta en controladores.</p>
                        </div>
                    </div>
                    <div className="stack__card">
                        <div className="stack__card-start">
                            <div className="stack__card-icon">🫀</div>
                            <h3 className="stack__card-title">Lenguajes</h3>
                        </div>
                        <div className="stack__tags">
                            <span className="stack__tag">Java</span>
                            <span className="stack__tag">TypeScript</span>
                            <span className="stack__tag">JavaScript</span>
                            <span className="stack__tag">Python</span>
                        </div>
                        <div className="stack__card-practice">
                            <h4>Aplicación práctica:</h4>
                            <p>Maquetación con frameworks cuando se requiere máxima optimización, priorizando siempre la semántica y accesibilidad.</p>
                        </div>
                    </div>
                    <div className="stack__card">
                        <div className="stack__card-start">
                            <div className="stack__card-icon">⚡</div>
                            <h3 className="stack__card-title">Herramientas & Flujo</h3>
                        </div>
                        <div className="stack__tags">
                            <span className="stack__tag">Git & Github</span>
                            <span className="stack__tag">Semantic Commits</span>
                            <span className="stack__tag">Trello</span>
                            <span className="stack__tag">Agile</span>
                            <span className="stack__tag">npm & vite</span>
                        </div>
                        <div className="stack__card-practice">
                            <h4>Aplicación práctica:</h4>
                            <p>Maquetación con frameworks cuando se requiere máxima optimización, priorizando siempre la semántica y accesibilidad.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Stack