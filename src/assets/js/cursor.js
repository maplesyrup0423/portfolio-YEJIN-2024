// cursor.js

const cursor = document.querySelector(".cursor");

let mouseX = 0,
  mouseY = 0; // 마우스 위치
let cursorX = 0,
  cursorY = 0; // 구슬 위치

// 마우스가 움직일 때 마우스 위치를 업데이트
document.addEventListener("mousemove", (e) => {
  mouseX = e.pageX;
  mouseY = e.pageY;
});

// 구슬을 부드럽게 따라오도록 애니메이션 적용
function animate() {
  // lerp(선형 보간)를 사용하여 구슬이 마우스를 따라올 때 딜레이 추가
  cursorX += (mouseX - cursorX) * 0.07; // 0.07은 딜레이 속도, 클수록 빠름
  cursorY += (mouseY - cursorY) * 0.07;

  // 구슬의 위치 업데이트
  cursor.style.left = `${cursorX}px`;
  cursor.style.top = `${cursorY}px`;

  requestAnimationFrame(animate); // 매 프레임마다 업데이트
}

// 애니메이션 시작을 위한 함수
export function startCursorAnimation() {
  animate(); // 커서 애니메이션 시작
}
