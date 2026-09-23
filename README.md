# 设计研究图谱网页

这是课程作业的静态网页版本，包含：

- 三种研究类型的定义；
- 选定的 `logic-triangle-field.svg` 逻辑关系图；
- 三类研究比较表；
- 三篇典型论文；
- 分类争议论文；
- 论文原文证据弹窗；
- DOI、期刊页面和参考文献链接。

## 本地预览

在当前文件夹上一级目录启动静态服务器：

```powershell
python -m http.server 4173 --directory outputs/design-research-site
```

然后打开：

http://localhost:4173

## 发布

这是一个不依赖构建工具的静态站点。将 `design-research-site` 文件夹上传到 GitHub Pages、Netlify、Vercel 或其他静态托管服务即可。

