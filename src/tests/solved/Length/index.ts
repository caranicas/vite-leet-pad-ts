import BaseTest from "../../BaseTest";

// We need to pass an array of values to the test.
type ValueType = number[];

class LengthTest extends BaseTest<ValueType> {
  testValue: number[];

  constructor(name: string) {
    super(name);
    this.testValue = [];
  }

  setTestValue(testValue:ValueType) :void {
    this.testValue = testValue;
  }

  runTest(): number {
    return this.functionalLengthTest(this.testValue);
  }

  // make sure we run our fest functionally within the class
  functionalLengthTest(testValue:ValueType) :number {
    return testValue.length;
  }
}

export default new LengthTest("LengthTest");
