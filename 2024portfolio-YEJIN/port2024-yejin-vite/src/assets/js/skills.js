// skills.js

export const skills = [
  {
    title: "back-end",
    icon: "fas fa-code-branch",
    items: [
      { name: "Java", image: "./assets/img/java.png" },
      { name: "Spring", image: "./assets/img/spring-web-mvc.png" },
      { name: "Node.js", image: "./assets/img/노드.svg" },
      { name: "Express", image: "g" },
      { name: "JSP", image: "jsp-icon.png" },
      { name: "PHP", image: "php-icon.png" },
      { name: "MyBatis", image: "mybatis-icon.png" },
      { name: "RESTful API", image: "restful-api-icon.png" },
    ],
  },
  {
    title: "front-end",
    icon: "fas fa-palette",
    items: [
      { name: "React", image: "react-icon.png" },
      { name: "HTML5", image: "html5-icon.png" },
      { name: "CSS3", image: "css3-icon.png" },
      { name: "JavaScript", image: "javascript-icon.png" },
      { name: "Vite", image: "vite-icon.png" },
    ],
  },
  {
    title: "server",
    icon: "fas fa-server",
    items: [
      { name: "Node.js", image: "nodejs-icon.png" },
      { name: "Apache Tomcat", image: "tomcat-icon.png" },
      { name: "AWS", image: "aws-icon.png" },
    ],
  },
  {
    title: "DB",
    icon: "fas fa-database",
    items: [
      { name: "MySQL", image: "mysql-icon.png" },
      { name: "Oracle", image: "oracle-icon.png" },
    ],
  },
  {
    title: "OS",
    icon: "fas fa-desktop",
    items: [
      { name: "Linux", image: "linux-icon.png" },
      { name: "Android", image: "android-icon.png" },
    ],
  },
  {
    title: "tools",
    icon: "fas fa-tools",
    items: [
      { name: "Eclipse", image: "eclipse-icon.png" },
      { name: "VS Code", image: "vscode-icon.png" },
      { name: "Unity", image: "unity-icon.png" },
      { name: "MySQL Workbench", image: "mysql-workbench-icon.png" },
      { name: "HeidiSQL", image: "heidisql-icon.png" },
      { name: "Oracle SQL Developer", image: "oracle-sql-icon.png" },
      { name: "Android Studio", image: "android-studio-icon.png" },
    ],
  },
  {
    title: "collaboration",
    icon: "fas fa-users",
    items: [
      { name: "Git", image: "git-icon.png" },
      { name: "GitHub", image: "github-icon.png" },
      { name: "Notion", image: "notion-icon.png" },
      { name: "Discord", image: "discord-icon.png" },
      { name: "Google Workspace", image: "google-workspace-icon.png" },
    ],
  },
  {
    title: "Design & document",
    icon: "fas fa-paint-brush",
    items: [
      { name: "Figma", image: "figma-icon.png" },
      { name: "Adobe XD", image: "adobe-xd-icon.png" },
      { name: "PowerPoint", image: "powerpoint-icon.png" },
      { name: "Excel", image: "excel-icon.png" },
      { name: "미리캔버스", image: "miricanvas-icon.png" },
      { name: "CLIP STUDIO", image: "clip-studio-icon.png" },
      { name: "Photoshop", image: "photoshop-icon.png" },
      { name: "Illustrator", image: "illustrator-icon.png" },
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
