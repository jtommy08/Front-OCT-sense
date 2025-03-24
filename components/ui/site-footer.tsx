import { EyeIcon } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <EyeIcon className="h-5 w-5 text-primary" />
            <span className="font-bold">OCTsense</span>
          </div>
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} OCTsense. Todos los derechos reservados.
          </p>
          <p className="text-xs text-muted-foreground">Basado en: Kermany D, et al. Cell. 2018; 172(5):1122-1131.</p>
        </div>
      </div>
    </footer>
  )
}

