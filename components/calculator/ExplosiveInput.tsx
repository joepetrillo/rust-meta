"use client";

import Image from "next/image";
import { Minus, Plus } from "lucide-react";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { Input } from "@/components/ui/Input";
import type { Explosive, ResourceCost } from "@/lib/data";

type ExplosiveInputProps = {
  explosive: Explosive;
  resourceCost: ResourceCost;
  setResourceCost: Dispatch<SetStateAction<ResourceCost>>;
  id: string;
};

export default function ExplosiveInput({
  explosive,
  resourceCost,
  setResourceCost,
  id,
}: ExplosiveInputProps) {
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
    const newResourceCost = { ...resourceCost };

    Object.entries(explosive.craftCost).forEach((arr) => {
      const [key, value] = arr as [keyof ResourceCost, number];
      newResourceCost[key] = (newResourceCost[key] ?? 0) + value * count;
    });

    setResourceCost(newResourceCost);
    setAmount(newAmount);
  }

  function handleDecremenent(count: number) {
    const newAmount = amount - count;
    const newResourceCost = { ...resourceCost };

    if (newAmount >= 0) {
      Object.entries(explosive.craftCost).forEach((arr) => {
        const [key, value] = arr as [keyof ResourceCost, number];
        newResourceCost[key] = newResourceCost[key] - value * count;
      });

      setResourceCost(newResourceCost);
      setAmount(newAmount);
    }
  }

  return (
    <div className="flex flex-col items-center justify-between gap-4 rounded-lg border p-3 text-center dark:border-slate-700 dark:bg-slate-800">
      <Image
        src={`/explosive/${id}.png`}
        width={65}
        height={65}
        alt={explosive.name}
      />
      <span>{explosive.name}</span>
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
