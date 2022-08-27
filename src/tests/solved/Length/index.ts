import TestExtends from "../../_system/TestExtends";

class LengthTest extends TestExtends {

  testValue: number[];

  constructor(name: string) {
    super(name);
    this.testValue = [];
  }

  setTestValue(testValue: number[]) {
    this.testValue = testValue;
  }

  testFunc():number {
     return this.testValue.length;
  }
};

export default new LengthTest('LengthTest');