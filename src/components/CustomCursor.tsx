import { useEffect, useRef, useState } from 'react';

const TARGET_SELECTOR = 'a, button, [data-cursor="link"], input, textarea, label';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const dotPos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const target = useRef({ x: -100, y: -100 });
  const [hover, setHover] = useState(false);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const fine = window.matchMedia('(pointer: fine)').matches;
    if (!fine) return;

    setHidden(false);
    document.documentElement.classList.add('cursor-custom');

    const onMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };

    const onOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement | null;
      if (el && el.closest?.(TARGET_SELECTOR)) setHover(true);
    };

    const onOut = (e: MouseEvent) => {
      const el = e.target as HTMLElement | null;
      if (el && el.closest?.(TARGET_SELECTOR)) setHover(false);
    };

    const onLeave = () => {
      target.current.x = -100;
      target.current.y = -100;
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseout', onOut);
    document.addEventListener('mouseleave', onLeave);

    let raf = 0;
    const loop = () => {
      // Dot: snappy (low lag)
      dotPos.current.x += (target.current.x - dotPos.current.x) * 0.45;
      dotPos.current.y += (target.current.y - dotPos.current.y) * 0.45;
      // Ring: trails behind (high lag)
      ringPos.current.x += (target.current.x - ringPos.current.x) * 0.14;
      ringPos.current.y += (target.current.y - ringPos.current.y) * 0.14;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dotPos.current.x}px, ${dotPos.current.y}px, 0) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
      document.removeEventListener('mouseleave', onLeave);
      document.documentElement.classList.remove('cursor-custom');
    };
  }, []);

  if (hidden) return null;

  return (
    <>
      <div ref={ringRef} className={`cursor-ring ${hover ? 'cursor-ring-hover' : ''}`} aria-hidden="true" />
      <div ref={dotRef} className={`cursor-dot ${hover ? 'cursor-dot-hover' : ''}`} aria-hidden="true" />
    </>
  );
}
