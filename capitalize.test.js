import capitalize from "./capitalize.js";
test("Capitalize", () => {
  expect("").toBe("");
});

test("capitalize the first character of a string", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("preserves the remaining characters", () => {
  expect(capitalize("hELLo")).toBe("HELLo");
});

test("does not change an already capitalized string", () => {
  expect(capitalize("Hello")).toBe("Hello");
});

test("handles a single character", () => {
  expect(capitalize("a")).toBe("A");
});