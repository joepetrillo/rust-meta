"use client";

import { useState } from "react";
import { boom } from "@/lib/data";
import CalculatorItem from "@/components/CalculatorItem";
import Image from "next/image";

type Cost = Record<string, number> | null;

function toTitleCase(str: string) {
  return str
    .replace(/^[-_]*(.)/, (_, c) => c.toUpperCase()) // initial char (after -/_)
    .replace(/[-_]+(.)/g, (_, c) => " " + c.toUpperCase()); // first char after each -/_
}

export default function Calculator() {
  const [totalCost, setTotalCost] = useState<Cost>(null);

  return (
    <>
      <h1 className="mb-10 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Raid Calculator
      </h1>

      <div className="mb-10 grid auto-rows-fr grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {boom.map((item) => {
          return (
            <CalculatorItem
              item={item}
              totalCost={totalCost}
              setTotalCost={setTotalCost}
              key={item.name}
            />
          );
        })}
      </div>

      <h3 className="mb-5 scroll-m-20 text-2xl font-semibold tracking-tight">
        Items Required
      </h3>

      {totalCost !== null ? (
        <div className="grid auto-rows-fr grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {Object.entries(totalCost).map(([key, value]) => {
            return (
              <div
                key={key}
                className="flex flex-col items-center justify-center gap-2 rounded-lg border p-3 text-center dark:border-slate-700 dark:bg-slate-800"
              >
                <Image
                  src={`/crafting/${key}.png`}
                  width={50}
                  height={50}
                  alt={key}
                />
                <span>{toTitleCase(key)}</span>
                <span>{value}</span>
              </div>
            );
          })}
        </div>
      ) : (
        <p>Nothing has been added to calculate</p>
      )}
    </>
  );
}
