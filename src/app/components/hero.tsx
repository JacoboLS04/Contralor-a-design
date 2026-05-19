import { useEffect, useState } from "react";
import { Container } from "./container";
import { ChevronLeft, ChevronRight, Landmark, Pause, Play } from "lucide-react";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1600&q=80",
    title: "Control fiscal cercano y transparente",
    subtitle: "Impulsamos participación ciudadana con información clara y oportuna.",
    ctaPrimary: "Radicar denuncia",
    ctaSecondary: "Ver informes",
  },
  {
    image:
      "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?auto=format&fit=crop&w=1600&q=80",
    title: "Auditorías con enfoque preventivo",
    subtitle: "Vigilamos los recursos públicos para fortalecer la confianza institucional.",
    ctaPrimary: "Conoce auditorías",
    ctaSecondary: "Participa",
  },
  {
    image:
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1600&q=80",
    title: "Resultados de gestión para la ciudadanía",
    subtitle: "Publicamos avances, hallazgos y acciones de mejora de manera permanente.",
    ctaPrimary: "Ver resultados",
    ctaSecondary: "Centro de información",
  },
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => window.clearInterval(intervalId);
  }, [isPaused]);

  const slide = slides[currentSlide];

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="bg-[var(--green-primary)]">
      <div className="relative">
        <div className="relative h-[380px] sm:h-[420px] md:h-[460px]">
          <img
            src={slide.image}
            alt={slide.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[rgba(2,92,40,0.68)]" />

          <Container className="relative z-10 h-full">
            <div className="flex h-full items-center">
              <div className="max-w-2xl text-white">
                <span className="inline-flex items-center rounded-full bg-[var(--gold)] px-3 py-1 sm:px-4 sm:py-1.5 text-xs font-semibold text-white mb-4">
                  Portal institucional
                </span>
                <h1 className="mb-4 max-w-[16ch] text-[clamp(1.9rem,6.2vw,4.25rem)] leading-[1.04] tracking-[0.01em] font-bold text-white">
                  {slide.title}
                </h1>
                <p className="mb-8 max-w-xl text-[1.05rem] leading-relaxed text-white/90">
                  {slide.subtitle}
                </p>

                <div className="flex flex-wrap gap-3">
                  <button
                    type="button"
                    className="min-h-11 inline-flex items-center rounded-md bg-[var(--green-primary)] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[var(--green-dark)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:ring-offset-2 focus:ring-offset-[var(--green-dark)]"
                  >
                    {slide.ctaPrimary}
                  </button>
                  <button
                    type="button"
                    className="min-h-11 inline-flex items-center rounded-md border border-white/80 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:ring-offset-2 focus:ring-offset-[var(--green-dark)]"
                  >
                    {slide.ctaSecondary}
                  </button>
                </div>
              </div>
            </div>
          </Container>

          <button
            type="button"
            onClick={goToPrev}
            className="absolute left-3 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 hidden sm:flex h-10 sm:h-11 w-10 sm:w-11 items-center justify-center rounded-full bg-[rgba(150,15,6,0.88)] text-white hover:bg-[var(--red-institutional)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
            aria-label="Slide anterior"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            type="button"
            onClick={goToNext}
            className="absolute right-3 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 hidden sm:flex h-10 sm:h-11 w-10 sm:w-11 items-center justify-center rounded-full bg-[rgba(150,15,6,0.88)] text-white hover:bg-[var(--red-institutional)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
            aria-label="Slide siguiente"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        <div className="bg-[var(--red-institutional)] py-3 border-y border-[var(--gold)]/60">
          <Container>
            <div className="flex flex-wrap items-center justify-center gap-5">
              <button
                type="button"
                onClick={() => setIsPaused((prev) => !prev)}
                className="min-h-11 inline-flex items-center gap-2 text-sm text-white hover:text-[var(--gold)] transition-colors rounded px-2 focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
                aria-label={isPaused ? "Reanudar carrusel" : "Pausar carrusel"}
              >
                {isPaused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
                {isPaused ? "Reanudar" : "Detener"}
              </button>

              <div className="flex items-center gap-2" role="tablist" aria-label="Indicadores de carrusel">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setCurrentSlide(index)}
                    className={`h-3 w-3 rounded-full border border-white transition-colors ${
                      index === currentSlide ? "bg-[var(--gold)] border-[var(--gold)]" : "bg-transparent"
                    }`}
                    aria-label={`Ir al slide ${index + 1}`}
                    aria-selected={index === currentSlide}
                  />
                ))}
              </div>
            </div>
          </Container>
        </div>
      </div>

      <div className="border-t-4 border-[var(--gold)] bg-gradient-to-r from-[var(--green-dark)] to-[var(--green-primary)] py-10">
        <Container>
          <div className="grid grid-cols-1 items-center gap-4 sm:gap-6 lg:gap-8 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--gold)]">
                Portal institucional
              </p>
              <h2 className="max-w-[12ch] text-white text-[clamp(2rem,3vw,3.2rem)] leading-[1.02]">
                Mi Colombia Digital 2025
              </h2>
            </div>

            <div className="lg:col-span-8 rounded-xl border border-[var(--gold)]/45 bg-white/6 p-6 shadow-[0_10px_28px_rgba(0,0,0,0.18)] backdrop-blur-[1px]">
              <div className="grid grid-cols-1 items-center gap-4 sm:grid-cols-[96px_1fr]">
                <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-[var(--gold)] bg-[var(--green-primary)]/55">
                  <Landmark className="h-9 w-9 text-[var(--gold)]" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm leading-relaxed text-white/95 sm:text-[1.02rem]">
                    Conoce los avances en simplificación de trámites y servicios digitales para la ciudadanía del Quindío.
                  </p>
                  <button
                    type="button"
                    className="mt-3 inline-flex min-h-11 items-center rounded-md border border-[var(--gold)] px-4 py-2 text-sm font-semibold text-[var(--gold)] transition-colors hover:bg-[var(--gold)] hover:text-[var(--green-dark)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
                  >
                    Ver actualización
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
