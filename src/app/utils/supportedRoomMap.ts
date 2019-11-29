export interface RoomItem {
  name: string;
  rect: MapRect;
  point: MapPoint;
}

const createRoomMap = <T extends string>(input: Record<T, RoomItem>) => input;

const E1234789 = { left: 40, right: 20, top: 0, bottom: 40 };
const E56_10_11_14 = { left: 60, right: 0, top: 0, bottom: 40 };
const E12_13_15_16_17 = { left: 60, right: 0, top: 30, bottom: 20 };
const CC = { left: 15, right: 45, top: 0, bottom: 40 };
const W = { left: 0, right: 60, top: 10, bottom: 30 };
const Hall = { left: 0, right: 50, top: 40, bottom: 0 };

const RoomMap = createRoomMap({
  E01: { name: 'E01', rect: E1234789, point: { left: 57.5, top: 5 } },
  E02: { name: 'E02', rect: E1234789, point: { left: 63, top: 5 } },
  E03_E04: { name: 'E03 E04', rect: E1234789, point: { left: 70, top: 5 } },
  E05: { name: 'E05', rect: E56_10_11_14, point: { left: 80.5, top: 5 } },
  E06: { name: 'E06', rect: E56_10_11_14, point: { left: 86, top: 5 } },
  E07: { name: 'E07', rect: E1234789, point: { left: 58, top: 22 } },
  E08: { name: 'E08', rect: E1234789, point: { left: 58, top: 32 } },
  E09: { name: 'E09', rect: E1234789, point: { left: 68, top: 27 } },
  E10: { name: 'E10', rect: E56_10_11_14, point: { left: 79, top: 22 } },
  E11: { name: 'E11', rect: E56_10_11_14, point: { left: 79, top: 32 } },
  E12: { name: 'E12', rect: E12_13_15_16_17, point: { left: 79, top: 42 } },
  E13: { name: 'E13', rect: E12_13_15_16_17, point: { left: 79, top: 55 } },
  E14: { name: 'E14', rect: E56_10_11_14, point: { left: 93, top: 15 } },
  E15_E16: { name: 'E15 E16', rect: E12_13_15_16_17, point: { left: 93, top: 32 } },
  E17: { name: 'E17', rect: E12_13_15_16_17, point: { left: 93, top: 60 } },
  W01: { name: 'W01', rect: W, point: { left: 7, top: 22 } },
  W02: { name: 'W02', rect: W, point: { left: 7, top: 32 } },
  W03: { name: 'W03', rect: W, point: { left: 7, top: 46 } },
  W04: { name: 'W04', rect: { bottom: 0, left: 0, right: 30, top: 10 }, point: { left: 7, top: 60 } },
  W05: { name: 'W05', rect: { bottom: 0, left: 0, right: 30, top: 0 }, point: { left: 0, top: 0 } },
  W06: { name: 'W06', rect: { bottom: 0, left: 0, right: 30, top: 0 }, point: { left: 0, top: 0 } },
  W07: { name: 'W07', rect: { bottom: 0, left: 0, right: 30, top: 0 }, point: { left: 0, top: 0 } },
  W08: { name: 'W08', rect: { bottom: 0, left: 0, right: 30, top: 0 }, point: { left: 0, top: 0 } },
  cafeteria: { name: 'カフェテリア', rect: CC, point: { left: 22.5, top: 32 } },
  hall: { name: '駿河台ホール', rect: Hall, point: { left: 20, top: 80 } },
  careerCenter: { name: 'キャリア\nセンター', rect: CC, point: { left: 36, top: 22 } },
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
