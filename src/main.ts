import "./style.css";
import { localTest } from "./localTest";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1 id="testSpace"></h1>
  </div>
`;
localTest(document.querySelector<HTMLHeadingElement>("#testSpace")!);
