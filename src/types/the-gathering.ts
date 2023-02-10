export type Pack = {
  name: string;
};

export type Cycle = {
  name: string;
  packs: Pack[];
  position: number;
};
