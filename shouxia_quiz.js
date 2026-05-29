/**
 * 互动古文教学平台 - 《夜上受降城闻笛》客观题数据包 (高辨析度4选项·纯净版)
 */

const quizQuestions = [
    {
        id: 1,
        text: "诗前两句写到“沙似雪”与“月如霜”，以下关于这两个意象的艺术手法分析最精准的是哪一项？",
        py: "shī qián liǎng jù xiě dào shā sì xuě yǔ yuè rú shuāng yǐ xià guān yú zhè liǎng gè yì xiàng de yì shù shǒu fǎ fān xī zuì jǐn què de shì nǎ yī xiàng",
        en: "Which analysis of the artistic style of the images 'sand like snow' and 'moonlight like frost' is the most precise?",
        options: [
            {
                text: "运用 比喻 手法 / 用 冷色调 极力 渲染 环境 的 凄寒 孤寂",
                py: "yùn yòng bǐ yù shǒu fǎ yòng lěng sè diào jí lì xuàn rǎn huán jìng de qī hán gū jí",
                en: "Using metaphor / Deploying cold tones to intensely render the freezing chill and isolation of the environment.",
                correct: true,
                explanation: "正确！诗人运用比喻，将大漠月色化为积雪与寒霜。这种纯白的冷色调并没有带来美感，反而极其传神地烘托出边塞夜晚的荒凉、冰冷以及远征军人内心的孤寂凄清。",
                explanationPy: "zhèng què shī rén yùn yòng bǐ yù jiāng dà mò yuè sè huà wéi jī xuě yǔ hán shuāng zhè zhǒng chún bái de lěng sè diào bìng méi yǒu dài lái měi gǎn fǎn ér jí qí chuán shén de hōng tuō chū biān sài yè jǐng de huāng liáng bīng lěng yǐ jí yuǎn zhēng jūn rén nèi xīn de gū jí qī qīng",
                explanationEn: "Correct! The poet deploys metaphors to equate moonlight and sand to snow and frost. This cold-toned white imagery masterfully evokes the bleak, freezing loneliness of the frontier night."
            },
            {
                text: "纯粹 赞美 边疆 / 表现 大漠 景色 的 圣洁 与 温暖",
                py: "chún cuì zàn měi biān jiāng biǎo xiàn dà mò jǐng sè de shèng jié yǔ wēn nuǎn",
                en: "Purely praising the frontier / Showing the holiness and warmth of the desert scenery.",
                correct: false,
                explanation: "干扰项分析：脱离全诗情感基调。雪和霜在古代诗词的边塞语境中通常带有寒冷、萧瑟的悲剧色彩，绝非表达“温暖”或单纯赞美游玩风光。",
                explanationPy: "gān rǎo xiàng fān xī tuō lí quán shī qíng gǎn jī tiào xuě hé shuāng zài gǔ dài shī cí de biān sài yǔ jìng zhōng tōng cháng dài yǒu hán lěng xiāo sè de bēi jù sè cǎi jué fēi biǎo dá wēn nuǎn huò dān chún zàn měi yóu wán fēng jǐng",
                explanationEn: "Distractor Analysis: Detached from the emotional base. Snow and frost in classical frontier military poetry signal harsh cold and desolation rather than literal warmth."
            },
            {
                text: "运用 夸张 手法 / 记录 边塞 突降 暴雪 的 恶劣 天气",
                py: "yùn yòng kuā zhāng shǒu fǎ jì lù biān sài tū jiàng bào xuě de è liè tiān qì",
                en: "Using hyperbole / Recording severe weather conditions of sudden heavy blizzards.",
                correct: false,
                explanation: "干扰项分析：属于望文生义的机械误读。诗中的雪和霜是月光照射下大漠的“视觉比喻”，当时正是晴朗的月夜，并没有真正降下暴雪。",
                explanationPy: "gān rǎo xiàng fān xī shǔ yú wàng wén shēng yì de jī xiè wù dú shī zhōng de xuě hé shuāng shì yuè guāng zhào shè xià dà mò de shì jué bǐ yù dāng shí zhèng shì qíng lǎng de yuè yè bìng méi yǒu zhēn zhèng jiàng xià bào xuě",
                explanationEn: "Distractor Analysis: A mechanical reading error. The snow and frost are visual metaphors of the moonlit desert; the night was clear, with no actual ongoing blizzard."
            },
            {
                text: "虚构 幻境 手法 / 描写 诗人 梦境 中的 故乡 画面",
                py: "xū gòu huàn jìng shǒu fǎ miáo huǐ shī rén mèng jìng zhōng de gù xiāng huà miàn",
                en: "Using fictional illusion / Depicting the image of hometown within the poet's dream.",
                correct: false,
                explanation: "干扰项分析：混淆了空间。回乐峰和受降城是诗人登高远眺看到的真实边塞宏大夜景，属于纪实写景，绝非虚幻的梦境或者故乡的缩影。",
                explanationPy: "gān rǎo xiàng fān xī hún xiáo le kōng jiān huí lè fēng hé shòu xiáng chéng shì shī rén dēng gāo yuǎn tiào kàn dào de zhēn shí biān sài hóng dà yè jǐng shǔ yú jì shí xiě jǐng jué fēi xū huàn de mèng jìng huò zhě gù xiāng de suō yǐng",
                explanationEn: "Distractor Analysis: Spatial confusion. These strategic border strongholds represent real military landscapes witnessed by the poet, not an illusionary dream sequence of hometown."
            }
        ]
    },
    {
        id: 2,
        text: "第三句中“不知何处吹芦管”的“不知何处”，在诗中起到了怎样的艺术效果？",
        py: "dì sān jù zhōng bù zhī hé chù chuī lú guǎn de bù zhī hé chù zài shī zhōng qǐ dào le zěn yàng de yì shù xiào guǒ",
        en: "What artistic effect does the phrase 'not knowing from where' create in line 3?",
        options: [
            {
                text: "营造 缥缈 空灵感 / 增强 笛声 突然 袭来 的 悲剧 感染力",
                py: "yíng zào piāo miǎo kōng líng gǎn zēng qiáng dí shēng tū rán xí lái de bēi jù gǎn rǎn lì",
                en: "Creating a remote and ethereal feeling / Enhancing the tragic impact of the melody striking suddenly.",
                correct: true,
                explanation: "正确！不知道声音从哪里传来，反而显得笛声在广袤寂静的夜空中四处回荡、缥缈无依。这种未知感更增添了士兵们内心的迷茫、惆怅与无处逃躲的思乡悲哀。",
                explanationPy: "zhèng què bù zhī shēng yīn cóng nǎ lǐ chuán lái fǎn ér xiǎn de dí shēng zài guǎng mào jì jìng de yè kōng zhōng sì chù huí dàng piāo miǎo wú yī zhè zhǒng wèi zhī gǎn gèng zēng tiān le shì bīng men nèi xīn de mí máng chóu chàng yǔ wú chù táo duǒ de sī xiāng bēi āi",
                explanationEn: "Correct! Not knowing the source makes the tune resonate everywhere across the silent vacuum, enhancing their existential confusion and inescapable homesickness."
            },
            {
                text: "交代 军情 疏忽 / 暗示 守军 没有 做好 侦察 工作",
                py: "jiāo dài jūn qíng shū hū àn shì shǒu jūn méi yǒu zuò hǎo zhēn chá gōng zuò",
                en: "Indicating military negligence / Implying that the garrison failed to perform scouts.",
                correct: false,
                explanation: "干扰项分析：用完全偏离文学欣赏的“军事思维”进行滑稽干扰。文学作品中的不知何处是审美留白，而不是在抨击守军站岗偷懒或侦察失职。",
                explanationPy: "gān rǎo xiàng fān xī yòng wán quán piān lí wén xué xīn shǎng de jūn shì sī wéi jìn háng huá jī gān rǎo wén xué zuò pǐn zhōng de bù zhī hé chù shì shěn měi liú bái ér bú shì zài pēng jī shǒu jūn zhàn gǎng tōu lǎn huò zhēn chá shī zhí",
                explanationEn: "Distractor Analysis: Applies military operational logic where aesthetic evaluation is required. It functions as artistic blank space, not a report on sentry failure."
            },
            {
                text: "说明 乐师 胆小 / 害怕 被 发现 而 躲在 暗处 演奏",
                py: "shuō míng lè shī dǎn xiǎo hài pà bèi fā xiàn ér duǒ zài àn chù yǎnzòu",
                en: "Showing the musician's cowardice / Being afraid of discovery and playing in secret.",
                correct: false,
                explanation: "干扰项分析：逻辑极其庸俗化。吹芦管的大概是某个同样思乡的戍边士兵，诗中意在强调声音的蔓延，而非贬低或猜测演奏者的胆量。",
                explanationPy: "gān rǎo xiàng fān xī luó ji jí qí yōng sú huà chuī lú guǎn de dà gài shì mǒu gè tóng yàng sī xiāng de shù biān shì bīng shī zhōng yì zài qiáng diào shēng yīn de màn yán ér fēi biǎn dī huò cāi cè yǎn zòu zhě de dǎn liàng",
                explanationEn: "Distractor Analysis: A vulgar literal reading. The piper was likely another homesick conscript; the focus remains on the music's reach, not the musician's bravery."
            },
            {
                text: "引导 读者 解密 / 鼓励 去 寻找 声音 真正的 源头",
                py: "yǐn dǎo dú zhě jiě mì gǔ lì qù xún zhǎo shēng yīn zhēn zhèng de yuán tóu",
                en: "Guiding readers to solve a mystery / Encouraging a literal search for the exact source.",
                correct: false,
                explanation: "干扰项分析：把诗歌鉴赏当成了侦探解密游戏。这里的不知何处是为了将情感推向高潮，制造余韵，而不是给读者布置寻找坐标的任务。",
                explanationPy: "gān rǎo xiàng fān xī bǎ shī gē jiàn shǎng dāng chéng le zhēn tàn jiě mì yóu xì zhè lǐ de bù zhī hé chù shì wèi le jiāng qíng gǎn tuī xiàng gāo cháo zhì zào yú yùn ér bú shì gěi dú zhě bù zhì xún zhǎo zuò biāo de rèn wù",
                explanationEn: "Distractor Analysis: Treats literary art like a detective puzzle. The open ambiguity intensifies emotional depth rather than launching a geographic search task."
            }
        ]
    },
    {
        id: 3,
        text: "第四句“一夜征人尽望乡”中的“尽”字，具有极强的艺术凝聚力，最准确的分析是什么？",
        py: "dì sì jù yí yè zhēng rén jìn wàng xiāng zhōng de jìn zì jù yǒu jí qiáng de yì shù níng jù lì zuì zhǔn què de fān xī shì shén me",
        en: "The word 'all (尽)' in the last line holds powerful artistic compression. What is the most accurate analysis?",
        options: [
            {
                text: "极写 笛声 感染力 之 广 / 展现 万千 士兵 情感 的 强烈 共鸣",
                py: "jí xiě dí shēng gǎn rǎn lì zhī guǎng zhǎn xiàn wàn qiān shì bīng qíng gǎn de qiáng liè gòng míng",
                en: "Showing the vast influence of the music / Revealing the intense collective resonance of thousands of troops.",
                correct: true,
                explanation: "正确！一个“尽”字代表全部、所有。它将无数个士兵孤立的、个体的思乡行为，瞬间凝聚成一个万千人共同凝望故乡的宏大悲壮群体场景，产生了震撼人心的艺术张力。",
                explanationPy: "zhèng què yí gè jìn zì dài biǎo quán bù suǒ yǒu tā jiāng wú shù gè shì bīng gū lì de gè tǐ de sī xiāng xíng wéi shùn jiān níng jù chéng yí gè wàn qiān rén gòng tóng níng wàng gù xiāng de hóng dà bēi zhuàng qún tǐ chǎng jǐng chǎn shēng le zhèn hàn rén xīn de yì shù zhāng lì",
                explanationEn: "Correct! The word 'all' aggregates isolated personal longings into a monumental, shared dynamic gaze, engineering unforgettable epic scale and emotional power."
            },
            {
                text: "强调 人数 众多 / 方便 军队 长官 进行 晚间 点名",
                py: "qiáng diào rén shù zhòng duō fāng biàn jūn duì zhǎng guān jìn háng wǎn jiān diǎn míng",
                en: "Emphasizing the headcount / Convenient for army officers conducting night rolls.",
                correct: false,
                explanation: "干扰项分析：典型呆板机械的行政式解读。诗词中的“尽”是情感烈度的提炼，而不是在帮军官核对出勤人数或清点沙场士兵。",
                explanationPy: "gān rǎo xiàng fān xī diǎn xíng dāi bǎn jī xiè de xíng zhèng shì jiě dú shī cí zhōng de jìn shì qíng gǎn liè dù de tí liàn ér bú shì zài bāng jūn guān hé duì chū qín rén shù huò qīng diǎn shā chǎng shì bīng",
                explanationEn: "Distractor Analysis: A stiff administrative misreading. The quantifier maximizes psychological scope and dramatic resonance, not an army roster audit."
            },
            {
                text: "表现 纪律 严明 / 士兵 听从 指挥 统一 遥望 故乡",
                py: "biǎo xiàn jì lǜ yán míng shì bīng tīng cóng zhǐ huī tǒng yī yáo wàng gù xiāng",
                en: "Showing strict discipline / Soldiers obeying orders to gaze at their homes simultaneously.",
                correct: false,
                explanation: "干扰项分析：荒谬地将自发的情感流露解读成了口令指挥。思乡是士兵内心深处最隐秘、最自发的本能痛苦，绝非长官统一组织调度的军事操练。",
                explanationPy: "gān rǎo xiàng fān xī huāng miù dì jiāng zì fā de qíng gǎn liú lù jiě dú chéng le kǒu lìng zhǐ huī sī xiāng shì shì bīng nèi xīn shēn chù zuì yǐn mì zuì zì fā de běn néng tòng kǔ jué fēi zhǎng guān tǒng yī zǔ zhī diào dù de_jūn shì cāo liàn",
                explanationEn: "Distractor Analysis: Absurdly treats spontaneous raw human sorrow as a commanded military drill. Nostalgia flows organically from trauma, not tactical protocols."
            },
            {
                text: "暗示 战况 惨烈 / 守城 士兵 全部 壮烈 牺牲",
                py: "àn shì zhàn kuàng cǎn liè shǒu chéng shì bīng quán bù zhuàng liè xī shēng",
                en: "Implying severe combat losses / All defensive forces sacrificing heroically.",
                correct: false,
                explanation: "干扰项分析：严重过度脑补和歪曲字面。“尽望乡”是指大家都在遥望家乡、思念故土，此时士兵们都活着，并不是全部战死沙场的悲剧暗示。",
                explanationPy: "gān rǎo xiàng fān xī yán zhòng guò dù nǎo bǔ hé wāi qū zì miàn jìn wàng xiāng shì zhǐ dà jiā dōu zài yáo wàng jiā xiāng sī niàn gù tǔ cǐ shí shì bīng men dōu huó zhe bìng fēi quán bù zhàn sǐ shā chǎng de bēi jù àn shì",
                explanationEn: "Distractor Analysis: Severe over-interpretation and text distortion. 'Gazing toward home' maps live psychological ache; the troops are alive, not physically killed."
            }
        ]
    },
    {
        id: 4,
        text: "根据历史地理背景，诗中的“受降城”在唐代最初修建的主要目的是为了防御哪一个北方民族？",
        py: "gēn jù lì shǐ dì lǐ bèi jǐng shī zhōng de shòu xiáng chéng zài táng dài zuì chū xiū jiàn de zhǔ yào mù dì shì wèi le fáng yù nǎ yí gè běi fāng mín zǔ",
        en: "Based on historical geography, for defense against which northern nomadic group was Shouxiang City originally built?",
        options: [
            {
                text: "突厥 / 唐代 北方 长期 对峙 的 游牧 民族",
                py: "tū jué táng dài běi fāng cháng qī duì zhì de yóu mù mín zǔ",
                en: "Turk (Tujue) / The major northern nomadic group in conflict with the Tang.",
                correct: true,
                explanation: "正确。唐代景龙年间，张仁愿为了防御北方突厥的侵扰，在黄河以北一口气修建了东、中、西三座受降城。本诗中的受降城即是当时防御突厥的塞外重镇。",
                explanationPy: "zhèng què táng dài jǐng lóng nián jiān zhāng rén yuàn wèi le fáng yù běi fāng tū jué de qīn rǎo zài huáng hé yǐ běi yī kǒu qì xiū jiàn le dōng zhōng xī sān zuò shòu xiáng chéng běn shī zhōng de shòu xiáng chéng jí shì dāng shí fáng yù tū jué de sài wài zhòng zhèn",
                explanationEn: "Correct. During the Tang Dynasty, these strategic forts were constructed north of the Yellow River explicitly to curb Turkic incursions along the northern borders."
            },
            {
                text: "匈奴 / 秦汉 时期 的 北方 主要 劲敌",
                py: "xiōng nú qín hàn shí qī de běi fāng zhǔ yào jìn dí",
                en: "Xiongnu / The primary northern rival during the Qin and Han eras.",
                correct: false,
                explanation: "干扰项分析：历史朝代混淆。匈奴是秦朝和汉朝（如卫青、霍去病时期）的主要北方对手，到了唐代，匈奴作为一个独立政权早已退出了历史舞台。",
                explanationPy: "gān rǎo xiàng fān xī lì shǐ cháo dài hún xiáo xiōng nú shì qín cháo hé hàn cháo de zhǔ yào běi fāng duì shǒu dào le táng dài xiōng nú zuò wéi yí gè dú lì zhèng quán zǎo yǐ tuì chū le lì shǐ wǔ tái",
                explanationEn: "Distractor Analysis: Historical era confusion. The Xiongnu were rivals of Qin and Han; by the Tang Dynasty, they had long vanished from active history."
            },
            {
                text: "契丹 / 宋代 建立 辽国 的 北方 民族",
                py: "qì dān sòng dài jiàn lì liáo guó de běi fāng mín zǔ",
                en: "Khitan / The northern group that founded the Liao Dynasty during the Song era.",
                correct: false,
                explanation: "干扰项分析：契丹虽在唐代已存在，但其真正成为大一统中原王朝（宋代）的顶级北方噩梦和死敌是在五代和两宋时期，与中唐筑城背景不符。",
                explanationPy: "gān rǎo xiàng fān xī qì dān suī zài táng dài yǐ cún zài dàn qí zhēn zhèng chéng wéi dà yī tǒng zhōng yuán wáng cháo de dǐng jí běi fāng è mèng hé sǐ dí shì zài wǔ dài hé liǎng sòng shí qī yǔ zhōng táng zhù chéng bèi jǐng bù fú",
                explanationEn: "Distractor Analysis: Misplaces timelines. Though present, the Khitans rose as a premier imperial state (Liao) later during the Five Dynacies and Song eras."
            },
            {
                text: "蒙古 / 元代 统一 中原 的 北方 游牧",
                py: "méng gǔ yuán dài tǒng yī zhōng yuán de běi fāng yóu mù",
                en: "Mongol / The northern nomadic group that unified China under the Yuan Dynasty.",
                correct: false,
                explanation: "干扰项分析：时间严重滞后。蒙古帝国的崛起与跨越中原是在数百年后的宋末元初时期，绝对不可能是中唐时期李益写诗时的防御对象。",
                explanationPy: "gān rǎo xiàng fān xī shí jiān yán zhòng zhì hòu méi gǔ dì guó de jué qǐ yǔ kuà yuè zhōng yuán shì shù bǎi nián hòu de sòng mò yuán chū shí qī jué bù kě néng shì zhōng táng shí qī lǐ yì xiě shī shí de fáng yù duì xiàng",
                explanationEn: "Distractor Analysis: Major chronological error. The Mongol empire rose centuries later, meaning they were completely irrelevant to Middle Tang defense policy."
            }
        ]
    },
    {
        id: 5,
        text: "全诗前两句纯写静态夜景，后两句突入缈笛声，这种“由景入情”的转换具有什么精妙之处？",
        py: "quán shī qián liǎng jù chún xiě jìng tài yè jǐng hòu liǎng jù tū rù miǎo dí shēng zhè zhǒng yóu jǐng rù qíng de zhuǎn huàn jù yǒu shén me jīng miào zhī chù",
        en: "The first half focuses on static night views, while the second introduces remote flute sounds. What is the merit of this transition?",
        options: [
            {
                text: "借 凄凉 边景 蓄积 情感 / 用 缈笛声 瞬间 触发 并 轰然 放大 思乡之苦",
                py: "jiè qī liáng biān jǐng xù jī qíng gǎn yòng miǎo dí shēng shùn jiān chù fā bìng hōng rán fàng dà sī xiāng zhī kǔ",
                en: "Accumulating emotion via bleak border scenes / Deploying the music to trigger and instantly amplify homesickness.",
                correct: true,
                explanation: "正确！前两句通过沙白如雪、月冷如霜的死寂静态画面，将边塞的凄冷孤寂积蓄到极致。后两句凄厉的芦管声突然打破寂静，成为情感的引爆点，让万千将士蓄积已久的思乡之泪在一瞬间轰然决堤。",
                explanationPy: "zhèng què qián liǎng jù tōng guò shā bái rú xuě yuè lěng rú shuāng de sǐ jì jìng tài huà miàn jiāng biān sài de qī lěng gū jí jī xù dào jí zhì hòu liǎng jù qī lì de lú guǎn shēng tū rán dǎ pò jì jìng chéng wéi qíng gǎn de yǐn bào diǎn ràng wàn qiān jiàng shì xù jī yǐ jiǔ de sī xiāng zhī lèi zài yī shùn jiān hōng rán jué dī",
                explanationEn: "Correct! The first half builds up frozen emotional tension via dead-silent white scenery. The weeping reed pipe then breaks the void as an acoustic trigger, instantly detonating the accumulated grief."
            },
            {
                text: "纯粹 为了 凑字 换行 / 前后 两个 部分 的 描写 毫无 内在 关联",
                py: "chún cuì wèi le còu zì huàn háng qián hòu liǎng gè bù fèn de miáo huǐ háo wú nèi zài guān lián",
                en: "Purely filler to meet line counts / The two halves have no internal thematic connection.",
                correct: false,
                explanation: "干扰项分析：对古典诗词结构的极度低俗解构。景语皆情语，冰冷的景色是思乡的温床，缥缈的笛声是思乡的药引，两者内在逻辑极度严密。",
                explanationPy: "gān rǎo xiàng fān xī duì gǔ diǎn shī cí jié gòu de jí dù dī sú jiě gòu jǐng yǔ jiē qíng yǔ bīng lěng de jǐng sè shì sī xiāng de wēn chuáng piāo miǎo de dí shēng shì sī xiāng de yào yǐn liǎng zhě nèi zài luó ji jí dù yán mì",
                explanationEn: "Distractor Analysis: A naive deconstruction of structure. Scenery serves as the nursery of grief, and the music acts as the catalyst; they are profoundly intertwined."
            },
            {
                text: "冲淡 悲伤 情绪 / 用 优美的 音乐 引导 士兵们 快乐 起舞",
                py: "chōng dàn bēi shāng qíng xù yòng yōu měi de yīn yuè yǐn dǎo shì bīng men kuài lè qǐ wǔ",
                en: "Diluting sad emotions / Using beautiful music to guide soldiers to dance happily.",
                correct: false,
                explanation: "干扰项分析：彻底颠倒情感黑白。芦管在边塞诗中是标志性的“哀怨”乐器，它的出现让悲伤情绪暴增，绝非军营蹦迪或娱乐起舞的快乐背景音。",
                explanationPy: "gān rǎo xiàng fān xī chè dǐ diān dǎo qíng gǎn hēi bái lú guǎn zài biān sài shī zhōng shì biāo zhì xìng de āi yuàn yuè qì tā de chū xiàn ràng bēi shāng qíng xù bào zēng jué fēi jūn yíng bèng dí huò yú lè qǐ wǔ de kuài lè bèi jǐng yīn",
                explanationEn: "Distractor Analysis: Completely flips the emotional polarity. The reed pipe functions as a standard vehicle of mourning; it magnifies trauma rather than soothing it."
            },
            {
                text: "记录 捕鱼 过程 / 描写 边疆 军民 采集 芦苇 的 快乐 场景",
                py: "jì lù bǔ yú guò chéng miáo huǐ biān jiāng jūn mín cǎi jí lú wěi de kuài lè chǎng jǐng",
                en: "Recording a fishing process / Describing a happy scene of harvesting reeds.",
                correct: false,
                explanation: "干扰项分析：针对不认识“芦管”乐器、望文生义硬猜汉字的学生设计的荒谬干扰。芦管是乐器名，不是捕鱼工具，更没有采集芦苇的务农情节。",
                explanationPy: "gān rǎo xiàng fān xī zhēn duì bú rèn shi lú guǎn yuè qì wàng wén shēng yì yìng cāi hàn zì de xué shēng shè jì de huāng miù gān rǎo lú guǎn shì yuè qì míng bú shì bǔ yú gōng jù gèng méi yǒu cǎi jí lú wěi de wù nóng qíng jié",
                explanationEn: "Distractor Analysis: A ridiculous distractor aimed at students unfamiliar with historical instrumentation. It is a woodwind instrument, not an agricultural tool."
            }
        ]
    }
];

console.log("成功装配：shouxia_quiz 100%纯净高质量题库");
