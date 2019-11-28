export interface RoomItem {
  name: string;
  rect: MapRect;
  point: MapPoint;
}

const createRoomMap = <T extends string>(input: Record<T, RoomItem>) => input;

const RoomMap = createRoomMap({
  E01: { name: 'E01', rect: { bottom: 0, left: 20, right: 10, top: -30 }, point: { left: 57.5, top: 5 } },
  E02: { name: 'E02', rect: { bottom: 0, left: 25, right: 5, top: -30 }, point: { left: 63, top: 5 } },
  E03_E04: { name: 'E03 E04', rect: { bottom: 0, left: 30, right: 0, top: -30 }, point: { left: 69, top: 5 } },
  E05: { name: 'E05', rect: { bottom: 0, left: 30, right: 0, top: -30 }, point: { left: 80.5, top: 5 } },
  E06: { name: 'E06', rect: { bottom: 0, left: 30, right: 0, top: -30 }, point: { left: 86, top: 5 } },
  E07: { name: 'E07', rect: { bottom: 0, left: 20, right: 10, top: -20 }, point: { left: 58, top: 22 } },
  E08: { name: 'E08', rect: { bottom: 0, left: 20, right: 10, top: -10 }, point: { left: 58, top: 32 } },
  E09: { name: 'E09', rect: { bottom: 0, left: 25, right: 5, top: -20 }, point: { left: 68, top: 27 } },
  E10: { name: 'E10', rect: { bottom: 0, left: 30, right: 0, top: -20 }, point: { left: 79, top: 22 } },
  E11: { name: 'E11', rect: { bottom: 0, left: 30, right: 0, top: -10 }, point: { left: 79, top: 32 } },
  E12: { name: 'E12', rect: { bottom: 0, left: 30, right: 0, top: 0 }, point: { left: 79, top: 42 } },
  E13: { name: 'E13', rect: { bottom: 0, left: 30, right: 0, top: 10 }, point: { left: 79, top: 55 } },
  E14: { name: 'E14', rect: { bottom: 0, left: 30, right: 0, top: -30 }, point: { left: 93, top: 15 } },
  E15_E16: { name: 'E15 E16', rect: { bottom: 0, left: 30, right: 0, top: -10 }, point: { left: 93, top: 32 } },
  E17: { name: 'E17', rect: { bottom: 0, left: 30, right: 0, top: 10 }, point: { left: 93, top: 60 } },
  W01: { name: 'W01', rect: { bottom: 0, left: 0, right: 30, top: -20 }, point: { left: 7, top: 22 } },
  W02: { name: 'W02', rect: { bottom: 0, left: 0, right: 30, top: -15 }, point: { left: 7, top: 32 } },
  W03: { name: 'W03', rect: { bottom: 0, left: 0, right: 30, top: 0 }, point: { left: 7, top: 42 } },
  W04: { name: 'W04', rect: { bottom: 0, left: 0, right: 30, top: 10 }, point: { left: 7, top: 60 } },
  W05: { name: 'W05', rect: { bottom: 0, left: 0, right: 30, top: 0 }, point: { left: 0, top: 0 } },
  W06: { name: 'W06', rect: { bottom: 0, left: 0, right: 30, top: 0 }, point: { left: 0, top: 0 } },
  W07: { name: 'W07', rect: { bottom: 0, left: 0, right: 30, top: 0 }, point: { left: 0, top: 0 } },
  W08: { name: 'W08', rect: { bottom: 0, left: 0, right: 30, top: 0 }, point: { left: 0, top: 0 } },
  cafeteria: {
    name: 'カフェテリア',
    rect: { bottom: 0, left: 5, right: 25, top: -10 },
    point: { left: 22.5, top: 32 },
  },
  hall: { name: '駿河台ホール', rect: { bottom: 0, left: 0, right: 30, top: 10 }, point: { left: 20, top: 80 } },
  careerCenter: {
    name: 'キャリア\nセンター',
    rect: { bottom: 0, left: 5, right: 25, top: -20 },
    point: { left: 36, top: 22 },
  },
});

// const checkRect = () => {
//   const RoomMaps = Object.entries(RoomMap) as [keyof typeof RoomMap, RoomItem][];
//   RoomMaps.forEach(([_, roomItem]) => {
//     const rect = roomItem.rect;
//     if (rect.left + rect.right !== 30) {
//       console.log('width error in ' + roomItem.name);
//     }
//   });
// };
// checkRect();

export default RoomMap;
