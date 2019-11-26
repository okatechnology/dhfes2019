interface PlaceItem {
  name: string;
  position: string;
}

const createPlaceMap = <T extends Record<string, string>>(input: T) => {
  return Object.entries(input).reduce<Record<string, PlaceItem>>((acc, [name, position]) => {
    acc[name] = { name, position };
    return acc;
  }, {}) as Record<keyof T, PlaceItem>;
};

const placeMap = createPlaceMap({
  E01: '',
  E02: '',
  'E03 E04': '',
  E05: '',
  E06: '',
  E07: '',
  E08: '',
  E09: '',
  E10: '',
  E11: '',
  E12: '',
  E13: '',
  E14: '',
  'E15 E16': '',
  E17: '',
  W01: '',
  W02: '',
  W03: '',
  W04: '',
  W05: '',
  W06: '',
  W07: '',
  W08: '',
  カフェテリア: '',
  駿河台ホール: '',
});

export default placeMap;
