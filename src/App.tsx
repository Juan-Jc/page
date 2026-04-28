import { ThemeProvider } from './context/ThemeContext';
import { GlassCard } from './components/GlassCard';
import { ProfileSection } from './components/ProfileSection';
import { TechCarousel } from './components/TechCarousel';
import { ProjectsGrid } from './components/ProjectsGrid';
import { SocialLinks } from './components/SocialLinks';
import { AudiovisualSection } from './components/AudiovisualSection';
import { ThemeToggle } from './components/ThemeToggle';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen w-full bg-[color:var(--color-bg)] px-4 py-6 text-[color:var(--color-text)] transition-colors duration-300 md:px-8 md:py-8">
        <div className="fixed right-4 top-4 z-50 md:right-6 md:top-6">
          <ThemeToggle />
        </div>

        <div className="mx-auto flex min-h-[calc(100vh-3rem)] w-full max-w-7xl items-center justify-center">
          <GlassCard className="py-8 md:py-10">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-3 text-center md:text-left">
                <span className="text-xs font-medium uppercase tracking-[0.3em] text-[color:var(--color-muted)]">
                  Portfolio personal
                </span>
                <p className="max-w-3xl text-sm leading-relaxed text-[color:var(--color-muted)]">
                  Una landing enfocada en comunicar perfil, criterio visual y
                  proyectos con mejor contexto para reclutadores y clientes.
                </p>
              </div>

              <ProfileSection />

              <section className="rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-card-muted)] px-5 py-4 md:px-6">
                <div className="mb-3 flex flex-col gap-1 text-center md:text-left">
                  <h2 className="text-base font-semibold text-[color:var(--color-text)]">
                    Stack principal
                  </h2>
                  <p className="text-sm text-[color:var(--color-muted)]">
                    Herramientas con las que construyo interfaces, integraciones
                    y experiencias visuales.
                  </p>
                </div>
                <TechCarousel />
              </section>

              <section className="grid gap-6 xl:grid-cols-[1.5fr_0.9fr]">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1 text-center md:text-left">
                    <h2 className="text-2xl font-semibold text-[color:var(--color-text)]">
                      Proyectos destacados
                    </h2>
                    <p className="text-sm text-[color:var(--color-muted)]">
                      Una selección corta para mostrar proceso, ejecución y
                      criterio técnico sin ruido innecesario.
                    </p>
                  </div>
                  <ProjectsGrid />
                </div>

                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-3 text-center md:text-left">
                    <h2 className="text-2xl font-semibold text-[color:var(--color-text)]">
                      Contacto y presencia
                    </h2>
                    <p className="text-sm text-[color:var(--color-muted)]">
                      Canales directos para revisar mi trabajo, conversar o
                      coordinar una oportunidad.
                    </p>
                    <SocialLinks />
                  </div>
                  <AudiovisualSection />
                </div>
              </section>
            </div>
          </GlassCard>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
