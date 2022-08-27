import Length from "./tests/solved/Length";

export function localTest(element: HTMLHeadingElement) {
  element.innerHTML = `YOU CAN DO THIS!`;

  // replace these as needed
  Length.setTestValue([1, 2, 3, 4, 5]);
  console.log(Length.testFunc());
}
