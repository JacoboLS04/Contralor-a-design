import { Container } from "./container";
import { Type, Moon } from "lucide-react";

export function AccessibilityBar() {
  return (
    <div className="bg-[var(--green-dark)] border-b border-black/10">
      <Container>
        <div className="flex items-center justify-end gap-2 py-2">
          <button 
            className="min-h-11 flex items-center gap-1.5 px-3 py-1.5 text-sm text-white hover:text-[var(--gold)] transition-colors rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:ring-offset-2 focus:ring-offset-[var(--green-dark)]"
            aria-label="Aumentar tamaño de texto"
          >
            <Type className="h-4 w-4" />
            <span>A+</span>
          </button>
          <button 
            className="min-h-11 flex items-center gap-1.5 px-3 py-1.5 text-sm text-white hover:text-[var(--gold)] transition-colors rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:ring-offset-2 focus:ring-offset-[var(--green-dark)]"
            aria-label="Disminuir tamaño de texto"
          >
            <Type className="h-3 w-3" />
            <span>A−</span>
          </button>
          <button 
            className="min-h-11 flex items-center gap-1.5 px-3 py-1.5 text-sm text-white hover:text-[var(--gold)] transition-colors rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:ring-offset-2 focus:ring-offset-[var(--green-dark)]"
            aria-label="Alto contraste"
          >
            <Moon className="h-4 w-4" />
            <span>Alto contraste</span>
          </button>
        </div>
      </Container>
    </div>
  );
}