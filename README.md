# 我的餐廳清單
**使用 Node.js + Express 建立的Middleware，紀錄伺服器的請求紀錄與回應的時間。**

 ## 環境建置：
 1. Node.js
 
 ## 下載方法：
 1. 打開終端機，Clone 此專案至本機電腦

```bash
git clone https://github.com/haru5386/req_duration_middleware.git
```

2. 進入存放此專案的資料夾

```bash
cd req_duration_middleware
```

3. 安裝 npm 套件，

```bash
npm install
```

4. 啟動網頁伺服器，顯示`Express is running on http://localhost:3000，mongodb connected`
   表示成功進入
```bash
npm run dev
```

5. 透過 curl 進行 Request :

```bash
# 列出全部 Todo
$ curl http://localhost:3000/

# 新增 Todo 頁面
$ curl http://localhost:3000/new

# 顯示一筆 Todo
$ curl http://localhost:3000/54564564564

# 新增一筆 Todo
$ curl -X POST http://localhost:3000/
```

6. 查看 request log
```bash
$ cat requestLog.txt
```