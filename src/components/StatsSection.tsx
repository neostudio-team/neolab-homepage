"use client";

import { useEffect, useRef, useState } from "react";

interface StatsSectionProps {
  dict: {
    ncodeMinSize: string;
    ncodePrinted: string;
    ncodePrintedSub: string;
    countriesApplying: string;
    coreCompetency: string;
    awards: string;
    competencies: readonly string[];
    awardsList: readonly (readonly [string, string])[];
  };
}

function useCountUp(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return { count, ref };
}

export default function StatsSection({ dict }: StatsSectionProps) {
  const stat1 = useCountUp(2);
  const stat2 = useCountUp(95, 2500);
  const stat3 = useCountUp(76, 2000);

  return (
    <section className="bg-[#ff9400] text-white pt-[120px] pb-[54px]">
      <div className="max-w-[1080px] mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-16 text-center">
          <div ref={stat1.ref}>
            <div className="text-6xl font-bold opacity-60 mb-2">{stat1.count}</div>
            <h3 className="text-base font-bold">{dict.ncodeMinSize}</h3>
          </div>
          <div ref={stat2.ref}>
            <div className="text-6xl font-bold opacity-60 mb-2">{stat2.count / 10}</div>
            <h3 className="text-base font-bold">
              {dict.ncodePrinted}
              <br />
              {dict.ncodePrintedSub}
            </h3>
          </div>
          <div ref={stat3.ref}>
            <div className="text-6xl font-bold opacity-60 mb-2">{stat3.count}</div>
            <h3 className="text-base font-bold">{dict.countriesApplying}</h3>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest mb-6">{dict.coreCompetency}</h3>
            <ul className="space-y-2">
              {dict.competencies.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-white/80">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/60 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest mb-6">{dict.awards}</h3>
            <ul className="space-y-2">
              {dict.awardsList.map(([award]) => (
                <li key={award} className="flex items-start gap-2 text-sm text-white/80">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/60 shrink-0" />
                  {award}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest mb-6 invisible">
              {dict.awards} cont.
            </h3>
            <ul className="space-y-2">
              {dict.awardsList.map(([, award]) => (
                <li key={award} className="flex items-start gap-2 text-sm text-white/80">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/60 shrink-0" />
                  {award}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
