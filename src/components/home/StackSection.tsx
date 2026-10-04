"use client";

import Image from "next/image";
import { useState } from "react";

type StackCategory = "Todos" | "Frontend" | "Backend" | "Datos" | "Mobile";

interface StackItem {
  name: string;
  category: Exclude<StackCategory, "Todos">;
  signal: string;
  projects: string[];
  accent: string;
  icon: string;
}

const filters: StackCategory[] = ["Todos", "Frontend", "Backend", "Datos", "Mobile"];

const stack: StackItem[] = [
  { name: "React", category: "Frontend", signal: "Interfaces por componentes y flujos de producto.", projects: ["InvenTech", "Estacionamientos", "Videovigilancia"], accent: "UI", icon: "react/react-original.svg" },
  { name: "Next.js", category: "Frontend", signal: "Aplicaciones full-stack con Route Handlers.", projects: ["InvenTech"], accent: "WEB", icon: "nextjs/nextjs-original.svg" },
  { name: "TypeScript", category: "Frontend", signal: "Tipos para contratos y código mantenible.", projects: ["InvenTech"], accent: "TYPES", icon: "typescript/typescript-original.svg" },
  { name: "Tailwind CSS", category: "Frontend", signal: "Sistemas visuales responsive y accesibles.", projects: ["InvenTech", "Estacionamientos", "Videovigilancia"], accent: "STYLE", icon: "tailwindcss/tailwindcss-original.svg" },
  { name: "Node.js", category: "Backend", signal: "APIs, servicios y lógica de negocio.", projects: ["Estacionamientos", "Videovigilancia", "CAF App"], accent: "API", icon: "nodejs/nodejs-original.svg" },
  { name: "PostgreSQL", category: "Datos", signal: "Persistencia para operaciones y usuarios.", projects: ["InvenTech", "Estacionamientos", "Videovigilancia"], accent: "SQL", icon: "postgresql/postgresql-original.svg" },
  { name: "JWT + bcrypt", category: "Backend", signal: "Autenticación y control de acceso por roles.", projects: ["InvenTech", "Estacionamientos", "Videovigilancia", "CAF App"], accent: "AUTH", icon: "https://cdn.simpleicons.org/jsonwebtokens" },
  { name: "React Native", category: "Mobile", signal: "Experiencias multiplataforma para móvil y web.", projects: ["CAF App"], accent: "MOBILE", icon: "react/react-original.svg" },
  { name: "Expo", category: "Mobile", signal: "Navegación, servicios y entrega mobile.", projects: ["CAF App"], accent: "APP", icon: "expo/expo-original.svg" },
  { name: "FFmpeg", category: "Backend", signal: "Procesamiento y operación de video.", projects: ["Videovigilancia"], accent: "VIDEO", icon: "https://cdn.simpleicons.org/ffmpeg" },
];

const deviconBaseUrl = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export function StackSection() {
  const [activeFilter, setActiveFilter] = useState<StackCategory>("Todos");
  const visibleStack = activeFilter === "Todos" ? stack : stack.filter((item) => item.category === activeFilter);

  return (
    <section className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col justify-between gap-5 border-b border-border pb-6 lg:flex-row lg:items-end">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">Capacidades aplicadas</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Stack con evidencia</h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-muted">Tecnologías que aparecen en proyectos concretos, conectadas con el tipo de problema que ayudan a resolver.</p>
        </div>
        <div className="font-mono text-xs text-muted">10 herramientas / 04 proyectos</div>
      </div>

      <div className="flex flex-wrap gap-2" aria-label="Filtrar tecnologías por disciplina">
        {filters.map((filter) => {
          const isActive = activeFilter === filter;

          return (
            <button
              key={filter}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full border px-4 py-2 font-mono text-xs transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground ${isActive ? "border-foreground bg-foreground text-background" : "border-border bg-surface text-muted hover:-translate-y-0.5 hover:border-foreground/50 hover:text-foreground"}`}
            >
              {filter}
            </button>
          );
        })}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visibleStack.map((item, index) => (
          <article key={item.name} className="group relative overflow-hidden rounded-xl border border-border bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#16866f]/70 hover:shadow-xl">
            <div className="mb-8 flex items-start justify-between gap-3">
              <span className="font-mono text-xs text-muted">{String(index + 1).padStart(2, "0")}</span>
              <span className="rounded-full border border-border px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-muted transition-colors group-hover:border-[#16866f]/60 group-hover:text-[#16866f]">{item.accent}</span>
            </div>
            <div className="flex items-center gap-3">
              <Image
                src={item.icon.startsWith("http") ? item.icon : `${deviconBaseUrl}/${item.icon}`}
                alt=""
                aria-hidden="true"
                className="size-9 object-contain"
                width="36"
                height="36"
                loading="lazy"
                unoptimized
                loader={({ src }) => src}
              />
              <h3 className="text-xl font-bold tracking-tight">{item.name}</h3>
            </div>
            <p className="mt-2 min-h-12 text-sm leading-6 text-muted">{item.signal}</p>
            <div className="mt-6 border-t border-border/70 pt-4">
              <p className="font-mono text-[10px] uppercase tracking-wider text-muted">Aplicado en</p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {item.projects.map((project) => (
                  <span key={project} className="rounded bg-background/60 px-2 py-1 text-[10px] font-semibold text-foreground/80">{project}</span>
                ))}
              </div>
            </div>
            <span className="pointer-events-none absolute -bottom-5 -right-2 font-mono text-6xl font-bold text-foreground/[0.035] transition-transform duration-500 group-hover:translate-x-1 group-hover:text-[#16866f]/10">{item.accent}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
