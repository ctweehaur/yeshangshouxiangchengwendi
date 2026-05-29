/**
 * 互动古文教学平台 - 《夜上受降城闻笛》原文核心词解数据包
 */

const poemData = [
    // 第一句：回乐峰前沙似雪，
    { text: "回乐峰", py: "huí lè fēng", zh: "指回乐县附近的山峰，在今宁夏灵武一带，是当时的边防要地。", en: "Huile Peak: A strategic border mountain peak.", exam: true },
    { text: "前", py: "qián", zh: "山峰前方。", en: "in front of" },
    { text: "沙似雪", py: "shā sì xuě", zh: "大沙漠在月光照射下，洁白如雪。用冷色调极力渲染边塞环境的凄寒与空旷。", en: "sand looks like snow", exam: true },
    { text: "，", punc: true },

    // 第二句：受降城外月如霜。
    { text: "受降城", py: "shòu xiáng chéng", zh: "唐代为了防御北方突厥而修建的边防重镇。这里特指西受降城。", en: "Shouxiang City: A major border defense fortress.", exam: true },
    { text: "外", py: "wài", zh: "城墙外面。", en: "outside" },
    { text: "月如霜", py: "yuè rú shuāng", zh: "月光皎洁，铺洒在地面上就像一层寒霜。营造出边塞夜晚冰冷、孤寂的氛围。", en: "moonlight is like frost", exam: true },
    { text: "。", punc: true },

    // 第三句：不知何处吹芦管，
    { text: "不知", py: "bù zhī", zh: "不知道。增加了一种声音缥缈、无依无靠的迷茫感。", en: "not know" },
    { text: "何处", py: "hé chù", zh: "哪里、什么地方。", en: "where / which place" },
    { text: "吹", py: "chuī", zh: "吹奏。", en: "to play (wind instrument)" },
    { text: "芦管", py: "lú guǎn", zh: "中国古代一种带有簧片的管乐器，其声音极其凄凉哀怨，常用于边疆军队中表达思乡。", en: "luguan: A traditional reed pipe instrument with a mournful sound.", exam: true },
    { text: "，", punc: true },

    // 第四句：一夜征人尽望乡。
    { text: "一夜", py: "yí yè", zh: "整整一夜，通宵。形容思乡之情的漫长与难以入眠。", en: "all through the night" },
    { text: "征人", py: "zhēng rén", zh: "远征戍边的士兵。这里也包括诗人自己。", en: "soldiers on border duty / garrison troops", exam: true },
    { text: "尽", py: "jìn", zh: "全部、都。极写笛声感染力之强，无一例外。", en: "all / everyone without exception" },
    { text: "望乡", py: "wàng xiāng", zh: "遥望故乡。表现了士兵们强烈的思乡之情与归家无望的悲哀。", en: "gaze toward hometown / homesick", exam: true },
    { text: "。", punc: true }
];

console.log("成功加载：shouxia_text 原文数据包");
