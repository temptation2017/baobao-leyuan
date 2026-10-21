# 素材来源与授权说明 / Asset notices

本文件记录已核实的来源线索和复用边界。它不为图片、音频、学习内容或第三方作品授予统一许可，也不替代各项实际许可或授权文件。

## 范围

- 项目的程序代码、技术文档、媒体文件和学习内容需要分别看待。代码采用某种许可证时，不能据此推定所有图片、声音或内容数据也采用该许可证。
- 这些边界与文件后缀无关：写在 JavaScript 数据表或程序内的媒体、文本内容、来源链接也需要保留各自的来源与许可。
- 有单独许可或授权说明的内容按其原说明处理；未记录授权的条目，不应被当作已获任意再分发或商业使用授权。

## 当前可查记录

| 对象 | 已有来源线索 | 记录边界 |
| --- | --- | --- |
| 最近一批计数反馈语音 | 根目录 [generation-receipt.json](generation-receipt.json) 记录了 4 个 MP3 的路径、文本、生成时间、哈希、服务和声线；服务为火山引擎，模型为 seed-tts-2.0 | 这是该批生成记录，不是整个音频目录的授权证明，也不自动授予声线或输出的再许可权 |
| 本地图片、插画与音频 | `assets/animals/`、`assets/audio/`、`assets/candy/`、`assets/coloring/`、`assets/hanzi/`、`assets/icons/`、`assets/picture-books/` | 目录名或本地保存状态不说明权利归属；复用前应核对具体文件的来源与授权 |
| 外部动物照片 | [README.md](README.md) 的“使用与数据”说明了部分扩展动物卡和动物世界照片来自外部站点 | 外部访问请求与文件复用授权是两件事；链接可访问不代表已获得再分发许可 |
| 家人录音 | [README.md](README.md) 说明录音保存在使用者本机浏览器 | 使用者个人录音不属于项目对外分发的素材，不应随 Issue、测试数据或 PR 上传 |
| 开发依赖 | `package.json` 与 `package-lock.json` 记录测试依赖 | 第三方依赖保留各自的许可证与声明 |

## 新增素材应记录什么

维护者或贡献者新增素材时，应尽量同时记录：

1. 仓库路径、作品名称及作者/权利人（若已知）。
2. 原始来源、生成服务或获取渠道，以及具体日期。
3. 适用许可、授权依据与覆盖范围；仅“已下载”或“AI 生成”不足以说明复用条件。
4. 所需署名、修改标记或其他条件。
5. 生成素材对应的可公开生成记录；不要提交密钥、账户凭据、个人参考照片或私密录音。

本文件按已有记录逐步补充，不声明已经完成全仓素材的逐项权利核验。

## English

This file records provenance evidence and reuse boundaries; it is not a blanket media license. Code licensing does not automatically cover photographs, illustrations, audio, voices, story text, learning-content data, third-party works or external resources, including content embedded in source files. Existing notices and item-specific permissions remain applicable. Generation receipts establish provenance for the listed outputs, not ownership or unrestricted redistribution rights. Browser-local family recordings are not project assets for publication.
