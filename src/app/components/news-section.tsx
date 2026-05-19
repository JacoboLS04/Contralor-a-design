import { ArrowRight, Calendar } from "lucide-react";

const newsItems = [
  {
    image: "https://images.unsplash.com/photo-1640200330428-9fe2ab926de1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3Zlcm5tZW50JTIwbWVldGluZyUyMHRyYW5zcGFyZW5jeSUyMGFjY291bnRhYmlsaXR5fGVufDF8fHx8MTc3NDM2NjY5MHww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Rendición de Cuentas",
    date: "15 de Marzo, 2026",
    title: "Audiencia Pública de Rendición de Cuentas 2025",
    excerpt: "La Contraloría Municipal presentará los resultados de la gestión fiscal del año anterior ante la ciudadanía."
  },
  {
    image: "https://images.unsplash.com/photo-1753955900083-b62ee8d97805?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBhdWRpdCUyMGRvY3VtZW50cyUyMHJlcG9ydHxlbnwxfHx8fDE3NzQzNjY2OTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Informes",
    date: "10 de Marzo, 2026",
    title: "Informe de Auditoría Secretaría de Obras Públicas",
    excerpt: "Se publicó el informe de auditoría correspondiente al segundo semestre de 2025 con hallazgos y recomendaciones."
  },
  {
    image: "https://images.unsplash.com/photo-1760992003927-96ac55e57296?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBtZWV0aW5nJTIwcHVibGljJTIwc2VydmljZXxlbnwxfHx8fDE3NzQzNjY2OTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Participación",
    date: "5 de Marzo, 2026",
    title: "Mesa de Control Social con la Comunidad",
    excerpt: "Invitación a la ciudadanía para participar en espacios de veeduría y control ciudadano a la gestión pública."
  }
];

export function NewsSection() {
  return (
    <div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 sm:mb-12 gap-4 sm:gap-0">
        <h2 className="text-[var(--text-primary)]">Noticias y Comunicados</h2>
        <button className="px-4 sm:px-6 py-2 sm:py-2.5 text-sm sm:text-base border-2 border-[var(--green-primary)] text-[var(--green-primary)] rounded-md font-semibold hover:bg-[var(--green-light)] transition-colors flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-[var(--green-primary)] flex-shrink-0">
          Ver todos
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {newsItems.map((news, index) => (
          <article key={index} className="flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md">
            <div className="aspect-video w-full overflow-hidden">
              <img 
                src={news.image} 
                alt={news.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-1 flex-col p-4 sm:p-5 lg:p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 bg-[#D48A0D] text-white text-xs font-semibold rounded-full">
                  {news.category}
                </span>
                <div className="flex items-center gap-1 text-[#5C5C5C] text-sm">
                  <Calendar className="h-4 w-4" />
                  <span>{news.date}</span>
                </div>
              </div>
              <h3 className="mb-3 min-h-[64px] text-[#1A1A1A] line-clamp-2">
                {news.title}
              </h3>
              <p className="mb-4 min-h-[56px] text-sm leading-relaxed text-[#5C5C5C] line-clamp-2">
                {news.excerpt}
              </p>
              <button
                type="button"
                className="mt-auto inline-flex items-center gap-1 rounded px-1 text-sm font-semibold text-[var(--green-primary)] hover:underline focus:outline-none focus:ring-2 focus:ring-[var(--green-primary)]"
              >
                Leer más
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}