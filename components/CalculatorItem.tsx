"use client";

import Image from "next/image";
import { Input } from "@/components/ui/Input";
import { Minus, Plus } from "lucide-react";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";

type Cost = Record<string, number> | null;

type Explosive = {
  name: string;
  cost: Record<string, number>;
};

type CalculatorItemProps = {
  item: Explosive;
  totalCost: Cost;
  setTotalCost: Dispatch<SetStateAction<Cost>>;
};

export default function CalculatorItem({
  item,
  totalCost,
  setTotalCost,
}: CalculatorItemProps) {
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

    const newTotalCost = { ...totalCost };

    Object.entries(item.cost).forEach(([key, value]) => {
      newTotalCost[key] = (newTotalCost[key] ?? 0) + value * count;
    });

    setAmount(newAmount);
    setTotalCost(newTotalCost);
  }

  function handleDecremenent(count: number) {
    const newAmount = amount - count;

    if (newAmount >= 0 && totalCost !== null) {
      const newTotalCost = { ...totalCost };

      Object.entries(item.cost).forEach(([key, value]) => {
        newTotalCost[key] = newTotalCost[key] - value * count;
        if (newTotalCost[key] === 0) {
          delete newTotalCost[key];
        }
      });

      setAmount(newAmount);

      if (Object.values(newTotalCost).every((x) => x === 0)) {
        setTotalCost(null);
      } else {
        setTotalCost(newTotalCost);
      }
    }
  }

  return (
    <div className="flex flex-col items-center justify-between gap-4 rounded-lg border p-3 text-center dark:border-slate-700 dark:bg-slate-800">
      <Image
        src={`/boom/${item.name.toLowerCase().replaceAll(" ", "_")}.png`}
        width={65}
        height={65}
        alt={item.name}
      />
      <span>{item.name}</span>
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
