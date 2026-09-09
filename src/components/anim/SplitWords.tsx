"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

/**
 * Scroll-scrubbed word-by-word fill: every word starts dimmed and
 * ignites to full opacity as it passes through the viewport.
 */
export default function SplitWords({
  text,
  className,
  emphasize = [],
}: {
  text: string;
  className?: string;
  /** Exact word tokens (including punctuation) rendered in italic amber serif. */
  emphasize?: string[];
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const words = text.split(" ");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.to(el.querySelectorAll(".sw"), {
        opacity: 1,
        stagger: 0.06,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top 82%",
          end: "bottom 42%",
          scrub: 0.5,
        },
      });
    }, el);
    return () => ctx.revert();
  }, [text]);

  return (
    <p ref={ref} className={className}>
      {words.map((w, i) => {
        const hot = emphasize.includes(w);
        return (
          <span key={`${text}-${i}`} className={hot ? "sw italic text-amber" : "sw"}>
            {w}
            {i < words.length - 1 ? " " : ""}
          </span>
        );
      })}
    </p>
  );
}
