export type ResourceCost = {
  sulfur: number;
  charcoal: number;
  frags: number;
  low_grade: number;
  cloth: number;
  stone: number;
  pipes: number;
  tech_trash: number;
  rope: number;
};

export type ExplosiveCost = {
  rocket: number;
  c4: number;
  satchel: number;
  explosive_ammo: number;
  beancan_grenade: number;
  incendiary_rocket: number;
  high_velocity_rocket: number;
  handmade_shell: number;
};

class ExplosiveItem {
  constructor(
    public name: string,
    public craftCost: {
      sulfur: number;
      charcoal: number;
    } & Partial<Record<keyof ResourceCost, number>>
  ) {
    this.name = name;
    this.craftCost = craftCost;
  }
}

export type Explosive = ExplosiveItem;

const rocket = new ExplosiveItem("Rocket", {
  sulfur: 1400,
  charcoal: 1950,
  frags: 100,
  low_grade: 30,
  pipes: 2,
});
const c4 = new ExplosiveItem("C4", {
  sulfur: 2200,
  charcoal: 3000,
  frags: 200,
  low_grade: 60,
  cloth: 5,
  tech_trash: 2,
});
const satchel = new ExplosiveItem("Satchel", {
  sulfur: 480,
  charcoal: 720,
  frags: 80,
  cloth: 10,
  rope: 1,
});
const explosive_ammo = new ExplosiveItem("Explosive Ammo", {
  sulfur: 25,
  charcoal: 30,
  frags: 5,
});
const beancan_grenade = new ExplosiveItem("Beancan Grenade", {
  sulfur: 120,
  charcoal: 180,
  frags: 20,
});
const incendiary_rocket = new ExplosiveItem("Incendiary Rocket", {
  sulfur: 610,
  charcoal: 900,
  frags: 10,
  low_grade: 253,
  pipes: 2,
});
const high_velocity_rocket = new ExplosiveItem("High Velocity Rocket", {
  sulfur: 200,
  charcoal: 300,
  pipes: 1,
});
const handmade_shell = new ExplosiveItem("Handmade Shell", {
  sulfur: 5,
  charcoal: 8,
  stone: 3,
});

export const explosives = {
  rocket,
  c4,
  satchel,
  explosive_ammo,
  beancan_grenade,
  incendiary_rocket,
  high_velocity_rocket,
  handmade_shell,
};

type RequireAtLeastOne<T> = {
  [K in keyof T]-?: Required<Pick<T, K>> &
    Partial<Pick<T, Exclude<keyof T, K>>>;
}[keyof T];

class RaidableItem {
  constructor(
    public name: string,
    public raidCost: RequireAtLeastOne<ExplosiveCost>
  ) {
    this.name = name;
    this.raidCost = raidCost;
  }
}

export type Raidable = RaidableItem;

const wooden_wall = new RaidableItem("Wooden Wall", {
  rocket: 1,
  explosive_ammo: 5,
});
const stone_wall = new RaidableItem("Stone Wall", {
  rocket: 4,
});
const metal_wall = new RaidableItem("Metal Wall", {
  rocket: 8,
});
const armored_wall = new RaidableItem("Armored Wall", {
  rocket: 15,
});
const wooden_door = new RaidableItem("Wooden Door", {
  explosive_ammo: 18,
});
const sheet_metal_door = new RaidableItem("Sheet Metal Door", {
  rocket: 1,
  explosive_ammo: 8,
});
const garage_door = new RaidableItem("Garage Door", {
  rocket: 3,
});
const armored_door = new RaidableItem("Armored Door", { c4: 2 });
const ladder_hatch = new RaidableItem("Ladder Hatch", {
  rocket: 1,
  explosive_ammo: 8,
});
const wooden_high_external = new RaidableItem("Wooden High External", {
  incendiary_rocket: 2,
});
const stone_high_external = new RaidableItem("Stone High External", {
  rocket: 4,
});
const tool_cupboard = new RaidableItem("Tool Cupboard", {
  explosive_ammo: 9,
});

export const raidables = {
  wooden_wall,
  stone_wall,
  metal_wall,
  armored_wall,
  wooden_door,
  sheet_metal_door,
  garage_door,
  armored_door,
  ladder_hatch,
  wooden_high_external,
  stone_high_external,
  tool_cupboard,
};
