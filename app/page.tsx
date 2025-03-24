import Link from "next/link"

export default function Home() {
  return (
    <div>
      <div className="container">
        {/* Header */}
        <header className="header">
          <Link href="/" className="logo">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 21C5.89543 21 5 20.1046 5 19V14.6569C5 13.5998 5.42143 12.5855 6.17157 11.8284L12.4142 5.58579C13.1953 4.80474 14.4558 4.80474 15.2368 5.58579C16.0179 6.36683 16.0179 7.62728 15.2368 8.40833L10.2368 13.4083C9.84628 13.7988 9.21312 13.7988 8.82259 13.4083C8.43207 13.0178 8.43207 12.3846 8.82259 11.9941L13.1161 7.7006"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M11 15H15C17.2091 15 19 16.7909 19 19V19C19 20.1046 18.1046 21 17 21H11"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
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
          {/* Hero Section */}
          <div className="hero">
            <h1 className="hero-title">Optimiza tu práctica oftalmológica con OCTsense</h1>
            <p className="hero-text">
              Un sistema avanzado de detección en imágenes OCT basado en inteligencia artificial. Nuestro objetivo es
              facilitar la detección temprana de patologías oculares, proporcionando herramientas para un diagnóstico
              más preciso y eficiente.
            </p>
          </div>

          {/* Bloques inferiores */}
          <div className="grid">
            {/* Historial de cambios */}
            <div className="card">
              <h2 className="card-title">Historial de cambios</h2>
              <ul className="list">
                <li className="list-item">
                  <span className="list-item-bullet">•</span>
                  <span>amet, consectetur adipiscing elit.</span>
                </li>
                <li className="list-item">
                  <span className="list-item-bullet">•</span>
                  <span>Suspendisse tortor lorem, ultrices ac auctor</span>
                </li>
                <li className="list-item">
                  <span className="list-item-bullet">•</span>
                  <span>ut, lacinia et nunc. Aliquam volutpat laore</span>
                </li>
              </ul>
            </div>

            {/* Guía interactiva */}
            <div>
              <h2 className="features-title">Guía interactiva</h2>
              <div className="features-grid">
                {/* Carga */}
                <div className="feature-card">
                  <div className="feature-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="17 8 12 3 7 8"></polyline>
                      <line x1="12" y1="3" x2="12" y2="15"></line>
                    </svg>
                  </div>
                  <h3 className="feature-title">Carga</h3>
                  <p className="feature-text">y gestión de imágenes de manera rápida y segura.</p>
                </div>

                {/* Análisis */}
                <div className="feature-card">
                  <div className="feature-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                      <line x1="9" y1="8" x2="9" y2="16"></line>
                      <line x1="15" y1="8" x2="15" y2="16"></line>
                      <line x1="9" y1="12" x2="15" y2="12"></line>
                    </svg>
                  </div>
                  <h3 className="feature-title">Análisis</h3>
                  <p className="feature-text">asistido por IA para obtener prediagnósticos confiables.</p>
                </div>

                {/* Informe */}
                <div className="feature-card">
                  <div className="feature-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                  </div>
                  <h3 className="feature-title">Informe</h3>
                  <p className="feature-text">detallado donde se exponen los resultados del análisis</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

