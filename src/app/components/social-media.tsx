import type { ComponentType } from "react";
import { ExternalLink, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import imgLogo from "../../assets/logoGen.png";

type FeedColumn = {
  name: string;
  handle: string;
  action: string;
  postTitle: string;
  postCopy: string;
  image: string;
  imageAlt: string;
  badge: string;
  icon: ComponentType<{ className?: string }>;
  tone: string;
  border: string;
};

const feedColumns: FeedColumn[] = [
  {
    name: "Facebook",
    handle: "@contraloriaarmenia",
    action: "Ver perfil",
    postTitle: "Jornada de participación ciudadana",
    postCopy:
      "Compartimos espacios de diálogo con estudiantes y comunidad para fortalecer el control social en Armenia.",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=960&q=80",
    imageAlt: "Participación ciudadana en jornada institucional",
    badge: "Actualizado hace 2 horas",
    icon: Facebook,
    tone: "text-[#1877F2]",
    border: "hover:border-[#1877F2]",
  },
  {
    name: "X",
    handle: "@CMA_Armenia",
    action: "Ver cuenta",
    postTitle: "#ControlFiscalAbierto",
    postCopy:
      "Seguimos invitando a la ciudadanía a consultar los informes de gestión y a participar en los canales de rendición de cuentas.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=960&q=80",
    imageAlt: "Informe de gestión institucional",
    badge: "Publicado hoy",
    icon: Twitter,
    tone: "text-[#111827]",
    border: "hover:border-[#111827]",
  },
  {
    name: "Instagram",
    handle: "@contraloriaarmenia",
    action: "Ver perfil",
    postTitle: "Buenas prácticas de control",
    postCopy:
      "Contenido visual sobre pedagogía fiscal, transparencia y acompañamiento a la comunidad educativa.",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=960&q=80",
    imageAlt: "Actividad institucional con comunidad educativa",
    badge: "Nuevo",
    icon: Instagram,
    tone: "text-[#E1306C]",
    border: "hover:border-[#E1306C]",
  },
];

export function SocialMedia() {
  return (
    <div className="relative mx-auto max-w-[1200px]">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <h2 className="text-[var(--text-primary)]">Redes Sociales</h2>
        <p className="mt-2 text-[var(--text-secondary)]">
          Publicaciones recientes de nuestros canales oficiales
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        {feedColumns.map((feed, index) => {
          const Icon = feed.icon;

          return (
            <article
              key={index}
              className={`group overflow-hidden rounded-xl border border-[#D7DCE1] bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md ${feed.border}`}
            >
              <header className="flex items-center justify-between border-b border-[#E6EAEE] px-4 py-3">
                <div className="flex items-center gap-3">
                  <div className={`inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#F3F5F7] ${feed.tone}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-[1rem] font-semibold text-[#1F2F3E]">{feed.name}</h3>
                    <p className="text-xs text-[#5C6670]">{feed.handle}</p>
                  </div>
                </div>

                <span className="rounded-full bg-[#F3F6F8] px-2.5 py-1 text-[11px] font-medium text-[#4D5A67]">
                  {feed.badge}
                </span>
              </header>

              <div className="px-4 pt-4">
                <div className="flex items-center gap-3">
                  <img
                    src={imgLogo}
                    alt="Logo institucional"
                    className="h-14 w-14 rounded-full border border-[#D0D7DE] bg-white object-contain p-1"
                  />
                  <div>
                    <p className="text-sm font-semibold text-[#223140]">Contraloría General del Quindío</p>
                    <p className="text-xs text-[#6A7480]">Cuenta oficial</p>
                  </div>
                </div>

                <h4 className="mt-4 text-[1.06rem] font-semibold leading-tight text-[#202F3E]">{feed.postTitle}</h4>
                <p className="mt-2 text-sm leading-relaxed text-[#5C6670]">{feed.postCopy}</p>
              </div>

              <div className="mt-4 px-4 pb-4">
                <img
                  src={feed.image}
                  alt={feed.imageAlt}
                  className="h-[300px] w-full rounded-lg border border-[#D7DCE1] object-cover"
                />
              </div>

              <footer className="flex items-center justify-between border-t border-[#E6EAEE] px-4 py-3">
                <span className="text-xs text-[#6A7480]">Canal verificado</span>
                <button
                  type="button"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--green-primary)] transition-colors hover:text-[var(--green-dark)] focus:outline-none focus:ring-2 focus:ring-[var(--green-primary)]"
                >
                  {feed.action}
                  <ExternalLink className="h-4 w-4" />
                </button>
              </footer>
            </article>
          );
        })}
      </div>

      <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-2">
        <span className="text-sm text-[#5E6974]">Tambien puedes seguirnos en</span>

        <div className="flex items-center justify-center gap-2">
          <button
            type="button"
            aria-label="YouTube"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#FF0000] text-white transition-all hover:brightness-95"
          >
            <Youtube className="h-5 w-5" />
          </button>

          <button
            type="button"
            aria-label="Facebook"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#1877F2] text-white transition-all hover:brightness-95"
          >
            <Facebook className="h-5 w-5" />
          </button>

          <button
            type="button"
            aria-label="Instagram"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#E1306C] text-white transition-all hover:brightness-95"
          >
            <Instagram className="h-5 w-5" />
          </button>

          <button
            type="button"
            aria-label="X"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#111827] text-white transition-all hover:brightness-95"
          >
            <Twitter className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}