interface TagItem {
  name: string;
  color: string;
}

const createTagMap = <T extends Record<string, [string, string]>>(input: T) => {
  return Object.entries(input).reduce<Record<string, TagItem>>((acc, [key, [name, color]]) => {
    acc[key] = { name, color };
    return acc;
  }, {}) as Record<keyof T, TagItem>;
};

const TagMap = createTagMap({
  ramen: ['', '#FFAF33'],
  whatasoda: ['', '#DFB97F'],
  test: ['', '#134'],
  okatechnology: ['okatechnology', '#804d00'],
  waowao: ['waowao', '#120580'],
});

export const AllTagKeyList = Object.keys(TagMap) as OneOfTagKey[];

export default TagMap;
