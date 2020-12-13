import { useEffect, useState } from 'react';

export const SCROLL_UP = 'up';
export const SCROLL_DOWN = 'down';

interface IProps {
  initialDirection: 'up' | 'down';
  thresholdPixels: number;
  off: boolean;
}

const useScrollDirection = ({
  initialDirection,
  thresholdPixels,
  off,
}: IProps): string => {
  const [scrollDirection, setScrollDirection] = useState(initialDirection);

  useEffect(() => {
    const threshold = thresholdPixels || 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;
      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setScrollDirection(scrollY > lastScrollY ? SCROLL_DOWN : SCROLL_UP);
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    !off
      ? window.addEventListener('scroll', onScroll)
      : setScrollDirection(initialDirection);

    return () => window.removeEventListener('scroll', onScroll);
  }, [initialDirection, thresholdPixels, off]);

  return scrollDirection;
};

export default useScrollDirection;
