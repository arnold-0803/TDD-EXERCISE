import caesarCipher from "./caesarCipher.js";
// import shiftLetter from "./caesarCipher.js";

// test("Shift a lowercase letter", () => {
//   expect(shiftLetter("a", 3)).toBe("d");
// });

// test("Shift z by 1", () => {
//   expect(shiftLetter("z", 1)).toBe("a");
// });

// test("Shift z by 2", () => {
//   expect(shiftLetter("z", 2)).toBe("b");
// });

// test("Shift y lowercase letter", () => {
//   expect(shiftLetter("y", 3)).toBe("b");
// });


test("Shift a whole lowercase message", () => {
  expect(caesarCipher("hello", 3)).toBe("khoor");
});

test("Preserve uppercase letters", () => {
  expect(caesarCipher("ABC", 3)).toBe("DEF");
});

test("Wrap uppercase Z around to A", () => {
  expect(caesarCipher("Z", 1)).toBe("A");
});

test("Preserve mixed case, spaces and punctuation", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("Wrap around with a negative shift", () => {
  expect(caesarCipher("a", -1)).toBe("z");
});