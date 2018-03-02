---
path: "/blog/return-to-angular/"
date: "2016-04-20T04:20:00.962Z"
title: "Return to Angular"
type: "blog"
---

This post is more appropriate for me and not you. Unless you, like me, are learning Angular and want all the pieces to fit in your brain.

We have a file `app.js` that has a module named 'myApp' instantiated to app. A module contains the different AngularJS components.

```javascript
var app = angular.module("myApp", []);
```

In our `index.html` we connect our HTML to our Angular via a directive. Directives are instructions back to Angular to run some code. They are namespaced with 'ng-' and are the equivalent of `<% %>` in ERB, sort of. Directives also define the scope - so for our main directive, we want our whole code to be scoped to the whole body text of the HTML.

```html
<body ng-app="myApp">
  <!--- code -->
</body>
```

Now we create a file called `MainController.js` for managing our app's data. In the controller, we are naming our controller as our first argument and passing in an array as our second. This array[0] is set to `$scope` and [1] set to, in our case, a string. Note that we are able to link this controller to our main app in app.js because `controller` is a method of `app`, and `app` is the instantiated angular module. This is how this is all stitched together so far.

```javascript
app.controller('MainController', ['$scope', function($scope) {
  $scope.title = 'This is my String';
}]);
```

Now this `$scope` means that the entire body of the HTML page can access things like `title` using the angular version of string interpolation, which is `{{ site.dlcb }} title {{ site.drcb }}` - now 'This is my String' can be entered into the HTML.

You can also set scoped objects and use dot notation to refer to data in your html.

```javascript
app.controller('MainController', ['$scope', function($scope) {
  $scope.title = 'This is my String Harriet Tubman';
  $scope.promo = "Goodbye Andrew Indian Killer Jackson";
  $scope.product = {
  name: 'The Book of Tubman',
  price: 119
}
```

and the html

```javascript
<div class="thumbnail">
  <img src="img/the-book-of-trees.jpg">
  <p class="title">{{ site.dlcb }} product.name {{ site.drcb }}</p>
  <p class="price">$ {{ site.dlcb }} product.price {{ site.drcb }}</p>
  <p class="date"> </p>
</div>
```

Astute readers will note that above in the "price" class p tag, I hardcoded a dollar - that isnt necessary though with Angular, you can use a pipe like with bash and just send that data to a filter. Here we will use 'currency' and delete the dollar sign.

```javascript
<p class="price">{{ site.dlcb }} product.price | currency {{ site.drcb }}</p>
```

We want to use filters so we are separating the data from the presentation.

Other cool filters include:

* ` | uppercase`
* ` | date `

Also note that this is how you add a date into Angular and also create an array of objects in Angular to reference later.

```javascript
$scope.products =
  [
    {
      name: 'The Book of Trees',
      price: 19,
      pubdate: new Date('2014', '03', '08'),
      cover: 'img/the-book-of-trees.jpg'
    },
    {
      name: 'Program or be Programmed',
      price: 8,
      pubdate: new Date('2013', '08', '01'),
      cover: 'img/program-or-be-programmed.jpg'
    }
  ]
}]);
```

Now we can display this with a loop in the html with the code below. Note that we use `ng-src` instead of plain old `src` inside the `img` tag, and how we use `ng-repeat` and the Ruby-like `product in products` syntax.

```javascript
<div ng-repeat="product in products" class="col-md-6">
  <div class="thumbnail">
    <img ng-src=" {{ site.dlcb }} product.cover {{ site.drcb }} " />
    <p class="title">{{ site.dlcb }} product.name{{ site.drcb }}</p>
    <p class="price">{{ site.dlcb }}product.price | currency{{ site.drcb }}</p>
    <p class="date">{{ site.dlcb }}product.pubdate | date {{ site.drcb }}</p>
  </div>
</div>
```

#### Overview
What I learned about Angular today

* A module contains the different components of an AngularJS app
* A controller manages the app's data
* An expression displays values on the page
* A filter formats the value of an expression
