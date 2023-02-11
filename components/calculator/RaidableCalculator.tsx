"use client";

import { useState } from "react";
import { raidables, ExplosiveCost, ResourceCost } from "@/lib/data";
import RaidableInput from "@/components/calculator/RaidableInput";
import Resources from "@/components/calculator/Resources";
import Explosives from "@/components/calculator/Explosives";

export default function RaidableCalculator() {
  const [explosiveCost, setExplosiveCost] = useState<ExplosiveCost>({
    rocket: 0,
    c4: 0,
    satchel: 0,
    explosive_ammo: 0,
    beancan_grenade: 0,
    incendiary_rocket: 0,
    high_velocity_rocket: 0,
    handmade_shell: 0,
  });

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
        {Object.entries(raidables).map(([key, raidable]) => {
          return (
            <RaidableInput
              raidable={raidable}
              explosiveCost={explosiveCost}
              setExplosiveCost={setExplosiveCost}
              resourceCost={resourceCost}
              setResourceCost={setResourceCost}
              id={key}
              key={key}
            />
          );
        })}
      </div>
      <Explosives cost={explosiveCost} className="mb-10" />
      <Resources cost={resourceCost} />
    </div>
  );
}
