import ahdbCycles from '@/ahdb-data/cycles.json';
import ahdbPacks from '@/ahdb-data/packs.json';
import { AHDBCycle } from './types/ahdb-data';
import { Cycle, Pack } from './types/the-gathering';

export function getCycles(): Cycle[] {
  const cycleMap = new Map<string, Cycle>(
    ahdbCycles.map((x: AHDBCycle) => [
      x.code,
      { name: x.name, packs: [], position: x.position },
    ]),
  );

  for (const ahdbPack of ahdbPacks) {
    const pack: Pack = { name: ahdbPack.name };
    const cycle = cycleMap.get(ahdbPack.cycle_code);
    cycle?.packs.push(pack);
  }

  return [...cycleMap.values()];
}
