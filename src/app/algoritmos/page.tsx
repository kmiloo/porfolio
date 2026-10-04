import { BubbleSortVisualizer } from "@/components/algorithms/BubbleSortVisualizer";

export default function AlgorithmsPage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-10 px-6 py-12">
      <header className="space-y-3">
        <p className="text-sm font-medium uppercase tracking-widest text-muted">
          Algoritmos
        </p>
        <h1 className="text-3xl font-semibold">Visualizadores interactivos</h1>
      </header>
      <BubbleSortVisualizer />
    </main>
  );
}
