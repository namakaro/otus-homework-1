export type OperationType = (x: number, y: number) => number;

export const addition: OperationType = (x: number, y: number): number => x + y;

export const subtraction: OperationType = (x: number, y: number): number =>
  x - y;

export const multiplication: OperationType = (x: number, y: number): number =>
  x * y;

export const division: OperationType = (x: number, y: number): number => x / y;

export const calculator: { [key: string]: OperationType } = {
  "+": addition,
  "-": subtraction,
  "*": multiplication,
  "/": division,
};

export enum Priority {
  first = 1,
  second = 2,
}

export const calculatorPriorities: { [key: string]: number } = {
  "*": Priority.first,
  "/": Priority.first,
  "+": Priority.second,
  "-": Priority.second,
};
