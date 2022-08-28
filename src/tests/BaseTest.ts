abstract class BaseTest<MockValue> {
  // all tests have a name
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  // the underscore remove the typescript warning
  setTestValue(_value:MockValue) : void {
    // just an interface do nothing
  }

  // all tests have a test function
  runTest(): any {
    // just return the name
    return this.name;
  }
}

export default BaseTest;
