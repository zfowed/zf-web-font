# 常用的 Web 字体包


## 字体包

|字体系列 | 字体 | npm 包 |
| -- | -- | -- |
| `Acens` | `Acens` | `@zf-web-font/acens` |
| `Digital` | `Digital` | `@zf-web-font/digital` |
| `DIN` | `DIN Medium` | `@zf-web-font/din` |
| `Montserrat Ace` | `Montserrat Ace Bold Italic`, `Montserrat Ace Bold`, `Montserrat Ace Italic`, `Montserrat Ace Light Italic`, `Montserrat Ace Light`, `Montserrat Ace Medium Italic`, `Montserrat Ace Medium`, `Montserrat Ace Regular`, `Montserrat Ace SemiBold Italic`, `Montserrat Ace SemiBold` | `@zf-web-font/montserrat-ace` |
| `OPPOSans` | `OPPOSans Bold`, `OPPOSans Heavy`, `OPPOSans Light`, `OPPOSans Medium`, `OPPOSans Regular`, `OPPOSans B`, `OPPOSans H`, `OPPOSans L`, `OPPOSans M`, `OPPOSans R` | `@zf-web-font/opposans` |
| `PangMenZhengDaoBiaoTi` | `PangMenZhengDaoBiaoTi`, `PangMenZhengDaoBiaoTi Regular` | `@zf-web-font/pangmenzhengdaobiaoti` |
| `SourceHanSansCN` | `SourceHanSansCN Bold`, `SourceHanSansCN ExtraLight`, `SourceHanSansCN Heavy`, `SourceHanSansCN Light`, `SourceHanSansCN Medium`, `SourceHanSansCN Normal`, `SourceHanSansCN Regular` | `@zf-web-font/sourcehansanscn` |
| `YouSheBiaoTiHei` | `YouSheBiaoTiHei`, `YouSheBiaoTiHei Regular` | `@zf-web-font/youshebiaotihei` |


## 使用方法

安装对应的字体的 npm 包，在项目中引用样式 `style.css` 或者 `style.scss` 文件。也可以使用带有 cdn 缓存的版本 `style-cdn.css` 或者 `style-cdn.scss`

以 `Acens` 字体为例

NPM 安装字体：

```shell
npm install @zf-web-font/acens
```

引用样式文件：

* 无 CDN 版本：
  * JS 文件引用： `import "@zf-web-font/acens/style.css"`
  * CSS 文件引用： `@import "@zf-web-font/acens/style.css"`
  * SCSS 文件引用： `@import "@zf-web-font/acens/style.scss"`
* CDN版本
  * JS 文件引用： `import "@zf-web-font/acens/style-cdn.css"`
  * CSS 文件引用： `@import "@zf-web-font/acens/style-cdn.css"`
  * SCSS 文件引用： `@import "@zf-web-font/acens/style-cdn.scss"`

通过 css 参数 `font-family` 使用 字体

```css
.text {
  font-family: "Acens";
}
