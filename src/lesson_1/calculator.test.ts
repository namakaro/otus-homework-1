import { addition, subtraction, multiplication, division } from "./calculator";

test("calculator addition 1 + 2 to equal 3", () => {
  expect(addition(1, 2)).toBe(3);
});

test("calculator subtraction 7 - 3 to equal 4", () => {
  expect(subtraction(7, 3)).toBe(4);
});

test("calculator multiplication 7 * 2 to equal 14", () => {
  expect(multiplication(7, 2)).toBe(14);
});

test("calculator division 6 / 3 to equal 2", () => {
  expect(division(6, 3)).toBe(2);
});
