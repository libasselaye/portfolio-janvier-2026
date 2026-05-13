import { useEffect, useRef, type ReactNode } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import type { Content } from '../content/types';

type HeroProps = {
  content: Content;
  cvHref: string;
  onAssistantOpen: () => void;
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.035, delayChildren: 0.1 }
  }
};

const letterVariants = {
  hidden: { opacity: 0, y: '0.6em' },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

function AnimatedName({ name }: { name: string }) {
  const reduce = useReducedMotion();
  const words = name.split(' ');

  if (reduce) {
    return <>{name}</>;
  }

  return (
    <motion.span
      className="inline-block"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      aria-label={name}
    >
      {words.map((word, wIdx) => (
        <span key={`${word}-${wIdx}`} className="inline-block whitespace-nowrap">
          {Array.from(word).map((char, cIdx) => (
            <span
              key={`${char}-${cIdx}`}
              className="inline-block overflow-hidden align-baseline"
              style={{ paddingBottom: '0.12em' }}
            >
              <motion.span className="inline-block" variants={letterVariants}>
                {char}
              </motion.span>
            </span>
          ))}
          {wIdx < words.length - 1 ? <span className="inline-block">&nbsp;</span> : null}
        </span>
      ))}
    </motion.span>
  );
}

function Magnetic({ children, strength = 18 }: { children: ReactNode; strength?: number }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const el = ref.current;
    if (!el) return;
    if (typeof window === 'undefined') return;
    if (!window.matchMedia('(pointer: fine)').matches) return;

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);
      const distX = (x / rect.width) * strength * 2;
      const distY = (y / rect.height) * strength * 2;
      el.style.transform = `translate3d(${distX}px, ${distY}px, 0)`;
    };
    const handleLeave = () => {
      el.style.transform = 'translate3d(0, 0, 0)';
    };

    el.addEventListener('mousemove', handleMove);
    el.addEventListener('mouseleave', handleLeave);
    return () => {
      el.removeEventListener('mousemove', handleMove);
      el.removeEventListener('mouseleave', handleLeave);
    };
  }, [reduce, strength]);

  return (
    <span ref={ref} className="magnetic-target">
      {children}
    </span>
  );
}

export default function Hero({ content, cvHref, onAssistantOpen }: HeroProps) {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollY } = useScroll();
  const VH = typeof window !== 'undefined' ? window.innerHeight : 900;

  const contentY = useTransform(scrollY, [0, VH], [0, -80]);
  const tickerX = useTransform(scrollY, [0, VH], ['0%', '-8%']);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative scroll-mt-28 overflow-hidden"
    >
      <motion.div
        className="hero-ticker"
        aria-hidden="true"
        style={reduce ? undefined : { x: tickerX }}
      >
        <div className="hero-ticker-track">
          {Array.from({ length: 3 }).map((_, repeatIdx) => (
            <span key={repeatIdx} className="hero-ticker-row">
              {content.hero.ticker.map((item) => (
                <span key={`${repeatIdx}-${item}`} className="hero-ticker-item">
                  <span className="hero-ticker-dot" aria-hidden="true" />
                  {item}
                </span>
              ))}
            </span>
          ))}
        </div>
      </motion.div>

      <span aria-hidden="true" className="hero-edition">
        Portfolio<span className="hero-edition-sep">·</span>2026
      </span>

      <motion.div
        className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-7 px-6 pb-16 pt-20 text-center md:gap-9 md:pb-24 md:pt-28 lg:pb-32 lg:pt-36"
        style={reduce ? undefined : { y: contentY }}
      >
        <motion.span
          className="badge"
          initial={reduce ? false : 'hidden'}
          animate="visible"
          variants={fadeUp}
        >
          {content.hero.status}
        </motion.span>

        <h1 className="font-display font-medium leading-[1.05] tracking-tight text-[clamp(2.75rem,11vw,7.5rem)]">
          <AnimatedName name={content.identity.name} />
        </h1>

        <motion.p
          className="font-display text-xl italic text-muted md:text-2xl"
          initial={reduce ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.6 }}
          variants={fadeUp}
        >
          {content.identity.role}
        </motion.p>

        <motion.p
          className="max-w-2xl text-base leading-relaxed text-muted md:text-lg"
          initial={reduce ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.75 }}
          variants={fadeUp}
        >
          {content.hero.headline}
        </motion.p>

        {content.hero.subheadline ? (
          <motion.p
            className="max-w-xl text-sm text-muted/80"
            initial={reduce ? false : 'hidden'}
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.85 }}
            variants={fadeUp}
          >
            {content.hero.subheadline}
          </motion.p>
        ) : null}

        <motion.div
          className="flex flex-col items-stretch gap-3 pt-2 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center"
          initial={reduce ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.95 }}
          variants={fadeUp}
        >
          <Magnetic>
            <a href="#projects" className="btn-primary btn-hero">
              {content.hero.ctaProjects}
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href={encodeURI(cvHref)}
              className="btn-secondary btn-hero"
              target="_blank"
              rel="noreferrer noopener"
            >
              {content.hero.ctaCv}
            </a>
          </Magnetic>
          <Magnetic>
            <button
              type="button"
              onClick={onAssistantOpen}
              className="btn-secondary btn-hero assistant-cta"
            >
              {content.hero.assistantCta}
            </button>
          </Magnetic>
        </motion.div>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 pt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted/80 md:text-[11px] md:tracking-[0.22em]"
          initial={reduce ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 1.05 }}
          variants={fadeUp}
        >
          <span>
            {content.ui.heroProfile.labels.company}
            <span className="ml-2 text-text/90">{content.identity.company}</span>
          </span>
          <span className="hidden h-1 w-1 rounded-full bg-muted/40 sm:inline-block" />
          <span>
            {content.ui.heroProfile.labels.location}
            <span className="ml-2 text-text/90">{content.identity.location}</span>
          </span>
        </motion.div>

        <motion.a
          href="#experience"
          className="hero-scroll mt-4"
          initial={reduce ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 1.15 }}
          variants={fadeUp}
        >
          <span className="hero-scroll-arrow" aria-hidden="true">↓</span>
          {content.hero.scrollHint}
        </motion.a>
      </motion.div>
    </section>
  );
}
