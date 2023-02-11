import ExplosiveCalculator from "@/components/calculator/ExplosiveCalculator";
import RaidableCalculator from "@/components/calculator/RaidableCalculator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";

export default function Calculator() {
  return (
    <>
      <h1 className="mb-10 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Raid Calculator
      </h1>

      <Tabs defaultValue="explosives">
        <TabsList className="mb-10 w-full border dark:border-slate-700 dark:bg-slate-800">
          <TabsTrigger value="explosives" className="w-full">
            Explosives
          </TabsTrigger>
          <TabsTrigger value="raidables" className="w-full">
            Structures
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value="explosives"
          className="m-0 rounded-none border-none p-0"
        >
          <ExplosiveCalculator />
        </TabsContent>
        <TabsContent
          value="raidables"
          className="m-0 rounded-none border-none p-0"
        >
          <RaidableCalculator />
        </TabsContent>
      </Tabs>
    </>
  );
}
