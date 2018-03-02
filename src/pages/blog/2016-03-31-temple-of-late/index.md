---
path: "/blog/template-of-late/"
date: "2016-03-31T17:12:33.962Z"
title: "Template of Late"
type: "blog"
---

Learned a bit today about **imperative** versus **declarative** view manipulation. In general, jQuery is an aftermarket bolt-on while Angular is a new chassis. Aftermarket parts can be awesome - and jQuery is incredibly useful and great - but it is a totally different approach. I had thought I would sprinkle some Angular on my existing sites until I poked around and saw that Angular begs for a rewrite. It is an opinionated framework like Rails, and the first step is taking that trust fall and doing everything their way.

Thinking of the Angular project as an application that happens to live on the web and not a webpage is useful to start. So, you want to avoid changing the DOM behind the scenes with jQuery, you want to add directives and work behind the scenes so that the View matches what the user sees and is easy for developers to understand by looking at the code.

Directives are an interesting concept. They function sorta like partials one would call in Rails via ERB in the view, though they offer real-time responsiveness and are called - ideally - by descriptive attributes you are writing right in the HTML. In jQuery, I would programmatically add classes, change css, etc. behind the scenes, but in Angular, you can use a directive to import an HTML template into the code that is more obivous as to what you are doing.

I thought this example from [SO](http://stackoverflow.com/questions/14994391/thinking-in-angularjs-if-i-have-a-jquery-background#answer-14994393) was great. Actually that entire SO post was awesome and worth a read.

```JavaScript
.directive( 'myDirective', function () {
    return {
        scope: true,
        template: '<a class="btn" ng-class="{active: on}" ng-click="toggle()">Toggle me!</a>',
        link: function ( scope, element, attrs ) {
            scope.on = false;

            scope.toggle = function () {
                scope.on = !scope.on;
            };
        }
    };
});
```

### Imperator - Senatus Populusque Romanus
Imperative code works by call and response, or rather, listening and then executing. When I write jQuery, I create a listener first `element.click(doThatThing)` where `doThatThing()` is some amazing function (an event handler) that does my bidding. There are a couple parts to that - a listener that takes in a DOM (think timer or on load) or user action (click, type, etc.), and event handler that the listener calls.

So, I am creating an HTML superstructure and bolting on jQuery. That makes it sound like a negative value judgment, but that is not the case - I think jQuery, and JavaScript in how it was traditionally used to spice up existing websites, are great. Marvelous, superb, fun, exciting, clever. I could go on. And I am not about to advocate rewriting every website to be Angular compliant, or ditch perfectly fine Rails projects with some jQuery sauce on the side - jQuery is to be honored.

###
Angular is built on this idea of views and templates and is not concerned about DOM elements. Views are made of HTML, and the HTML is full of directives, and it is these directives that fire off JavaScript functions. The Views themselves are reflections of an underlying model, a "projection" of the model. Events that change the model or models then automatically change views - the HTML on the page - instead of manipulating the superstructure of HTML like a dream sequence in Inception.

This is considered 'unobtrusive JavaScript' - the JS doesn't directly touch the HTML, but is working behind the scenes, changing the HTML through the presentation of Views.

### Links
This summary, as usual, was for me, not you, but I hope you enjoyed it. Here is where I cribbed all this from to look smart.

* [original SO post I love](http://stackoverflow.com/questions/14994391/thinking-in-angularjs-if-i-have-a-jquery-background#answer-14994393)
* [SO on Scope & Inheritance in Angular](http://stackoverflow.com/questions/14049480/what-are-the-nuances-of-scope-prototypal-prototypical-inheritance-in-angularjs)
* [Same Scope w/o edits on Angular Wiki](https://github.com/angular/angular.js/wiki/Understanding-Scopes)
* [Y U No ng-{event}?](http://stackoverflow.com/questions/14346073/angularjs-is-ng-click-a-good-practice-why-is-there-no-ng-event-in-angularj/14346528#14346528)
