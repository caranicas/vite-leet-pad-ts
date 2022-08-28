import "./style.css";
import TestRunner from "./TestRunner";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1 id="testSpace"></h1>
  </div>
`;

TestRunner(document.querySelector<HTMLHeadingElement>("#testSpace")!);
