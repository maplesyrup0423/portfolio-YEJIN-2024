import { menu } from "./menu.js";
//import { port } from "./port.js";
import { link } from "./link.js";
import { smooth } from "./smooth.js";
import { showPDF } from "./showPDF";
import { renderSkills } from "./skills.js";

window.addEventListener("load", function () {
  smooth();
  link();
  menu();
  //port();
  renderSkills(); // 기술 정보를 렌더링하는 함수 호출
});
