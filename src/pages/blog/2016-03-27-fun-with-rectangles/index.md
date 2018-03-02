---
path: "/blog/fun-with-rectangles/"
date: "2016-03-27T17:12:33.962Z"
title: "Fun With Rectangles"
type: "blog"
---

Inspired by this gentleman's [really cool portfolio](http://www.tim-kaufmann.net/) that reminded me of the artist [Joseph Beuys](https://en.wikipedia.org/wiki/Joseph_Beuys), I decided that the finishing touch on my portfolio would be a dynamic mouse cursor that changes to left or right based upon the mouse position when hovering over the main project image. Then with a click, you advance or retreat on the slideshow.

## EASY. RIGHT.
So some basics first.

Off to Stack Overflow (SO) we go. I am shocked to find out that I am not the first person to want to accomplish this task. [This was one way to do it](http://stackoverflow.com/questions/3228826/how-to-change-cursor-based-on-mouse-position) that I didn't love - I thought I remembered a one-liner that could return object coordinates. I enjoyed the advice about setting the coordinates as a global, so your application is not checking this information over and over again.

Then I found [this SO link](http://stackoverflow.com/questions/442404/retrieve-the-position-x-y-of-an-html-element), which is what I had in mind.

```JavaScript
var rect = element.getBoundingClientRect();
console.log(rect.top, rect.right, rect.bottom, rect.left);
```

I used this instead, pulling the variable into a global per the earlier advice.

```JavaScript
var imageRectangle = document.getElementById('projectMain').getBoundingClientRect();
...
// project cursor
var rectangleDimensions = function() {

  alert(imageRectangle.top +" "+ imageRectangle.right +" "+ imageRectangle.bottom +" "+ imageRectangle.left);
};
```

Keep in mind this is not jQuery - I was scratching my head wondering why $('projectMain').getBoundingClientRect() wasn't working until I caught on.

So now I can get the x,y coordinates of the `<div id="projectMain">` - hip hop hooray. Now to my brain, I need to define listeners based upon the areas of the `<div>`, implement CSS via JS to change the mouse cursor on entry and leaving, create some code to connect the left or right click to decrement and increment respectively,  and find some obnoxious PNG images with a transparent back to serve as my cursor.

### Define Listeners
We want to call a function when a mouse enters our `div`.

in the main `$(window).load(function() {` function
```JavaScript
$('#projectMain').mouseover(cursorSetOverMainImage);
```

and we can copy over the alert to make sure it works on hover.

```JavaScript
var cursorSetOverMainImage = function() {
    alert(imageRectangle.top +" "+ imageRectangle.right +" "+ imageRectangle.bottom +" "+ imageRectangle.left);
};
```

Now that we know we are doing what we want, we can do an if statement and just split that `div` down the middle like King Solomon The Destroyer, who loved slicing babies in half, it gave him bizarre lustful satisfaction. So how do I ask where the mouse is? HELLO MOUSE WHERE ARE YOU? Specifically, I want the x-coordinates (left-right aka horizontal) since I only care about left and right.  Getting the halfway point is trivial junior high geometry (x2 - x1)/2 aka the average, than add that to the x1 to get the middle. I am not sure if I even care about the y-coordinates since I have a hunch that, since the mouseover only fires if the cursor is over the target, I don't have to worry about what happens when the cursor leaves. Filing that away for something I may or may not have to deal with.






