// arkhamdb-json-data

export type AHDBCycle = {
  code: string;
  name: string;
  position: number;
  size: number;
};

export type AHDBPack = {
  cgdb_id?: number;
  code: string;
  cycle_code: string;
  date_release: string | null;
  name: string;
  position: number;
  size: number;
};
