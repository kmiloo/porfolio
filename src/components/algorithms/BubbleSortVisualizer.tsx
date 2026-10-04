"use client";

import { motion } from "framer-motion";
import { useBubbleSort } from "@/hooks/useBubbleSort";

export function BubbleSortVisualizer() {
  const { values, isSorting, shuffle, runTestSort, reset } = useBubbleSort();

  return (
    <section className="space-y-6">
      <div className="flex min-h-56 items-end gap-3 rounded-md border border-border bg-surface p-6">
        {values.map((value, index) => (
          <motion.div
            key={`${value}-${index}`}
            layout
            className="w-full rounded-t-md bg-zinc-900 dark:bg-zinc-100"
            style={{ height: `${value * 3}px` }}
            aria-label={`Valor ${value}`}
          />
        ))}
      </div>
      <div className="flex flex-wrap gap-3">
        <button
          className="rounded-md bg-foreground px-4 py-2 text-background"
          onClick={runTestSort}
        >
          Ordenar
        </button>
        <button
          className="rounded-md border border-border bg-surface px-4 py-2"
          onClick={shuffle}
        >
          Mezclar
        </button>
        <button
          className="rounded-md border border-border bg-surface px-4 py-2"
          onClick={reset}
        >
          Reiniciar
        </button>
      </div>
      <p className="text-sm text-muted">{isSorting ? "Ordenando" : "Listo"}</p>
    </section>
  );
}
