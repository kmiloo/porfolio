import { ConsoleView } from "@/components/playground/ConsoleView";

export default function PlaygroundPage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-10 px-6 py-12">
      <header className="space-y-3">
        <p className="text-sm font-medium uppercase tracking-widest text-muted">
          Playground
        </p>
        <h1 className="text-3xl font-semibold">Simulador de red</h1>
      </header>
      <ConsoleView />
    </main>
  );
}
