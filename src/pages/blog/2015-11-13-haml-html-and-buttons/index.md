---
path: "/blog/HAML-HTML-and-Buttons/"
date: "2015-11-13T17:12:33.962Z"
title: "HAML, HTML and Buttons"
type: "blog"
---

## HAML, HTML and Buttons
### TL;DR [this](http://html2haml.herokuapp.com) is all you need
I am in the middle of my bloc.io full stack apprenticeship and decided, with my mentor's blessing and encouragement, to kick things up a notch and try using HAML for all my projects. I am familiar already with ERB and wanted to, well, be lazy and stop closing my Ruby tags.

All was alright in the world, and anyone who is starting out in Rails should at least check out HAML and SLIM to write HTML faster... until the button! The HTML for the button, which was going to pass a status message to the user, is ```html
<button type= "button" data-dismiss="alert" class="close">&times;</button>
```
My first thought was to use the rails helper ```button_to``` but that was a solid fail.  Implemented in HAML, that would look like
```
= button_to 'Label', some_path
```
That helper really is not great as a button that dismisses an alert. It expects a URI of some sort, whether in the form of "http:xyz.com" or some_path, which we do not offer in our button. The ```<button>``` tag actually does not support href links at this time so this is not a great option for us per [CSS-Tricks](https://css-tricks.com/use-button-element/).

Poking around the internet, I came across that great [HTML2HAML](http://html2haml.herokuapp.com) resource.

This ended up being the magic solution:
```ruby
%button.close{"data-dismiss": "alert", type: "button"} &times;
```
I had been close but no cigar because of the "data-dismiss" attribute coming from Bootstrap needing to be enclosed in quotes. This is sort of an odd scenario as the button is designed to dismiss a flash message. More normally, you would write a button using HTML attributes that would look like this:
```
%button.btn.btn-default{type: "submit", name: "submission" } Click 4 Submission
```
