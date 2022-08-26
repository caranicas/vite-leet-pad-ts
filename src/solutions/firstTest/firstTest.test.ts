import lengthTest from "./index";

test("length", () => {
  const test = [1, 2, 3];
  expect(lengthTest(test)).toBe(3);
});
