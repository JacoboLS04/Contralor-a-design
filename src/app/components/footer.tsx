import { Container } from "./container";
import { MapPin, Phone, Mail, Clock, ChevronRight, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import imgLogo from "../../assets/logoGen.png";

export function Footer() {
  return (
    <footer className="bg-[var(--green-dark)] text-white pt-8 sm:pt-12 pb-4 sm:pb-6 border-t-4 border-[var(--gold)]">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-10">
          {/* Datos de contacto */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img
                src={imgLogo}
                alt="Contraloría General del Quindío"
                className="h-16 sm:h-20 w-16 sm:w-20 bg-white rounded p-1.5 flex-shrink-0"
              />
              <div>
                <h3 className="text-base font-semibold">Contraloría General</h3>
                <p className="text-xs text-white/80">del Quindío</p>
              </div>
            </div>

            <p className="text-sm text-white/80 leading-relaxed mb-4">
              Órgano de control fiscal que vigila la gestión de los recursos públicos
              en el departamento del Quindío.
            </p>

            <div className="space-y-3 text-sm text-white/90">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-[var(--gold)]" />
                <div>
                  <p className="text-white/90">Piso 3 del edificio de la Gobernación del Quindío</p>
                  <p className="text-white/70">Calle 20 # 13-22, Armenia, Quindío</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0 text-[var(--gold)]" />
                <p className="text-white/80">(607) 735 9919</p>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0 text-[var(--gold)]" />
                <p className="text-white/80">contactenos@contraloria-quindio.gov.co</p>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="h-4 w-4 mt-0.5 flex-shrink-0 text-[var(--gold)]" />
                <p className="text-white/80">Lunes a viernes: 8:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>

          {/* Columna institucional */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 pb-2 border-b border-white/15">Institucional</h3>
            <div className="space-y-2 text-sm">
              {[
                "Nuestra entidad",
                "Directorio de funcionarios",
                "Normatividad",
                "Contratación",
                "Ofertas de empleo",
              ].map((item) => (
                <button type="button" key={item} className="flex items-center gap-2 text-white/80 hover:text-[var(--gold)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--gold)] rounded px-1 py-0.5">
                  <ChevronRight className="h-3.5 w-3.5" />
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Atención al ciudadano */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 pb-2 border-b border-white/15">Atención al ciudadano</h3>
            <div className="space-y-2 text-sm mb-6">
              {[
                "Trámites y servicios",
                "Radicar PQRSDF",
                "Canal de denuncias",
                "Preguntas frecuentes",
                "Glosario",
              ].map((item) => (
                <button type="button" key={item} className="flex items-center gap-2 text-white/80 hover:text-[var(--gold)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--gold)] rounded px-1 py-0.5">
                  <ChevronRight className="h-3.5 w-3.5" />
                  {item}
                </button>
              ))}
            </div>

            <h4 className="text-sm font-semibold text-white/90 mb-3">Síguenos en redes sociales</h4>
            <div className="flex items-center gap-2 sm:gap-3">
              <button type="button" aria-label="Facebook" className="h-8 sm:h-9 w-8 sm:w-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--gold)] hover:text-[var(--green-dark)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--gold)]">
                <Facebook className="h-4 w-4" />
              </button>
              <button type="button" aria-label="Twitter" className="h-8 sm:h-9 w-8 sm:w-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--gold)] hover:text-[var(--green-dark)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--gold)]">
                <Twitter className="h-4 w-4" />
              </button>
              <button type="button" aria-label="Instagram" className="h-8 sm:h-9 w-8 sm:w-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--gold)] hover:text-[var(--green-dark)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--gold)]">
                <Instagram className="h-4 w-4" />
              </button>
              <button type="button" aria-label="Youtube" className="h-8 sm:h-9 w-8 sm:w-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--gold)] hover:text-[var(--green-dark)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--gold)]">
                <Youtube className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Última actualización y atribuciones */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 pb-2 border-b border-white/15">Información</h3>
            
            <div className="bg-[var(--green-primary)] rounded-lg p-5 border border-[var(--gold)]/25 mb-6">
              <p className="text-sm text-white/80 mb-2">Contador de visitas</p>
              <p className="text-lg sm:text-2xl md:text-3xl font-bold">1,245,876</p>
              <p className="text-xs text-white/60 mt-1">Desde enero 2024</p>
            </div>

            <div className="bg-[var(--green-primary)] rounded-lg p-5 border border-[var(--gold)]/25 mb-6">
              <p className="text-sm text-white/80 mb-2">Última actualización</p>
              <p className="text-lg sm:text-2xl md:text-3xl font-bold">25/03/2026</p>
              <p className="text-xs text-white/60 mt-1">Marzo 2026</p>
            </div>

            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <p className="text-xs text-white/70 leading-relaxed mb-3">
                Diseño © 2026 por Jacobo Luengas. Este trabajo está bajo licencia
              </p>
              <a 
                href="https://creativecommons.org/licenses/by-nc-sa/4.0/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-[var(--gold)] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--gold)] rounded px-1"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 3v18h18V3H3zm3.5 3.5h11v2h-11v-2zm0 3h11v2h-11v-2zm0 3h11v6h-11v-6z"/>
                </svg>
                Creative Commons BY-NC-SA 4.0
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-5">
          <p className="text-center text-sm text-white/65">
            NIT: 800.123.456-7 | Código Postal: 630001 | Armenia, Quindío, Colombia
          </p>
          <p className="text-center text-xs text-white/50 mt-2">
            © 2026 Contraloría General del Quindío. Todos los derechos reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
}