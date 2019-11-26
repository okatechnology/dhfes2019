export interface RoomItem {
  name: string;
  description?: string;
  rect: MapRect;
  point: MapPoint;
}

const createRoomMap = <T extends Record<string, Omit<RoomItem, 'name'>>>(input: T) => {
  return Object.entries(input).reduce<Record<string, RoomItem>>((acc, [name, value]) => {
    acc[name] = { name, ...value };
    return acc;
  }, {}) as Record<keyof T, RoomItem>;
};

const RoomMap = createRoomMap({
  e01: { rect: { bottom: 0, left: 0, right: 0, top: 0 }, point: { left: 0, top: 0 } },
  w01: { rect: { bottom: 0, left: 0, right: 0, top: 0 }, point: { left: 0, top: 0 } },
});

export default RoomMap;
