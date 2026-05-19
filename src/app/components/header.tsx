import { useEffect, useRef, useState } from "react";
import { Container } from "./container";
import { Search, ChevronDown, Menu, X } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import imgLogo from "../../assets/logoGen.png";

export function Header() {
  const navRef = useRef<HTMLElement | null>(null);
  const [isPinned, setIsPinned] = useState(false);
  const [isAnimatingIn, setIsAnimatingIn] = useState(false);
  const [navHeight, setNavHeight] = useState(74);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  useEffect(() => {
    const measureNavHeight = () => {
      if (!navRef.current) {
        return;
      }

      setNavHeight(Math.ceil(navRef.current.getBoundingClientRect().height));
    };

    measureNavHeight();

    const onScroll = () => {
      const currentY = window.scrollY;
      const shouldPin = currentY > 170;

      if (shouldPin && !isPinned) {
        setIsPinned(true);
        setIsAnimatingIn(true);
        window.setTimeout(() => setIsAnimatingIn(false), 280);
      }

      if (!shouldPin && isPinned) {
        setIsPinned(false);
        setIsAnimatingIn(false);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measureNavHeight);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measureNavHeight);
    };
  }, [isPinned, mobileMenuOpen]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      {/* Main Header */}
      <div className="bg-white border-b border-gray-200">
        <Container>
          <div className="md:hidden py-3">
            <div className="flex justify-center">
              <img
                src={imgLogo}
                alt="Contraloría General del Quindío"
                className="h-20 w-20"
              />
            </div>

            <form className="relative mt-3" role="search" onSubmit={handleSearchSubmit}>
              <label htmlFor="site-search-mobile" className="sr-only">
                Buscar en la entidad
              </label>
              <input
                id="site-search-mobile"
                type="search"
                placeholder="Buscar"
                className="w-full rounded-lg border border-[#c9c9c9] bg-white px-3 py-2 pr-11 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--green-primary)]"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-[var(--green-primary)] p-1.5 text-white transition-colors hover:bg-[var(--green-dark)] focus:outline-none focus:ring-2 focus:ring-[var(--green-primary)]"
                aria-label="Buscar"
              >
                <Search className="h-3.5 w-3.5" />
              </button>
            </form>
          </div>

          <div className="hidden md:flex items-center justify-between py-4 gap-4">
            <div className="flex items-center gap-4">
              <img
                src={imgLogo}
                alt="Contraloría General del Quindío"
                className="h-20 w-20 flex-shrink-0"
              />
              <div className="border-l border-gray-300 pl-4">
                <h2 className="text-xl font-semibold text-[var(--text-primary)] leading-tight">
                  Contraloría General<br />del Quindío
                </h2>
              </div>
            </div>

            <div className="flex flex-col items-end gap-3" id="header-actions">
              <button className="text-sm text-[var(--text-secondary)] hover:text-[var(--green-primary)] transition-colors rounded px-1 focus:outline-none focus:ring-2 focus:ring-[var(--green-primary)]">
                Inicia sesión
              </button>
              <div className="flex items-center gap-3">
                <form className="relative" role="search" onSubmit={handleSearchSubmit}>
                  <label htmlFor="site-search" className="sr-only">
                    Buscar en la entidad
                  </label>
                  <input
                    id="site-search"
                    type="search"
                    placeholder="Buscar"
                    className="w-80 rounded-lg border border-[#c9c9c9] bg-white px-4 py-2.5 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--green-primary)]"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-[var(--green-primary)] rounded-full text-white hover:bg-[var(--green-dark)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--green-primary)]"
                    aria-label="Buscar"
                  >
                    <Search className="h-3.5 w-3.5" />
                  </button>
                </form>

                <a
                  href="#servicios"
                  className="inline-flex min-h-11 items-center rounded-md bg-[var(--green-primary)] px-4 py-2 text-sm font-semibold text-white hover:bg-[var(--green-dark)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--green-primary)]"
                >
                  Radicar denuncia
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>
      
      {isPinned ? <div style={{ height: `${navHeight}px` }} aria-hidden="true" /> : null}

      {/* Navigation */}
      <nav
        ref={navRef}
        className={`bg-[var(--bg-section)] border-y-2 border-[var(--green-primary)] transition-transform duration-300 ${
          isPinned
            ? `fixed left-0 right-0 top-0 z-[65] shadow-lg ${isAnimatingIn ? "translate-y-0" : "translate-y-0"}`
            : "relative translate-y-0"
        }`}
        style={isPinned && isAnimatingIn ? { animation: "headerDropIn 280ms ease-out" } : undefined}
      >
        <div className="md:hidden border-b border-[#D9DEE3]">
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="flex w-full items-center justify-between px-4 py-3 text-[var(--text-primary)] transition-colors hover:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--green-primary)]"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            <span className="inline-flex items-center gap-3 text-sm font-semibold">
              <Menu className="h-5 w-5" />
              Menú de navegación
            </span>
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </button>
        </div>

        {mobileMenuOpen ? (
          <div id="mobile-navigation" className="md:hidden bg-white px-4 py-2">
            <Accordion type="single" collapsible defaultValue="acciones" className="w-full">
              <AccordionItem value="acciones" className="border-[#D9DEE3]">
                <AccordionTrigger className="py-3 text-sm font-semibold text-[var(--text-primary)] hover:no-underline">
                  Acciones rápidas
                </AccordionTrigger>
                <AccordionContent className="pb-3">
                  <div className="grid grid-cols-1 gap-2">
                    <button className="inline-flex min-h-11 w-full items-center justify-center rounded-md border border-[#D2D8DE] px-4 py-2 text-sm font-semibold text-[var(--text-primary)] transition-colors hover:border-[var(--green-primary)] hover:text-[var(--green-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--green-primary)]">
                      Inicia sesión
                    </button>
                    <a
                      href="#servicios"
                      className="inline-flex min-h-11 w-full items-center justify-center rounded-md bg-[var(--green-primary)] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[var(--green-dark)] focus:outline-none focus:ring-2 focus:ring-[var(--green-primary)]"
                    >
                      Radicar denuncia
                    </a>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="enlaces" className="border-[#D9DEE3]">
                <AccordionTrigger className="py-3 text-sm font-semibold text-[var(--text-primary)] hover:no-underline">
                  Enlaces institucionales
                </AccordionTrigger>
                <AccordionContent className="pb-3">
                  <div className="grid grid-cols-1 gap-1">
                    <a href="#inicio" className="rounded-md px-3 py-2 text-sm text-[var(--text-primary)] hover:bg-[var(--green-light)]">Inicio</a>
                    <a href="#transparencia" className="rounded-md px-3 py-2 text-sm text-[var(--text-primary)] hover:bg-[var(--green-light)]">Transparencia</a>
                    <a href="#servicios" className="rounded-md px-3 py-2 text-sm text-[var(--text-primary)] hover:bg-[var(--green-light)]">Servicios</a>
                    <a href="#noticias" className="rounded-md px-3 py-2 text-sm text-[var(--text-primary)] hover:bg-[var(--green-light)]">Noticias</a>
                    <a href="#servicios" className="rounded-md px-3 py-2 text-sm text-[var(--text-primary)] hover:bg-[var(--green-light)]">Normatividad</a>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        ) : null}

        <Container>
          <div className="hidden md:flex items-center justify-between">
            <div className="flex items-center">
              <a 
                href="#inicio" 
                className="px-4 lg:px-6 py-4 bg-[var(--green-primary)] text-white text-xs lg:text-sm font-normal hover:bg-[var(--green-dark)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--green-primary)]"
              >
                Inicio
              </a>
              <a 
                href="#transparencia" 
                className="px-4 lg:px-6 py-4 text-[var(--text-primary)] text-xs lg:text-sm hover:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--green-primary)]"
              >
                Transparencia
              </a>
              <button 
                className="px-4 lg:px-6 py-4 text-[var(--text-primary)] text-xs lg:text-sm hover:bg-white transition-colors flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-[var(--green-primary)]"
              >
                Servicios
                <ChevronDown className="h-4 w-4" />
              </button>
              <button 
                className="px-4 lg:px-6 py-4 text-[var(--text-primary)] text-xs lg:text-sm hover:bg-white transition-colors flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-[var(--green-primary)]"
              >
                Participa
                <ChevronDown className="h-4 w-4" />
              </button>
              <a 
                href="#noticias" 
                className="px-4 lg:px-6 py-4 text-[var(--text-primary)] text-xs lg:text-sm hover:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--green-primary)]"
              >
                Noticias
              </a>
              <a 
                href="#servicios" 
                className="px-4 lg:px-6 py-4 text-[var(--text-primary)] text-xs lg:text-sm hover:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--green-primary)]"
              >
                Normatividad
              </a>
            </div>
          </div>
        </Container>
      </nav>
    </>
  );
}