import TestExtend from "./TestExtends";

class SystemTest extends TestExtend {

  constructor(name: string) {
    super(name);
  };

  testFunc():string {
     return this.name;
  };
}

export default new SystemTest('SystemTest');