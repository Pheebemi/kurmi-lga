"use client";

import { useState } from "react";
import { TARABA_LGAS, MAP_WIDTH, MAP_HEIGHT } from "@/lib/taraba-map";

const KURMI_KEY = "kurmi";

/**
 * Full map of Taraba State with Kurmi LGA highlighted; the other 15 LGAs are
 * dimmed as geographic context. Designed to sit on the dark emerald hero card.
 * Geometry: geoBoundaries gbOpen NGA ADM2 (CC BY 4.0) — see lib/taraba-map.ts.
 */
export function KurmiMap() {
  const [hover, setHover] = useState(false);
  const kurmi = TARABA_LGAS.find((s) => s.key === KURMI_KEY);

  return (
    <div className="relative">
      <svg
        viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
        className="mx-auto h-auto w-full max-h-[460px]"
        role="img"
        aria-label="Map of Taraba State highlighting Kurmi Local Government Area"
      >
        <defs>
          <linearGradient id="kurmiFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#34d399" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>
        </defs>

        {/* context LGAs */}
        {TARABA_LGAS.filter((s) => s.key !== KURMI_KEY).map((s) => (
          <path
            key={s.key}
            d={s.d}
            strokeWidth={1.25}
            style={{
              fill: "var(--map-context-fill)",
              stroke: "var(--map-context-stroke)",
            }}
          />
        ))}

        {/* highlighted Kurmi */}
        {kurmi && (
          <path
            d={kurmi.d}
            fill="url(#kurmiFill)"
            stroke="#052e16"
            strokeWidth={2.5}
            className="cursor-pointer transition-[filter] duration-200"
            style={{ filter: hover ? "brightness(1.1)" : "none" }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          />
        )}

        {/* marker + label on Kurmi */}
        {kurmi && (
          <g pointerEvents="none">
            <circle cx={kurmi.cx} cy={kurmi.cy} r={7} fill="#fef3c7" />
            <circle cx={kurmi.cx} cy={kurmi.cy} r={3.5} fill="#b45309" />
            <text
              x={kurmi.cx}
              y={kurmi.cy - 16}
              textAnchor="middle"
              fontSize={26}
              fontWeight={800}
              style={{
                fill: "var(--map-label-fill)",
                paintOrder: "stroke",
                stroke: "var(--map-label-halo)",
                strokeWidth: 5,
              }}
            >
              Kurmi
            </text>
          </g>
        )}
      </svg>

      <p className="mt-3 text-center text-xs font-medium text-emerald-200/60">
        Kurmi Local Government Area · Taraba State
      </p>
    </div>
  );
}
