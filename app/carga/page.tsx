import Link from "next/link"

export default function CargaPage() {
  return (
    <div>
      <div className="container">
        {/* Header */}
        <header className="header">
          <Link href="/" className="logo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M13.8 12H3"></path>
            </svg>
            <span>OCTsense</span>
          </Link>
          <nav className="nav">
            <Link href="/" className="nav-link">
              Inicio
            </Link>
            <Link href="/carga" className="nav-link active">
              Carga
            </Link>
            <Link href="/analisis" className="nav-link">
              Análisis
            </Link>
            <Link href="/informe" className="nav-link">
              Informe
            </Link>
          </nav>
          <Link href="/perfil" className="nav-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </Link>
        </header>

        <main>
          {/* Área de carga */}
          <div className="upload-section">
            <div className="instructions">
              <p>
                Para subir la tomografía de un paciente basta con presionar el botón:{" "}
                <span className="highlight">"Cargar tomografía"</span>, dirigirse a la ubicación de la imagen en el
                explorador de archivos, seleccionarla y pulsar <span className="highlight-blue">aceptar</span>.
              </p>

              <div className="formats-box">Formatos admitidos: JPG, JPEG y PNG.</div>
            </div>

            <div className="upload-area">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="17 8 12 3 7 8"></polyline>
                <line x1="12" y1="3" x2="12" y2="15"></line>
              </svg>
              <div className="upload-line"></div>
              <p>Cargar tomografía</p>
            </div>
          </div>

          {/* Sección de observaciones */}
          <div className="observations-section">
            <h2 className="observations-title">Observaciones</h2>
            <div className="observations-grid">
              <div className="categories">
                <div className="category-item">
                  <label>Categoría 1:</label>
                  <div className="category-progress">
                    <div className="progress-bar" style={{ width: "60%" }}></div>
                    <button className="category-info">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="16" x2="12" y2="12"></line>
                        <line x1="12" y1="8" x2="12.01" y2="8"></line>
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="category-item">
                  <label>Categoría 2:</label>
                  <div className="category-progress">
                    <div className="progress-bar" style={{ width: "40%" }}></div>
                    <button className="category-info">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="16" x2="12" y2="12"></line>
                        <line x1="12" y1="8" x2="12.01" y2="8"></line>
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="category-item">
                  <label>Categoría 3:</label>
                  <div className="category-progress">
                    <div className="progress-bar" style={{ width: "75%" }}></div>
                    <button className="category-info">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="16" x2="12" y2="12"></line>
                        <line x1="12" y1="8" x2="12.01" y2="8"></line>
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="category-item">
                  <label>Categoría 4:</label>
                  <div className="category-progress">
                    <div className="progress-bar" style={{ width: "30%" }}></div>
                    <button className="category-info">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="16" x2="12" y2="12"></line>
                        <line x1="12" y1="8" x2="12.01" y2="8"></line>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <div className="observations-notes">
                <textarea placeholder="Añadir observaciones..."></textarea>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

