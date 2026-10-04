import { useState } from "react";

const profile = {
  name: "Camilo Lovera",
  role: "Desarrollador Web",
  description:
    "Desarrollador web apasionado por crear experiencias digitales modernas, accesibles y funcionales.",
  //experience: "3+ años de experiencia",
  email: "camiloandres.lovera1@gmail.com",
  github: "https://github.com/kmiloo",
  linkedin: "https://linkedin.com/in/camilo-andres-lovera-campos-02354a2a7",
};

interface UserSectionProps {
  onViewProjects: () => void;
}

export function UserSection({ onViewProjects }: UserSectionProps) {
  const [isEmailCopied, setIsEmailCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setIsEmailCopied(true);
      window.setTimeout(() => setIsEmailCopied(false), 2000);
    } catch {
      setIsEmailCopied(false);
    }
  };

  return (
    <section className="w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="grid gap-10 border-b border-border pb-12 lg:grid-cols-[1fr_auto] lg:items-end">
        <div className="max-w-3xl space-y-5">
          <p className="font-mono text-sm font-semibold uppercase tracking-[0.18em] text-muted">
            Hola, soy
          </p>
          <div className="space-y-2">
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">{profile.name}</h1>
            <h2 className="text-2xl font-semibold text-muted sm:text-3xl">{profile.role}</h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-muted">
            Construyo productos web modernos, accesibles y funcionales, conectando una
            interfaz clara con decisiones técnicas que escalan.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <button
              type="button"
              onClick={onViewProjects}
              className="inline-flex items-center rounded-md bg-foreground px-5 py-3 text-sm font-bold text-background transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
            >
              Ver proyectos <span aria-hidden="true" className="ml-2">-&gt;</span>
            </button>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center rounded-md border border-border bg-surface px-5 py-3 text-sm font-bold transition-colors hover:bg-muted/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
            >
              Contactar
            </a>
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm text-muted lg:pb-3">
          <span className="size-2 rounded-full bg-[#16866f] shadow-[0_0_0_4px_rgba(22,134,111,0.14)]" />
          Disponible para nuevos retos
        </div>
      </div>

      <div className="grid gap-3 pt-8 sm:grid-cols-2 lg:grid-cols-3">
        {/* <div className="rounded-md border border-border bg-surface p-4">
          <p className="text-sm text-muted-foreground">Experiencia</p>
          <p className="font-medium">{profile.experience}</p>
        </div> */}

        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="rounded-md border border-border bg-surface p-4 transition-colors hover:-translate-y-0.5 hover:bg-muted/20"
        >
          <p className="text-sm text-muted-foreground">GitHub</p>
          <p className="font-medium">Ver perfil</p>
        </a>

        <button
          type="button"
          onClick={copyEmail}
          title="Copiar correo"
          aria-label={isEmailCopied ? "Correo copiado" : "Copiar correo"}
          className="group rounded-md border border-border bg-surface p-4 text-left transition-colors hover:-translate-y-0.5 hover:bg-muted/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-sm text-muted-foreground">Email</p>
              <p className="font-medium break-all">{profile.email}</p>
            </div>
            <span aria-hidden="true" className="relative mt-1 size-5 shrink-0 text-muted transition-colors group-hover:text-foreground">
              <span className="absolute right-0 top-0 size-3.5 rounded-[3px] border-2 border-current" />
              <span className="absolute bottom-0 left-0 size-3.5 rounded-[3px] border-2 border-current bg-surface" />
            </span>
          </div>
          <span className="mt-3 block font-mono text-xs text-muted">
            {isEmailCopied ? "Correo copiado" : "Copiar correo"}
          </span>
        </button>

        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          className="rounded-md border border-border bg-surface p-4 transition-colors hover:-translate-y-0.5 hover:bg-muted/20"
        >
          <p className="text-sm text-muted-foreground">LinkedIn</p>
          <p className="font-medium">Ver perfil</p>
        </a>
      </div>
    </section>
  );
}