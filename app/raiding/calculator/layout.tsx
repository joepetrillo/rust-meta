"use client";

import ExplosiveCalculator from "@/components/calculator/ExplosiveCalculator";
import RaidableCalculator from "@/components/calculator/RaidableCalculator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();

  return (
    <>
      {children}

      <Tabs value={pathName?.split("/")[3]}>
        <TabsList className="mb-10 w-full border dark:border-slate-700 dark:bg-slate-800">
          <Link href="/raiding/calculator/explosives" className="w-full">
            <TabsTrigger value="explosives" className="w-full">
              Explosives
            </TabsTrigger>
          </Link>
          <Link href="/raiding/calculator/structures" className="w-full">
            <TabsTrigger value="structures" className="w-full">
              Structures
            </TabsTrigger>
          </Link>
        </TabsList>
        <TabsContent
          value="explosives"
          className="m-0 rounded-none border-none p-0"
        >
          <ExplosiveCalculator />
        </TabsContent>
        <TabsContent
          value="structures"
          className="m-0 rounded-none border-none p-0"
        >
          <RaidableCalculator />
        </TabsContent>
      </Tabs>
    </>
  );
}
