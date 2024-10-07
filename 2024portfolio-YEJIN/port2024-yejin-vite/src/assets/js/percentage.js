document.addEventListener("DOMContentLoaded", function () {
  const percentages = document.querySelectorAll(".percentage");

  const updatePercentage = (percentage) => {
    const target = parseInt(percentage.getAttribute("data-target")); // 목표 퍼센티지
    let current = 0; // 현재 값 초기화
    const increment = Math.ceil(target / 200); // 증가량을 줄임 (200으로 나눠서 부드럽게 증가)

    const interval = setInterval(() => {
      if (current < target) {
        current += increment; // 증가
        if (current > target) current = target; // 목표를 넘지 않도록 조정
        percentage.textContent = current + "%"; // 텍스트 업데이트
      } else {
        clearInterval(interval); // 목표에 도달하면 인터벌 종료
      }
    }, 50); // 간격을 50ms로 변경
  };

  const options = {
    root: null, // 뷰포트를 기준으로
    rootMargin: "0px",
    threshold: 0.1, // 요소의 10%가 보일 때 이벤트 발생
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // 요소가 화면에 보일 때 애니메이션 시작
        updatePercentage(entry.target);
        observer.unobserve(entry.target); // 한 번만 실행되도록 언옵저브
      }
    });
  }, options);

  percentages.forEach((percentage) => {
    observer.observe(percentage); // 각 퍼센티지 요소를 관찰
  });
});
