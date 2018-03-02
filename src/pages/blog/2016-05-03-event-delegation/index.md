---
path: "/blog/event-delegation/"
date: "2016-05-03T17:12:33.962Z"
title: "Event Delegation"
type: "blog"
---

We are going to finally totally fix my carousel. I detailed the original issue [in this blog post a month ago](http://www.russellschmidt.net/jquery/click/javascript/portfolio/2016/04/05/Fixing-jQuery-Click.html).

So here is my code with a hacky `off().on('click', function())` solution:

```javascript
var cursorSetOverMainImage = function() {
  $('#projectMain').mousemove(function(event){
    // left shark
    if (event.pageX > imageRectangle.left && event.pageX < midline &&
        event.pageY > imageRectangle.top && event.pageY < imageRectangle.bottom){
      $('html').css("cursor", "url(images/leftpointer-sm.png), auto");
      $('#projectMain img').off().on('click', decrementCarousel);

    } else {
    // right shark
      $('html').css("cursor", "url(images/rightpointer-sm.png), auto");
      $('#projectMain img').off().on('click', incrementCarousel);
    }

  });
};
```

The problem with this solution is that its, well, sorta hacky with that on-off method use and also it *doesn't work all that well*. Sometimes clicks simply do not seem to register.

### Performance Problems
The event delegation solution is pretty elegant.

```javascript
var cursorSetOverMainImage = function() {
  $('#projectMain').mousemove(function(event){
    // left shark
    if (event.pageX > imageRectangle.left && event.pageX < midline &&
        event.pageY > imageRectangle.top && event.pageY < imageRectangle.bottom){
      $('html').css("cursor", "url(images/leftpointer-sm.png), auto");
      $('#projectMain').on('click', 'img', decrementCarousel);

    } else {
    // right shark
      $('html').css("cursor", "url(images/rightpointer-sm.png), auto");
      $('#projectMain').on('click', 'img', incrementCarousel);
    }
  });
};
```

Basically, now I only fire the click event once, for the image (img) element, when that bubbles up. I leaned heavily on [jQuery documentation](https://api.jquery.com/mousemove/) for the solution.

The problem though is that I am creating a real issue with performance. Just to get a single click to advance my carousel, I am creating dozens of browser events. Each movement across a pixel is creating a performance drag on the browser, and I am trying to listen to the new Radiohead with 1,000 tabs open and running a Jekyll and Rails server on separate windows and well my 2008 Mac Pro is feeling the heat and I am getting a spinning beach ball.

### Refactor for Performance
So this is why Yahweh invented buttons. As cool as my pointer dogs are when they replace my cursor, its killing the performance of my portfolio and we don't need that. SPINNING BEACH BALL FROM MY PORTFOLIO SITE HIRE ME PLZ.

So I am going to put in a couple of images for left and right advancing through the image collection. The directional buttons will still use event delegation to prove to myself that I know what I am doing. I want them to float above the main image so they don't mess up my layout.

Here is the jQuery that shows off the HTML structure

```javascript
var nextProject = function(index) {
  $('#projectMain').html('<span id="left-arrow"> < </span><img src="'+projectArray[index].image+'"><span id="right-arrow"> > </span>');
  changeProjectText(index);
};
```

and here is the jQuery call

```javascript
$(window).load(function(){
  ...
  $('#projectMain').on('click', 'span#left-arrow', decrementCarousel);
  $('#projectMain').on('click', 'span#right-arrow', incrementCarousel)
});
```

We now have a very syntactically compact, performant couple of function calls that are using event delegation per my mentor's guidance. I finally solved the problem of clicking once and advancing a seemingly random number of times due to the bubbling up effects, no more spinning beach ball, and the transitions are nice and snappy so the site presents itself, and represents me, better.

Ah but there is trouble in paradise. Because I made the selectors `span` elements inside the `div`, an overeager clicker can double click the div and select the image and then everything gets weird. There is a simple CSS (I am using Sass but you get the idea) solution to this, and that is to make the image non-selectable.

```sass
#projectMain {
  width: $width-img-main * (5/6) + ($border-width-img-main * 2) + ($padding-width-img-main * 2);
  border: $border-width-img-main solid $grey-color-light;
  height: $height-img-main * (5/6) + ($border-width-img-main * 2) + ($padding-width-img-main * 2);

  & img {
    padding: $padding-width-img-main;
    height: $height-img-main * (5/6);
    width: $width-img-main * (5/6);
    /* prevent selection when hitting #left-arrow decrement/#right-arrow increment */
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -o-user-select: none;
    user-select: none;
  }
  ...
}
```

The `user-select` property can be used to make it so elements cannot be selected by a mouse, which in this case, makes the site even more fun since users can click their little fingers off in cycling through all of my projects. And with that, I check that the resized window keeps the selectors in place (they do) and call it a day on this thorny issue.


<div style="text-align: center; margin-top: 30px; float: none;">
  <img style="width: 500px; height: 367px" src="http://clipperdata.com/wp-content/uploads/2015/07/I-love-it-when-a-plan-comes-together.jpg" alt="A-Team love it when a plan comes together">
</div>
