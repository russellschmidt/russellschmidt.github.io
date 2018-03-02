---
path: "/blog/angular-intro/"
date: "2016-03-29T17:12:33.962Z"
title: "Angular Intro"
type: "blog"
---

I took a couple of online classes in Angular but this is the big day. Angular becomes an assignment. I am excited because (a) I am a trendy sheep just doing whatever the cool kids say to do and (b) I have heard a lot about Angular and am very curious about the advantages of using it. I enjoyed using it within the tutorial but did not start drooling over it. That said, I really wanted to come out of the Bloc program being able to make a snazzy, performant Single Page Application (SPA) - you know, some cool website that doesn't need to refresh or open other pages? Car companies love them for specific models, and personal portfolios and startups often have them. They deliver a great near-native mobile experience and I have a need for speed. ![Maverick knows whats up](http://cdn.quotesgram.com/small/22/99/1666096374-i-feel-the-need-the-need-for-speed-quote-1.jpg)

## Fun Stuff About Angular
Maybe the greatest SPA is Gmail, and that, at least today, is written in Angular.

Angular is great because now you can use all sorts of new vocabulary to sound awesome to your friends. Directives, two-way data binding, modules, and filters are all fun terms you can use to impress your parents because they sound very tech-y.

Angular brings the MVC pattern to JavaScript, which is nice for us Rails folk (Railsmen? Railers? Raisins). Although it is called MVVM (model-view-view model) which is not as funny as what PHP standard for (PHP Hyper Processor) but is more symmetrical. The differences between MVVM and MVC appear to be that the ViewModel is this idea of data bindings. After some time on Wikipedia, it appears that this means that there is some sort of instantaneous change reflected automatically. I suppose it is this instant change that is difference from say an MVC Rails app where there is a whole server refresh cycle of the view sending data to controller that talks to the model which spits out some data back out to the controller which presents the new and improved view.

### "I might be wrongggg"
![Thom Yorke is skeptical](http://www.reactiongifs.com/wp-content/uploads/2013/07/yelch.gif). As ever I really like the theory but it takes 10 times longer to describe something you have never done than to just do it and talk about it.

### Mod Yules
Modules are the containers for the other parts of the application. We want to be conscious of namespacing and scope as ever so we dont overwrite our global variables and functions, which we are encouraged to avoid. Speaking of namespacing - directives in Angular use the `ng-` prefix. For example, `<div ng-click="doSomeStuff()"></div>` will execute the subtly named 'doSomeStuff' method on clicking that div.

### Myxomatosis
Well I now have Radiohead on the brain, and a lot of supplemental reading to do.

#### Sail to the Moon
What I learned from Angular from the homepage of Angular (see links):
1. Angular templates are plain HTML with Angular-specific elements and attributes.
2. Unit testing is enabled
3. Annoying 'glue code' and callbacks and such are replaced with reusable code in the background of Angular
4. Anuglar is meant for a standard CRUD based website talking to a database somehow. Games and GUI editors - not so great for Angular.
5. Easily get going with AJAX instead of writing lots of custom 'plumbing' code.
6. Two way data binding means that changes show up instantly instead of needing a refresh or model update. Changes to the View update the Model which updates that View instantaneously. (See: Angular Scopes - the controller and view both watch the model via scope-provided APIs).

#### Angular Elements and Templates
1. Directives - just markup you put in via attribute or element augmenting existing elements or a new element
2. Markup - {% raw %}{{ }}{% endraw %} double curlies. Bind expressions to elements is built-in Angular markup.
3. Filter - control the data for display
4. Form Controls - use these to validate user input.
Here is the example from [here](https://docs.angularjs.org/guide/templates).

```html
{% raw %}

<html ng-app>
 <!-- Body tag augmented with ngController directive  -->
 <body ng-controller="MyController">
   <input ng-model="foo" value="bar">
   <!-- Button tag with ng-click directive, and
          string expression 'buttonText'
          wrapped in "{{ }}" markup -->
   <button ng-click="changeFoo()">{{ buttonText }}</button>
   <script src="angular.js">
 </body>
</html>

{% endraw %}
```

Templates can be just index.html or use partials so you can use many views on one page.

#### Links
##### Intro to Angular
[From the horse's mouth - Angularjs.org](https://code.angularjs.org/1.4.7/docs/guide/introduction) - this is a pretty great intro to Angular.
[Angular Two Way Data Binding](https://docs.angularjs.org/guide/databinding)
[Angular Scopes](https://docs.angularjs.org/guide/scope)
[Angular Templates](https://docs.angularjs.org/guide/templates)

##### Tutorials
[Angular Tutorial](https://docs.angularjs.org/tutorial/)
[Angular from AirPair.com](https://www.airpair.com/angularjs/posts/angularjs-tutorial)
[10 Angular demos](http://angularjs4u.com/demos/10-angularjs-crud-app-demos/)

##### JavaScript Testing
[Jasmine](http://jasmine.github.io/)
[Mocha](https://mochajs.org/)
[Chai](http://chaijs.com/)
[About Jasmine, Mocha, Chai](http://thejsguy.com/2015/01/12/jasmine-vs-mocha-chai-and-sinon.html)

##### Angular Testing



