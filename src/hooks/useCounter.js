import { useState, useEffect } from 'react';

const useCounter = (end, duration = 2000, start = 0) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    // If start and end are the same, no need to animate
    if (start === end) {
      setCount(end);
      return;
    }

    let startTime;
    let animationFrame;

    const updateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      
      // Easing function for smooth animation
      const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);
      const percentage = Math.min(progress / duration, 1);
      const easedPercentage = easeOutQuart(percentage);
      
      const currentCount = start + (end - start) * easedPercentage;
      
      // For integers, use floor; for decimals, keep as is
      if (Number.isInteger(start) && Number.isInteger(end)) {
        setCount(Math.floor(currentCount));
      } else {
        setCount(Number(currentCount.toFixed(1)));
      }

      if (progress < duration) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, start]);

  return count;
};

export default useCounter;