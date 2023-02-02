"use client";

import { useState } from "react";
import { boom } from "@/lib/data";
import CalculatorItem from "@/components/CalculatorItem";

interface Cost {
  resources: {
    sulfur: number;
    charcoal: number;
    frags?: number;
    low_grade?: number;
    cloth?: number;
    stone?: number;
  };
  components?: {
    pipes?: number;
    rope?: number;
    tech_trash?: number;
  };
}

export default function Calculator() {
  const [totalCost, setTotalCost] = useState<Cost | null>(null);

  return (
    <>
      <h1 className="mb-10 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Raid Calculator
      </h1>

      <div className="grid auto-rows-fr grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 ">
        {boom.map((item) => {
          return (
            <CalculatorItem
              item={item}
              setTotalCost={setTotalCost}
              key={item.name}
            />
          );
        })}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
            Resources Required
          </h3>
        </div>
        <div>
          <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
            Components Required
          </h3>
        </div>
      </div>
    </>
  );
}
