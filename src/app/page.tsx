'use client';
//import { AboutSection } from "@/components/home/AboutSection";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { StackSection } from "@/components/home/StackSection";
import { Header } from "@/components/layout/Header";
//import { ViewProvider } from "@/components/home/ViewContext";
import { useState } from "react";
import { QuerySelect } from "@/components/home/QuerySelect";
import { UserSection } from "@/components/home/UserSection";
import { TableSection } from "@/components/home/TableSection";

// Tipamos los posibles valores para tener autocompletado y evitar errores
export type ViewType = 'all' | 'projects' | 'tech';

export default function Home() {
  const [currentView, setCurrentView] = useState<ViewType>('all');

  const showProjects = () => {
    setCurrentView('projects');
    window.requestAnimationFrame(() => {
      document.getElementById('contenido-vista')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  };

  return (
    <div className="min-h-screen text-foreground">
      <Header />
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-12 items-center">
        <UserSection onViewProjects={showProjects} />
        <QuerySelect selected={currentView} setSelected={setCurrentView} />
        {currentView === 'all' && (
          <TableSection
            onViewProjects={() => setCurrentView('projects')}
            onViewStack={() => setCurrentView('tech')}
          />
        )}
        <div id="contenido-vista" className="w-full max-w-5xl scroll-mt-8">
        {currentView === 'projects' && <ProjectsSection />}
        {currentView === 'tech' && <StackSection />}
      </div>
        
      </main>
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-66 items-center">

      </div>
    </div>
  );
}
// {currentView === 'all' && <UserSection />}