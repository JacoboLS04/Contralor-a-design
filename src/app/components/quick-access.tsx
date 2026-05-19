import { 
  AlertCircle, 
  FileText, 
  Briefcase, 
  BarChart3, 
  MessageSquare, 
  Eye 
} from "lucide-react";

const quickAccessItems = [
  {
    icon: AlertCircle,
    title: "Denuncias y reclamos",
    link: "#servicios",
  },
  {
    icon: FileText,
    title: "Trámites y servicios",
    link: "#servicios",
  },
  {
    icon: Briefcase,
    title: "Atención en línea",
    link: "#servicios",
  },
  {
    icon: BarChart3,
    title: "Informes de control",
    link: "#indicadores",
  },
  {
    icon: MessageSquare,
    title: "PQRSDF",
    link: "#servicios",
  },
  {
    icon: Eye,
    title: "Transparencia",
    link: "#transparencia",
  }
];

export function QuickAccess() {
  return (
    <div>
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <h2 className="text-[var(--text-primary)]">Accesos Rápidos</h2>
        <p className="mt-2 text-[var(--text-secondary)]">Servicios institucionales de acceso inmediato</p>
      </div>

      <div className="rounded-2xl border border-[#DCE1E7] bg-[#F2F3F5] px-4 py-8 md:px-7 lg:px-10">
        <div className="grid grid-cols-2 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
        {quickAccessItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <a
              key={index}
              href={item.link}
              className="group flex flex-col items-center px-2 text-center focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
            >
              <div className="inline-flex h-[92px] w-[92px] items-center justify-center rounded-full border-[3px] border-[#97A1AB] bg-white shadow-[0_4px_10px_rgba(0,0,0,0.06)] transition-all duration-300 group-hover:scale-105 group-hover:border-[var(--green-primary)] group-hover:bg-[#ECF8F0]">
                <Icon className="h-11 w-11 text-[#97A1AB] transition-colors duration-300 group-hover:text-[var(--green-primary)]" />
              </div>

              <h3 className="mt-4 text-[1.05rem] font-medium leading-tight text-[#243341] underline decoration-[#243341] underline-offset-[3px] transition-colors duration-300 group-hover:text-[var(--green-primary)] group-hover:decoration-[var(--green-primary)]">
                {item.title}
              </h3>
            </a>
          );
        })}
        </div>
      </div>
    </div>
  );
}