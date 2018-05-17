# 动效库
用以整理各类动画理论和展示简单动画效果，交流为主。  
案例：https://foreverZ133.github.io/mine-anim/

## 动画分类
显隐类、普通类、图形类、多元素类、帧动画

### 显隐类动画类型
普通型、形变型、蒙版裁剪型、3D型  
适用场景：转场、弹窗/新界面  
// 例子，从右侧出现  

<img src="./gif/1.gif" width="100%"/>

// 例子2，弹窗出现

<img src="./gif/2.gif" width="100%"/>

### 普通类
抖动、闪烁、Q弹、循环  
适用场景：固定动效、小交互  
// 例子

### 图形类
简单点的比如方变圆，也可以很复杂，多基于 SVG 或 canvas 来实现  
// 例子，变化的 logo

### 多元素类
交错、延迟跟随、数量变化

## 常见动画属性修改
位置、旋转(包括3D)、缩放(包括单轴)、斜切、透明度、蒙版、换图、颜色(字/背景/边框)、描边

## 动画节奏
比如先快后慢，多适用二级、多级贝塞尔曲线。  
可视化制作工具：[cubic-bezier](http://yisibl.github.io/cubic-bezier/)、[Stylie](http://jeremyckahn.github.io/stylie/)

## 拓展阅读
整理中...

---- 

### 需要注意的问题
* 案例涉及 CSS、SVG、canvas 等多种实现技术，也正代表着每个案例不只一种解决办法。  
* 本案多以 z-index:-1 和 pointer-events:none 来替代 display:none 实现隐藏，个人认为性能更加。  
* transfrom 在移动端可能出现莫名超出，注意将其父级或祖父级 overflow 一下。  