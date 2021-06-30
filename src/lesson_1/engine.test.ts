import { firstPrioritiesCalc, secondPrioritiesCalc } from "./engine";

test("engine correct firstPrioritiesCalc 2 * 3", () => {
  expect(firstPrioritiesCalc([2, "*", 3])).toEqual([6]);
});

test("engine correct firstPrioritiesCalc 9 / 3", () => {
  expect(firstPrioritiesCalc([9, "/", 3])).toEqual([3]);
});

test("engine 9 / 3 + 7 * 2", () => {
  expect(firstPrioritiesCalc([9, "/", 3, "+", 7, "*", 2])).toEqual([3, "+", 14]);
});

test("engine correct secondPrioritiesCalc 9 + 7", () => {
  expect(secondPrioritiesCalc([9, "+", 7])).toEqual(16);
});

test("engine correct secondPrioritiesCalc 9 - 7", () => {
  expect(secondPrioritiesCalc([9, "-", 7])).toEqual(2);
});

test("engine correct secondPrioritiesCalc 9 - 7 + 3", () => {
  expect(secondPrioritiesCalc([9, "-", 7, "+", 3])).toEqual(5);
});