# 常用的 Web 字体包


## 字体包


### Acens

![NPM Downloads](https://img.shields.io/npm/dw/%40zf-web-font%2Facens)
![jsDelivr hits (npm)](https://img.shields.io/jsdelivr/npm/hw/%40zf-web-font%2Facens)

```shell
npm install @zf-web-font/acens --save
```

| 字体 | 描述 | 预览 |
| -- | -- | -- |
| `Acens` | |


### Digital

![NPM Downloads](https://img.shields.io/npm/dw/%40zf-web-font%2Fdigital)
![jsDelivr hits (npm)](https://img.shields.io/jsdelivr/npm/hw/%40zf-web-font%2Fdigital)

```shell
npm install @zf-web-font/digital --save
```

| 字体 | 描述 | 预览 |
| -- | -- | -- |
| `Digital` | |


### DIN

![NPM Downloads](https://img.shields.io/npm/dw/%40zf-web-font%2Fdin)
![jsDelivr hits (npm)](https://img.shields.io/jsdelivr/npm/hw/%40zf-web-font%2Fdin)

```shell
npm install @zf-web-font/din --save
```

| 字体 | 描述 | 预览 |
| -- | -- | -- |
| `DIN` | |


### Montserrat Ace

![NPM Downloads](https://img.shields.io/npm/dw/%40zf-web-font%2Fmontserrat-ace)
![jsDelivr hits (npm)](https://img.shields.io/jsdelivr/npm/hw/%40zf-web-font%2Fmontserrat-ace)

```shell
npm install @zf-web-font/montserrat-ace --save
```

| 字体 | 描述 | 预览 |
| -- | -- | -- |
| `Montserrat Ace Bold Italic` | |
| `Montserrat Ace Bold` | |
| `Montserrat Ace Italic` | |
| `Montserrat Ace Light Italic` | |
| `Montserrat Ace Light` | |
| `Montserrat Ace Medium Italic` | |
| `Montserrat Ace Medium` | |
| `Montserrat Ace Regular` | |
| `Montserrat Ace SemiBold Italic` | |
| `Montserrat Ace SemiBold` | |


### OPPOSans

![NPM Downloads](https://img.shields.io/npm/dw/%40zf-web-font%2Fopposans)
![jsDelivr hits (npm)](https://img.shields.io/jsdelivr/npm/hw/%40zf-web-font%2Fopposans)

```shell
npm install @zf-web-font/opposans --save
```

| 字体 | 描述 | 预览 |
| -- | -- | -- |
| `OPPOSans B` / `OPPOSans Bold` | |
| `OPPOSans H` / `OPPOSans Heavy` | |
| `OPPOSans L` / `OPPOSans Light` | |
| `OPPOSans M` / `OPPOSans Medium` | |
| `OPPOSans R` / `OPPOSans Regular` | |


### PangMenZhengDaoBiaoTi *（旁门正道标题）*

![NPM Downloads](https://img.shields.io/npm/dw/%40zf-web-font%2Fpangmenzhengdaobiaoti)
![jsDelivr hits (npm)](https://img.shields.io/jsdelivr/npm/hw/%40zf-web-font%2Fpangmenzhengdaobiaoti)

```shell
npm install @zf-web-font/pangmenzhengdaobiaoti --save
```

| 字体 | 描述 | 预览 |
| -- | -- | -- |
| `PangMenZhengDaoBiaoTi` / `PangMenZhengDaoBiaoTi Regular` | |


### SourceHanSansCN *（思源黑体）*

![NPM Downloads](https://img.shields.io/npm/dw/%40zf-web-font%2Fsourcehansanscn)
![jsDelivr hits (npm)](https://img.shields.io/jsdelivr/npm/hw/%40zf-web-font%2Fsourcehansanscn)

```shell
npm install @zf-web-font/sourcehansanscn --save
```

| 字体 | 描述 | 预览 |
| -- | -- | -- |
| `SourceHanSansCN Bold` | |
| `SourceHanSansCN ExtraLight` | |
| `SourceHanSansCN Heavy` | |
| `SourceHanSansCN Light` | |
| `SourceHanSansCN Medium` | |
| `SourceHanSansCN Normal` | |
| `SourceHanSansCN Regular` | |


### YouSheBiaoTiHei *（优设标题黑）*

![NPM Downloads](https://img.shields.io/npm/dw/%40zf-web-font%2Fyoushebiaotihei)
![jsDelivr hits (npm)](https://img.shields.io/jsdelivr/npm/hw/%40zf-web-font%2Fyoushebiaotihei)

```shell
npm install @zf-web-font/youshebiaotihei --save
```

| 字体 | 描述 | 预览 |
| -- | -- | -- |
| `YouSheBiaoTiHei` / `YouSheBiaoTiHei Regular` | |


## 使用方法

安装对应的字体的 npm 包，在项目中引用样式 `style.css` 或者 `style.scss` 文件。也可以使用带有 cdn 缓存的版本 `style-cdn.css` 或者 `style-cdn.scss`

以 `Acens` 字体为例

NPM 安装字体：

```shell
npm install @zf-web-font/acens --save
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
