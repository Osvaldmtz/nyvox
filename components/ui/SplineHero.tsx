"use client";

import Spline from "@splinetool/react-spline";
import { Suspense, useState } from "react";

export function SplineHero() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className="pointer-events-none absolute inset-0 h-full w-full"
      data-spline-loaded={loaded}
    >
      <Suspense
        fallback={
          <div className="h-full w-full bg-gradient-to-br from-[#0a0e27] via-[#0d1742] to-[#1464F0]/30" />
        }
      >
        <Spline
          scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode"
          onLoad={() => setLoaded(true)}
          className="h-full w-full"
        />
      </Suspense>

      {/* Overlay gradiente para mejorar contraste del texto */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/80" />
    </div>
  );
}
