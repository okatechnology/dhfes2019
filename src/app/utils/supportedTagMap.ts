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
  ramen: ['らーめん', '#a2A'],
  whatasoda: ['神', '#a0B'],
  test: ['テスト', '#134'],
  okatechnology: ['たいやき', '#800'],
  waowao: ['waowao', '#150'],
});

export const AllTagKeyList = Object.keys(TagMap) as OneOfTagKey[];

export default TagMap;
