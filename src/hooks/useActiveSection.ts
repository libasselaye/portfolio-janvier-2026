import { useEffect, useState } from "react";
export default function useActiveSection(sectionIds: string[]) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? "");
  const sectionKey = sectionIds.join("|");
  useEffect(() => {
    const elements = sectionKey
      .split("|")
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element));
    let frame = 0;
    const update = () => {
      const readingLine = Math.min(window.innerHeight * 0.3, 220);
      const active = [...elements]
        .reverse()
        .find((element) => element.getBoundingClientRect().top <= readingLine);
      setActiveId(active?.id ?? elements[0]?.id ?? "");
      frame = 0;
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    const observer = new ResizeObserver(schedule);
    observer.observe(document.body);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [sectionKey]);
  return activeId;
}
