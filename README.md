# 宝宝乐园

给小朋友做的互动式数字游乐场，纯静态网页，零构建。

**在线玩：** https://temptation2017.github.io/baobao-leyuan/

## English overview

Baobao Leyuan is a browser-based learning playground built by a parent for a young child and maintained by [temptation2017](https://github.com/temptation2017). It combines Chinese characters, poems, stories, animal exploration, drawing, puzzles, counting and everyday-life activities.

The application uses plain HTML, CSS and JavaScript, with no build step or application backend. It has no advertising, in-app purchases or account registration. Progress, preferences and family recordings are stored in the browser. Some animal photographs are loaded from external sites; the deployed website does not guarantee complete offline access.

Maintenance focuses on content and pronunciation fixes, touch interactions, responsive layouts, keyboard and focus behavior, and browser regression checks. See the sections below for local setup and test commands.

## 内容

- **认知与阅读**：202 张动物卡、998 种动物世界、100 种形状、20 种颜色、200 种糖果、5000 字汉字库及 200 张看图识字卡、100 首古诗、100 个故事。
- **动手小游戏**：200 张涂色图、1–10 点数、数字描红、拼图、记忆翻牌、泡泡、影子配对、颜色混合、找不同。
- **生活启蒙**：好习惯、刷牙洗手、动物食堂、乐器、情绪、交通工具、天气穿衣、过马路安全、晚安准备与呼吸。
- **家长功能**：算术验证、10/15/20 分钟休息提醒、男女声切换、家人录音、柔和彩色/暖暖纸感/简洁专注外观。

## 界面与交互

- 首页保留全部 27 个功能，默认展示 8 个精选入口，其余按认识世界、故事与阅读、动手创作、益智游戏、生活小事归类。
- 共用颜色、字体、圆角、卡片、按钮、反馈和 SVG 功能图标。插画、实物图片及学习内容保留自己的色彩，三个外观不改变认颜色与涂色的真实颜色。
- 手机使用双列活动卡片，平板使用四列；窄屏分类可横向滑动，支持安全区域、浏览器缩放和减少动态效果设置。
- 动物与识字卡片兼容滑动和明确的上一张/下一张按钮；故事支持暂停、继续、页码和翻页边界。
- 家长验证可清空、删除和键盘输入；弹窗管理焦点，背景不可操作，关闭后恢复焦点。设置有明确的选中状态和保存提示。
- 图片失败有替代画面，涂色画纸有加载和失败提示；加载完成前不能领取完成奖励。

逐页走查、设计规范、验收范围与后续事项见 [DESIGN_REVIEW.md](DESIGN_REVIEW.md)。

## 代码结构

- `index.html`：页面结构与有序的 defer 脚本入口。
- `app.js`：内容生成、游戏、声音与存储逻辑。
- `ui.js`：分类、辅助说明、弹窗、焦点、图片替代与展示层交互。
- `ui-icons.js`：统一的 SVG 功能图标。
- `styles/base.css`：保留的游戏几何与布局，位于 legacy 层。
- `styles/design-system.css`：颜色与组件规范、响应式样式，位于 design 层。
- `assets/` 与数据脚本：本地内容图片、声音与原有内容库。

## 使用与数据

- 无广告、无内购、无账号。星星、设置和家人录音保存在本机，不上传；存储不可用时，星星及设置退回当前会话保存。
- 首页推荐使用本地插画。部分扩展动物卡和动物世界照片来自外站，需要网络；访问照片时浏览器会向相应图片站点发起请求。
- 在线页面尚未使用 Service Worker，不能保证首次访问后所有内容都可断网使用。下载整个仓库并在本机启动静态服务器后，本地图片和音频可离线使用，外站照片仍需要网络。
- 功能卡片在首次进入对应页面时生成；退出游戏会取消该页面尚未执行的延迟任务。故事正常播放结束后仍会自动翻页，手动翻页或退出会使旧播放回调失效。
- 麦克风录音需要浏览器授权，并使用 HTTPS 或 localhost。手机浏览器的语音、录音及自动播放行为仍应在真机验证。

## 本地预览

```bash
cd baobao-leyuan
python3 -m http.server 8080
# 浏览器打开 http://localhost:8080
```

网页运行不需要 Node.js 或安装依赖。

## 浏览器回归测试

开发测试需要 Node.js 20+：

```bash
npm ci
npx playwright install chromium
npm test
npm run audit:design
```

Linux 若缺少浏览器系统依赖，可使用 `npx playwright install --with-deps chromium`。

17 项功能测试覆盖按需生成、奖励与退出任务、动物分类、故事自动及手动翻页、暂停继续、录音回调、存储异常、休息提醒、全部入口、分类键盘操作、卡片边界、家长弹窗、主题色彩、天气编码、画纸失败与汉字搜索。

设计审计覆盖 40 个页面、57 种界面状态，尺寸为 360×780、390×844、768×1024 与 844×390，检查 228 个组合。脚本会在 JavaScript 异常、初始可见文字溢出、页面横向溢出或过小按钮出现时失败；报告与截图保存到忽略提交的 `test-results/design/`。横向可滚动的分类栏属于有意设计。

这些检查使用 Chromium 和模拟的音频状态，不代替 iOS Safari / Android Chrome 真机试听、录音、拖动及读屏验证，也不构成完整 WCAG 合规认证。

## 维护与贡献

主要维护者：[temptation2017](https://github.com/temptation2017)。欢迎通过 [Issues](https://github.com/temptation2017/baobao-leyuan/issues) 提交可复现的问题、内容纠错和改进建议；提交方式与验证要求见 [CONTRIBUTING.md](CONTRIBUTING.md)。

图片、音频、外部链接及生成记录的来源说明见 [ASSET_NOTICES.md](ASSET_NOTICES.md)。素材的存在或生成记录本身不代表可将其用于任意用途；请按各项实际授权处理。
