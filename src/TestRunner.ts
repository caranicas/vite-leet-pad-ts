/**
 * This test runner is set up to be as simple as possible to update.
 *
 * To test something new, update what test we are importing, and
 * update the name of the problem you want to test.
 */
import defaultExport, { Problem1 as ProblemMock } from "./tests/solved/Length";

export default function TestRunner(element: HTMLHeadingElement) {
  // words of encouragement
  element.innerHTML = `YOU CAN DO THIS!`;

  // set up your test
  const { data, expected } = ProblemMock;
  defaultExport.setTestValue(data);

  // display in the console.
  console.log("===== START TEST =====");
  console.log("expected", expected);
  console.log("got", defaultExport.runTest());
  console.log("===== END TEST =====");
}
