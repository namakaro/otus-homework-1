import { runner } from "./runner";

test("runner 6 / 3 to equal 2", () => {
  expect(runner("6 / 3")).toBe(2);
});

test("runner 6 * 3 to equal 18", () => {
  expect(runner("6 * 3")).toBe(18);
});

test("runner 6 * 3 * 2 to equal 36", () => {
  expect(runner("6 * 3 * 2")).toBe(36);
});

test("runner 6 + 3 * 2 to equal 12", () => {
  expect(runner("6 + 3 * 2")).toBe(12);
});

test("runner 6 + 12 / 3 - 2 to equal 8", () => {
  expect(runner("6 + 12 / 3 - 2")).toBe(8);
});

test("runner 6 - 9 / 3 * 7 + 2 to equal -13", () => {
  expect(runner("6 - 9 / 3 * 7 + 2")).toBe(-13);
});
