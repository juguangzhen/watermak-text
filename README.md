### INSTALL

```
npm instsall watermark-text
```

### USE
```
let watermarkData = {
        el: document.body,                   // 要插入水印的节点
        str: 'watermark content',            // 水印内容 ** required **
        id: 'guangzhen.ju.o',                // 水印ID
        fontSize: '12px',                    // 水印字体大小
        fontFamily: 'Arial',                 // 水印字体
        rotate: -30,                         // 旋转角度
        width: 280,                          // 单个水印宽度
        height: 280,                         // 单个水印高度
        background: 'rgba(0, 15, 22, 0.06)', // 水印颜色
    }

waterMark.set(watermarkData)

```
