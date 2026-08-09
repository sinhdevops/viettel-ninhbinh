'use client';

import { useEffect, useRef } from 'react';

function ScrollProgress() {
  const indicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number | null = null;

    const updateProgress = () => {
      animationFrameId = null;

      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
      const normalizedProgress = Math.min(Math.max(progress, 0), 1);

      if (indicatorRef.current) {
        indicatorRef.current.style.transform = `scaleX(${normalizedProgress})`;
      }
    };

    const requestProgressUpdate = () => {
      if (animationFrameId === null) {
        animationFrameId = window.requestAnimationFrame(updateProgress);
      }
    };

    const resizeObserver = new ResizeObserver(requestProgressUpdate);

    updateProgress();
    resizeObserver.observe(document.documentElement);
    window.addEventListener('scroll', requestProgressUpdate, { passive: true });
    window.addEventListener('resize', requestProgressUpdate);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('scroll', requestProgressUpdate);
      window.removeEventListener('resize', requestProgressUpdate);

      if (animationFrameId !== null) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <div
      data-slot="scroll-progress"
      className="bg-primary/10 pointer-events-none absolute inset-x-0 bottom-0 h-0.5"
      aria-hidden
    >
      <div
        ref={indicatorRef}
        data-slot="scroll-progress-indicator"
        className="bg-primary h-full origin-left will-change-transform"
        style={{ transform: 'scaleX(0)' }}
      />
    </div>
  );
}

export { ScrollProgress };
