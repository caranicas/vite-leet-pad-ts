import TestExtends from "../_system/TestExtends";

class LengthTest extends TestExtends {

  testValue: number[];

  constructor(name: string) {
    super(name);
  };

  setTestValue(testValue: number[]) {
    this.testValue = testValue;
  };

  testFunc():number {
     return test.length;
  };
}

export default new LengthTest('LengthTest');