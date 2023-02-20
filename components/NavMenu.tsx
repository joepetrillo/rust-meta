"use client";

import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/NavigationMenu";
import Link from "next/link";

const raiding: { title: string; href: string; description: string }[] = [
  {
    title: "Explosive Calculator",
    href: "/raiding/calculator/explosives",
    description: "Calculate the cost of crafting explosives.",
  },
  {
    title: "Structure Calculator",
    href: "/raiding/calculator/structures",
    description:
      "Calculate the cost of crafting the recommended explosive combination for raidable structures.",
  },
  {
    title: "Raid Cost Table",
    href: "/raiding/table",
    description:
      "A complete table containing the cost to raid any item with every explosive.",
  },
];

const building: { title: string; href: string; description: string }[] = [
  {
    title: "Bunkers",
    href: "/building/bunkers",
    description: "Learn how to build bunkers.",
  },
  {
    title: "Base Designs",
    href: "/building/designs",
    description: "Explore popular base designs.",
  },
];

export default function NavMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Raiding</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {raiding.map((tool) => (
                <ListItem key={tool.title} title={tool.title} href={tool.href}>
                  {tool.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Building</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {building.map((tool) => (
                <ListItem key={tool.title} title={tool.title} href={tool.href}>
                  {tool.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link>
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <Link href={href} passHref legacyBehavior>
        <NavigationMenuLink
          ref={ref}
          title={title}
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-slate-700 dark:focus:bg-slate-700"
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="text-sm leading-snug text-slate-500 line-clamp-2 dark:text-slate-400">
            {children}
          </p>
        </NavigationMenuLink>
      </Link>
    </li>
  );
});
ListItem.displayName = "ListItem";
