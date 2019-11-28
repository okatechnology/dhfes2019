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

const red = '#f00';
const blue = '#10c';
const orange = '#f80';
const green = '#1b2';
const brown = '#940';

const TagMap = createTagMap({
  movie: ['映像', orange],
  threeDCG: ['3DCG', orange],
  vr: ['VR', orange],
  animation: ['アニメ', orange],
  game: ['ゲーム', orange],
  music: ['音楽', orange],
  dance: ['ダンス', orange],
  design: ['デザイン', orange],
  idol: ['アイドル', orange],
  display: ['展示', green],
  experience: ['体験', green],
  sale: ['販売', green],
  event: ['イベント', green],
  live: ['ライブ', green],
  eat: ['飲食', green],
  classroom: ['教室', brown],
  hall: ['駿河台ホール', brown],
  cafeteria: ['カフェテリア', brown],
  day1: ['1日目', blue],
  day2: ['2日目', red],
});

export const AllTagKeyList = Object.keys(TagMap) as OneOfTagKey[];

export default TagMap;
