import { useEffect, useRef, useState } from 'react';

/**
 * A hook that provides scroll position and direction for parallax effects.
 * Respects prefers-reduced-motion and throttles updates via requestAnimationFrame
 * for performance.
 */
export const useScroll = () => {
  const [scrollY, setScrollY] = useState(0);
  const [direction, setDirection] = useState<'up' | 'down' | 'none'>('none');
  const prevScrollY = useRef(0);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) return;

    let rafId: number;
    let ticking = false;

    const updateScroll = () => {
      const y = window.scrollY;
      setScrollY(y);
      if (y > prevScrollY.current) setDirection('down');
      else if (y < prevScrollY.current) setDirection('up');
      else setDirection('none');
      prevScrollY.current = y;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        rafId = requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    updateScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return { scrollY, direction };
};

/**
 * Computes a parallax transform value based on scroll position.
 *
 * @param maxDelta Maximum transform distance in pixels
 * @param speed Multiplier controlling how fast the element moves (0-1)
 * @param invert Whether to invert the direction
 */
export const useParallax = (maxDelta: number, speed = 0.5, invert = false) => {
  const { scrollY } = useScroll();
  const delta = scrollY * speed * (invert ? -1 : 1);
  return Math.max(-maxDelta, Math.min(maxDelta, delta));
};

/**
 * Creates a transform string for parallax effects.
 *
 * @param x X-axis offset in pixels
 * @param y Y-axis offset in pixels
 */
export const useParallaxTransform = (x: number, y: number) => {
  const translateX = useParallax(x, 0.3, false);
  const translateY = useParallax(y, 0.7, false);
  return `translate(${translateX}px, ${translateY}px)`;
};