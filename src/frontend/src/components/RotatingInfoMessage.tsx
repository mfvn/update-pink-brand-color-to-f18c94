import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

interface RotatingInfoMessageProps {
  messages: string[];
  intervalMs?: number;
}

export default function RotatingInfoMessage({
  messages,
  intervalMs = 5000,
}: RotatingInfoMessageProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || messages.length <= 1) {
      return;
    }

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % messages.length);
    }, intervalMs);

    return () => clearInterval(interval);
  }, [messages.length, intervalMs, prefersReducedMotion]);

  return (
    <div className="relative h-6 overflow-hidden">
      {messages.map((message, msgIndex) => (
        <div
          key={message}
          className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${
            msgIndex === currentIndex
              ? "translate-y-0 opacity-100"
              : msgIndex < currentIndex
                ? "-translate-y-full opacity-0"
                : "translate-y-full opacity-0"
          }`}
          style={{
            transitionProperty: prefersReducedMotion
              ? "opacity"
              : "transform, opacity",
          }}
        >
          <p className="text-sm font-medium text-white">{message}</p>
        </div>
      ))}
    </div>
  );
}
