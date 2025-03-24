import Link from "next/link"

export default function InformePage() {
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
            <Link href="/carga" className="nav-link">
              Carga
            </Link>
            <Link href="/analisis" className="nav-link">
              Análisis
            </Link>
            <Link href="/informe" className="nav-link active">
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
          {/* Informe Card */}
          <div className="informe-card">
            <div className="informe-grid">
              {/* Imagen OCT */}
              <div className="imagen-container">
                <img src="/placeholder.svg?height=350&width=350" alt="Imagen OCT" className="oct-image" />
                <button className="expand-button">
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
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <polyline points="9 21 3 21 3 15"></polyline>
                    <line x1="21" y1="3" x2="14" y2="10"></line>
                    <line x1="3" y1="21" x2="10" y2="14"></line>
                  </svg>
                </button>
              </div>

              {/* Información del informe */}
              <div className="informe-info">
                <div className="categoria-container">
                  <label>Categoría 1:</label>
                  <div className="progress-container">
                    <div className="progress-bar" style={{ width: "85%" }}>
                      <span>85%</span>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label>Comentarios:</label>
                  <textarea className="comentarios-input" rows={5}></textarea>
                </div>

                <div className="form-group">
                  <label>Realizado Por:</label>
                  <input type="text" className="text-input" />
                </div>

                <div className="form-group">
                  <label>Fecha:</label>
                  <input type="date" className="text-input" />
                </div>
              </div>
            </div>
          </div>

          {/* Botones de acción */}
          <div className="action-buttons">
            <button className="save-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              Envía o Guarda el informe
            </button>
            <div className="button-group">
              <button className="email-button">Enviar por correo</button>
              <button className="pdf-button">Descargar PDF</button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

