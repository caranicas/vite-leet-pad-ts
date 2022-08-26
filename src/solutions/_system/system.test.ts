import verify from "./index";

test("system", () => {
  expect(true).toBe(true);
});

test("verify", () => {
  expect(verify()).toBe(true);
});
