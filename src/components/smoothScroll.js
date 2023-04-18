// smoothScroll.js
export const smoothScroll = async (event, offset = 150) => {
  event.preventDefault();

  const targetId = event.currentTarget.getAttribute('href');
  if (targetId[0] === '/') return;
  const targetElement = document.querySelector(targetId);
  const targetPosition =
    targetElement.getBoundingClientRect().top + window.pageYOffset - offset;

  // Smooth scroll to the target element
  animateScrollTo(targetPosition);
};

const animateScrollTo = (position) => {
  const duration = 500; // duration of the animation in milliseconds
  const start = window.pageYOffset;
  const distance = position - start;
  let startTime = null;

  const animationStep = (timestamp) => {
    if (!startTime) startTime = timestamp;
    const progress = timestamp - startTime;
    const easeInOut = easeInOutQuad(progress, start, distance, duration);
    window.scrollTo(0, easeInOut);
    if (progress < duration) window.requestAnimationFrame(animationStep);
  };

  window.requestAnimationFrame(animationStep);
};

// Easing function for smooth animation
const easeInOutQuad = (t, b, c, d) => {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t + b;
  t--;
  return (-c / 2) * (t * (t - 2) - 1) + b;
};
