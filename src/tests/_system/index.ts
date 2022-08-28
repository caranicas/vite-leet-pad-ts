import TestExtend from "../BaseTest";

// system test doesnt accept any test value.
type ValueType = void;

class SystemTest extends TestExtend<ValueType> {}
export default new SystemTest("SystemTest");
