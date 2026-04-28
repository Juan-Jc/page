import { ArrowRight, Briefcase, Mail, MapPin } from 'lucide-react';

const PROFILE_PHOTO = 'https://avatars.githubusercontent.com/u/83313120?v=4';

export function ProfileSection() {
  return (
    <section className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-left">
        <div className="flex-shrink-0">
          <img
            src={PROFILE_PHOTO}
            alt="Juan Camilo Puerta"
            className="w-28 h-28 md:w-32 md:h-32 rounded-3xl object-cover border-[3px] shadow-[0_0_40px_rgba(168,85,247,0.18)]"
            style={{ borderColor: 'var(--neon-color)' }}
          />
        </div>
        <div className="flex flex-col gap-4 max-w-2xl">
          <div className="flex flex-col gap-3">
            <span className="inline-flex w-fit self-center md:self-start items-center gap-2 rounded-full border border-[color:var(--color-border-strong)] bg-[color:var(--color-card-muted)] px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-[color:var(--color-muted)]">
              <Briefcase className="h-3.5 w-3.5" />
              Frontend Developer · React · TypeScript
            </span>
            <div>
              <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-[color:var(--color-text)]">
                Juan Camilo Puerta
              </h1>
              <p className="mt-3 text-base md:text-lg text-[color:var(--color-muted)] leading-relaxed">
                Desarrollo interfaces claras, rápidas y visualmente cuidadas.
                Combino producto digital y sensibilidad audiovisual para crear
                experiencias que se ven bien y funcionan mejor.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 text-sm text-[color:var(--color-muted)]">
            <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 bg-[color:var(--color-card-muted)]">
              <MapPin className="h-4 w-4" />
              Colombia · remoto
            </span>
            <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 bg-[color:var(--color-card-muted)]">
              <Mail className="h-4 w-4" />
              Disponible para oportunidades junior y freelance
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <a
              href="mailto:juan.puerta1994@gmail.com"
              className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-medium text-white transition-transform duration-200 hover:-translate-y-0.5"
              style={{ backgroundColor: 'var(--neon-color)' }}
            >
              Contactarme
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="https://github.com/Juan-Jc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-card-muted)] px-5 py-3 text-sm font-medium text-[color:var(--color-text)] transition-colors duration-200 hover:bg-[color:var(--color-card)]"
            >
              Ver GitHub
            </a>
          </div>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 lg:min-w-[230px]">
        <div className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-card-muted)] p-4 text-left">
          <p className="text-2xl font-semibold text-[color:var(--color-text)]">3+</p>
          <p className="mt-1 text-sm text-[color:var(--color-muted)]">Proyectos curados para mostrar criterio visual y técnico.</p>
        </div>
        <div className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-card-muted)] p-4 text-left">
          <p className="text-2xl font-semibold text-[color:var(--color-text)]">Frontend</p>
          <p className="mt-1 text-sm text-[color:var(--color-muted)]">React, TypeScript, JavaScript y diseño responsive.</p>
        </div>
        <div className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-card-muted)] p-4 text-left">
          <p className="text-2xl font-semibold text-[color:var(--color-text)]">Visual</p>
          <p className="mt-1 text-sm text-[color:var(--color-muted)]">Experiencia en audiovisual para elevar identidad y detalle.</p>
        </div>
      </div>
    </section>
  );
}
