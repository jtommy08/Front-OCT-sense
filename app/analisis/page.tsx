import Link from "next/link"

export default function AnalisisPage() {
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
            <Link href="/analisis" className="nav-link active">
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
          <div className="analisis-grid">
            {/* Imagen OCT */}
            <div className="oct-container">
              <img src="/placeholder.svg?height=350&width=350" alt="Imagen OCT" className="oct-image" />
            </div>

            {/* Resultados del análisis */}
            <div className="analisis-results">
              {/* Categorías */}
              <div className="categorias">
                <div className="categoria-item">
                  <label>Categoría 1:</label>
                  <div className="categoria-progress">
                    <div className="progress-bar blue" style={{ width: "85%" }}>
                      <span>85%</span>
                    </div>
                  </div>
                </div>

                <div className="categoria-item">
                  <label>Categoría 2:</label>
                  <div className="categoria-progress">
                    <div className="progress-bar" style={{ width: "2%" }}>
                      <span>2%</span>
                    </div>
                  </div>
                </div>

                <div className="categoria-item">
                  <label>Categoría 3:</label>
                  <div className="categoria-progress">
                    <div className="progress-bar red" style={{ width: "12%" }}>
                      <span>12%</span>
                    </div>
                  </div>
                </div>

                <div className="categoria-item">
                  <label>Categoría 4:</label>
                  <div className="categoria-progress">
                    <div className="progress-bar" style={{ width: "1%" }}>
                      <span>1%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Comentarios */}
              <div className="comentarios-container">
                <h3 className="comentarios-title">Comentarios</h3>
                <textarea className="comentarios-textarea" rows={6}></textarea>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

