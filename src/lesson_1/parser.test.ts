import { parser } from "./parser";

test("parser correct cases 1 + 7", () => {
  expect(parser("1 + 7")).toEqual([1, "+", 7]);
});

test("parser correct cases 1 + 7 * 2", () => {
  expect(parser("1 + 7 * 2")).toEqual([1, "+", 7, "*", 2]);
});

test("parser incorrect cases 1 + 7 * + 2", () => {
  expect(() => parser("1 + 7 * + 2")).toThrow(TypeError("Error"));
});
