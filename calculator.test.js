import calculator from "./calculator.js";

test("Take two numbers and give their sum", () => {
  expect(calculator.add(2, 3)).toBe(5);
});

test("Take two numbers and give their difrence", () => {
  expect(calculator.subtract(5, 5)).toBe(0);
});

test("Take two numbers and give their division", () => {
  expect(calculator.divide(15, 5)).toBe(3);
});

test("Take two numbers and give their multiplication", () => {
  expect(calculator.multiply(4, 5)).toBe(20);
});