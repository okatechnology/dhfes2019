export interface RoomItem {
  name: string;
  description?: string;
  rect: MapRect;
  point: MapPoint;
}

const createRoomMap = <T extends string>(input: Record<T, RoomItem>) => input;

const RoomMap = createRoomMap({
  E01: { name: 'E01', rect: { bottom: 0, left: 0, right: 0, top: 0 }, point: { left: 0, top: 0 } },
  E02: { name: 'E02', rect: { bottom: 0, left: 0, right: 0, top: 0 }, point: { left: 0, top: 0 } },
  E03_E04: { name: 'E03 E04', rect: { bottom: 0, left: 0, right: 0, top: 0 }, point: { left: 0, top: 0 } },
  E05: { name: 'E05', rect: { bottom: 0, left: 0, right: 0, top: 0 }, point: { left: 0, top: 0 } },
  E06: { name: 'E06', rect: { bottom: 0, left: 0, right: 0, top: 0 }, point: { left: 0, top: 0 } },
  E07: { name: 'E07', rect: { bottom: 0, left: 0, right: 0, top: 0 }, point: { left: 0, top: 0 } },
  E08: { name: 'E08', rect: { bottom: 0, left: 0, right: 0, top: 0 }, point: { left: 0, top: 0 } },
  E09: { name: 'E09', rect: { bottom: 0, left: 0, right: 0, top: 0 }, point: { left: 0, top: 0 } },
  E10: { name: 'E10', rect: { bottom: 0, left: 0, right: 0, top: 0 }, point: { left: 0, top: 0 } },
  E11: { name: 'E11', rect: { bottom: 0, left: 0, right: 0, top: 0 }, point: { left: 0, top: 0 } },
  E12: { name: 'E12', rect: { bottom: 0, left: 0, right: 0, top: 0 }, point: { left: 0, top: 0 } },
  E13: { name: 'E13', rect: { bottom: 0, left: 0, right: 0, top: 0 }, point: { left: 0, top: 0 } },
  E14: { name: 'E14', rect: { bottom: 0, left: 0, right: 0, top: 0 }, point: { left: 0, top: 0 } },
  E15_E16: { name: 'E15 E16', rect: { bottom: 0, left: 0, right: 0, top: 0 }, point: { left: 0, top: 0 } },
  E17: { name: 'E17', rect: { bottom: 0, left: 0, right: 0, top: 0 }, point: { left: 0, top: 0 } },
  W01: { name: 'W01', rect: { bottom: 0, left: 0, right: 0, top: 0 }, point: { left: 0, top: 0 } },
  W02: { name: 'W02', rect: { bottom: 0, left: 0, right: 0, top: 0 }, point: { left: 0, top: 0 } },
  W03: { name: 'W03', rect: { bottom: 0, left: 0, right: 0, top: 0 }, point: { left: 0, top: 0 } },
  W04: { name: 'W04', rect: { bottom: 0, left: 0, right: 0, top: 0 }, point: { left: 0, top: 0 } },
  W05: { name: 'W05', rect: { bottom: 0, left: 0, right: 0, top: 0 }, point: { left: 0, top: 0 } },
  W06: { name: 'W06', rect: { bottom: 0, left: 0, right: 0, top: 0 }, point: { left: 0, top: 0 } },
  W07: { name: 'W07', rect: { bottom: 0, left: 0, right: 0, top: 0 }, point: { left: 0, top: 0 } },
  W08: { name: 'W08', rect: { bottom: 0, left: 0, right: 0, top: 0 }, point: { left: 0, top: 0 } },
  cafeteria: { name: 'カフェテリア', rect: { bottom: 0, left: 0, right: 0, top: 0 }, point: { left: 0, top: 0 } },
  hall: { name: '駿河台ホール', rect: { bottom: 0, left: 0, right: 0, top: 0 }, point: { left: 0, top: 0 } },
});

export default RoomMap;
