"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface Project {
  title: string;
  images: string[]; // Soporta una o varias imágenes
  description: string;
  technologies: string[];
  stackGroups?: { label: string; items: string[] }[];
  role: string;
  impact: string;
  isIcon?: boolean;
  isMobile?: boolean; // Identifica si son capturas de pantalla móviles
}

const projects: Project[] = [
  {
    title: "InvenTech",
    images: ["/images/GestiorInventario.webp"],
    description:
      "InvenTech es una aplicación web para gestionar inventario, productos, categorías, clientes, proveedores, vendedores, compras, ventas, métodos de pago y reportes, con autenticación segura y acceso por roles.",
    technologies: ["Next.js 15", "React 19", "TypeScript 5", "Prisma 6", "PostgreSQL", "MUI Data Grid"],
    role: "Frontend + integración",
    impact: "Centraliza operaciones comerciales en un solo flujo.",
    stackGroups: [
      {
        label: "Plataforma y UI",
        items: ["Next.js 15", "React 19", "TypeScript 5", "Tailwind CSS", "Material UI", "MUI X Data Grid"],
      },
      {
        label: "Backend y datos",
        items: ["Node.js", "Route Handlers", "Prisma 6", "PostgreSQL", "PostCSS"],
      },
      {
        label: "Seguridad y validación",
        items: ["JWT", "bcryptjs", "Zod", "Control de acceso por roles"],
      },
      {
        label: "Reportes y experiencia",
        items: ["jsPDF", "html2canvas", "Emotion", "Font Awesome", "Heroicons", "React Icons"],
      },
    ],
    isIcon: false,
  },
  {
    title: "Sistema de Estacionamiento",
    images: ["/images/Inicio.webp"],
    description:
      "Aplicación web para gestionar estacionamientos de la Universidad de Los Lagos: permite registrarse, reservar cupos, consultar disponibilidad e historial, administrar vehículos y coordinar la operación de guardias.",
    technologies: ["React 18", "Node.js", "PostgreSQL", "JWT", "QR", "Vercel"],
    role: "Producto web + full-stack",
    impact: "Conecta reservas, disponibilidad y operación de guardias.",
    stackGroups: [
      {
        label: "Frontend",
        items: ["React 18", "Vite", "SWC", "React Router", "Tailwind CSS"],
      },
      {
        label: "Backend y datos",
        items: ["Node.js", "Express", "PostgreSQL", "Axios", "date-fns"],
      },
      {
        label: "Acceso e integraciones",
        items: ["JWT", "Cookies", "bcrypt", "Google APIs", "Nodemailer"],
      },
      {
        label: "Operación y entrega",
        items: ["Reservas de cupos", "Códigos QR", "Gestión de vehículos", "Vercel Analytics", "Vercel"],
      },
    ],
    isIcon: false,
  },
  {
    title: "Plataforma de Videovigilancia",
    images: ["/images/camaras.webp"],
    description:
      "Aplicación web para visualizar y administrar cámaras de seguridad, con autenticación de usuarios, monitoreo en vivo, control PTZ, grabaciones, programación de registros, gestión de usuarios y consulta del estado del sistema.",
    technologies: ["React 19", "Node.js", "PostgreSQL", "JWT", "FFmpeg", "React Player"],
    role: "Frontend + arquitectura de video",
    impact: "Convierte cámaras y grabaciones en una operación monitoreable.",
    stackGroups: [
      {
        label: "Frontend",
        items: ["React 19", "Vite", "Tailwind CSS", "React Router", "Axios", "React Player"],
      },
      {
        label: "Backend y datos",
        items: ["Node.js", "Express 5", "CommonJS", "Nodemon", "PostgreSQL + pg"],
      },
      {
        label: "Autenticación",
        items: ["JWT", "bcrypt", "Gestión de usuarios"],
      },
      {
        label: "Servicios y operación",
        items: ["FFmpeg", "Node Cron", "Nodemailer", "CORS", "dotenv"],
      },
    ],
    isIcon: false,
  },
  {
    title: "CAF App · Acondicionamiento Físico",
    images: ["/images/1000046474.jpg", "/images/1000046476.jpg"], // 2 imágenes de 1080x2408
    description:
      "CAF es una aplicación multiplataforma para gestionar actividades físicas, notificaciones, perfiles y navegación personalizada, con autenticación segura y conexión a una API con base de datos MySQL.",
    technologies: ["React Native", "Expo 52", "Expo Router", "Node.js", "MySQL", "Firebase"],
    role: "Mobile + integración API",
    impact: "Lleva actividades y perfiles personalizados a móvil y web.",
    stackGroups: [
      {
        label: "Frontend multiplataforma",
        items: ["React Native", "Expo 52", "Expo Router", "React Navigation", "React Native Web"],
      },
      {
        label: "Estilos y experiencia",
        items: ["NativeWind", "Tailwind CSS"],
      },
      {
        label: "Backend y datos",
        items: ["Node.js", "Express.js", "MySQL + mysql2", "Axios"],
      },
      {
        label: "Auth y servicios",
        items: ["JWT", "bcrypt", "AsyncStorage", "Firebase", "Expo Notifications"],
      },
      {
        label: "Herramientas",
        items: ["Babel", "Metro", "ESLint", "Prettier"],
      },
    ],
    isIcon: false,
    isMobile: true, // Habilita el diseño especial para celulares
  },
];

export function ProjectsSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null);
    };

    if (selectedImage) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]);

  return (
    <section className="space-y-6">
      <div className="flex items-end justify-between gap-4 border-b border-border pb-5">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">Casos seleccionados</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight">Proyectos</h2>
        </div>
        <span className="hidden font-mono text-xs text-muted sm:block">04 casos / producto + código</span>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="flex flex-col overflow-hidden rounded-xl border border-border bg-surface shadow-sm transition-all hover:shadow-md"
          >
            {/* Contenedor de la vista previa */}
            <div
              className={`relative aspect-[1857/1084] w-full border-b border-border bg-background/70 overflow-hidden ${
                !project.isIcon ? "cursor-zoom-in" : ""
              }`}
            >
              {/* RENDERIZADO SI SON PANTALLAS DE CELULAR (2 IMÁGENES LADO A LADO) */}
              {project.isMobile && project.images.length > 1 ? (
                <div 
                  className="flex h-full w-full items-center justify-center gap-3 p-4 bg-gradient-to-b from-background/30 to-background/80"
                >
                  {project.images.map((imgSrc, idx) => (
                    <button
                      type="button"
                      key={idx}
                      onClick={() => setSelectedImage(imgSrc)}
                      aria-label={`Ampliar captura ${idx + 1} de ${project.title}`}
                      className="relative h-[100%] aspect-[1080/2408] overflow-hidden rounded-xl border border-border/50 shadow-lg transition-transform duration-300 hover:scale-105 focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
                    >
                      <Image
                        src={imgSrc}
                        alt={`${project.title} captura ${idx + 1}`}
                        fill
                        sizes="(max-width: 768px) 50vw, 25vw"
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              ) : (
                /* RENDERIZADO ESTÁNDAR (1 SOLA IMAGEN O ICONO) */
                <button
                  type="button"
                  onClick={() => !project.isIcon && setSelectedImage(project.images[0])}
                  aria-label={`Ampliar preview de ${project.title}`}
                  className="relative h-full w-full text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
                >
                  <Image
                    src={project.images[0]}
                    alt={`Vista previa de ${project.title}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className={
                      project.isIcon
                        ? "object-contain p-12 opacity-85 dark:invert"
                        : "object-cover object-top opacity-95 transition-transform duration-500 hover:scale-105"
                    }
                  />
                </button>
              )}
            </div>

            {/* Información del Proyecto */}
            <div className="flex flex-1 flex-col p-6">
              <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
              <p className="mb-6 text-base leading-7 text-muted">
                {project.description}
              </p>

              <div className="mb-6 grid gap-3 border-y border-border/70 py-4 sm:grid-cols-2">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-muted">Rol</p>
                  <p className="mt-1 text-sm font-semibold">{project.role}</p>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-muted">Impacto</p>
                  <p className="mt-1 text-sm font-semibold">{project.impact}</p>
                </div>
              </div>

              {project.stackGroups && (
                <details className="group mb-6 border-b border-border/70 pb-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground">
                    <span>Ver arquitectura técnica</span>
                    <span className="text-lg transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    {project.stackGroups.map((group) => (
                      <div key={group.label}>
                        <h4 className="mb-2 text-xs font-bold uppercase tracking-wider text-foreground">{group.label}</h4>
                        <div className="flex flex-wrap gap-1.5">
                          {group.items.map((item) => (
                            <span key={item} className="rounded border border-border/60 bg-background/50 px-2 py-1 font-mono text-[10px] leading-4 text-muted transition-colors hover:border-foreground/50 hover:text-foreground">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </details>
              )}

              <div className="mt-auto flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center rounded-md border border-border/50 bg-background/50 px-2.5 py-0.5 text-xs font-medium text-foreground/80 transition-colors hover:bg-background"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Modal Lightbox */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm animate-in fade-in duration-200"
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
            aria-label="Cerrar vista previa"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[90vh] max-w-4xl w-full aspect-[1857/1084] overflow-hidden rounded-lg shadow-2xl flex items-center justify-center p-2"
          >
            <Image
              src={selectedImage}
              alt="Vista completa"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}