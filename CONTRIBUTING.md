# 参与宝宝乐园 / Contributing

感谢你帮助改善适合亲子使用的学习和游戏体验。

## 报告问题

请在 [Issues](https://github.com/temptation2017/baobao-leyuan/issues) 中提供：

- 所在页面或活动名称、复现步骤、预期表现与实际表现。
- 设备、系统与浏览器版本；声音或录音问题请说明权限和静音状态。
- 与问题相关的截图或简短录屏。请先遮住姓名、孩子照片、录音内容及其他个人信息。

内容纠错请说明具体条目、正确内容与可靠参考。功能建议请解释使用场景，以及怎样帮助孩子或家长。

## 修改代码

1. 先说明要解决的问题；较大变更请先开 Issue 讨论。
2. 保持运行时的纯静态结构。开发依赖用于测试，网页运行不需要构建。
3. 保留无广告、无内购、无账号注册的现有产品方向；新增网络请求、数据存储或权限需求应在 PR 中明确说明。
4. 复用现有界面组件与图标，兼顾触摸操作、键盘操作、焦点、减少动态效果设置和窄屏布局。
5. 提交前检查实际涉及的功能；文档修改检查文字与链接即可。

本地预览和测试命令见 [README.md](README.md)。功能变更可运行：

```bash
npm ci
npx playwright install chromium
npm test
```

影响布局或界面状态时，再运行：

```bash
npm run audit:design
```

测试使用 Chromium。涉及音频、录音、拖动和触摸的变更，请在 PR 中写明是否做过手机真机验证，以及尚未验证的范围。

## 图片、声音与内容

- 添加素材前说明来源、作者或服务、适用许可或授权依据，以及文件对应关系。
- 生成素材请记录工具、模型或服务、生成日期及可公开的提示词/生成记录；生成记录不能替代授权依据。
- 不要提交 API 密钥、账号令牌、个人录音或未经允许公开的参考照片。
- 不要将下载到本地或可以外链访问等同于拥有再分发权。
- 保留已有的作者、来源、许可及依赖声明。参见 [ASSET_NOTICES.md](ASSET_NOTICES.md)。

## PR 说明

请说明：为什么需要修改、改动后的行为、验证结果，以及任何未解决的限制。截图只需覆盖实际受影响的界面，不必为纯文档修改运行浏览器测试。

## English

Report reproducible bugs or content corrections with the activity name, device/browser details and expected behavior. Explain the user need before proposing substantial changes. Keep the static runtime and existing privacy behavior, document new network requests, preserve source and license notices, and include checks relevant to the change. Do not upload personal recordings, private reference images, credentials or assets without suitable permission.
