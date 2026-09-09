"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "@/lib/gsap";

export default function Reveal({
  children,
  className,
  y = 40,
  delay = 0,
  once = true,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
  delay?: number;
  once?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { y, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.15,
          delay,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%", once },
        }
      );
    }, el);
    return () => ctx.revert();
  }, [y, delay, once]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
