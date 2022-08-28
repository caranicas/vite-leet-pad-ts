import SystemTest from "./index";

test("system", () => {
  expect(true).toBe(true);
});

test("verify", () => {
  expect(SystemTest.runTest()).toBe("SystemTest");
});
