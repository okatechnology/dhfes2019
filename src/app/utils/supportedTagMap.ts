export interface TagItem {
  name: string;
  color: string;
}

const createTagMap = <T extends Record<string, string>>(input: T) => {
  return Object.entries(input).reduce<Record<string, TagItem>>((acc, [name, color]) => {
    acc[name] = { name, color };
    return acc;
  }, {}) as Record<keyof T, TagItem>;
};

const TagMap = createTagMap({});

export type OneOfTagKey = keyof typeof TagMap;

export default TagMap;
