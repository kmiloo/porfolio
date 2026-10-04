"use client";

interface TableSectionProps {
  onViewProjects: () => void;
  onViewStack: () => void;
}

const signals = [
  ["04 proyectos", "Casos seleccionados", "Web, full-stack y mobile"],
  ["03 + 01", "Web + mobile", "Productos para usuarios reales"],
  ["Producto", "Enfoque de trabajo", "Claridad antes que ruido"],
];

const strengths = [
  {
    index: "01",
    title: "Interfaces que se entienden",
    description: "Jerarquía visual, estados claros y flujos accesibles para que cada pantalla tenga un propósito.",
  },
  {
    index: "02",
    title: "Sistemas que pueden crecer",
    description: "Componentes, APIs y datos organizados para mantener velocidad sin sacrificar calidad técnica.",
  },
  {
    index: "03",
    title: "Tecnología con contexto",
    description: "Elijo herramientas por el problema que resuelven, no por acumular nombres en una lista.",
  },
];

export function TableSection({ onViewProjects, onViewStack }: TableSectionProps) {
  return (
    <section className="w-full max-w-5xl space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="grid gap-8 border-b border-border pb-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">Perfil profesional</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
            Diseño con intención. Construyo para que funcione.
          </h2>
        </div>
        <div className="border-l-2 border-[#16866f] pl-5">
          <p className="text-base leading-7 text-muted">
            Mi trabajo conecta experiencia de usuario, decisiones técnicas y necesidades reales de producto para convertir problemas complejos en interfaces claras.
          </p>
        </div>
      </div>

      <div>
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-muted">Señales rápidas</p>
        <div className="grid gap-3 sm:grid-cols-3">
        {signals.map(([value, label, detail]) => (
          <div key={label} className="group border-b border-border pb-4 transition-colors hover:border-[#16866f]">
            <p className="font-mono text-2xl font-bold tracking-tight transition-colors group-hover:text-[#16866f]">{value}</p>
            <p className="mt-2 text-sm font-bold">{label}</p>
            <p className="mt-1 text-xs text-muted">{detail}</p>
          </div>
        ))}
        </div>
      </div>

      <div className="grid gap-x-8 gap-y-7 md:grid-cols-3">
        {strengths.map((strength) => (
          <article key={strength.index} className="group">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-[#16866f]">{strength.index}</span>
              <span className="h-px flex-1 bg-border transition-colors group-hover:bg-[#16866f]" />
            </div>
            <h3 className="mt-4 text-lg font-bold leading-snug">{strength.title}</h3>
            <p className="mt-2 text-sm leading-6 text-muted">{strength.description}</p>
          </article>
        ))}
      </div>

      <div className="flex flex-col justify-between gap-5 rounded-xl border border-border bg-foreground p-6 text-background sm:flex-row sm:items-center sm:p-7">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-background/60">Siguiente paso</p>
          <h3 className="mt-2 text-xl font-bold">Conoce cómo pienso y cómo construyo.</h3>
        </div>
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={onViewProjects}
            className="rounded-md bg-background px-4 py-2.5 text-sm font-bold text-foreground transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background"
          >
            Ver proyectos <span aria-hidden="true">-&gt;</span>
          </button>
          <button
            type="button"
            onClick={onViewStack}
            className="rounded-md border border-background/40 px-4 py-2.5 text-sm font-bold text-background transition-colors hover:bg-background/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background"
          >
            Explorar stack
          </button>
        </div>
      </div>
    </section>
  );
}
