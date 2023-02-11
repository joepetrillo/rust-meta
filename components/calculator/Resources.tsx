import { ResourceCost } from "@/lib/data";
import { toTitleCase } from "@/lib/utils";
import Image from "next/image";

export default function Resources({
  cost,
  className,
}: {
  cost: ResourceCost;
  className?: string;
}) {
  const active = Object.entries(cost)
    .map((arr) => arr as [keyof ResourceCost, number])
    .filter(([, value]) => value > 0)
    .sort((a, b) => b[1] - a[1]);

  return (
    <div className={className}>
      <h3 className="mb-5 scroll-m-20 text-2xl font-semibold tracking-tight">
        Resources Required
      </h3>
      {active.length ? (
        <div className="grid auto-rows-fr grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-8">
          {active.map(([key, value]) => {
            return (
              <div
                key={key}
                className="flex flex-col items-center justify-between gap-2 rounded-lg border p-3 text-center dark:border-slate-700 dark:bg-slate-800"
              >
                <Image
                  src={`/resource/${key}.png`}
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
    </div>
  );
}
