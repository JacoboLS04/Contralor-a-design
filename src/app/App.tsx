import { GovBar } from "./components/gov-bar";
import { AccessibilityBar } from "./components/accessibility-bar";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { QuickAccess } from "./components/quick-access";
import { MissionAreas } from "./components/mission-areas";
import { NewsSection } from "./components/news-section";
import { InfoCenter } from "./components/info-center";
import { ManagementIndicators } from "./components/management-indicators";
import { SpecialServices } from "./components/special-services";
import { SocialMedia } from "./components/social-media";
import { AlliedEntities } from "./components/allied-entities";
import { Footer } from "./components/footer";
import { Container } from "./components/container";
import { AccessibilityWidget } from "./components/accessibility-widget";

/**
 * Home — Contraloría General del Quindío
 *
 * Paleta institucional oficial aplicada con verde dominante y dorado de acento.
 * Tipografía: DM Sans
 * Diseño responsive desktop-first (1440px) con max-width 1280px
 */
function App() {
  return (
    <div id="inicio" className="min-h-screen w-full bg-white">
      {/* 1. Barra gov.co superior */}
      <GovBar />
      
      {/* 2. Barra de accesibilidad */}
      <AccessibilityBar />
      
      {/* 3. Header */}
      <Header />
      
      <main>
      {/* 4. Hero */}
      <Hero />
      
      {/* 5. Accesos rápidos */}
      <section id="accesos-rapidos" className="bg-[var(--bg-section)] py-16 lg:py-20">
        <Container>
          <QuickAccess />
        </Container>
      </section>

      {/* 6. Áreas misionales */}
      <section id="areas-misionales" className="bg-[var(--bg-white)] py-16 lg:py-20">
        <Container>
          <MissionAreas />
        </Container>
      </section>
      
      {/* 7. Noticias y comunicados */}
      <section id="noticias" className="bg-[var(--bg-white)] py-20">
        <Container>
          <NewsSection />
        </Container>
      </section>
      
      {/* 8. Centro de información */}
      <section id="transparencia" className="bg-[var(--bg-section)] py-20">
        <Container>
          <InfoCenter />
        </Container>
      </section>
      
      {/* 9. Indicadores de gestión */}
      <section id="indicadores" className="bg-[var(--green-primary)] py-20">
        <Container>
          <ManagementIndicators />
        </Container>
      </section>
      
      {/* 10. Servicios especiales */}
      <section id="servicios" className="bg-white py-20">
        <Container>
          <SpecialServices />
        </Container>
      </section>
      
      {/* 11. Redes sociales */}
      <section id="redes" className="bg-[#F5F5F5] py-16">
        <Container>
          <SocialMedia />
        </Container>
      </section>
      
      {/* 12. Entidades aliadas */}
      <section id="aliadas" className="bg-white py-16">
        <Container>
          <AlliedEntities />
        </Container>
      </section>
      
      {/* 13. Footer */}
      <Footer />
      
      {/* 14. Barra final gov.co */}
      <div className="bg-[var(--green-dark)] py-3 border-t-2 border-[var(--gold)]">
        <Container>
          <p className="text-center text-white text-sm">
            © 2026 Contraloría General del Quindío - Todos los derechos reservados
          </p>
        </Container>
      </div>

      </main>

      <AccessibilityWidget />
    </div>
  );
}

export default App;