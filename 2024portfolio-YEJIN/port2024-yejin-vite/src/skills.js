// skills.js

export const skills = [
  {
    title: "back-end",
    icon: "fas fa-code-branch",
    items: [
      { name: "Java", image: "./assets/img/java.png" },
      { name: "Spring", image: "./assets/img/spring.png" },
      { name: "Node.js", image: "./assets/img/노드.svg" },
      { name: "Express", image: "" },
      { name: "JSP", image: "./assets/img/jsp.png" },
      { name: "PHP", image: "./assets/img/php.png" },
      { name: "MyBatis", image: "./assets/img/mtbatis.jpg" },
      { name: "RESTful API", image: "" },
    ],
  },
  {
    title: "front-end",
    icon: "fas fa-palette",
    items: [
      { name: "React", image: "./assets/img/리액트.svg" },
      { name: "HTML5", image: "./assets/img/html-5.png" },
      { name: "CSS3", image: "./assets/img/css-3.png" },
      { name: "JavaScript", image: "./assets/img/js.png" },
      { name: "Vanilla JavaScript", image: "./assets/img/Vanilla.jpg" },
      { name: "Vite", image: "./assets/img/비트.svg" },
    ],
  },
  {
    title: "server",
    icon: "fas fa-server",
    items: [
      { name: "Node.js", image: "./assets/img/노드.svg" },
      { name: "Apache Tomcat", image: "./assets/img/톰.png" },
      { name: "AWS", image: "./assets/img/aws.png" },
    ],
  },
  {
    title: "DB",
    icon: "fas fa-database",
    items: [
      { name: "MySQL", image: "./assets/img/mysql-logo.svg" },
      { name: "Oracle", image: "./assets/img/오라클.png" },
    ],
  },
  {
    title: "OS",
    icon: "fas fa-desktop",
    items: [
      { name: "Linux", image: "./assets/img/Linux.png" },
      { name: "Android", image: "./assets/img/안드.png" },
    ],
  },
  {
    title: "tools",
    icon: "fas fa-tools",
    items: [
      { name: "Eclipse", image: "./assets/img/이클립스.png" },
      { name: "VS Code", image: "./assets/img/vsCode.svg" },
      { name: "Unity", image: "./assets/img/유니티.png" },
      { name: "MySQL Workbench", image: "./assets/img/MySQL-Workbench.jpg" },
      { name: "HeidiSQL", image: "./assets/img/HeidiSQL.jpg" },
      {
        name: "Oracle SQL Developer",
        image: "./assets/img/Oracle SQL Developer.png",
      },
      { name: "Android Studio", image: "./assets/img/안드로이드.png" },
    ],
  },
  {
    title: "collaboration",
    icon: "fas fa-users",
    items: [
      { name: "Git", image: "./assets/img/git.svg" },
      { name: "GitHub", image: "./assets/img/github.svg" },
      { name: "Notion", image: "./assets/img/Notion.png" },
      { name: "Discord", image: "./assets/img/Discord.png" },
      { name: "Google Workspace", image: "./assets/img/Google Workspace.png" },
    ],
  },
  {
    title: "Design & document",
    icon: "fas fa-paint-brush",
    items: [
      { name: "Figma", image: "./assets/img/figma.png" },
      { name: "Adobe XD", image: "./assets/img/xd.png" },
      { name: "PowerPoint", image: "./assets/img/ppt.jpg" },
      { name: "Excel", image: "./assets/img/excel.jpg" },
      { name: "미리캔버스", image: "./assets/img/미리.png" },
      { name: "CLIP STUDIO", image: "./assets/img/CLIP STUDIO PAINT.jpg" },
      { name: "Photoshop", image: "./assets/img/ps.png" },
      { name: "Illustrator", image: "./assets/img/ai.png" },
    ],
  },
  {
    title: "Other Programming Languages",
    icon: "fas fa-code",
    items: [
      { name: "C", image: "./assets/img/c.png" },
      { name: "C#", image: "./assets/img/c-sharp.png" },
      { name: "Python", image: "./assets/img/파이썬.png" },
    ],
  },
];

// 기술 정보를 HTML에 추가하는 함수
export function renderSkills() {
  const skillContainer = document.getElementById("skill-container"); // 기술 정보를 넣을 요소

  skills.forEach((skill) => {
    const skillBox = document.createElement("div");
    skillBox.classList.add("skill-box");

    skillBox.innerHTML = `
      <div class="rb-title">
        <i class="${skill.icon}"></i> ${skill.title}
      </div>
      <div class="rb-detail">
        ${skill.items
          .map(
            (item) => `
          <div class="skill-item">
            <img src="${item.image}" alt="${item.name}" class="skill-icon"  onerror="this.style.display='none';">
            ${item.name}
          </div>
        `
          )
          .join("")}
      </div>
    `;

    skillContainer.appendChild(skillBox);
  });
}
