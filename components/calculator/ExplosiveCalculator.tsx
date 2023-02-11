"use client";

import { useState } from "react";
import { explosives, ResourceCost } from "@/lib/data";
import ExplosiveInput from "@/components/calculator/ExplosiveInput";
import Resources from "@/components/calculator/Resources";

export default function ExplosiveCalculator() {
  const [resourceCost, setResourceCost] = useState<ResourceCost>({
    sulfur: 0,
    charcoal: 0,
    frags: 0,
    low_grade: 0,
    cloth: 0,
    stone: 0,
    pipes: 0,
    tech_trash: 0,
    rope: 0,
  });

  return (
    <div>
      <div className="mb-10 grid auto-rows-fr grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {Object.entries(explosives).map(([key, explosive]) => {
          return (
            <ExplosiveInput
              explosive={explosive}
              resourceCost={resourceCost}
              setResourceCost={setResourceCost}
              id={key}
              key={key}
            />
          );
        })}
      </div>
      <Resources cost={resourceCost} />
    </div>
  );
}
