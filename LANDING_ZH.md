# Landing 中文 — Autmzr

*v1, 2026-05-04. 简体中文版本。面向中国开发者群体调整。语调：直接、技术化、像开发者跟开发者讲话。*

---

## 1. Hero

### 所有 VPS 和 CLI，都装进一个手机端

把任意一个 CLI 接到一台服务器上 — 就能在所有其他服务器上用。比如：在出租车里发部署、排队买咖啡时看日志、躺沙发上用语音改配置。

✓ 开源，可自托管
✓ 移动端优先
✓ 语音输入

**[⭐ 在 GitHub 上 Star]**   **[云端版 — $4.99/月，14 天免费试用]**

---

## 2. 你是不是也这样？

- 路上突然有个想法 — 写下"晚上做"，到了晚上已经忘了为什么要做
- 凌晨 2 点生产环境炸了 — 翻笔记本、SSH 上去、手动调试
- 花 200 美金买了 CLI 订阅 — 自己有 3 台服务器，但只能在一台上跑
- 装了 Telegram 机器人 — 经常崩溃、丢上下文、5 分钟超时假装"✅ 完成"

---

## 3. 三步上手

### 第 1 步：在自己的服务器上安装 Autmzr

```bash
curl https://cmd.autmzr.com/install | bash
```

或者用 `docker compose` 跑。自托管完全免费，没有任何限制和遥测。

### 第 2 步：接入你的 CLI

在 Web 界面里，把 Claude Code、Gemini CLI 或者其他 agent 装到你的服务器上。登录一次 — 之后都通过 app 操作。

### 第 3 步：在手机上打开

所有 VPS、所有项目，都在一个地方。发任务、看进度、用语音口述 prompt。

---

## 4. 它能做什么

### 一个 CLI，跑遍整个服务器集群

把 CLI 接到一台服务器上 — 通过内置 proxy，它能在你所有其他服务器上工作。一份订阅顶三份。其他工具做不到这点 — 因为这跟他们的商业模式冲突。

### 异步运行 — 发完就走

在手机上发一个任务，关掉 app，去忙别的。Agent 会在你的服务器上继续跑 — 跑一小时、两小时、跑一整夜都行。回来再看结果。

跟 Telegram 机器人不一样 — 那些机器人 5 分钟就死，还假装"✅ 完成"。

### 语音输入

在手机上打长 prompt 太痛苦。点麦克风按钮，口述，发送。语音通过 Web Speech API 在浏览器里处理 — 音频不会上传到我们的服务器。

支持 iOS Safari 14.5+、Chrome、Edge、Samsung Internet。Firefox 暂不支持，但只占 ~3% 用户。

### 多项目、多 CLI

任意数量的项目，跑在任意数量的服务器上，用任意 agent。

目前支持：**Claude Code** 和 **Gemini CLI**。规划中：Codex CLI、Aider、Cursor CLI — 以及社区想要的任何工具（欢迎提 PR）。

### 自托管：密钥永远在你这边

OAuth token、API key、agent 上下文、会话历史 — 全都只存在你自己的基础设施里。没有第三方 sync 服务器，没有中转代理。开源 — `git clone` 自己审查代码。

---

## 5. 真实场景 — 你会怎么用

### 在出租车里

路上突然想到一个 feature。打开 app，用语音口述："创建分支 feature/dark-mode，给 Settings 加个深色主题，发 PR"。等你到地方，Claude 已经写完代码并提了 PR。打开笔记本，review，merge。

### 在健身房

组间休息时看一眼生产日志。发现有问题。直接从手机上让 Claude 排查。继续做下一组。半小时后 — push 通知：修好了。

### 排队买咖啡

5 分钟够你在三台服务器上更新 nginx 配置，触发部署。咖啡好了，事也办完了。

### 躺在沙发上

懒得起来去电脑前。口述："X 项目最近有什么进展，Y 项目还有什么没做，Z 项目部署到 staging"。Agent 跑遍服务器集群，把活干了。你一步没动。

---

## 6. 安全 — 你的东西，一直在你那

如果你选择自托管，我们这边没有你的任何数据。一点都没有。

- **API key 和 OAuth token** 只存在你自己的 Postgres 数据库里。不会到我们这，不会到任何第三方代理，除了真正调用 Claude/Gemini API 的那一刻，永远不会离开你的基础设施。
- **Agent 上下文和会话历史** — 同样，只存在你的数据库里。
- **服务器上的 agent 物理上读不了 `~/.claude/*`** — 这是协议层面的硬限制，即使你或 agent 主动请求也不行。
- **不需要开放任何端口。** Agent 主动发起出向 WebSocket 连接到主节点。没有入向连接，没有 dangerous publish，没有 Cloudflare 隧道魔法。
- **开源，AGPL-3.0。** 不用相信我们 — `git clone` 自己审查代码看我们怎么处理你的密钥。

云端版：同样的模型，加上 encryption-at-rest。密钥在我们数据库里加密存储，只在 agent 启动那一刻解密。如果你不信任我们，跑自托管。

---

## 7. 价格

> *老实说：这是一个人做的项目。商业化是可选的。自托管永远免费，没有任何 feature-gating。*

### 自托管 — 永久免费

- 全部功能，没有限制
- 任意数量的服务器、项目、CLI
- 你的域名、你的数据、你的备份
- 开源 — fork、贡献、修改随意
- AGPL-3.0 协议

**[2 条命令搞定安装 →]**

### 云端版 — $4.99/月

- 我们托管，你不用折腾 VPS
- 自动更新
- 会话备份
- Email / Telegram 支持
- 14 天免费，无需信用卡

**[免费试用 →]**

> 你的 Claude/Gemini key 或订阅永远是你自己的，两个版本都一样。我们不倒卖任何人的 token。

---

## 8. FAQ

### 安全吗？我的 API key 跑去哪了？

哪都没去。自托管模式下只在你的 Postgres 里。云端版里在我们数据库里加密存储，只在 agent 启动那一刻解密。开源 — 自己验证。

### 中国大陆能用吗？需要 VPN 吗？

UI 本身不需要 VPN — 自托管的话 UI 直接走你自己的服务器，云端版的域名也可以直接访问。

但有个事儿要说清楚：Google 对部分地区屏蔽 Gemini API。如果你的服务器在被屏蔽地区（比如中国大陆），Gemini 调不通。Claude API 在中国大陆同样需要绕过限制。建议把 agent 放在不被屏蔽的地区的服务器上 — 手机端不需要任何特殊设置，调用走的是"服务器 ↔ Anthropic/Google"。

### 支持哪些 CLI？

目前生产可用：**Claude Code** 和 **Gemini CLI**。

开发中：Codex CLI（OpenAI）、Aider、Cursor CLI。

想加入自己用的 CLI？提 issue 或者 PR。架构本身就是为可扩展设计的。

### 跟 Anthropic 自己的 Remote Control 有什么区别？

Anthropic 只绑死 Claude 和 Anthropic 订阅。我们支持任意 CLI、任意服务器，没有 vendor lock。而且我们是自托管 — Anthropic Remote Control 必须走他们的基础设施。

如果你只用 Claude 和一台设备，Anthropic Remote Control 够用。如果你有多台服务器或者想用其他 CLI，那就是我们的场景。

### 服务器上要不要开放端口？

不需要。Agent 主动发起出向 WebSocket 连接到主节点。没有入向连接，不需要开端口，不需要 Cloudflare 隧道。

### 如果 Anthropic 自己出 Claude Code Web 怎么办？

他们已经出了。但是跑在他们的沙箱里，不在你的服务器上，而且只支持 Claude。那是另一个赛道 — 他们做的是"给 casual 用户的云端沙箱"，我们做的是"给开发者自己的服务器集群的控制台"。

### 团队协作呢？

目前：单用户、单基础设施。团队、SSO、审计 — 在 roadmap 里，但还不是现在。

---

## 9. 开源 + Roadmap

- **GitHub:** [github.com/autmzr/cmd](https://github.com/autmzr/cmd) *(仓库链接待定)*
- **协议:** AGPL-3.0

### 现在在做（2026 Q2）

- Codex CLI 集成
- Push 通知（PWA）
- 社区 CLI 插件 API

### 在讨论

- Aider、Cursor CLI
- 多租户团队版
- 原生移动 app（iOS / Android）

---

## 10. 最终 CTA

### 想试试？

**[⭐ 在 GitHub 上 Star]**   **[云端版 — 14 天免费]**

---

## Footer（极简）

- Made with ☕ in 2026
- [文档] · [GitHub]
- [Privacy] · [Terms] · [autmzr.com]

---

**其他语言：** [English](LANDING_EN.md) · [Русский](LANDING_RU.md)
