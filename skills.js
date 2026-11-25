// 特工365 Skills 清單
// cat＝分類（篩選用）；icon＝圖示（book、pen、hanzi、zhuyin、calc、speaker、touch、image、map）；color＝圖示底色；say＝卡片上「裝好後這樣說」的範例句；note＝限制說明（可省略）。
// 新增 skill：複製下面一整段 { ... }，貼在最後一筆後面（記得前一筆結尾要有逗號），再改內容。
// shots＝功能說明圖片（放在 shots/ 資料夾，第一張當卡片封面，點圖可看全部）；cap＝圖片說明。沒有圖可省略。
// ai＝支援平台（Claude、ChatGPT、Gemini 三選），沒列到的會顯示為不支援；aiNote＝平台限制補充（可省略）。
// hidden: true ＝暫不開放：首頁不顯示，但 GitHub repo 仍是公開的。要重新開放就刪掉這行或改成 false。
// 只放「公開」的 skill。私人或僅本機使用的 skill 不要放進來。
window.SKILLS = [
  {
    name: "語詞圖片生成",
    slug: "word-image-generator",
    ai: ["Claude"],
    aiNote: "Claude 沒有內建生圖，會給每個語詞的中英文提示詞，接了生圖工具才直接出圖。",
    url: "https://github.com/sesns365/word-image-generator",
    summary: "輸入語詞，每個語詞各產生一張 1:1、純白背景的教材用圖片。貼上課文或社會故事，還能讓整組圖卡的人物與畫風一致。",
    cat: "教材製作",
    icon: "image",
    color: "#e08a00",
    say: "用這些語詞做圖卡：蘋果、香蕉、洗手",
    tags: ["教材製作", "圖卡", "生圖"],
    updated: "2026-11-07"
  },
  {
    name: "數學概念動態表徵介面小幫手",
    slug: "math-concept-visualizer",
    ai: ["Claude", "ChatGPT", "Gemini"],
    shots: [
      { src: "shots/math-concept-visualizer-1.jpg", cap: "CRA 操作區：學生拖曳積木、位值板會跟著變" }
    ],
    url: "https://github.com/sesns365/math-concept-visualizer",
    summary: "輸入國小數學概念，依 CRA 歷程做出可操作的互動教材，含教學探索、學生練習與學習單下載，並有自動報讀與學生模式。",
    cat: "數學",
    icon: "calc",
    color: "#5c8d3c",
    say: "幫我做「分數的等值」互動教材",
    tags: ["數學", "互動教材", "學習單", "特教"],
    updated: "2026-11-08"
  },
  {
    name: "報讀考卷產生器",
    slug: "exam-read-aloud",
    ai: ["Claude"],
    aiNote: "僅限 Claude Code（Windows 10／11），網頁版與手機 App 不能用。",
    url: "https://github.com/sesns365/exam-read-aloud",
    summary: "丟入考卷（PDF、Word、圖片），自動做成版面完全不變、點題號或選項就能朗讀的報讀版網頁。支援直書國語與數學考卷，不會唸出隱藏答案。",
    cat: "評量與報讀",
    icon: "speaker",
    color: "#d6457a",
    say: "把這份考卷做成報讀版",
    tags: ["考試調整", "報讀", "特教"],
    updated: "2026-11-10"
  },
  {
    name: "PDF 互動學習單小幫手",
    slug: "pdf-interactive-worksheet",
    ai: ["Claude", "ChatGPT", "Gemini"],
    aiNote: "ChatGPT、Gemini 產出答案資料後，到線上製作頁產生互動網頁。",
    shots: [
      { src: "shots/pdf-interactive-worksheet-1.jpg", cap: "學生直接在原版面作答、用畫筆書寫" },
      { src: "shots/pdf-interactive-worksheet-2.jpg", cap: "老師講解模式：顯示答案與畫記" },
      { src: "shots/pdf-interactive-worksheet-3.jpg", cap: "製作頁：上傳 PDF 或 Word 就能轉" }
    ],
    url: "https://github.com/sesns365/pdf-interactive-worksheet",
    summary: "把 PDF 或 Word 學習單、考卷保留原版面，變成學生能直接作答、對答案、語音報讀、用畫筆書寫的互動網頁，有作答紀錄與老師講解模式，下載後離線也能用。",
    cat: "評量與報讀",
    icon: "touch",
    color: "#d6457a",
    say: "把這份 PDF 學習單做成可以作答的互動網頁",
    tags: ["學習單", "互動教材", "報讀", "UDL", "特教"],
    updated: "2026-11-12"
  },
  {
    name: "內嵌注音字體小幫手",
    slug: "zhuyin-font-embed",
    ai: ["Claude", "ChatGPT", "Gemini"],
    aiNote: "內嵌字型、破音字校對頁、Word 需 Claude Code；ChatGPT、Gemini 為線上字型簡化版。",
    shots: [
      { src: "shots/zhuyin-font-embed-1.jpg", cap: "字旁直接帶注音，沒裝字型也看得到" },
      { src: "shots/zhuyin-font-embed-2.jpg", cap: "破音字校對頁：點一下就能改讀音" }
    ],
    url: "https://github.com/sesns365/zhuyin-font-embed",
    summary: "讓學習單、網頁、互動遊戲、PDF、Word 字旁直接帶注音（預設字嗨注音標楷），字型內嵌，沒裝字型的電腦也看得到。破音字自動判斷，拿不準的列在校對頁點一下就能改。",
    cat: "教材製作",
    icon: "zhuyin",
    color: "#e08a00",
    say: "幫這份學習單加上注音",
    tags: ["注音", "教材製作", "UDL", "特教"],
    updated: "2026-11-17"
  },
  {
    name: "圖解識字",
    slug: "hanzi-visual-teaching",
    ai: ["Claude", "ChatGPT", "Gemini"],
    shots: [
      { src: "shots/hanzi-visual-teaching-1.jpg", cap: "完成圖：部件拆解＋口訣＋四格語詞" }
    ],
    url: "https://github.com/sesns365/hanzi-visual-teaching",
    summary: "輸入「圖解識字 休」，產生 16:9 漢字圖解教學圖：部件或字源拆解加角色口訣，再加原始字義、常見語詞、抽象語詞、成語四格。Gemini、ChatGPT 直接出圖，Claude 做成可列印的網頁。",
    cat: "國語文",
    icon: "hanzi",
    color: "#3a7fc1",
    say: "圖解識字 休",
    tags: ["識字", "國語", "圖卡", "特教"],
    updated: "2026-11-17"
  },
  {
    name: "成語圖文探險單",
    slug: "idiom-quest-worksheet",
    ai: ["Claude", "ChatGPT", "Gemini"],
    shots: [
      { src: "shots/idiom-quest-worksheet-1.jpg", cap: "第一頁：看圖連連看兩關" },
      { src: "shots/idiom-quest-worksheet-2.jpg", cap: "第二頁：生活句子選選看與造句" }
    ],
    url: "https://github.com/sesns365/idiom-quest-worksheet",
    summary: "輸入 6 個成語，產生剛好 A4 兩頁的 UDL 成語學習單：看圖連連看兩關、生活句子選選看、生活小玩家三選一造句，附教師版答案。Gemini、ChatGPT 用內建生圖配插圖，Claude 用向量插圖輸出 PDF 與 Word。",
    cat: "國語文",
    icon: "map",
    color: "#3a7fc1",
    say: "成語圖文探險單：畫蛇添足、守株待兔、亡羊補牢、井底之蛙、對牛彈琴、自相矛盾",
    tags: ["成語", "學習單", "UDL", "特教"],
    updated: "2026-11-17"
  }
];
