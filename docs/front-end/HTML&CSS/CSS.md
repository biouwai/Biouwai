# CSS

## 1.选择器及优先级

CSS 选择器的权重规则可以总结如下：

- !important 会覆盖页面内任何位置的元素样式
- 内联样式，如 style="color: green"，权值为 1000
- ID 选择器，如#app，权值为 0100
- 类、伪类、属性选择器，如.foo, :first-child, div[class="foo"]，权值为 0010
- 标签、伪元素选择器，如 div::first-line，权值为 0001
- 通配符、子类选择器、兄弟选择器、后代选择器，如\*, >, +，' '权值为 0000
- 继承的样式没有权值

下面是一个权重计算的示例：

```css
/_ 权重为 0001 _/ div {
}

/_ 权重为 0010 _/ .class1 {
}

/_ 权重为 0100 _/ #id1 {
}

/_ 权重为 101 _/ #id1 div {
}

/_ 权重为 0011 _/ .class1 div {
}

/_ 权重为 0021 _/ .class1 .class2 div {
}
```

根据权重的计算规则，从左到右比较，选择器的权重越高，其样式优先级越高，将更有可能应用到对应的元素上。

## 2.伪类和伪元素的区别

1. 伪类-->单冒号: 伪类是用于选择元素的特定状态或动作的关键字，例如 :hover、:active、:focus 等。表**示元素的某种状态或行为**，它们通常用于选择元素的特定状态并应用相应的样式。
2. 伪元素-->双冒号:： 伪元素是用于在文档中生成或插入特定内容的关键字，例如 ::before、::after、::first-line、::first-letter 等。它们允许开发人员在元素的特定位置添加样式或内容，无需在文档中实际插入额外的 HTML 元素。
3. 总结：伪类选中是**真实元素**的特定行为或动作。伪元素是在元素中选择一个特定位置添加样式，**而不需要真正的添加 HTML 元素**

## 3.盒模型

box-sizing 属性用于控制元素的盒模型类型，常用的属性值有：

- content-box：默认值，使用标准的 W3C 盒模型，元素的宽度和高度**仅包括内容区域（content）**，不包括填充、边框和外边距。
- border-box：使用怪异的 IE 盒模型，元素的宽度和高度包括内容区域（content）、填充（padding）和边框（border），但**不包括外边距（margin）**。即元素的宽度和高度指定的是内容区域加上填充和边框的总宽度和高度。
- inherit：继承父元素的 box-sizing 属性值。
- 不管怎样，背景色都包含 padding

## 4.CSS 常见单位

## 5.隐藏元素

- display:none; --> 元素从文档流中移除，元素不在页面中占位置，不会绑定监听事件。
- visibility:hidden;元素仍占空间，但不绑定监听事件，是继承属性。子孙可通过 visibility:visible 显示。

## 6.CSS 动画

```css
/* 定义动画关键帧 */
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* 应用动画到元素 */
.element {
  animation-name: rotate; /* 指定动画名称 */
  animation-duration: 3s; /* 动画持续时间 */
  animation-timing-function: linear; /* 动画速度曲线 */
  animation-delay: 0s; /* 动画延迟时间 */
  animation-iteration-count: infinite; /* 动画重复次数，这里设置为无限循环 */
  animation-direction: normal; /* 动画播放方向 */
}
```
