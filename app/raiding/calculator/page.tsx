"use client";

import { useState, useMemo } from "react";
import { boom, Cost } from "@/lib/data";
import CalculatorItem from "@/components/CalculatorItem";
import Image from "next/image";

function toTitleCase(str: string) {
  return str
    .replace(/^[-_]*(.)/, (_, c) => c.toUpperCase()) // initial char (after -/_)
    .replace(/[-_]+(.)/g, (_, c) => " " + c.toUpperCase()); // first char after each -/_
}

export default function Calculator() {
  const [totalCost, setTotalCost] = useState<Cost>({
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

  const active = useMemo(() => {
    return Object.entries(totalCost)
      .map((arr) => arr as [keyof Cost, number])
      .filter(([, value]) => value > 0)
      .sort((a, b) => b[1] - a[1]);
  }, [totalCost]);

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

      {active.length ? (
        <div className="grid auto-rows-fr grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {active.map(([key, value]) => {
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
