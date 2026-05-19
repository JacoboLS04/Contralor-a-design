import imgSigep from "figma:asset/95deea296cfb99c03ce86ee168ee16c2b921bc6a.png";
import imgSireci from "../../assets/ServiciosEspeciales/Sistema de rendicion de cuenta electronica.jpg";
import imgSia from "../../assets/ServiciosEspeciales/Sistema integrado de auditoria.png";
import imgSecop from "../../assets/ServiciosEspeciales/Sistema Electrónico de Contratación Pública.png";
import imgOfertaOpec from "../../assets/ServiciosEspeciales/Portal de empleo y convocatorias.png";
import imgPortalCgr from "../../assets/ServiciosEspeciales/Contraloría General de la República.jpg";
import imgGDocument from "../../assets/ServiciosEspeciales/Gestión documental institucional.png";
import imgPortalNinos from "../../assets/ServiciosEspeciales/Contenido pedagógico para infancia.avif";
import imgPortalAdolescentes from "../../assets/ServiciosEspeciales/Participación juvenil y formación ciudadana.png";
import imgMujerSegura from "../../assets/ServiciosEspeciales/Canales de prevención y orientación.jpg";

type Service = {
  image?: string;
  name: string;
  description: string;
  badge?: string;
};

const services: Service[] = [
  {
    image: imgSireci,
    name: "SIRECI",
    description: "Sistema de Rendición Electrónica de Cuentas",
  },
  {
    image: imgSia,
    name: "SIA OBSERVA",
    description: "Sistema Integrado de Auditoría",
  },
  {
    image: imgSigep,
    name: "SIGEP",
    description: "Gestión del Empleo Público",
  },
  {
    image: imgSecop,
    name: "SECOP",
    description: "Sistema Electrónico de Contratación Pública",
  },
  {
    image: imgOfertaOpec,
    name: "OFERTA OPEC",
    description: "Portal de empleo y convocatorias",
  },
  {
    image: imgPortalCgr,
    name: "Portal CGR",
    description: "Contraloría General de la República",
  },
  {
    image: imgGDocument,
    name: "GDocument",
    description: "Gestión documental institucional",
  },
  {
    image: imgPortalNinos,
    name: "Portal para niños",
    description: "Contenido pedagógico para infancia",
  },
  {
    image: imgPortalAdolescentes,
    name: "Portal para adolescentes",
    description: "Participación juvenil y formación ciudadana",
  },
  {
    image: imgMujerSegura,
    name: "Mujer segura",
    description: "Canales de prevención y orientación",
  },
  {
    image: imgSia,
    name: "SIA Contralorías",
    description: "Módulo de gestión para contralorías",
  },
  {
    image: imgSia,
    name: "SIA Atención al Ciudadano",
    description: "Seguimiento de solicitudes y trámites",
  },
  {
    image: imgSia,
    name: "SIA POAS Manager",
    description: "Planeación y control de actividades",
  },
];

export function SpecialServices() {
  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-[#1A1A1A] mb-4">Servicios Especiales</h2>
        <p className="text-[#5C5C5C] max-w-2xl mx-auto">
          Plataformas y sistemas de información institucional
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        {services.map((service) => (
          <article
            key={service.name}
            className="group flex flex-col items-center justify-center bg-white border border-gray-200 rounded-xl p-5 hover:border-[#038138] hover:shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-[#038138] min-h-[210px]"
          >
            <div className="mb-3 flex h-24 w-24 items-center justify-center rounded-full border border-[#F2D597] bg-[#FFF8E8] p-2.5 overflow-hidden">
              {service.image ? (
                <div className="flex h-full w-full items-center justify-center rounded-full bg-white">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="h-full w-full object-contain p-1"
                  />
                </div>
              ) : (
                <span className="text-[#038138] font-extrabold text-lg tracking-tight">{service.badge}</span>
              )}
            </div>
            <h4 className="text-sm font-semibold text-[#1A1A1A] text-center mb-1">
              {service.name}
            </h4>
            <p className="text-xs text-[#5C5C5C] text-center leading-tight">
              {service.description}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
