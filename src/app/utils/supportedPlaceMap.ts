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
  e01: '',
  w01: '',
});

export default placeMap;
