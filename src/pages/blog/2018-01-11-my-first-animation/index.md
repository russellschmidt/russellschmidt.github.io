---
path: "/blog/my-first-animation/"
date: "2018-01-11T17:12:33.962Z"
title: "My First Animation"
type: "blog"
---

Making the animation in HTML canvas is only half the battle. Getting it to then
display on Jekyll is the next phase.

Well the trick is to take the Adobe Animate default .js file they give you, stick it right into your scripts folder, include that file in your template for your posts, and then you can just copy-paste the html right in there as I did below.

Make sure you don't export image files to their own folder when publishing from Animator 2018 as Jekyll and the filepath Adobe gives it don't play nice together.

<div id="animation_container" style="background-color:rgba(51, 153, 255, 1.00); width:747px; height:420px">
  <canvas id="canvas" width="747" height="420" style="position: absolute; display: block; background-color:rgba(51, 153, 255, 1.00);"></canvas>
  <div id="dom_overlay_container" style="pointer-events:none; overflow:hidden; width:747px; height:420px; position: absolute; left: 0px; top: 0px; display: block;">
  </div>
</div>
