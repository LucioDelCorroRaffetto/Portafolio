"use client";

import { useRef, useEffect, useState } from "react";

interface ScoreRingProps {
  score: number;
  label: string;
  size?: number;
}

function getColor(score: number): { stroke: string; text: string } {
  if (score >= 90) return { stroke: "#10b981", text: "#10b981" }; // emerald-500
  if (score >= 70) return { stroke: "#f59e0b", text: "#f59e0b" }; // amber-500
  return { stroke: "#ef4444", text: "#ef4444" };                   // red-500
}

export function ScoreRing({ score, label, size = 72 }: ScoreRingProps) {
  const ref = useRef<SVGSVGElement>(null);
  const [animated, setAnimated] = useState(false);
  const [prefersReduced, setPrefersReduced] = useState(false);

  const strokeWidth = 5;
  const radius = (size - strokeWidth * 2) / 2;
  const circumference = 2 * Math.PI * radius;
  const center = size / 2;

  const progress = animated || prefersReduced ? score / 100 : 0;
  const dashoffset = circumference * (1 - progress);

  const { stroke, text } = getColor(score);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReduced(mq.matches);

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col items-center gap-1.5">
      <svg
        ref={ref}
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        role="img"
        aria-label={`${label}: ${score}`}
        style={{ display: "block" }}
      >
        {/* Track */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="var(--border)"
          strokeWidth={strokeWidth}
        />
        {/* Progress arc */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={dashoffset}
          transform={`rotate(-90 ${center} ${center})`}
          style={
            prefersReduced
              ? undefined
              : {
                  transition: animated
                    ? "stroke-dashoffset 1s cubic-bezier(0.22,1,0.36,1)"
                    : "none",
                }
          }
        />
        {/* Score number */}
        <text
          x={center}
          y={center}
          dominantBaseline="central"
          textAnchor="middle"
          fontSize={size * 0.22}
          fontWeight="700"
          fontFamily="inherit"
          fill={text}
        >
          {score}
        </text>
      </svg>

      <span
        className="flex items-start justify-center text-center text-[9px] font-medium uppercase leading-tight tracking-[0.12em] text-muted"
        style={{ maxWidth: size + 8, minHeight: "1.9em" }}
      >
        {label}
      </span>
    </div>
  );
}
