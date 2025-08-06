# 產品展示網站

這是一個簡單的產品展示網站，用於展示您店鋪的產品圖片和信息。客戶可以通過您的官方帳號中的鏈接訪問此網站，瀏覽您的產品。

## 網站結構

- `index.html`: 網站主頁
- `css/style.css`: 網站樣式表
- `js/products.js`: 產品數據
- `js/main.js`: 網站功能實現
- `images/`: 產品圖片目錄

## 如何更新產品信息

要更新產品信息，請編輯 `js/products.js` 文件。該文件包含一個產品數組，每個產品對象具有以下屬性：

- `id`: 產品唯一標識符
- `name`: 產品名稱
- `description`: 產品描述
- `image`: 產品圖片路徑

### 添加新產品

1. 將新產品圖片添加到 `images/` 目錄
2. 在 `js/products.js` 文件中的產品數組中添加新的產品對象

### 修改現有產品

直接在 `js/products.js` 文件中編輯相應產品對象的屬性值。

### 刪除產品

從 `js/products.js` 文件中的產品數組中刪除相應的產品對象。

## 如何部署

1. 將整個 `commodity` 目錄上傳到您的網站伺服器
2. 確保您的伺服器支持靜態HTML文件
3. 訪問 `您的域名/index.html` 即可查看產品展示頁面

## 本地測試

您可以通過以下方式在本地測試網站：

1. 在瀏覽器中直接打開 `index.html` 文件
2. 或使用簡單的HTTP伺服器，如Python的 `http.server` 模組：
   ```
   python -m http.server
   ```
   然後在瀏覽器中訪問 `http://localhost:8000`

## 自定義

- 要更改網站的顏色和樣式，請編輯 `css/style.css` 文件
- 要更改網站的標題和頁腳信息，請編輯 `index.html` 文件

## 如何將修改同步到GitHub

當您對代碼進行修改後，可以按照以下步驟將修改同步到GitHub：

1. 打開終端（命令提示符或PowerShell）
2. 導航到項目目錄：
   ```
   cd 您的項目路徑
   ```
3. 添加所有修改的文件到暫存區：
   ```
   git add .
   ```
4. 提交您的修改（添加描述性的提交信息）：
   ```
   git commit -m "描述您所做的修改"
   ```
5. 將修改推送到GitHub：
   ```
   git push origin main
   ```

如果您是首次設置，請確保已經：

1. 在GitHub上創建了儲存庫
2. 在本地初始化Git儲存庫：
   ```
   git init
   ```
3. 設置遠端儲存庫URL：
   ```
   git remote add origin https://github.com/您的用戶名/儲存庫名.git
   ```
4. 設置您的Git用戶信息：
   ```
   git config --global user.name "您的名字"
   git config --global user.email "您的郵箱"
   ```