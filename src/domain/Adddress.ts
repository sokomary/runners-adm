interface Address {
  name: string;
  latitude: number;
  longitude: number;
}

const getCenter = (numbers: number[]) =>
  numbers.reduce((p, c) => c + p) / numbers.length;

const getMapCenter = (addresses: Address[]) => [
  getCenter(addresses.map((a) => a.latitude)),
  getCenter(addresses.map((a) => a.longitude)),
];

export { getMapCenter };

export type { Address };
