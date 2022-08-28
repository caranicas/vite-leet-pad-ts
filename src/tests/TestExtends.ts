class TestExtends {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  testFunction(): any {
    return this.name;
  }
}

export default TestExtends;
