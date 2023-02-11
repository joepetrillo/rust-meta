"use client";

import Image from "next/image";
import { Minus, Plus } from "lucide-react";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { Input } from "@/components/ui/Input";
import { explosives, ExplosiveCost, Raidable, ResourceCost } from "@/lib/data";

type RaidableInputProps = {
  raidable: Raidable;
  explosiveCost: ExplosiveCost;
  setExplosiveCost: Dispatch<SetStateAction<ExplosiveCost>>;
  resourceCost: ResourceCost;
  setResourceCost: Dispatch<SetStateAction<ResourceCost>>;
  id: string;
};

export default function RaidableInput({
  raidable,
  explosiveCost,
  setExplosiveCost,
  resourceCost,
  setResourceCost,
  id,
}: RaidableInputProps) {
  const [amount, setAmount] = useState(0);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const newAmount = Number(e.target.value.replace(/[^0-9]/, ""));

    if (typeof newAmount === "number") {
      const difference = newAmount - amount;

      if (difference < 0) {
        handleDecremenent(Math.abs(difference));
      } else if (difference > 0) {
        handleIncrement(Math.abs(difference));
      }
    }
  }

  function handleIncrement(count: number) {
    const newAmount = amount + count;
    const newExplosiveCost = { ...explosiveCost };
    const newResourceCost = { ...resourceCost };

    // update explosive cost
    Object.entries(raidable.raidCost).forEach((arr) => {
      const [explosive, value] = arr as [keyof ExplosiveCost, number];
      newExplosiveCost[explosive] =
        (newExplosiveCost[explosive] ?? 0) + value * count;
      // update resource cost
      Object.entries(explosives[explosive].craftCost).forEach((arr) => {
        const [resource, value] = arr as [keyof ResourceCost, number];
        newResourceCost[resource] =
          (newResourceCost[resource] ?? 0) + value * count;
      });
    });

    setExplosiveCost(newExplosiveCost);
    setResourceCost(newResourceCost);
    setAmount(newAmount);
  }

  function handleDecremenent(count: number) {
    const newAmount = amount - count;
    const newExplosiveCost = { ...explosiveCost };
    const newResourceCost = { ...resourceCost };

    if (newAmount >= 0) {
      // update explosive cost
      Object.entries(raidable.raidCost).forEach((arr) => {
        const [explosive, value] = arr as [keyof ExplosiveCost, number];
        newExplosiveCost[explosive] =
          newExplosiveCost[explosive] - value * count;
        // update resource cost
        Object.entries(explosives[explosive].craftCost).forEach((arr) => {
          const [resource, value] = arr as [keyof ResourceCost, number];
          newResourceCost[resource] = newResourceCost[resource] - value * count;
        });
      });

      setExplosiveCost(newExplosiveCost);
      setResourceCost(newResourceCost);
      setAmount(newAmount);
    }
  }

  return (
    <div className="flex flex-col items-center justify-between gap-4 rounded-lg border p-3 text-center dark:border-slate-700 dark:bg-slate-800">
      <Image
        src={`/raidable/${id}.png`}
        width={65}
        height={65}
        alt={raidable.name}
      />
      <span>{raidable.name}</span>
      <div className="flex items-center gap-4">
        <Minus
          className="cursor-pointer touch-none select-none dark:text-slate-400 dark:hover:text-slate-50"
          onClick={() => handleDecremenent(1)}
        />
        <Input
          value={amount}
          onChange={handleChange}
          onPaste={(e) => e.preventDefault()}
          className="w-16 border text-center dark:border-slate-700 dark:bg-slate-900"
        />
        <Plus
          className="cursor-pointer touch-none select-none dark:text-slate-400 dark:hover:text-slate-50"
          onClick={() => handleIncrement(1)}
        />
      </div>
    </div>
  );
}
