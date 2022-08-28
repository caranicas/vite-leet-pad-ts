import LengthTest from "./index";

test("length", () => {
  const test = [1, 2, 3];
  LengthTest.setTestValue(test);
  expect(LengthTest.runTest()).toBe(3);
});
