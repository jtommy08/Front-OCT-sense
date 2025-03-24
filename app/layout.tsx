import type React from "react"
import "./globals.css"

export const metadata = {
  title: "OCTsense - Diagnóstico Oftalmológico con IA",
  description:
    "Sistema de análisis de imágenes OCT mediante inteligencia artificial para diagnóstico oftalmológico preciso y eficiente",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}

