import reverseString from "./reverseString";

test("Return an empty string for empty string", () => {
  expect(reverseString("")).toBe("");
})

test("Reverse a string string character", () => {
  expect(reverseString("a")).toBe("a");
});

test("Reserves spaces and punchuation", () => {
  expect(reverseString("Hello, World!")).toBe("!dlroW ,olleH");
});