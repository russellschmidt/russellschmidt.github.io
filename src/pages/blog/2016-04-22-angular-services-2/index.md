---
path: "/blog/angular-services-2/"
date: "2016-04-22T17:12:33.962Z"
title: "Angular Services 2"
type: "blog"
---

As I march through the services swamp in Angular, I am picking up some information that may or may not be of help to anyone, but that I want to commit to written form.

Understanding that Controllers are mere objects (as is everything else) demystifies a lot of their operation for me. You can add new methods and variables at will, and refactor later if need be. If everything is hooked up right this gives your view template visibility to the controller subcomponents.

Using the `ng-Repeat` directive is cool for a couple of reasons. One, it lets you loop through data collections, so that is very handy. But I find that more often than not I am relying on it to give me access from the View (html template) to individual objects. You can pass in a variable exposed in an `ng-repeat` to an argument in an `ng-click`-triggered function to make things happen on your screen.

### Learning How To Comment
I really like the Bloc formula for how to comment. Examples are below.

For attributes aka variables:

```javascript
/**
* @desc MP3 music file
* @type {Object}
*/
```

For functions aka methods:

```javascript
/**
 * @function playTheSong
 * @desc Plays the currently selected song
 * @param {Object} song
 * @returns {Number} of the song
 */
```

### Bug Catching
Caught a small bug on each of the last two Bloc assignments. They were both fixed in the assignment and partially worked in the checkpoint so I could see how they would slide right by them.
