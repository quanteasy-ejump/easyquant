# EasyQuant

一个基于 Node.js 和 Express 的量化交易框架基础项目。

## 项目结构

```
easyquant/
├── src/
│   ├── app.js                 # Express 应用主文件
│   ├── server.js              # 服务器启动文件
│   ├── routes/                # 路由文件夹
│   │   └── api.js             # API 路由
│   ├── controllers/           # 控制器文件夹
│   │   └── homeController.js  # 首页控制器
│   ├── middleware/            # 中间件文件夹
│   │   └── errorHandler.js    # 错误处理中间件
│   ├── config/                # 配置文件夹
│   │   └── config.js          # 应用配置
│   └── utils/                 # 工具函数文件夹
├── package.json               # 项目依赖配置
├── .env.example               # 环境变量示例
├── .gitignore                 # Git 忽略文件
└── README.md                  # 项目说明文件
```

## 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 配置环境变量

复制 `.env.example` 为 `.env`：

```bash
cp .env.example .env
```

### 3. 运行项目

**开发模式（自动热重启）：**

```bash
npm run dev
```

**生产模式：**

```bash
npm start
```

服务器将在 `http://localhost:3000` 启动。

## 可用的 API 端点

### 健康检查

- **GET** `/health` - 服务器状态检查

```bash
curl http://localhost:3000/health
```

### API 路由

- **GET** `/api` - 欢迎信息
- **GET** `/api/status` - 服务器状态详情

```bash
curl http://localhost:3000/api
curl http://localhost:3000/api/status
```

## 依赖说明

- **express**: Web 框架
- **cors**: 跨域资源共享支持
- **morgan**: HTTP 请求日志中间件
- **dotenv**: 环境变量管理
- **nodemon**: 开发模式下文件监控和自动重启

## 下一步

根据需要扩展项目：

1. 添加数据库连接（MongoDB、PostgreSQL 等）
2. 创建更多路由和控制器
3. 添加认证和授权逻辑
4. 实现业务逻辑
5. 添加测试用例

## License

ISC