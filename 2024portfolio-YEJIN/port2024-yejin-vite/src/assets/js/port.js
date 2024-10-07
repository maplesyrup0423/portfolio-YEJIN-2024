import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export function port() {
  gsap.registerPlugin(ScrollTrigger);
  const horSection = gsap.utils.toArray(".port__item");

  gsap.to(horSection, {
    xPercent: -100 * (horSection.length - 1), // 이동 거리 조정
    ease: "none",
    scrollTrigger: {
      trigger: "#port",
      start: "top 56px",
      end: "+=1500", // 스크롤 길이 조정
      pin: true,
      scrub: 0.5, // 반응성 조정
      markers: false,
      invalidateOnRefresh: true,
      anticipatePin: 1,
    },
  });
}
