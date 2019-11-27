interface TagItem {
  name: string;
  color: string;
}

const createTagMap = <T extends Record<string, string>>(input: T) => {
  return Object.entries(input).reduce<Record<string, TagItem>>((acc, [name, color]) => {
    acc[name] = { name, color };
    return acc;
  }, {}) as Record<keyof T, TagItem>;
};

const TagMap = createTagMap({
  ramen: '#FFAF33',
  whatasoda: '#DFB97F',
  ['てすと']: '#134',
  okatechnology: '#804d00',
  waowao: '#120580',
});

export default TagMap;
