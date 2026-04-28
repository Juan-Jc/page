import { Clapperboard, ExternalLink } from 'lucide-react';

export function AudiovisualSection() {
  return (
    <div className="rounded-3xl border border-dashed border-[color:var(--color-border-strong)] bg-[color:var(--color-card-muted)] p-6">
      <div className="mb-4 flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[color:var(--color-card)] text-[color:var(--color-text)]">
          <Clapperboard className="h-5 w-5" />
        </span>
        <div>
          <h3 className="text-lg font-semibold text-[color:var(--color-text)]">
            Área audiovisual
          </h3>
          <p className="text-sm text-[color:var(--color-muted)]">
            Dirección de arte, edición y narrativa visual.
          </p>
        </div>
      </div>

      <p className="mb-4 text-sm leading-relaxed text-[color:var(--color-muted)]">
        Estoy preparando una selección de piezas audiovisuales para mostrar mi
        enfoque visual aplicado a productos digitales. Mientras tanto, podés
        escribirme si querés ver trabajos o colaboraciones previas.
      </p>

      <a
        href="mailto:juan.puerta1994@gmail.com?subject=Quiero%20ver%20tu%20portfolio%20audiovisual"
        className="inline-flex items-center gap-2 text-sm font-medium text-[color:var(--color-text)]"
      >
        Pedir material audiovisual
        <ExternalLink className="h-4 w-4" />
      </a>
    </div>
  );
}
