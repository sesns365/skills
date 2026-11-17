// 特工365 Skills 清單
// cat＝分類（篩選用）；icon＝圖示（book、pen、hanzi、zhuyin、calc、speaker、touch、image、map）；color＝圖示底色；say＝卡片上「裝好後這樣說」的範例句；note＝限制說明（可省略）。
// 新增 skill：複製下面一整段 { ... }，貼在最後一筆後面（記得前一筆結尾要有逗號），再改內容。
// 只放「公開」的 skill。私人或僅本機使用的 skill 不要放進來。
window.SKILLS = [
  {
    name: "語詞圖片生成",
    slug: "word-image-generator",
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
    url: "https://github.com/sesns365/math-concept-visualizer",
    summary: "輸入國小數學概念，依 CRA 歷程做出可操作的互動教材，含教學探索、學生練習與學習單下載，並有自動報讀與學生模式。Claude、ChatGPT、Gemini 都能用。",
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
    url: "https://github.com/sesns365/exam-read-aloud",
    summary: "丟入考卷（PDF、Word、圖片），自動做成版面完全不變、點題號或選項就能朗讀的報讀版網頁。支援直書國語與數學考卷，不會唸出隱藏答案。需 Claude Code（Windows）。",
    cat: "評量與報讀",
    icon: "speaker",
    color: "#d6457a",
    say: "把這份考卷做成報讀版",
    tags: ["考試調整", "報讀", "特教"],
    updated: "2026-11-10"
  },
  {
    name: "閱讀策略學習單小幫手",
    slug: "reading-strategy-worksheet",
    url: "https://github.com/sesns365/reading-strategy-worksheet",
    summary: "貼上課文、說明學生現況，就依序分析並推薦閱讀策略（KWL、SQ3R、PIRLS、4F、六何法、思考地圖），做出全班通用（UDL）、可報讀與線上作答的學習單，附 PDF、Word 與教師版。Claude、ChatGPT、Gemini 都能用。",
    cat: "國語文",
    icon: "book",
    color: "#3a7fc1",
    say: "這是第三課課文，學生識字量較弱，幫我做閱讀策略學習單",
    tags: ["閱讀理解", "學習單", "UDL", "特教"],
    updated: "2026-11-10"
  },
  {
    name: "PDF 互動學習單小幫手",
    slug: "pdf-interactive-worksheet",
    url: "https://github.com/sesns365/pdf-interactive-worksheet",
    summary: "把 PDF 或 Word 學習單、考卷保留原版面，變成學生能直接作答、對答案、語音報讀、用畫筆書寫的互動網頁，有作答紀錄與老師講解模式，下載後離線也能用。Claude、ChatGPT、Gemini 都能用。",
    cat: "評量與報讀",
    icon: "touch",
    color: "#d6457a",
    say: "把這份 PDF 學習單做成可以作答的互動網頁",
    tags: ["學習單", "互動教材", "報讀", "UDL", "特教"],
    updated: "2026-11-12"
  },
  {
    name: "六何法分層寫作小幫手",
    slug: "six-w-writing",
    url: "https://github.com/sesns365/six-w-writing",
    summary: "給作文題目或素材，依六何法七個層次（三何起步到完整寫作）一層一層引導，可選層、可依學生調整圈選、句型、詞庫、先說再寫等支持，產出互動網頁、學習單 PDF、Word 與教師版。Claude、ChatGPT、Gemini 都能用。",
    cat: "國語文",
    icon: "pen",
    color: "#3a7fc1",
    say: "題目「我的好朋友」，用六何法第一層做寫作學習單",
    tags: ["寫作", "學習單", "UDL", "特教"],
    updated: "2026-11-16"
  },
  {
    name: "內嵌注音字體小幫手",
    slug: "zhuyin-font-embed",
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
