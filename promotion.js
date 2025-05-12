// promotion.js

document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector('.fade-section.right');
  section.classList.add('visible'); // 페이지 진입 시에도 표시
});

// 추가로 스크롤 감지는 그대로 유지해도 부드러운 효과가 있음
window.addEventListener('scroll', () => {
  const section = document.querySelector('.fade-section.right');
  const sectionTop = section.getBoundingClientRect().top;
  const triggerPoint = window.innerHeight * 0.85;

  if (sectionTop < triggerPoint) {
    section.classList.add('visible');
  }
});
