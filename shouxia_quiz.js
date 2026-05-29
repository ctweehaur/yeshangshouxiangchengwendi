/**
 * 互动古文教学平台 - 《夜上受降城闻笛》客观题数据包 (高辨析度4选项·拒绝一眼错重制版)
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
                explanationPy: "zhèng què shī rén yùn yòng bǐ yù jiāng dà mò yuè sè huà wéi jī xuě yǔ hán shuāng zhè zhǒng chún bái de lěng sè diào bìng méi yǒu dài lái měi gǎn fǎn ér jí qí chuán shén de hōng tuō chū biān sài yè jǐng de huāng liáng bīng lěng yǐ jí yuǎn zhēng jūn rén nèin xīn de gū jí qī qīng",
                explanationEn: "Correct! The poet deploys metaphors to equate moonlight and sand to snow and frost. This cold-toned white imagery masterfully evokes the bleak, freezing loneliness of the frontier night."
            },
            {
                text: "采用 象征 手法 / 隐喻 守军 士兵 纯洁 高尚 的 爱国 品格",
                py: "cǎi yòng xiàng zhēng shǒu fǎ yǐn yù shǒu jūn shì bīng chún jié gāo shàng de ài guó pǐn gé",
                en: "Using symbolism / Metaphorically implying the pure and noble patriotic character of the soldiers.",
                correct: false,
                explanation: "干扰项分析：高阶干扰项。学生极易被现代文阅读习惯误导，将“雪、霜”的洁白机械地联系到“品格高洁”。但此处属于特定边塞写景，核心在于用冷色渲染凄凉，而非歌颂道德品格。",
                explanationPy: "gān rǎo xiàng fān xī gāo jiè gān rǎo xiàng xué shēng jí yì bèi xiàn dài wén yuè dú xí guàn wù dǎo jiāng xuě hé shuāng de jié bái jī xiè de lián xì dào pǐn gé gāo jié dàn cǐ chù shǔ yú tè dìng biān sài xiě jǐng hé xīn zài yú yòng lěng sè xuàn rǎn qī liáng ér fēi gē sòng dào dé pǐn gé",
                explanationEn: "Distractor Analysis: High-level distractor. Students easily apply standard symbolisms of 'snow/frost' to moral purity. However, this is specific frontier imagery meant to render bleakness, not moral praise."
            },
            {
                text: "运用 夸张 手法 / 记录 边塞 突降 暴雪 的 恶劣 天气",
                py: "yùn yòng kuā zhāng shǒu fǎ jì lù biān sài tū jiàng bào xuě de è liè tiān qì",
                en: "Using hyperbole / Recording severe weather conditions of sudden heavy blizzards.",
                correct: false,
                explanation: "干扰项分析：考查写实与修辞的区别。诗中的雪和霜是月光照射下大漠的视觉比喻，当时正是晴朗的月夜，若误判定为自然暴雪，则属于完全没有读懂修辞。",
                explanationPy: "gān rǎo xiàng fān xī kǎo chá xiě shí yǔ xiū cí de qū bié shī zhōng de xuě hé shuāng shì yuè guāng zhào shè xià dà mò de shì jué bǐ yù dāng shí zhèng... 若误判定为自然暴雪，则属于完全没有读懂修辞。",
                explanationEn: "Distractor Analysis: Tests literal vs. figurative reading. The snow/frost are visual metaphors of a clear moonlit night, not an actual blizzard."
            },
            {
                text: "通过 借景抒情 / 表达 对 故乡 冬季 严寒 气候 的 担忧",
                py: "tōng guò jiè jǐng shū qíng biǎo dá duì gù xiāng dōng jì yán hán qì hòu de dān yōu",
                en: "Through expressing emotions via scenery / Conveying worry over the severe winter climate of the hometown.",
                correct: false,
                explanation: "干扰项分析：利用了“借景抒情”的套话。虽然前两句是写景，但引发的并非是对故乡天气的实用主义担忧，而是大漠环境对当下孤独心境的绝对投射。",
                explanationPy: "gān rǎo xiàng fān xī lì yòng le jiè jǐng shū qíng de tào huà suī rán qián liǎng jù shì xiě jǐng dàn yǐn fā de bìng fēi duì gù xiāng tiān qì de shí yòng zhǔ yì dān yōu ér shì dà mò huán jìng duì dāng xià gū dú xīn jìng de jué duì tóu shè",
                explanationEn: "Distractor Analysis: Plays on the standard term 'scenery-emotion transition'. The text uses the harsh view to broadcast immediate exile trauma, not practical climate worries for back home."
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
                text: "设置 悬念 布局 / 引导 守军 警惕 敌军 的 偷袭 信号",
                py: "shè zhì xuán niàn bù jú yǐn dǎo shǒu jūn jǐng tì dí jūn de tōu xí xìn hào",
                en: "Setting up a suspenseful layout / Guiding the garrison to stay alert to enemy raid signals.",
                correct: false,
                explanation: "干扰项分析：高级“军情思维”干扰项。芦管在这里是抒发士兵私情的载体，并不是两军对垒、互相厮杀的战术刺探或者敌军偷袭的军事暗号。",
                explanationPy: "gān rǎo xiàng fān xī gāo jí jūn qíng sī wéi gān rǎo xiàng lú guǎn zài zhè lǐ shì shū fā shì bīng sī qíng de zài tǐ bìng bú shì liǎng jūn duì lěi hù xiāng sī shā de zhàn shù cì tàn huò zhě dí jūn tōu xí de jūn shì àn hào",
                explanationEn: "Distractor Analysis: Advanced 'military operation' distractor. The pipe represents raw human sadness, not a tactical signaling device or a pre-raid enemy transmission code."
            },
            {
                text: "暗示 乐源 隐蔽 / 保护 演奏者 免受 军法 的 严厉 惩处",
                py: "àn shì lè yuán yǐn bì bǎo hù yǎn zòu zhě miǎn shòu jūn fǎ de yán lì chéng chǔ",
                en: "Implying the source is hidden / Protecting the performer from severe martial punishment.",
                correct: false,
                explanation: "干扰项分析：符合现实逻辑的混淆项。学生容易脑补“古代军营不准擅自吹笛”从而选错。但这里的“不知何处”是纯粹的美学空间留白，而非躲避宪兵惩罚的现实描写。",
                explanationPy: "gān rǎo xiàng fān xī fú hé xiàn shí luó ji de hún xiáo xiàng xué shēng róng yì nǎo bǔ gǔ dài jūn yíng bù zhǔn shàn zì chuī dí cóng ér xuǎn cuò dàn zhè lǐ de bù zhī hé chù shì chún cuì de měi xué kōng jiān liú bái ér fēi duǒ bì xiàn bīng chéng fá de xiàn shí miáo huǐ",
                explanationEn: "Distractor Analysis: Plausible but structurally wrong. Students might assume playing music was contraband under martial law. However, it functions as aesthetic distance, not a record of evading discipline."
            },
            {
                text: "采用 设问 修辞 / 预示 诗人 即将 展开 的 寻访 旅程",
                py: "cǎi yòng shè wèn xiū cí yù shì shī rén jí jiāng zhǎn kāi de xún fǎng lǚ chéng",
                en: "Using hypophora / Foreshadowing the poet's upcoming journey of search.",
                correct: false,
                explanation: "干扰项分析：考查修辞概念。“不知何处”并非自问自答的设问，也完全没有要展开一段寻找音乐源头的旅游或探险侦察意图。",
                explanationPy: "gān rǎo xiàng fān xī kǎo chá xiū cí gài niàn bù zhī hé chù bìng fēi zì wèn zì dá de shè wèn yě wán quán méi yǒu yào zhǎn kāi yī duàn xún zhǎo yīn yuè yuán tóu de lǚ yóu huò tàn xiǎn zhēn chá yì tú",
                explanationEn: "Distractor Analysis: Tests grammar terms. It is an expression of spatial ambiguity, not a literal question device prompting a geographic expedition."
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
                text: "强调 守城 人数 众多 / 凸显 受降城 坚固 的 防御 规模",
                py: "qiáng diào shǒu chéng rén shù zhòng duō tū xiǎn shòu xiáng chéng jiān gù de fáng yù guī mó",
                en: "Emphasizing the headcount / Highlighting the strong defensive scale of Shouxiang City.",
                correct: false,
                explanation: "干扰项分析：考查文学语境。“尽”虽然指人多，但本诗的核心基调是抒发无处躲藏的思乡哀怨，绝非在借由人数多来炫耀或凸显要塞坚固、城池牢不可破。",
                explanationPy: "gān rǎo xiàng fān xī kǎo chá wén xué yǔ jìng jìn suī rán zhǐ rén duō dàn běn shī de hé xīn jī tiào shì shū fā wú chù duǒ cáng de sī xiāng āi yuàn jué fēi zài jiè yóu rén shù duō lái xuàn yào huò tū xiǎn yào sài jiān gù chéng chí láo bù kě pò",
                explanationEn: "Distractor Analysis: Tests poetic tone. While 'all' implies a crowd, it frames the universal grip of grief, not a strategic claim about fortress garrison strength."
            },
            {
                text: "表现 纪律 严明 / 守军 听从 长官 指挥 统一 行动",
                py: "biǎo xiàn jì lǜ yán míng shǒu jūn tīng cóng zhǎng guān zhǐ huī tǒng yī xíng dòng",
                en: "Showing strict discipline / The troops following officers' commands for unified action.",
                correct: false,
                explanation: "干扰项分析：将本能的情感流露错判为“军事口令”。思乡是人性最隐秘、最脆弱的痛苦，不可能是在听从长官调度的集会操练。",
                explanationPy: "gān rǎo xiàng fān xī jiāng běn néng de qíng gǎn liú lù cuò pàn wéi jūn shì kǒu lìng sī xiāng shì rén xìng zuì yǐn mì zuì cuì ruò de tòng kǔ bù kě néng shì zài tīng cóng zhǎng guān diào dù de jí huì cāo liàn",
                explanationEn: "Distractor Analysis: Mistakes biological instinct for an executive order. Homesickness blooms organically; it isn't an organized operational rally."
            },
            {
                text: "暗示 战况 激烈 / 守城 将士 已 抱定 必死 的 决心",
                py: "àn shì zhàn kuàng jī liè shǒu chéng jiàng shì yǐ bào dìng bì sǐ de jué xīn",
                en: "Implying active heavy combat / The defenders having resolved to fight to the death.",
                correct: false,
                explanation: "干扰项分析：套用了其他悲壮边塞诗的套路。“望乡”虽然沉重，但在本诗的此时此刻，表现的是对家乡的深沉渴望与温情眷恋，而非即将冲锋、视死如归的临战宣誓。",
                explanationPy: "gān rǎo xiàng fān xī tào yòng le qí tā bēi zhuàng biān sài shī de tào lù wàng xiāng suī rán chén zhòng dàn zài běn shī de cǐ shí cǐ kè biǎo xiàn de shì duì jiā xiāng de shēn chén kě wàng yǔ wén qíng juàn liàn ér fēi jí jiāng chōng fēng shì sǐ rú guī de lín zhàn xuān shì",
                explanationEn: "Distractor Analysis: Over-borrows clichés from standard epic war poems. 'Gazing home' captures nostalgic displacement, not a combat oath before going over the top."
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
                explanation: "干扰项分析：经典的历史时代混淆项。匈奴是秦汉时期（卫青霍去病时代）的核心死敌。到了唐代，作为一个独立政权的匈奴早就退出了历史舞台，极具历史辨析度。",
                explanationPy: "gān rǎo xiàng fān xī jīng diǎn de lì shǐ shí dài hún xiáo xiàng xiōng nú shì qín hàn shí qī de hé xīn sǐ dí dào le táng dài xiōng nú zuò wéi yí gè dú lì zhèng quán zǎo jiù tuì chū le lì shǐ wǔ tái jí jù lì shǐ biàn xī dù",
                explanationEn: "Distractor Analysis: Classic era confusion. The Xiongnu were rivals of the Qin and Han dynasties; by the Tang Dynasty, they had long since exited the stage of active history."
            },
            {
                text: "契丹 / 宋代 建立 辽国 的 北方 民族",
                py: "qì dān sòng dài jiàn lì liáo guó de běi fāng mín zǔ",
                en: "Khitan / The northern group that founded the Liao Dynasty during the Song era.",
                correct: false,
                explanation: "干扰项分析：契丹虽在唐代已存在，但其真正成为割据幽云十六州、与中原正规对峙的顶级北方梦魇是在随后的两宋时期，不能挪用到唐代初年筑城的背景中。",
                explanationPy: "gān rǎo xiàng fān xī qì dān suī zài táng dài yǐ cún zài dàn qí zhēn zhèng chéng wéi gē jù yōu yún shí liù zhōu yǔ zhōng yuán zhèng guī duì zhì de dǐng jí běi fāng mèng yǎn shì zài suí hòu de liǎng sòng shí qī bù néng nuó yòng dào táng dài chū nián zhù chéng de bèi jǐng zhōng",
                explanationEn: "Distractor Analysis: Misplaces the geopolitical scale. Reeds and garrisons did see Khitans in Tang times, but their rise as a premier imperial rival (Liao) occurred later during the Song Dynasty."
            },
            {
                text: "蒙古 / 元代 统一 中原 的 北方 游牧",
                py: "méng gǔ yuán dài tǒng yī zhōng yuán de běi fāng yóu mù",
                en: "Mongol / The northern nomadic group that unified China under the Yuan Dynasty.",
                correct: false,
                explanation: "干扰项分析：考查宏观历史常识。成吉思汗与铁骑横扫中原建立元朝是在数百年后的事情，绝对不可能是李益在中唐戍边时所面临的边防敌人。",
                explanationPy: "gān rǎo xiàng fān xī kǎo chá hóng guān lì shǐ cháng shí chéng jí sī hán yǔ tiě qí héng sǎo zhōng yuán jiàn lì yuán cháo shì zài shù bǎi nián hòu de shì qing jué bù kě néng shì lǐ yì zài zhōng táng shù biān shí suǒ miàn lín de biān fáng dí rén",
                explanationEn: "Distractor Analysis: Fundamental chronological testing. Genghis Khan and the expansion of the Mongol empire occurred centuries later, making them anachronistic for Middle Tang defenses."
            }
        ]
    },
    {
        id: 5,
        text: "全诗前两句纯写静态夜景，后两句突入缥缈笛声，这种“由景入情”的转换具有什么精妙之处？",
        py: "quán shī qián liǎng jù chún xiě jìng tài yè jǐng hòu liǎng jù tū rù piāo miǎo dí shēng zhè zhǒng yóu jǐng rù qíng de zhuǎn huàn jù yǒu shén me jīng miào zhī chù",
        en: "The first half focuses on static night views, while the second introduces remote flute sounds. What is the merit of this transition?",
        options: [
            {
                text: "借 凄凉 边景 蓄积 情感 / 用 缥缈 笛声 瞬间 触发 并 轰然 放大 思乡之苦",
                py: "jiè qī liáng biān jǐng xù jī qíng gǎn yòng piāo miǎo dí shēng shùn jiān chù fā bìng hōng rán fàng dà sī xiāng zhī kǔ",
                en: "Accumulating emotion via bleak border scenes / Deploying the music to trigger and instantly amplify homesickness.",
                correct: true,
                explanation: "正确！前两句通过沙白如雪、月冷如霜的死寂静态画面，将边塞的凄冷孤寂积蓄到极致。后两句凄厉的芦管声突然打破寂静，成为情感的引爆点，让万千将士蓄积已久的思乡之泪在一瞬间轰然决堤。",
                explanationPy: "zhèng què qián liǎng jù tōng guò shā bái rú xuě yuè lěng rú shuāng de sǐ jì jìng tài huà miàn jiāng biān sài de qī lěng gū jí jī xù dào jí zhì hòu liǎng jù qī lì de lú guǎn shēng tū rán dǎ pò jì jìng chéng wéi qíng gǎn de yǐn bào diǎn ràng wàn qiān jiàng shì xù jī yǐ jiǔ de sī xiāng zhī lèi zài yī shùn jiān hōng rán jué dī",
                explanationEn: "Correct! The first half builds up frozen emotional tension via dead-silent white scenery. The weeping reed pipe then breaks the void as an acoustic trigger, instantly detonating the accumulated grief."
            },
            {
                text: "冲淡 悲伤 情绪 / 用 优美的 音乐 引导 士兵们 快乐 起舞",
                py: "chōng dàn bēi shāng qíng xù yòng yōu měi de yīn yuè yǐn dǎo shì bīng men kuài lè qǐ wǔ",
                en: "Diluting sad emotions / Using beautiful music to guide soldiers to dance happily.",
                correct: false,
                explanation: "高级干扰项（原D项分析）：彻底颠倒情感黑白。芦管在边塞诗中是标志性的“哀怨”乐器，它的出现让悲伤情绪暴增，部分粗心的学生容易被现代生活经验误导，误以为听音乐是为了‘冲淡悲伤、快乐起舞’，极具设陷阱效果。",
                explanationPy: "gān rǎo xiàng fān xī chè dǐ diān dǎo qíng gǎn hēi bái lú guǎn zài biān sài shī zhōng shì biāo zhì xìng de āi yuàn yuè qì tā de chū xiàn ràng bēi shāng qíng xù bào zēng bù fèn cū xīn de xué shēng róng yì bèi xiàn dài shēng huó jīng yàn wù dǎo wù yǐ wéi tīng yīn yuè shì wèi le chōng dàn bēi shāng kuài lè qǐ wǔ jí jù shè xiàn jǐng xiào guǒ",
                explanationEn: "Distractor Analysis: Highly effective. It reverses the emotional spectrum. The reed pipe is a standard carrier of melancholy; careless students might rely on modern intuition and misinterpret music as an escape or a prompt for joy."
            },
            {
                text: "利用 空间 错觉 写景 / 属于 诗歌 布局 中 典型 的 倒叙 结构",
                py: "lì yòng kōng jiān cuò jué xiě jǐng shǔ yú shī gē bù jú zhōng diǎn xíng de dào xù jié gòu",
                en: "Utilizing spatial illusion for scenery / Belonging to a classic flashback structure in layout.",
                correct: false,
                explanation: "重制高辨析干扰项：从结构概念设卡。全诗依照“先看静态风景，再听动态声音”的时间顺序展开，属于标准的顺叙。利用学术词汇“空间错觉”和“倒叙”包装，极具迷惑性，绝非一眼错。",
                explanationPy: "gān rǎo xiàng fān xī cóng jié gòu gài niàn shè kǎ quán shī yī zhào xiān kàn jìng tài fēng jǐng zài tīng dòng tài shēng yīn de shí jiān shùn xù zhǎn kāi shǔ yú biāo zhǔn de shùn xù lì yòng xué shù cí huì kōng jiān cuò jué hé dào xù bāo zhuāng jí jù mí huò xìng jué fēi yī yǎn cuò",
                explanationEn: "Distractor Analysis: Upgraded structural distractor. The quatrain progresses chronologically (view first, melody second), marking standard linear ordering. Wrapping it in academic jargon like 'spatial illusion' or 'flashback layout' forms a robust trap."
            },
            {
                text: "进行 客观 写实 记录 / 展现 边疆 军民 特有 的 民俗 文艺 活动",
                py: "jìn háng kè guān xiě shí jì lù zhǎn xiàn biān jiāng jūn mín tè yǒu de mín sú wén yì huó dòng",
                en: "Conducting an objective realistic record / Showcasing a unique folk cultural activity of the frontier.",
                correct: false,
                explanation: "重制高辨析干扰项：从写景抒情的本质设卡。诗中的“芦管”虽是写实声音，但其根本目的是为了作为情感催化剂引出大面积的“望乡之悲”，如果当成是单纯记录军民大联欢或民俗文艺表演活动，则完全曲解了艺术高度。",
                explanationPy: "gān rǎo xiàng fān xī cóng xiě jǐng shū qíng de běn zhì shè kǎ shī zhōng de lú guǎn suī rán shì xiě shí shēng yīn dàn qí gēn běn mù dì shì wèi le zuò wéi qíng gǎn cuī huà jì yǐn chū dà miàn jī de wàng xiāng zhī bēi rú guǒ dàng chéng shì chún cuì jì lù jūn mín dà lián huān huò mín sú wén yì biǎo yǎn huó dòng zé wán quán qū jiě le yì shù gāo dù",
                explanationEn: "Distractor Analysis: Upgraded thematic distractor. The pipe music is a physical sound but operates as an emotional trigger for collective trauma. Classifying it as a dry documentary record of a cheerful garrison cultural festival fundamentally distorts the poetry's artistic intent."
            }
        ]
    }
];

console.log("完美重制完成：客观题库干扰项品质已全面提升");
