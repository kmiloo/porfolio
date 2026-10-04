import type { ViewType } from '@/app/page';

interface QuerySelectProps {
  selected: ViewType;
  setSelected: React.Dispatch<React.SetStateAction<ViewType>>;
}

const options = [
  { value: 'all', label: 'Resumen', command: '01 / perfil' },
  { value: 'projects', label: 'Proyectos', command: '02 / casos' },
  { value: 'tech', label: 'Stack', command: '03 / capacidades' },
] as const;

export function QuerySelect({ selected, setSelected }: QuerySelectProps) {
  return (
    <section id="explorar" className="z-10 w-full max-w-5xl pt-52">
      <div className="mb-4 flex items-end justify-between gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">Explorar portfolio</p>
          <h2 className="mt-2 text-xl font-bold sm:text-2xl">Elige una vista</h2>
        </div>
        <span className="hidden font-mono text-xs text-muted sm:block">/ navigation.tsx</span>
      </div>

      <div className="grid gap-2 rounded-xl border border-border bg-surface/60 p-2 backdrop-blur-md sm:grid-cols-3">
        {options.map((option, index) => {
          const isSelected = selected === option.value;

          return (
            <button
              key={option.value}
              type="button"
              aria-pressed={isSelected}
              onClick={() => setSelected(option.value as ViewType)}
              className={`group relative flex min-h-16 items-center gap-3 rounded-lg px-4 py-3 text-left transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground ${
                isSelected
                  ? 'bg-foreground text-background shadow-lg'
                  : 'text-foreground hover:bg-muted/10'
              }`}
            >
              <span className={`font-mono text-xs ${isSelected ? 'text-background/70' : 'text-muted'}`}>
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="flex flex-1 flex-col">
                <span className="text-sm font-bold">{option.label}</span>
                <span className={`font-mono text-xs ${isSelected ? 'text-background/70' : 'text-muted'}`}>
                  {option.command}
                </span>
              </span>
              <span aria-hidden="true" className={`text-lg transition-transform group-hover:translate-x-1 ${isSelected ? 'opacity-100' : 'opacity-0'}`}>
                -&gt;
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}