import { TrendingUp, FileCheck, Users, DollarSign } from "lucide-react";

const indicators = [
  {
    icon: FileCheck,
    value: "100%",
    label: "Cumplimiento de planes de mejoramiento",
    detail: "% de acciones correctivas implementadas con efectividad"
  },
  {
    icon: TrendingUp,
    value: "99,3%",
    label: "Calidad de rendición de cuentas",
    detail: "Índice de oportunidad, suficiencia y calidad de la información fiscal"
  },
  {
    icon: Users,
    value: "100%",
    label: "Entidades con concepto favorable",
    detail: "% de entidades auditadas con cumplimiento en eficiencia, eficacia y economía"
  },
  {
    icon: DollarSign,
    value: "$396.511M",
    label: "Valor de contratación auditada",
    detail: "Cobertura auditada: 484 contratos revisados"
  }
];

export function ManagementIndicators() {
  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-white mb-4">Indicadores de Gestión</h2>
        <p className="text-white/90 max-w-2xl mx-auto">
          Indicadores de impacto fiscal con base en resultados recientes de auditoría
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
        {indicators.map((indicator, index) => {
          const Icon = indicator.icon;
          return (
            <div
              key={index}
              className="flex h-full flex-col items-center rounded-lg border border-white/15 bg-[var(--green-dark)] p-3 text-center transition-shadow hover:shadow-lg sm:p-4 lg:p-6"
            >
              <div className="inline-flex items-center justify-center w-10 sm:w-12 lg:w-14 h-10 sm:h-12 lg:h-14 bg-white/10 rounded-full mb-4">
                <Icon className="h-6 sm:h-6.5 lg:h-7 w-6 sm:w-6.5 lg:w-7 text-[var(--gold)]" />
              </div>
              <div className="mb-2 min-h-[44px] text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--gold)]">
                {indicator.value}
              </div>
              <div className="mb-3 flex min-h-[76px] items-start text-white font-medium sm:min-h-[88px]">
                {indicator.label}
              </div>
              <div className="mt-auto flex min-h-[92px] items-start text-sm text-white/80 leading-relaxed sm:min-h-[110px]">
                {indicator.detail}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}