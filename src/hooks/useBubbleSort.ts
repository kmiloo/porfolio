"use client";

import { useCallback, useMemo, useState } from "react";
import { getBubbleSortSteps } from "@/core/algorithms/sorting/bubbleSort";

const DEFAULT_VALUES = [42, 12, 8, 33, 19, 27, 15];

export function useBubbleSort(initialValues: number[] = DEFAULT_VALUES) {
  const stableInitialValues = useMemo(() => initialValues, [initialValues]);
  const [values, setValues] = useState<number[]>(stableInitialValues);
  const [isSorting, setIsSorting] = useState(false);

  const shuffle = useCallback(() => {
    setValues((currentValues) =>
      [...currentValues].sort(() => Math.random() - 0.5),
    );
  }, []);

  const runTestSort = useCallback(() => {
    setIsSorting(true);
    const steps = getBubbleSortSteps(values);
    setValues(steps.at(-1)?.values ?? values);
    setIsSorting(false);
  }, [values]);

  const reset = useCallback(() => {
    setValues(stableInitialValues);
    setIsSorting(false);
  }, [stableInitialValues]);

  return {
    values,
    isSorting,
    shuffle,
    reset,
    runTestSort,
  };
}
