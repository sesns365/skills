# 特工365 Skills 工具箱

金瑪莉老師（特工365）製作的 Claude skills 清單網頁。網址：https://sesns365.github.io/skills/

## 新增一個 skill

打開 `skills.js`，複製一整段 `{ ... }` 貼在最後，改成新 skill 的資料（名稱、slug、GitHub 網址、說明、分類標籤、更新日期）。存檔後網頁會自動更新。

只放公開的 skill。私人或僅本機使用的 skill 不要放進來。

## 功能說明圖片

圖片放在 `shots/`，在 `skills.js` 該筆加 `shots: [{ src: "shots/檔名.jpg", cap: "說明" }]`。第一張是卡片封面，點圖可看全部。

## 暫不開放

在 `skills.js` 該筆加 `hidden: true`，首頁就不顯示（GitHub repo 本身仍是公開的）。刪掉這行即重新開放。
