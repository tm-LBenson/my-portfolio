// smoothScroll.js

export const smoothScroll = (event, router) => {
  const targetId = event.target.getAttribute('href');

  // Check if the current route is the homepage
  if (window.location.pathname === '/') {
    event.preventDefault();

    if (targetId === '/blog') {
      router.push('/blog');
      return;
    }
    const target = document.querySelector(targetId);
    if (!target) return;

    const targetPosition = target.offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1000;
    let start = null;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      window.scrollTo(0, ease(progress, startPosition, distance, duration));
      if (progress < duration) window.requestAnimationFrame(step);
    };

    window.requestAnimationFrame(step);
  } else {
    // Navigate to the page if not on the homepage
    router.push(`/${targetId}`);
  }
};

const ease = (t, b, c, d) => {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t + b;
  t--;
  return (-c / 2) * (t * (t - 2) - 1) + b;
};
