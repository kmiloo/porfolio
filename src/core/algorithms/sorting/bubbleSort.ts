import type { AlgorithmStep } from "@/models/AlgorithmStep";

export function getBubbleSortSteps(values: number[]): AlgorithmStep[] {
  const output = [...values];
  const steps: AlgorithmStep[] = [{ values: [...output], comparedIndexes: [] }];

  for (let pass = 0; pass < output.length - 1; pass += 1) {
    for (let index = 0; index < output.length - pass - 1; index += 1) {
      const nextIndex = index + 1;

      if (output[index] > output[nextIndex]) {
        [output[index], output[nextIndex]] = [output[nextIndex], output[index]];
      }

      steps.push({
        values: [...output],
        comparedIndexes: [index, nextIndex],
      });
    }
  }

  return steps;
}
