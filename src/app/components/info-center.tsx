import { 
  FileText, 
  Users, 
  Building2, 
  Scale, 
  BookOpen, 
  Calendar,
  Award,
  Shield
} from "lucide-react";

const infoItems = [
  {
    icon: FileText,
    title: "Denuncias, quejas y reclamos",
    link: "#servicios"
  },
  {
    icon: Users,
    title: "Derechos de petición",
    link: "#servicios"
  },
  {
    icon: Building2,
    title: "Proceso de rendición de cuenta",
    link: "#transparencia"
  },
  {
    icon: Scale,
    title: "Notificaciones",
    link: "#noticias"
  },
  {
    icon: BookOpen,
    title: "Servicios en línea",
    link: "#servicios"
  },
  {
    icon: Calendar,
    title: "Contratación",
    link: "#servicios"
  },
  {
    icon: Award,
    title: "Calendario",
    link: "#noticias"
  },
  {
    icon: Shield,
    title: "Contáctenos",
    link: "#inicio"
  }
];

export function InfoCenter() {
  return (
    <div>
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <h2 className="text-[var(--text-primary)]">Centro de Información</h2>
        <p className="mt-2 text-[var(--text-secondary)]">
          Accesos institucionales de consulta y atención ciudadana
        </p>
      </div>
      
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
        {infoItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <a
              key={index}
              href={item.link}
              className="group flex h-full flex-col items-center rounded-2xl border border-[#D7DCE1] bg-white px-4 sm:px-6 py-5 sm:py-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#BFC8D1] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
            >
              <div className="mx-auto mb-4 flex h-20 sm:h-24 w-20 sm:w-24 items-center justify-center rounded-full border-[3px] border-[#97A1AB] transition-colors group-hover:border-[var(--green-primary)]">
                <Icon className="h-8 sm:h-9 w-8 sm:w-9 text-[#97A1AB] transition-colors group-hover:text-[var(--green-primary)]" />
              </div>

              <h4 className="mx-auto min-h-[52px] max-w-[18ch] text-sm sm:text-[1.05rem] font-medium leading-tight text-[#243341]">
                {item.title}
              </h4>

              <span className="mt-auto inline-flex min-h-10 items-center rounded-md border border-[#D2D8DE] px-4 py-2 text-sm font-medium text-[#1F2F3E] transition-colors group-hover:border-[var(--green-primary)] group-hover:text-[var(--green-primary)]">
                Más información
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
}