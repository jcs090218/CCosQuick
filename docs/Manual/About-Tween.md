# About Tween
> This document is note for Tween module in Cocos Creator.

* https://blog.csdn.net/qq_26542493/article/details/90650799

```ts
/* 移动 */
var mto = cc.moveTo(1,cc.v2(200,200));
this.node.runAction(mto);
var mby = cc.moveBy(0,cc.v2(200,200));
this.node.runAction(mby);

/* 旋转 */
var rto = cc.rotateTo(1,180);
this.node.runAction(rto);
var rby = cc.rotateBy(1,30);
this.node.runAction(rby);

/* 缩放 */
this.node.scale = 2;	//为了便于理解缩放的scaleTo和scaleBy，先指定了一个scale=2
var sto = cc.scaleTo(1,5);   //不管scale为多少,直接设置为节点原始大小的5倍
this.node.runAction(sto);
var sby = cc.scaleBy(1,3);  //这是相乘的结果，2*3=6，即节点原始大小的6倍
this.node.runAction(sby);

/* 淡入淡出 */
var fi = cc.fadeIn(1);
this.node.runAction(fi);
var fo = cc.fadeOut(1);
this.node.runAction(fo);
var ft = cc.fadeTo(1,128);
this.node.runAction(ft);

/* 动作序列 */
var s1 = cc.scaleTo(1,0.5);
var s2 = cc.scaleTo(1,1.5);
var seq = cc.sequence([s1,s2]);  //先缩小再放大
var rep = cc.repeatForever(seq);  //一直执行这个sequence
this.node.runAction(rep);
```
