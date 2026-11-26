# 特工365 Skills 工具箱

金瑪莉老師（特工365）製作的 Claude skills 清單網頁。網址：https://sesns365.github.io/skills/

## 新增一個 skill

打開 `skills.js`，複製一整段 `{ ... }` 貼在最後，改成新 skill 的資料（名稱、slug、GitHub 網址、說明、分類標籤、更新日期）。存檔後網頁會自動更新。

## 分頁：公開／私人／他人分享

網頁分成「公開」「私人」「他人分享」三個分頁（網址可加 `#public`、`#private`、`#shared` 直接開到該分頁）。私人 skill 在該筆加 `private: true`，只展示說明與截圖，不顯示安裝指令與 GitHub 下載連結（`url` 可省略）。帳號自用的 skill（如 token 提醒、logo）不要放進來。

他人分享的 skill 在該筆加 `shared: true`，並填 `author`（原作者）、`authorUrl`、`source`（來源影片等）、`sourceName`、`url`（原作者 repo），`updated` 當作收錄日期。卡片會標原作者，連結指向原作者頁面。

## 功能說明圖片

圖片放在 `shots/`，在 `skills.js` 該筆加 `shots: [{ src: "shots/檔名.jpg", cap: "說明" }]`。第一張是卡片封面，點圖可看全部。

## 暫不開放

在 `skills.js` 該筆加 `hidden: true`，首頁就不顯示（GitHub repo 本身仍是公開的）。刪掉這行即重新開放。

## 支援平台標註

在 `skills.js` 該筆加 `ai: ["Claude", "ChatGPT", "Gemini"]`（只列支援的），卡片會顯示三個平台，沒列到的會打叉顯示為不支援。`aiNote` 可補一句限制說明。
