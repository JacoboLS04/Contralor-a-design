import type { ComponentType } from "react";
import {
  BriefcaseBusiness,
  ChevronRight,
  ClipboardCheck,
  Landmark,
  ShieldCheck,
  Wallet,
} from "lucide-react";

type MissionVariant = "green" | "gold" | "red";

type MissionArea = {
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
  variant: MissionVariant;
  link: string;
};

const missionAreas: MissionArea[] = [
  {
    title: "Dirección administrativa y financiera",
    description: "Planeación, presupuesto y soporte institucional.",
    icon: Wallet,
    variant: "green",
    link: "#servicios",
  },
  {
    title: "Dirección técnica de control fiscal y participación ciudadana",
    description: "Auditorías y acompañamiento a la ciudadanía.",
    icon: ClipboardCheck,
    variant: "gold",
    link: "#servicios",
  },
  {
    title: "Responsabilidad fiscal y jurisdicción coactiva",
    description: "Procesos fiscales y recuperación de recursos públicos.",
    icon: Landmark,
    variant: "red",
    link: "#servicios",
  },
  {
    title: "Gestión gerencial",
    description: "Seguimiento estratégico y mejora institucional.",
    icon: BriefcaseBusiness,
    variant: "gold",
    link: "#indicadores",
  },
  {
    title: "Control interno",
    description: "Evaluación de riesgos y aseguramiento de calidad.",
    icon: ShieldCheck,
    variant: "green",
    link: "#transparencia",
  },
];

const cardStyles: Record<MissionVariant, { hoverBorder: string; hoverCircle: string; hoverIcon: string; hoverButton: string }> = {
  green: {
    hoverBorder: "hover:border-[#9FD2B4]",
    hoverCircle: "group-hover:border-[#038138] group-hover:bg-[#ECF8F0]",
    hoverIcon: "group-hover:text-[#038138]",
    hoverButton: "group-hover:border-[#038138] group-hover:text-[#038138]",
  },
  gold: {
    hoverBorder: "hover:border-[#E9C989]",
    hoverCircle: "group-hover:border-[#AF6F05] group-hover:bg-[#FFF5E4]",
    hoverIcon: "group-hover:text-[#AF6F05]",
    hoverButton: "group-hover:border-[#AF6F05] group-hover:text-[#AF6F05]",
  },
  red: {
    hoverBorder: "hover:border-[#E8B8B4]",
    hoverCircle: "group-hover:border-[#960F06] group-hover:bg-[#FDEEEB]",
    hoverIcon: "group-hover:text-[#960F06]",
    hoverButton: "group-hover:border-[#960F06] group-hover:text-[#960F06]",
  },
};

export function MissionAreas() {
  return (
    <div>
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <h2 className="text-[var(--text-primary)]">Áreas Misionales</h2>
        <p className="mt-2 text-[var(--text-secondary)]">
          Ejes de trabajo institucional para el control fiscal territorial
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:gap-4 md:gap-5 xl:gap-6 md:grid-cols-2 xl:grid-cols-5">
        {missionAreas.map((area, index) => {
          const Icon = area.icon;
          const style = cardStyles[area.variant];

          return (
            <article
              key={index}
              className={`group h-full rounded-sm border border-[#D4D9DE] bg-white px-4 sm:px-5 py-4 sm:pb-5 sm:pt-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${style.hoverBorder}`}
            >
              <div className="flex h-full flex-col">
                <div className="flex justify-center">
                <div className={`inline-flex h-[90px] sm:h-[118px] w-[90px] sm:w-[118px] items-center justify-center rounded-full border-4 border-[#A3ADB8] bg-[#F9FAFB] transition-colors duration-300 ${style.hoverCircle}`}>
                  <Icon className={`h-10 sm:h-12 w-10 sm:w-12 text-[#97A1AB] transition-colors duration-300 ${style.hoverIcon}`} />
                </div>
                </div>

                <h3 className="mt-4 sm:mt-5 min-h-[52px] sm:min-h-[60px] md:min-h-[68px] text-sm sm:text-[1.05rem] font-semibold leading-[1.2] text-[var(--text-primary)]">
                {area.title}
                </h3>

                <p className="mt-2 min-h-[60px] sm:min-h-[70px] text-sm leading-relaxed text-[var(--text-secondary)]">
                {area.description}
                </p>

                <a
                  href={area.link}
                  className={`mt-auto inline-flex items-center gap-1 self-center rounded-md border border-[#CED5DC] px-4 py-2 text-[1.05rem] font-medium text-[#233142] transition-colors duration-300 ${style.hoverButton}`}
                >
                  Más información
                  <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
