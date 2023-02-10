import { getCycles } from '@/cycles';
import { Cycle, Pack } from '@/types/the-gathering';

const cycles = getCycles();

export default function Home() {
  return (
    <main>
      <ul>{cycles.sort((a, b) => a.position - b.position).map(mapCycle)}</ul>
    </main>
  );
}

function mapCycle(cycle: Cycle, index0: number) {
  console.log(`Mapping cycle ${JSON.stringify(cycle, undefined, 2)}`);
  return cycle.packs.map((pack: Pack, index1: number) => (
    <li key={`${index0}${index1}`}>
      {cycle.name} - {pack.name}
    </li>
  ));
}
