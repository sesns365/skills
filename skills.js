// 特工365 Skills 清單
// cat＝分類（篩選用）；icon＝圖示（book、pen、hanzi、zhuyin、calc、speaker、touch、image、map）；color＝圖示底色；say＝卡片上「裝好後這樣說」的範例句；note＝限制說明（可省略）。
// 新增 skill：複製下面一整段 { ... }，貼在最後一筆後面（記得前一筆結尾要有逗號），再改內容。
// shots＝功能說明圖片（放在 shots/ 資料夾，第一張當卡片封面，點圖可看全部）；cap＝圖片說明。沒有圖可省略。
// ai＝支援平台（Claude、ChatGPT、Gemini 三選），沒列到的會顯示為不支援；aiNote＝平台限制補充（可省略）。
// hidden: true ＝暫不開放：首頁不顯示，但 GitHub repo 仍是公開的。要重新開放就刪掉這行或改成 false。
// private: true ＝私人 skill：放在「私人 skill」區，只展示說明與截圖，不顯示安裝指令與下載連結（url 可省略）。
// 帳號自用的 skill（如 token 提醒、logo）不要放進來。
// shared: true ＝他人分享：放在「他人分享」分頁；author＝原作者、authorUrl＝作者頁、source＝來源（影片等）、sourceName＝來源連結文字、url＝原作者 repo、updated＝收錄日期；installNote＝安裝說明；installCmd＝自訂複製內容（取代「安裝這個 skill：網址」），沒有 installCmd 時只顯示 installNote、不顯示複製鈕。
window.SKILLS = [
  {
    name: "語詞圖片生成",
    slug: "word-image-generator",
    ai: ["Claude", "ChatGPT", "Gemini"],
    aiNote: "ChatGPT、Gemini 用內建生圖直接出圖；Claude 沒有內建生圖，會給每個語詞的中英文提示詞，接了生圖工具才直接出圖。",
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
    installCmd: "安裝這個 skill：https://github.com/sesns365/exam-read-aloud 。裝好後請檢查我的電腦：有沒有 Python 3.9 以上（沒有就用 winget install Python.Python.3.12 幫我裝，裝好重開終端機確認），再執行 pip install pymupdf pillow；也檢查 Windows 有沒有「中文（繁體，台灣）」語言套件（圖片考卷 OCR 要用），沒有的話用白話教我怎麼加。全部確認好再告訴我可以開始。",
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
  },
  {
    name: "數學互動教室",
    slug: "math-interactive-classroom",
    ai: ["Claude", "ChatGPT", "Gemini"],
    aiNote: "注音、預錄曉臻語音、自動檢查題目需 Claude Code；ChatGPT、Gemini 版連線上引擎，開啟時要能上網。",
    shots: [
      { src: "shots/math-interactive-classroom-1.jpg", cap: "看一看：圖跟著老師說的步驟一起變" },
      { src: "shots/math-interactive-classroom-2.jpg", cap: "練一練：動手塗色，答錯依常見迷思給回饋" },
      { src: "shots/math-interactive-classroom-3.jpg", cap: "學習單工坊：A4 排版，可列印 PDF 或下載 Word" }
    ],
    url: "https://github.com/sesns365/math-interactive-classroom",
    summary: "輸入一個國小數學單元，就產生闖關式互動教室：暖身加 4～6 站，每站看一看、練一練、過關，題目隨機出、答錯依迷思回饋。另有學習單工坊（PDF、Word）和教師後台看學習紀錄，可加注音與語音。",
    cat: "數學",
    icon: "calc",
    color: "#5c8d3c",
    say: "數學互動教室：四年級 假分數與帶分數",
    tags: ["數學", "互動網頁", "學習單", "特教"],
    updated: "2026-11-26"
  },
  // ===== 以下為私人 skill（private: true，只展示說明，不提供下載） =====
  {
    name: "閱讀策略學習單小幫手",
    slug: "reading-strategy-worksheet",
    private: true,
    ai: ["Claude", "ChatGPT", "Gemini"],
    aiNote: "Claude Code 可直接匯出 PDF 與 Word。",
    shots: [
      { src: "shots/reading-strategy-worksheet-1.jpg", cap: "KWL 策略學習單（全班通用版面）" },
      { src: "shots/reading-strategy-worksheet-2.jpg", cap: "思考地圖策略學習單" },
      { src: "shots/reading-strategy-worksheet-3.jpg", cap: "教師版：附參考答案與教學提示" }
    ],
    summary: "貼上課文、說明學生現況，就依序分析並推薦閱讀策略（KWL、SQ3R、PIRLS、4F、六何法、思考地圖，以及特教實證的故事地圖、交互教學、找大意），做出全班通用（UDL）、可報讀與線上作答的學習單，附 PDF、Word 與教師版。",
    cat: "國語文",
    icon: "book",
    color: "#3a7fc1",
    say: "這是第三課課文，學生識字量較弱，幫我做閱讀策略學習單",
    updated: "2026-11-16"
  },
  {
    name: "六何法分層寫作小幫手",
    slug: "six-w-writing",
    private: true,
    ai: ["Claude", "ChatGPT", "Gemini"],
    aiNote: "Claude Code 可直接產出互動網頁、PDF 與 Word。",
    shots: [
      { src: "shots/six-w-writing-1.jpg", cap: "互動網頁：第一層「三何」一步一步填" },
      { src: "shots/six-w-writing-2.jpg", cap: "依學生勾選學習支持（句型、詞庫等）" },
      { src: "shots/six-w-writing-3.jpg", cap: "可列印的學習單" }
    ],
    summary: "給作文題目或素材，依六何法七個層次（三何起步到完整寫作）一層一層引導，可選層、可依學生調整圈選、句型、詞庫、先說再寫等支持，產出互動網頁、學習單 PDF、Word 與教師版。",
    cat: "國語文",
    icon: "pen",
    color: "#3a7fc1",
    say: "題目「我的好朋友」，用六何法第一層做寫作學習單",
    updated: "2026-11-16"
  },
  {
    name: "成語動畫與作業單小幫手",
    slug: "idiom-animation",
    private: true,
    ai: ["Claude"],
    aiNote: "只支援 Claude Code（要在電腦上配音與打包）。",
    shots: [
      { src: "shots/idiom-animation-1.jpg", cap: "成語動畫：字義拆解，字幕跟著旁白走" },
      { src: "shots/idiom-animation-2.jpg", cap: "作業單：成語小卡，可勾選推測意思的方法" }
    ],
    summary: "指定成語，或丟入課文讓 AI 先找出成語，做出向量動畫（字義拆解、小故事、口訣、生活例句、考考你）與注音作業單，曉臻語音直接內嵌，也能把多課打包成一個首頁。",
    cat: "國語文",
    icon: "play",
    color: "#3a7fc1",
    say: "幫我做成語動畫：奇思妙想、張牙舞爪、目瞪口呆",
    updated: "2026-11-24"
  },
  {
    name: "短語句型動畫與作業單小幫手",
    slug: "phrase-pattern-animation",
    private: true,
    ai: ["Claude"],
    aiNote: "只支援 Claude Code（要在電腦上配音與打包）。",
    shots: [
      { src: "shots/phrase-pattern-animation-1.jpg", cap: "短語動畫：課本短語逐詞跳出" },
      { src: "shots/phrase-pattern-animation-2.jpg", cap: "作業單：句型小卡＋分層照樣寫" }
    ],
    summary: "給課文中的短語或照樣造句句型，做出公式拆解、課本短語逐詞跳出、換一個看看與考考你的動畫，加上分層照樣寫作業單（拼一拼、填一填、自己造）與教師版。插圖預設向量圖，也可換成老師自己生的圖。",
    cat: "國語文",
    icon: "play",
    color: "#3a7fc1",
    say: "翰林三上第七課，幫我做短語練習動畫和作業單",
    updated: "2026-11-24"
  },
  {
    name: "句型動畫與作業單小幫手",
    slug: "sentence-pattern-animation",
    private: true,
    ai: ["Claude"],
    aiNote: "只支援 Claude Code（要在電腦上配音與打包）。",
    shots: [
      { src: "shots/sentence-pattern-animation-1.jpg", cap: "師生對話動畫：老師舉例、學生造句" },
      { src: "shots/sentence-pattern-animation-2.jpg", cap: "作業單：句型小幫手卡與看圖選一選" }
    ],
    summary: "輸入句型（如「雖然……但是……」），做出老師與學生對話的動畫：句型意義、舉例、學生造句、老師修正、生活應用、考考你，加上選一選、連連看、填一填的作業單，可把多課做成合輯。",
    cat: "國語文",
    icon: "play",
    color: "#3a7fc1",
    say: "幫我做「雖然……但是……」句型動畫和作業單",
    updated: "2026-11-24"
  },
  {
    name: "國語教材互動動畫網頁",
    slug: "language-arts-animation",
    private: true,
    ai: ["Claude"],
    aiNote: "只支援 Claude Code（要在電腦上配音與打包）。",
    shots: [
      { src: "shots/language-arts-animation-1.jpg", cap: "大頭角色動畫，字幕與旁白同步" },
      { src: "shots/language-arts-animation-2.jpg", cap: "互動作業單：點空格出答案，題號可連回動畫" }
    ],
    summary: "成語、短語、句型、修辭、破音字都能做：AI 寫好腳本後直接配音、自動對齊字幕，產生大頭角色動畫網頁，加上點選就出答案的互動作業單，可列印學生版與教師版。",
    cat: "國語文",
    icon: "play",
    color: "#3a7fc1",
    say: "幫我做「譬喻法」的互動動畫和作業單",
    updated: "2026-11-26"
  },

  // ===== 以下為他人分享（shared: true，版權屬原作者） =====
  {
    name: "Wordwall CLI",
    slug: "wordwall-cli",
    shared: true,
    author: "三師爸",
    authorUrl: "https://github.com/mathruffian-dot",
    ai: ["Claude"],
    aiNote: "需在 Windows 電腦用 Claude Code（或 Codex）執行，並由老師本人登入自己的 Wordwall 帳號。",
    url: "https://github.com/mathruffian-dot/wordwall-cli",
    installNote: "把下面這段貼到 Claude Code（Windows）的對話框，AI 會先檢查並安裝 Python、Git，再下載並設定好工具；登入 Wordwall 時要由你本人在跳出的 Chrome 輸入帳密。",
    installCmd: "幫我安裝 Wordwall CLI：https://github.com/mathruffian-dot/wordwall-cli 。請依序完成，每一步確認成功再往下：①檢查電腦有沒有 Python 3 和 Git（python --version、git --version），沒有就用 winget 幫我裝（winget install Python.Python.3.12、winget install Git.Git），裝好後重開終端機再確認。②照 README 的「最快開始」：git clone 到我的文件資料夾，進資料夾後在 PowerShell 執行 Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass，再執行 .\\setup.ps1 -WithPdf。③執行 python wordwall.py chrome-login，請我在跳出的 Chrome 自己登入 Wordwall（不要問我帳密），我說好了再執行 python wordwall.py grab-session。④最後執行 python wordwall.py doctor --login --pdf，全部通過就告訴我可以開始出題。出錯請用白話說明原因與下一步。",
    summary: "讓 AI 直接操作 Wordwall：用一句話描述想要的遊戲，就自動選範本、出題並建立活動（測驗、配對、分類、轉盤、句子填空、標示圖等），可做圖片題與 PDF 截圖題，還能指派成學生作業、匯出成績。",
    cat: "評量與報讀",
    icon: "touch",
    color: "#d6457a",
    say: "用 Wordwall 幫我做一個「分數比大小」的配對遊戲，並指派成學生作業",
    updated: "2026-11-26"
  },
  {
    name: "動畫原理解說（圖片加強版）",
    slug: "claude-motion-explainer-images",
    shared: true,
    author: "三師爸",
    authorUrl: "https://github.com/mathruffian-dot",
    ai: ["Claude"],
    aiNote: "需在電腦用 Claude Code（或 Codex 等 agent）執行，要先裝 Node.js、ffmpeg、HyperFrames；旁白用 edge-tts，示意圖可選用 Codex CLI 生成。",
    url: "https://github.com/mathruffian-dot/claude-motion-explainer-images",
    installNote: "把下面這段貼到 Claude Code 的對話框，AI 會先檢查並安裝 Node.js 22、ffmpeg、Python、Git 等需要的工具，再把 skill 裝好。",
    installCmd: "幫我安裝 claude-motion-explainer-images 這組 skill：https://github.com/mathruffian-dot/claude-motion-explainer-images 。請依序完成，每一步確認成功再往下：①檢查並安裝需要的工具：Node.js 22 以上、ffmpeg、Python 3、Git（Windows 用 winget：winget install OpenJS.NodeJS.LTS、winget install Gyan.FFmpeg、winget install Python.Python.3.12、winget install Git.Git；macOS 用 Homebrew：brew install node ffmpeg python git），裝好後重開終端機確認版本。②執行 pip install pillow fonttools edge-tts。③執行 npm install -g hyperframes，再執行 hyperframes skills update 與 hyperframes skills update faceless-explainer。④git clone 這個 repo，把 skills 資料夾裡的所有 skill 複製到 ~/.claude/skills/。⑤執行 python skills/motion-explainer-images/scripts/hw_check.py，把硬體建議用白話告訴我。生圖用的 Codex CLI 是選用的，先不用裝。出錯請用白話說明原因與下一步。",
    summary: "用一句話做出一支原理解說動畫：自動研究、分鏡、配旁白與字幕，並加上兩種圖片：從 Wikimedia Commons 找有授權的照片當「證據卡」（自動標作者與授權），以及 AI 生成的示意背景圖。立體內容會自動用 three.js，唸錯字可單句替換不必重做。",
    cat: "教材製作",
    icon: "play",
    color: "#e08a00",
    say: "做一支 90 秒的動畫，解說「飛機為什麼飛得起來」",
    updated: "2026-11-26"
  },
  {
    name: "Antigravity 2.0 繁體中文套件",
    slug: "antigravity2-zh-tw",
    shared: true,
    author: "workkkkkkez00m",
    authorUrl: "https://github.com/workkkkkkez00m",
    shots: [
      { src: "https://raw.githubusercontent.com/workkkkkkez00m/antigravity2.0-zh-tw/HEAD/images/screenshot-main-ui-v2.29.0.jpg", cap: "中文化後的主介面（圖片取自原作者 repo）" },
      { src: "https://raw.githubusercontent.com/workkkkkkez00m/antigravity2.0-zh-tw/HEAD/images/screenshot-settings-v2.29.0.jpg", cap: "中文化後的設定頁（圖片取自原作者 repo）" }
    ],
    url: "https://github.com/workkkkkkez00m/antigravity2.0-zh-tw",
    summary: "這不是 skill，是把 Google 的 AI 寫程式工具 Antigravity 2.0 介面翻成繁體中文（台灣）的套件。支援 Windows 與 macOS，安裝前自動備份，可一鍵還原英文原版，並避開程式碼區、終端機等不該翻譯的地方。",
    cat: "工具",
    icon: "book",
    color: "#5c8d3c",
    installNote: "這是電腦工具，不是 skill。電腦要先裝好 Antigravity 2.0；把下面這段貼到 Antigravity 或 Claude Code 的對話框，AI 會先檢查並安裝 Node.js、Git，再下載並安裝套件。安裝時會關閉 Antigravity，記得先存檔。",
    installCmd: "幫我安裝 Antigravity 2.0 繁體中文套件：https://github.com/workkkkkkez00m/antigravity2.0-zh-tw 。請依序完成，每一步做完確認成功再往下：①先檢查電腦有沒有 Node.js LTS 和 Git（node -v、git --version），沒有就幫我裝（Windows 用 winget install OpenJS.NodeJS.LTS 與 winget install Git.Git；macOS 用 Homebrew：brew install node git，沒有 Homebrew 就先裝），裝好後重開終端機再確認版本。②照 README 的「傳統版」步驟：git clone 到我的下載資料夾，在資料夾內執行 npm install。③依我的作業系統執行安裝（Windows：install-win.bat；macOS：install-macos.command），遇到確認提示時先問我。④完成後提醒我重新啟動 Antigravity。過程中出錯請用白話告訴我原因與下一步。",
    updated: "2026-11-26"
  }
];
