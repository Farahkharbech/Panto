"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import Image from "next/image";

export default function ColorSelector() {
  const [activeId, setActiveId] = useState(1);

  const colors = [
    { id: 1, color: "#F47E00" }, // Orange
    { id: 2, color: "#00D9C9" }, // Teal
    { id: 3, color: "#7C7C7C" }, // Gray
  ];

  return (
    <div className="relative inline-flex flex-col items-center">
      {/* Union Background Image */}
      <div
        className="absolute"
        style={{
          width: "112px",
          height: "67px",
          top: "0px",
          left: "0px",
        }}
      >
        <Image
          src="/images/Union.png"
          alt=""
          width={112}
          height={67}
          className="w-full h-full"
        />
      </div>

      {/* Color circles - positioned on top of Union */}
      <div 
        className="relative flex items-center justify-center gap-2"
        style={{
          width: "112px",
          height: "48px",
          paddingTop: "12px", // Center circles vertically
        }}
      >
        {colors.map((item) => {
          const isActive = activeId === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setActiveId(item.id)}
              className="relative flex items-center justify-center transition-all duration-200"
              style={{
                width: "24px",
                height: "24px",
                borderRadius: "50%",
                background: item.color,
                border: "2px solid #FFFFFF",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                transform: "rotate(180deg)",
              }}
              aria-label={`Select ${item.color} theme`}
            >
              {isActive && (
                <Check 
                  className="text-white"
                  style={{
                    width: "18px",
                    height: "18px",
                    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                    transform: "rotate(180deg)",
                  }}
                  strokeWidth={3}
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}