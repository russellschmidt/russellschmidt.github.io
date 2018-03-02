---
path: "/blog/javascript-fun/"
date: "2016-03-20T17:12:33.962Z"
title: "JavaScript Fun"
type: "blog"
---

My JavaScript journey is well underway, with my personal portfolio finally going up. I poured out some Hennessey for my PHP-based site and the various PHP projects I had on there.

I am a little torn on a couple of things. I love the performance of JavaScript, and am having a blast changing HTML elements with scripting. My problem is that there appears to be a clear tradeoff between a performant use of JavaScript, especially as it pertains to images, and a pretty, user-friendly use of JavaScript.

For example, I was going to make an image carousel for my portfolio site. Wanting to avoid a simple plug-in so as to showcase my programming skills instead, I hunted around for tutorials to inspire me. What I learned was that the common carousel pattern is to load all of the carousel pictures but only make one visibile at a time. This allows for an animated transition between images.

This annoyed me because I wanted the fast loading time I had acheived through an even simpler method. I had put all of the project descriptors into objects, and each object into an array. I simply loop through the array on a click event to cycle through the screenshots of the projects - if the thumbnail ID matches the object's ID field, just change the hero image `src` attribute to the object's image filepath. But then it seems that all of the great CSS3 animations I wanted to use require the elements to already be present in the page (duh) to be used.

Since the portfolio is supposed to be a showcase of my abilities, I certainly want to throw in some fun animation to make my site delightful and amazing to all who behold it. I might need to instead add in some other elements to show off instead.
