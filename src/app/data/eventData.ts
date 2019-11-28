import ramenImg from '../assets/ramen.jpg';

const EventDataList: EventItem[] = [
  {
    name: 'MontBlanc',
    description:
      '３DCGサークルのMontBlancです！学祭では作品のパネル展示、デモリールや動画作品の上映、モデルやアニメーションを３Dで色んな角度から見られるものを設置などを予定しております。 是非、お越しください！',
    tag: ['threeDCG', 'display', 'classroom', 'day1', 'day2'],
    image: ramenImg,
    room: 'E01',
  },
  {
    name: 'AniWay',
    description:
      '有志のアニメーション制作のサークルです！立ち上げたばかりなので、今回は学祭初出展となります！よろしくお願いします！',
    tag: ['animation', 'display', 'experience', 'classroom', 'day1', 'day2'],
    image: ramenImg,
    room: 'W03',
  },
  {
    name: 'タピオカカフェ',
    description: 'タピオカたっぷりのタピオカミルクティーを販売しています！ 是非お越しください！！',
    tag: ['eat', 'sale', 'cafeteria', 'day1', 'day2'],
    image: ramenImg,
    room: 'cafeteria',
  },
  {
    name: 'SmaF',
    description:
      'SmaFは軽食のお店！ ふわふわ綿菓子と、カリカリポップコーンと、カリカリポテトもあるよ~ 『お客さんがSmaFのフードを食べたあと、もっと楽しいように。^^』',
    tag: ['eat', 'sale', 'cafeteria', 'day1', 'day2'],
    image: ramenImg,
    room: 'cafeteria',
  },
  {
    name: 'WHITE COFFEE',
    description:
      '「好きなコーヒーは、わかる。好きなコーヒー豆は、わからない。」そんなあなたに試して欲しい、コーヒー豆の「好み診断」、始めました。',
    tag: ['eat', 'sale', 'cafeteria', 'day1', 'day2'],
    image: ramenImg,
    room: 'cafeteria',
  },
  {
    name: 'white Christmas!',
    description:
      '冬の月明かりが照らすのは、子供のための秘密のBar. ママお手製のからあげは、今日のためだけの裏メニュー 艶めくカクテルに溺れたら、そこは果たして夢か現か... 貴方様のご来店、心よりお待ちしています。',
    tag: ['eat', 'sale', 'cafeteria', 'day1', 'day2'],
    image: ramenImg,
    room: 'cafeteria',
  },
  {
    name: 'Baby Castella YUSHI-DANTAI-1',
    description:
      '蜂蜜入りのベビーカステラを学内で手作りしています!一年生が描いたオリジナルのイラストの紙袋と共に、どこでも座って食べられる程よい温かさと甘さのベビーカステラを６つで100円です! 試してみてはいかがですか？',
    tag: ['eat', 'sale', 'cafeteria', 'day1', 'day2'],
    image: ramenImg,
    room: 'cafeteria',
  },
  {
    name: 'デジスマ3',
    description:
      '※学部生のみ スマブラ大会を開催します！ トーナメントの他に4人制乱闘でのカジュアルイベントも企画しておりますので、興味はあるけどガチは少し…という方もぜひお越しください！ 公式アカウントはこちら！ @dhu_smash',
    tag: ['game', 'event', 'hall', 'day1'],
    image: ramenImg,
    room: 'hall',
  },
  {
    name: 'いつかきっと',
    description:
      'まだまだ社会的に認知や理解されていないLGBTQについて音楽と映像といったソフトパワーを使って他にも悩んでいる人を励ませ、共感できたらと活動しています。 当日はMVを上映します。公演時間 : 11/30(土) 13:50～14:10',
    tag: ['music', 'event', 'hall', 'day1'],
    image: ramenImg,
    room: 'hall',
  },
  {
    name: 'Sleepy Phoenix',
    description:
      'デジタルハリウッド大学有志スリーピースバンドのSleepy Pheonixです！ホールでのスケジュール一発目という事で、早い時間になりますが是非見にきてください！よろしくお願いします！ 公演時間 : 12/1(日) 11:00～11:30',
    tag: ['music', 'live', 'event', 'hall', 'day2'],
    image: ramenImg,
    room: 'hall',
  },
  {
    name: 'Left_HAND',
    description:
      'ロック・メタル・エモ・ポップからVOCALOIDやアニソンまで。様々なジャンルに挑戦し続ける軽音サークル。名前の由来は設立メンバー3人の左腕に華やかなブレスレットがあった事から。 公式アカウントはこちら！@Left_HAND_d',
    tag: ['music', 'event', 'hall', 'day1'],
    image: ramenImg,
    room: 'hall',
  },
  {
    name: 'TED.',
    description:
      '大学内でも数少ない運動系のサークルです！国籍豊かで、HipHop、アイドル、様々なジャンルを練習して披露するパフォーマンスサークルです。イベントの企画から運営まで全部自分たちで行います！ 公式アカウントはこちら！@ted_dhu',
    tag: ['dance', 'event', 'hall', 'day1'],
    image: ramenImg,
    room: 'hall',
  },
  {
    name: 'Digital Idol Concert -DIC-',
    description:
      '和楓電は学祭2日目(12/1)にアイドルフェスを開催します！入場料は無料！(1D 500円)です！デジハリでアイドルフェスが見れるのは初！？みんなで盛り上がりましょう！ 公式アカウントはこちら！@DIC_info',
    tag: ['idol', 'live', 'sale', 'hall', 'day2'],
    image: ramenImg,
    room: 'hall',
  },
  {
    name: 'バスボムワークショップ',
    description:
      '手作りバスボムのワークショップとバスボムやミニタオルの販売をします！オリジナルでおしゃれなバスボムを作ってみませんか？ワークショップは男性女性関係なく楽しめますのでぜひお越しください！',
    tag: ['experience', 'sale', 'classroom', 'day1', 'day2'],
    image: ramenImg,
    room: 'E02',
  },
  {
    name: 'aLiaZ',
    description:
      'サークルaLiaZはみんなで楽しめるパーティーゲームのプレイを生放送しております。興味がありました是非いらしてください。',
    tag: ['game', 'experience', 'classroom', 'day1', 'day2'],
    image: ramenImg,
    room: 'E13',
  },
  {
    name: '星野ゼミ',
    description:
      '星野ゼミでは、ゼミ内で作ったプロトタイプを展示しております。デジタルゲームやアナログゲーム、3Dプリンターを使用した作品、その他多彩な物に触れられます。 是非、お越しください！',
    tag: ['display', 'sale', 'classroom', 'day1', 'day2'],
    image: ramenImg,
    room: 'E17',
  },
  {
    name: '彼女との何度目かの祭り',
    description:
      '昔懐かしの縁日の出店を体験できます。休憩所も展開しているので疲れた際にお越しください。また、ショートストーリーも売っていますので休憩の際にぜひお読みください。',
    tag: ['experience', 'sale', 'classroom', 'day1', 'day2'],
    image: ramenImg,
    room: 'E07',
  },
  {
    name: '米光ゼミ',
    description:
      '卒業制作展より先に、現在制作中のゲームを展示します！また、3年生、教授を務める米光先生の制作しているゲームも展示します！ゲームが好きな方、ゲーム制作に興味のある方はぜひお越し下さい！',
    tag: ['game', 'experience', 'classroom', 'day1', 'day2'],
    image: ramenImg,
    room: 'E10',
  },
  {
    name: 'idees',
    description:
      'テープマッピング、個人製作映像を展示します！壁二面を使ったテープマッピングは必見！ 是非、お越しください！',
    tag: ['movie', 'display', 'classroom', 'day1', 'day2'],
    image: ramenImg,
    room: 'W02',
  },
  {
    name: '格闘ゲームサークル',
    description:
      '一日目はゲームキューブ祭り！「カービィのエアライド」と「あつまれ!!メイドインワリオ」、二日目は格闘ゲームとボードゲームでミニ大会を実施します！景品もあるのでぜひ参加してくださいね!!',
    tag: ['game', 'experience', 'display', 'classroom', 'day1', 'day2'],
    image: ramenImg,
    room: 'E12',
  },
  {
    name: 'デジハリ文芸サークル',
    description:
      '古本市を開催します！掘り出し物があるかも……？（一冊百円～）部誌も無料配布します！ 是非、お越しください！ 公式アカウントはこちら@bungei_dhu',
    tag: ['sale', 'classroom', 'day1', 'day2'],
    image: ramenImg,
    room: 'E06',
  },
  {
    name: 'Cre-R',
    description:
      '展示の工夫点は『空間』です。例年と違い壁に貼るのではなく天井から吊るし、壁側以外の空間も活かし中央に静止画を吊るしました。より楽しんで頂けるように静止画の裏には作品のワイヤフレームを貼りました。 是非、お越しください。',
    tag: ['threeDCG', 'display', 'classroom', 'day1', 'day2'],
    image: ramenImg,
    room: 'E03_E04',
  },
  {
    name: 'HAT.',
    description:
      '" 「 , 」は美しい" について問い、表現した展示を行います。是非、お越し下さい！公式アカウントはこちら@art_design_hat',
    tag: ['design', 'display', 'classroom', 'day1', 'day2'],
    image: ramenImg,
    room: 'E14',
  },
  {
    name: 'Hook Shot VR(梅本ゼミ)',
    description:
      '梅本ゼミフックショットVR制作チームです。卒業制作で制作しているVRゲームを展示します！架空の移動装置『フックショット』を利用して漫画や映画のようにVR空間を自由に駆け巡りましょう！',
    tag: ['vr', 'display', 'experience', 'classroom', 'day1', 'day2'],
    image: ramenImg,
    room: 'E11',
  },
  {
    name: 'shoegazes',
    description:
      'ＤＨＵにＤＪクラブがやってくる！メンバーは作曲サークルShoegazer率いる最高のＤＪ達だ！テーマは『ＭＥＭＥ』映画、アニメ、マンガ、インターネット等ジャンルの垣根を超えたブチ上がる曲が大集結！ 是非、お越しください！',
    tag: ['music', 'event', 'classroom', 'day1', 'day2'],
    image: ramenImg,
    room: 'E09',
  },
  {
    name: 'ミリタリー研究会',
    description:
      'ミリタリー研究会はデジハリにおいて一番歴史のあるサークルです！そんなミリ研では学園祭に毎年恒例の射的を行っています！そのほかにも装備・エアガンなどの展示も行いますので是非お越しください！',
    tag: ['experience', 'display', 'classroom', 'day1', 'day2'],
    image: ramenImg,
    room: 'E15_E16',
  },
  {
    name: 'G human’s',
    description:
      '新進気鋭のミステリーメーカー組織がお送りする体験型謎解きRPG 悪い魔女によって呪いをかけられ、城に閉じ込められた姫を救出する物語。 君は全ての謎と呪いを解き、姫を脱出させることができるか。',
    tag: ['experience', 'classroom', 'day1', 'day2'],
    image: ramenImg,
    room: 'E08',
  },
  {
    name: 'CsMS',
    description:
      '自由なゲーム製作サークルで、サークルメンバーたちの間の協力で毎年一本のゲームを作り、学園祭にで展示するのがメインの活動内容となります。 今年も、もちろん出展します！ 公式アカウントはこちら！@csms_games 是非、お越しください！',
    tag: ['game', 'experience', 'classroom', 'day1', 'day2'],
    image: ramenImg,
    room: 'W01',
  },
  {
    name: '8Film',
    description:
      '映像コンテンツを制作している８Filmです 企画から映像制作,マーケティングまで行なっています 今回、今まで制作してきた映像コンテンツを一挙に公開します',
    tag: ['movie', 'display', 'classroom', 'day1', 'day2'],
    image: ramenImg,
    room: 'careerCenter',
  },
  {
    name: '長田ゼミ',
    description:
      '初めまして！第9期長田ゼミです。2019年デジハリ祭で、ウォーターボトルと名刺入れを各1000円で販売します！場所は4階です。マジックショーもやる予定ですので、是非ともお立ち寄り下さい！',
    tag: ['eat', 'sale', 'event', 'cafeteria', 'day1', 'day2'],
    image: ramenImg,
    room: 'cafeteria',
  },
  {
    name: 'DHU模型倶楽部',
    description:
      'サークルメンバーの製作物に加え、学内有志の作品も展示。さらに今年8月に開催された「かんもれん(関東学生模型連合展示会)」に出展した作品も展示します。ぜひご観覧ください。',
    tag: ['display', 'classroom', 'day1', 'day2'],
    image: ramenImg,
    room: 'E05',
  },
];

const sortEvents = (key: keyof EventItem) => {
  EventDataList.sort(({ [key]: a }, { [key]: b }) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });
};
sortEvents('room');

export default EventDataList;
