import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import {
  Accessibility,
  BookText,
  Eye,
  Heading,
  ImageOff,
  Languages,
  Link,
  RefreshCcw,
  Search,
  Settings2,
  Type,
  X,
  ZoomIn,
  ZoomOut,
} from "lucide-react";

const FONT_SIZE_STEPS = [14, 16, 18, 20, 22];
const LETTER_SPACING_STEPS = [0, 0.01, 0.02, 0.03, 0.04];
const LINE_HEIGHT_STEPS = [1.4, 1.6, 1.8, 2.0, 2.2];
const CONTENT_SCALE_STEPS = [1, 1.05, 1.1, 1.15, 1.2];

function getLevelLabel(step: number) {
  if (step === 2) {
    return "Predeterminado";
  }

  if (step <= 1) {
    return "Bajo";
  }

  return "Alto";
}

export function AccessibilityWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState("Español");
  const [buttonTop, setButtonTop] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const [highContrast, setHighContrast] = useState(false);
  const [highlightLinks, setHighlightLinks] = useState(false);
  const [highlightTitles, setHighlightTitles] = useState(false);
  const [readableFont, setReadableFont] = useState(false);
  const [textMagnifier, setTextMagnifier] = useState(false);
  const [readingMask, setReadingMask] = useState(false);
  const [hideImages, setHideImages] = useState(false);

  const [fontSizeStep, setFontSizeStep] = useState(2);
  const [letterSpacingStep, setLetterSpacingStep] = useState(2);
  const [lineHeightStep, setLineHeightStep] = useState(1);
  const [contentScaleStep, setContentScaleStep] = useState(0);

  useEffect(() => {
    const root = document.documentElement;

    root.classList.toggle("accessibility-high-contrast", highContrast);
    root.classList.toggle("accessibility-highlight-links", highlightLinks);
    root.classList.toggle("accessibility-highlight-titles", highlightTitles);
    root.classList.toggle("accessibility-readable-font", readableFont);
    root.classList.toggle("accessibility-text-magnifier", textMagnifier);
    root.classList.toggle("accessibility-reading-mask", readingMask);
    root.classList.toggle("accessibility-hide-images", hideImages);

    root.style.setProperty("--font-size", `${FONT_SIZE_STEPS[fontSizeStep]}px`);
    root.style.setProperty("--accessibility-letter-spacing", `${LETTER_SPACING_STEPS[letterSpacingStep]}em`);
    root.style.setProperty("--accessibility-line-height", `${LINE_HEIGHT_STEPS[lineHeightStep]}`);
    root.style.setProperty("--accessibility-content-scale", `${CONTENT_SCALE_STEPS[contentScaleStep]}`);
  }, [
    contentScaleStep,
    fontSizeStep,
    hideImages,
    highContrast,
    highlightLinks,
    highlightTitles,
    letterSpacingStep,
    lineHeightStep,
    readableFont,
    readingMask,
    textMagnifier,
  ]);

  useEffect(() => {
    if (!readingMask) {
      return;
    }

    const onMouseMove = (event: MouseEvent) => {
      document.documentElement.style.setProperty("--reading-mask-y", `${event.clientY}px`);
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, [readingMask]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.altKey && event.key.toLowerCase() === "a") {
        event.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    setIsMounted(true);

    const syncViewportMode = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };

    syncViewportMode();

    const computeButtonTop = () => {
      const minTop = Math.max(140, window.innerHeight * 0.68);
      const maxTop = Math.max(minTop + 40, window.innerHeight - 92);
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
      return minTop + (maxTop - minTop) * scrollProgress;
    };

    setButtonTop(computeButtonTop());

    const onScroll = () => {
      setButtonTop(computeButtonTop());
    };

    const onResize = () => {
      syncViewportMode();
      setButtonTop(computeButtonTop());
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const hasChanges = useMemo(() => {
    return (
      highContrast ||
      highlightLinks ||
      highlightTitles ||
      readableFont ||
      textMagnifier ||
      readingMask ||
      hideImages ||
      fontSizeStep !== 2 ||
      letterSpacingStep !== 2 ||
      lineHeightStep !== 1 ||
      contentScaleStep !== 0
    );
  }, [
    contentScaleStep,
    fontSizeStep,
    hideImages,
    highContrast,
    highlightLinks,
    highlightTitles,
    letterSpacingStep,
    lineHeightStep,
    readableFont,
    readingMask,
    textMagnifier,
  ]);

  const resetPreferences = () => {
    setHighContrast(false);
    setHighlightLinks(false);
    setHighlightTitles(false);
    setReadableFont(false);
    setTextMagnifier(false);
    setReadingMask(false);
    setHideImages(false);
    setFontSizeStep(2);
    setLetterSpacingStep(2);
    setLineHeightStep(1);
    setContentScaleStep(0);
  };

  const changeStep = (
    setter: React.Dispatch<React.SetStateAction<number>>,
    maxIndex: number,
    delta: number,
  ) => {
    setter((prev) => Math.max(0, Math.min(maxIndex, prev + delta)));
  };

  return (
    <>
      {isMounted
        ? createPortal(
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="fixed bottom-4 right-2 z-[9998] inline-flex min-h-12 items-center gap-2 rounded-full bg-[var(--green-primary)] px-3 sm:px-4 py-3 text-sm font-semibold text-white shadow-lg hover:bg-[var(--green-dark)] transition-[top,transform,opacity,background-color] duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--gold)] sm:bottom-auto sm:right-4 md:right-6"
              style={isSmallScreen ? undefined : { top: `${buttonTop}px` }}
              aria-label="Abrir opciones de accesibilidad"
            >
              <Accessibility className="h-5 w-5" />
              <span className="hidden sm:inline">Accesibilidad</span>
            </button>,
            document.body,
          )
        : null}

      {isMounted && isOpen
        ? createPortal(
            <div className="fixed inset-0 z-[9999] bg-black/55 p-2 sm:p-4 md:p-6">
              <div className="mx-auto max-h-[92vh] w-full max-w-5xl overflow-auto rounded-2xl border border-white/10 bg-white shadow-2xl">
                <div className="sticky top-0 z-10 flex flex-wrap items-center justify-between gap-3 border-b border-[var(--green-light)] bg-[var(--green-dark)] px-4 py-4 text-white md:px-6">
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setIsOpen(false)}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/40 hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
                      aria-label="Cerrar panel de accesibilidad"
                    >
                      <X className="h-5 w-5" />
                    </button>
                    <div>
                      <h2 className="text-xl font-bold leading-tight">Preferencias de accesibilidad</h2>
                      <p className="text-xs text-white/85">Atajo sugerido: Ctrl + Alt + A</p>
                    </div>
                  </div>

                  <label className="inline-flex min-h-11 items-center gap-2 rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-[var(--green-dark)]">
                    <Languages className="h-4 w-4" />
                    <select
                      value={language}
                      onChange={(event) => setLanguage(event.target.value)}
                      className="bg-transparent focus:outline-none"
                      aria-label="Idioma"
                    >
                      <option>Español</option>
                      <option>English</option>
                    </select>
                  </label>
                </div>

                <div className="border-b border-[var(--green-light)] bg-[var(--green-primary)] px-4 py-3 md:px-6">
                  <div className="grid grid-cols-1 gap-3 sm:flex sm:flex-wrap">
                    <button
                      type="button"
                      onClick={resetPreferences}
                      className="inline-flex min-h-11 w-full items-center gap-2 rounded-lg border border-white/60 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--gold)] sm:w-auto"
                    >
                      <RefreshCcw className="h-4 w-4" />
                      Restablecer
                    </button>

                    <button
                      type="button"
                      className="inline-flex min-h-11 w-full items-center gap-2 rounded-lg border border-white/60 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--gold)] sm:w-auto"
                    >
                      <BookText className="h-4 w-4" />
                      Declaración de accesibilidad
                    </button>
                  </div>
                </div>

                <div className="bg-[#F7F8FA] p-3 sm:p-4 md:p-6">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <ToggleCard
                      title="Alto contraste"
                      icon={<Eye className="h-6 w-6" />}
                      description="Refuerza colores y legibilidad"
                      active={highContrast}
                      onClick={() => setHighContrast((prev) => !prev)}
                    />

                    <ToggleCard
                      title="Resaltar enlaces"
                      icon={<Link className="h-6 w-6" />}
                      description="Subraya y destaca hipervínculos"
                      active={highlightLinks}
                      onClick={() => setHighlightLinks((prev) => !prev)}
                    />

                    <ToggleCard
                      title="Resaltar títulos"
                      icon={<Heading className="h-6 w-6" />}
                      description="Marca mejor los encabezados"
                      active={highlightTitles}
                      onClick={() => setHighlightTitles((prev) => !prev)}
                    />

                    <AdjustCard
                      title="Ajustar tamaño de texto"
                      icon={<Type className="h-6 w-6" />}
                      valueLabel={getLevelLabel(fontSizeStep)}
                      onMinus={() => changeStep(setFontSizeStep, FONT_SIZE_STEPS.length - 1, -1)}
                      onPlus={() => changeStep(setFontSizeStep, FONT_SIZE_STEPS.length - 1, 1)}
                    />

                    <ToggleCard
                      title="Fuente legible"
                      icon={<Type className="h-6 w-6" />}
                      description="Usa una fuente más simple"
                      active={readableFont}
                      onClick={() => setReadableFont((prev) => !prev)}
                    />

                    <AdjustCard
                      title="Espaciado de letras"
                      icon={<Settings2 className="h-6 w-6" />}
                      valueLabel={getLevelLabel(letterSpacingStep)}
                      onMinus={() => changeStep(setLetterSpacingStep, LETTER_SPACING_STEPS.length - 1, -1)}
                      onPlus={() => changeStep(setLetterSpacingStep, LETTER_SPACING_STEPS.length - 1, 1)}
                    />

                    <ToggleCard
                      title="Lupa de texto"
                      icon={<Search className="h-6 w-6" />}
                      description="Amplía texto al pasar el cursor"
                      active={textMagnifier}
                      onClick={() => setTextMagnifier((prev) => !prev)}
                    />

                    <AdjustCard
                      title="Escala del contenido"
                      icon={<ZoomIn className="h-6 w-6" />}
                      valueLabel={contentScaleStep === 0 ? "Normal" : `${Math.round(CONTENT_SCALE_STEPS[contentScaleStep] * 100)}%`}
                      onMinus={() => changeStep(setContentScaleStep, CONTENT_SCALE_STEPS.length - 1, -1)}
                      onPlus={() => changeStep(setContentScaleStep, CONTENT_SCALE_STEPS.length - 1, 1)}
                    />

                    <ToggleCard
                      title="Máscara de lectura"
                      icon={<BookText className="h-6 w-6" />}
                      description="Enfoca una línea en pantalla"
                      active={readingMask}
                      onClick={() => setReadingMask((prev) => !prev)}
                    />

                    <AdjustCard
                      title="Altura de línea"
                      icon={<ZoomOut className="h-6 w-6" />}
                      valueLabel={getLevelLabel(lineHeightStep)}
                      onMinus={() => changeStep(setLineHeightStep, LINE_HEIGHT_STEPS.length - 1, -1)}
                      onPlus={() => changeStep(setLineHeightStep, LINE_HEIGHT_STEPS.length - 1, 1)}
                    />

                    <ToggleCard
                      title="Ocultar imágenes"
                      icon={<ImageOff className="h-6 w-6" />}
                      description="Muestra solo contenido textual"
                      active={hideImages}
                      onClick={() => setHideImages((prev) => !prev)}
                    />
                  </div>
                </div>

                <div className="border-t border-[var(--green-light)] bg-white px-4 py-3 text-sm text-[var(--text-secondary)] md:px-6">
                  {hasChanges
                    ? "Preferencias activas. Puedes restablecer en cualquier momento."
                    : "No hay ajustes activos. Usa los controles para personalizar la lectura."}
                </div>
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}

type ToggleCardProps = {
  title: string;
  icon: React.ReactNode;
  description: string;
  active: boolean;
  onClick: () => void;
};

function ToggleCard({ title, icon, description, active, onClick }: ToggleCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`min-h-[138px] rounded-xl border p-4 text-left transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--gold)] ${
        active
          ? "border-[var(--green-primary)] bg-[var(--green-light)]"
          : "border-[#DADDE2] bg-white hover:border-[var(--green-primary)]"
      }`}
      aria-pressed={active}
    >
      <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#EEF2F5] text-[var(--green-dark)]">
        {icon}
      </div>
      <p className="text-lg font-semibold text-[var(--text-primary)]">{title}</p>
      <p className="mt-1 text-sm text-[var(--text-secondary)]">{description}</p>
    </button>
  );
}

type AdjustCardProps = {
  title: string;
  icon: React.ReactNode;
  valueLabel: string;
  onMinus: () => void;
  onPlus: () => void;
};

function AdjustCard({ title, icon, valueLabel, onMinus, onPlus }: AdjustCardProps) {
  return (
    <div className="min-h-[138px] rounded-xl border border-[#DADDE2] bg-white p-4">
      <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#EEF2F5] text-[var(--green-dark)]">
        {icon}
      </div>
      <p className="text-lg font-semibold text-[var(--text-primary)]">{title}</p>

      <div className="mt-3 flex items-center gap-2">
        <button
          type="button"
          onClick={onMinus}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--green-dark)] text-white hover:bg-[var(--green-primary)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
          aria-label={`Disminuir ${title.toLowerCase()}`}
        >
          -
        </button>

        <div className="flex-1 rounded-md bg-[#F2F4F7] px-3 py-2 text-center text-sm font-semibold text-[var(--text-primary)]">
          {valueLabel}
        </div>

        <button
          type="button"
          onClick={onPlus}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--green-dark)] text-white hover:bg-[var(--green-primary)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
          aria-label={`Aumentar ${title.toLowerCase()}`}
        >
          +
        </button>
      </div>
    </div>
  );
}
