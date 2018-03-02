---
path: "/blog/fixing-jquery-click/"
date: "2016-04-05T17:12:33.962Z"
title: "Fixing jQuery Click"
type: "blog"
---

## New Update
Dumped the dog cursors and rewrote all of this. [Change details here](http://www.russellschmidt.net/javascript/event/delegation/2016/05/03/Event-Delegation.html).

## Older Update
So my answer below, based on some online digging, is not exactly the canonical answer. The multiple bindings I was causing with .click() were because I was attaching them to the .mouseover actions.

I will draw up a new blog post on the topic when I have the time to revisit my portfolio but for now, my billions of readers will have to be satisfied knowing that a better solution per a couple of Bloc mentors is to use Event Delegation and rework my code a bit.

Here is a link on [Event Delegation](https://davidwalsh.name/event-delegate) I was provided by the helpful mentors.

Until then, enjoy this semi-accurate JavaScript and jQuery problem solving post. I **did** say that the solution seemed hacky so at least I am building something of an instinct I suppose. The reality is that I was trying to help another Bloc student and posted a link to this very blog post and then was corrected in a public channel with 300+ students by two mentors. Not my greatest moment - I should put a dunce cap on my profile picture in Slack.

## More jQuery More Problems
I had wanted to correct a few things in my portfolio that I had left hanging as i jumped into the Alexa project. One item was general styling changes, which were straightforward enough with the help of the Chrome Inspector tool. Another, more nagging concern was that my main project carousel was exhibiting some funky behavior that would put Marky Mark and his Funky Bunch in a deluge of tears of shame for they lacked the funk that my funky carousel brought.

## The JavaScript
So my carousel has a couple of listeners. When the mouse is on the left side of the image, the cursor turns into a German Shorthair Pointer GET IT pointing left and the decrementCarousel function changes the picture in a decrement fashion. Mouse to the right side of the image and the pointer faces right and calls incrementCarousel.

```javascript
var cursorSetOverMainImage = function() {
  $('#projectMain').mousemove(function(event){
    // left shark
    if (event.pageX > imageRectangle.left && event.pageX < midline &&
        event.pageY > imageRectangle.top && event.pageY < imageRectangle.bottom){
      $('html').css("cursor", "url(images/leftpointer-sm.png), auto");
      $('#projectMain img').click(decrementCarousel);

    } else {
    // right shark
      $('html').css("cursor", "url(images/rightpointer-sm.png), auto");
      $('#projectMain img').click(incrementCarousel);
    }
  });
};
```

Here are the incrementCarousel and decrementCarousel functions.

```javascript
// cycle through carousel images
var CAROUSEL_INDEX = 0;

var incrementCarousel = function() {
  CAROUSEL_INDEX++;
  if (CAROUSEL_INDEX = projectArray.length){
    CAROUSEL_INDEX = 0;
  }
  nextProject(CAROUSEL_INDEX);
};

var decrementCarousel = function() {
  CAROUSEL_INDEX--;
  if (CAROUSEL_INDEX < 0) {
    CAROUSEL_INDEX = projectArray.length - 1;
  }
  nextProject(CAROUSEL_INDEX);
};
```

#### The problem
The clicking was producing bizarre behavior - it was not predictable! A click that ought to increment would advance two, not at all, or seem to subtract. Same for decrementing. I only had four items in the carousel but thankful it wasn't two items or I never would have caught this potentially.

So, I put in some console logs and got a real surprise.

```javascript
// cycle through carousel images
var CAROUSEL_INDEX = 0;

var incrementCarousel = function() {
console.log("increment");
console.log(CAROUSEL_INDEX);
  CAROUSEL_INDEX++;
  if (CAROUSEL_INDEX = projectArray.length){
    CAROUSEL_INDEX = 0;
  }
  nextProject(CAROUSEL_INDEX);
console.log(CAROUSEL_INDEX);
};

var decrementCarousel = function() {
console.log("decrement");
console.log(CAROUSEL_INDEX);
  CAROUSEL_INDEX--;
  if (CAROUSEL_INDEX < 0) {
    CAROUSEL_INDEX = projectArray.length - 1;
  }
  nextProject(CAROUSEL_INDEX);
console.log(CAROUSEL_INDEX);
};
```

#### The Surprise
Check out the console! ![cray](/images/screenshot-crazylog.png). One click was producting just tons and tons of click events. Since I wasn't running a loop from anything touching the listener, I wondered if this was something related to the .click event itself. Maybe some sort of bubbling up event I wasn't anticipating.

## No Problemo
Of course, some digging on Stack Overflow mentioned using a different approach with the click. ![No Problemo](/images/no_problemo.png)  Here is the link  for [the StackOverflow Solution](http://stackoverflow.com/questions/14969960/jquery-click-events-firing-multiple-times). Essentially, instead of using .click(), I needed to chain the .off() and then .on() functions. By using the .off(), I unbind all previous events from the event.

What is happening under the hood is that jQuery is adding a new function on each click, and not just calling the function on the click. So this problem escalates quickly and compounds! And true to form, on each click, my console log grew longer than the prior click - it was getting worse, and I could see my site performance perceptibly degrade. Using .off() will clear all prior bindings and now we get the behavior we expect.

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

### Even Better Solutions
Calling .on() and .off() feels a little off. I am not really changing a state, which is what on and off represent, I just want a freaking picture to change on a click. Maybe I am splitting hairs, maybe a new picture is a new state. My instinct is that while this is syntactically weird, it works now, and rewriting everything in JavaScript to get a more perfect click event is not cost-effective.

And yes, while you can use the tried and true .onclick() from vanilla JavaScript, there is another way. You can use `.one('click', function())` but that only works once per page so a terrible solution for a carousel. No, a better solution might be inserting this `event.stopImmediatePropagation();` into your .click() function call as the first line - it kills all further bubbling up and it reads more logically - it is self-evident what it does. Unfortunately, this  will not work for me, as it resets the global counter variable I need to make the carousel work. HACKY SOLUTION FTW.
