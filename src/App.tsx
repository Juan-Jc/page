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
      <div className="min-h-screen w-full overflow-hidden flex items-center justify-center p-4 md:p-8 bg-[#1a1425]">
        {/* Toggle Button */}
        <div className="fixed top-4 right-4 z-50">
          <ThemeToggle />
        </div>

        {/* Main Glass Card */}
        <GlassCard>
          <div className="flex flex-col gap-6">
            {/* Header: Profile Section */}
            <ProfileSection />

            {/* Tech Carousel */}
            <div className="border-t border-b border-white/[0.10] py-2">
              <TechCarousel />
            </div>

            {/* Footer Grid: Projects + Social/Audiovisual */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Projects Section */}
              <div>
                <h2 className="text-lg font-semibold text-white mb-3 text-center lg:text-left">
                  Proyectos Destacados
                </h2>
                <ProjectsGrid />
              </div>

              {/* Social + Audiovisual */}
              <div className="flex flex-col gap-4">
                <div>
                  <h2 className="text-lg font-semibold text-white mb-3 text-center lg:text-left">
                    Conectar
                  </h2>
                  <SocialLinks />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-white mb-3 text-center lg:text-left">
                    Audiovisual
                  </h2>
                  <AudiovisualSection />
                </div>
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </ThemeProvider>
  );
}

export default App;