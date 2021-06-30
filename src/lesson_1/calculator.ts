export type OperationType = (x: number, y: number) => number;

export const addition: OperationType = (x: number, y: number): number => x + y;

export const subtraction: OperationType = (x: number, y: number): number =>
  x - y;

export const multiplication: OperationType = (x: number, y: number): number =>
  x * y;

export const division: OperationType = (x: number, y: number): number => x / y;

export const calculator: Record<string, OperationType> = {
  "+": addition,
  "-": subtraction,
  "*": multiplication,
  "/": division,
};

export enum Priority {
  FIRST = 1,
  SECOND = 2,
}

export const calculatorPriorities: Record<string, number> = {
  "*": Priority.FIRST,
  "/": Priority.FIRST,
  "+": Priority.SECOND,
  "-": Priority.SECOND,
};
