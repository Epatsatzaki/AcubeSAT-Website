import { useState, useEffect, useRef } from 'react';

const useCounter = (end, duration = 2000, start = 0) => {
  const [count, setCount] = useState(start);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          // Start counting when visible
          setHasStarted(true);
          // Clear any pending reset timeouts
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
          }
        } else if (!entry.isIntersecting && hasStarted) {
          // Reset after a short delay when not visible
          timeoutRef.current = setTimeout(() => {
            setHasStarted(false);
            setCount(start);
          }, 500); // 500ms delay before reset
        }
      },
      { 
        threshold: 0.8
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [hasStarted, start]);

  useEffect(() => {
    if (!hasStarted) return;

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
  }, [end, duration, start, hasStarted]);

  return { count, ref: elementRef };
};

export default useCounter;