type RaidItem =
  | "frags"
  | "low_grade"
  | "cloth"
  | "stone"
  | "pipes"
  | "tech_trash"
  | "rope";

export type Explosive = {
  name: string;
  cost: {
    sulfur: number;
    charcoal: number;
  } & Partial<Record<RaidItem, number>>;
};

export type Cost = {
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

export const boom: Explosive[] = [
  {
    name: "Rocket",
    cost: {
      sulfur: 1400,
      charcoal: 1950,
      frags: 100,
      low_grade: 30,
      pipes: 2,
    },
  },
  {
    name: "C4",
    cost: {
      sulfur: 2200,
      charcoal: 3000,
      frags: 200,
      low_grade: 60,
      cloth: 5,
      tech_trash: 2,
    },
  },
  {
    name: "Satchel",
    cost: {
      sulfur: 480,
      charcoal: 720,
      frags: 80,
      cloth: 10,
      rope: 1,
    },
  },
  {
    name: "Explosive Ammo",
    cost: {
      sulfur: 25,
      charcoal: 30,
      frags: 5,
    },
  },
  {
    name: "Beancan Grenade",
    cost: {
      sulfur: 120,
      charcoal: 180,
      frags: 20,
    },
  },
  {
    name: "Incendiary Rocket",
    cost: {
      sulfur: 610,
      charcoal: 900,
      frags: 10,
      low_grade: 253,
      pipes: 2,
    },
  },
  {
    name: "High Velocity Rocket",
    cost: {
      sulfur: 200,
      charcoal: 300,
      pipes: 1,
    },
  },
  {
    name: "Handmade Shell",
    cost: {
      sulfur: 5,
      charcoal: 8,
      stone: 3,
    },
  },
];
