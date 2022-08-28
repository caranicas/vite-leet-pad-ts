import LengthTest from "./index";
import { Problem1, Problem2 } from "./length.mock";

test("basic length test ", () => {
  const { data, expected } = Problem1;
  LengthTest.setTestValue(data);
  expect(LengthTest.runTest()).toBe(expected);
});

test("empty length test", () => {
  const { data, expected } = Problem2;
  LengthTest.setTestValue(data);
  expect(LengthTest.runTest()).toBe(expected);
});
