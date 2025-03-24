import Link from "next/link"
import { UserIcon } from "lucide-react"

export function SiteHeader() {
  return (
    <header className="w-full bg-[#42b0e5] text-white rounded-xl shadow-md mb-6">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
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
            <span className="font-bold text-xl">OCTsense</span>
          </Link>
        </div>
        <nav className="flex items-center gap-8 text-base">
          <Link href="/" className="font-medium transition-colors hover:text-blue-100">
            Inicio
          </Link>
          <Link href="/carga" className="font-medium transition-colors hover:text-blue-100">
            Carga
          </Link>
          <Link href="/analisis" className="font-medium transition-colors hover:text-blue-100">
            Análisis
          </Link>
          <Link href="/informe" className="font-medium transition-colors hover:text-blue-100">
            Informe
          </Link>
        </nav>
        <div className="flex items-center">
          <Link href="/perfil">
            <UserIcon className="h-6 w-6 text-white" />
          </Link>
        </div>
      </div>
    </header>
  )
}

