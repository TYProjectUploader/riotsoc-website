"use client";

import { useEffect, useRef } from "react";

export default function BeholdWidget() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const widget = document.createElement("behold-widget");
    widget.setAttribute("feed-id", "t5MyhaSkKQn0yqpNoLhS");
    containerRef.current.appendChild(widget);

    if (document.querySelector('script[src="https://w.behold.so/widget.js"]')) {
      return;
    }

    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://w.behold.so/widget.js";
    document.head.appendChild(script);
  }, []);

  return <div ref={containerRef} className="mb-4" />;
}
