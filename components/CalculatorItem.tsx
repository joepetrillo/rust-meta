"use client";

import Image from "next/image";
import { Input } from "@/components/ui/Input";
import { Minus, Plus } from "lucide-react";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";

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

interface CalculatorItemProps {
  item: {
    name: string;
    cost: Cost;
  };
  setTotalCost: Dispatch<SetStateAction<Cost | null>>;
}

// TODO
// consider that amount could go up or down by any amount (typing directly into input or using buttons, etc)
// figure out addiiton and subtraction (remove from state when 0 if subtracting)

export default function CalculatorItem({
  item,
  setTotalCost,
}: CalculatorItemProps) {
  const [amount, setAmount] = useState(0);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const newAmount = Number(e.target.value.replace(/[^0-9]/, ""));

    if (typeof newAmount === "number") {
      setAmount(newAmount);
      setTotalCost(item.cost);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-lg border p-3 text-center dark:border-slate-700 dark:bg-slate-800">
      <Image
        src={`/boom/${item.name.toLowerCase().replaceAll(" ", "_")}.png`}
        width={75}
        height={75}
        alt={`${item.name}`}
      />
      <span className="font-medium">{item.name}</span>
      <div className="flex items-center gap-4">
        <Minus
          className="cursor-pointer touch-none select-none dark:text-slate-400"
          onClick={() => amount > 0 && setAmount((oldAmount) => oldAmount - 1)}
        />
        <Input
          value={amount}
          onChange={handleChange}
          onPaste={(e) => e.preventDefault()}
          className="w-16 border text-center dark:border-slate-700 dark:bg-slate-900"
        />
        <Plus
          className="cursor-pointer touch-none select-none dark:text-slate-400"
          onClick={() => setAmount((oldAmount) => oldAmount + 1)}
        />
      </div>
    </div>
  );
}
