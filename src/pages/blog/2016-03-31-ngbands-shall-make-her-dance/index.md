---
path: "/blog/ngbands-make-her-dance/"
date: "2016-03-31T17:12:33.962Z"
title: "ngBands Make Her Dance"
type: "blog"
---

## Pull the trigger until it goes ngClick
Starting out nice and easy, `ngClick` is the Angular version of `.click()`. You can write `<element ng-click="expression"></element>` and the Expression evaluates on click.

[Angular documentation on ngClick](https://docs.angularjs.org/api/ng/directive/ngClick)

## ngShow me the Money
I am so, so sorry. The Dad jokes flow through me and if I don't type them they just will not leave my brain. It is an exorcism. `ngShow` is Angular's version of `.show()` for the record. The Angular inverse is... ngHide. Amazing.

[Angular documentation on ngShow](https://docs.angularjs.org/api/ng/directive/ngShow)

## Nowhere to run to baby, nowhere to ngHide
I wish I could make this punning stop. `ngHide` does as advertised, hides elements. It works in tandem with ngShow. You can use `ng-hide="someValue"`, you can set `class="ng-hide"` or both.

[Angular documentation on ngHide](https://docs.angularjs.org/api/ng/directive/ngHide)

### Ha Ha Ha how the f*!@ do I use this thing
In Angular you can write `<div ng-show="someValue"></div>` and if `someValue` is true (well, truthy) the element shows. You can write `<div ng-show="myValue" class="ng-hide"></div>` so that if myValue is true, it shows, else, it hides the element, making it explicit.  ngShow will set the CSS of that element `display: none` (which feels a bit familiar and jQuery-esque).

You can override or change ngHide in CSS by just defining a .ng-hide {} series of styles and moving the element off-screen.

### ngInclude-r alert
The directive `ng-include` is built in to Angular and allows you to bring  outside templates into your view. Very similar to how you would bring in a partial in rails in concept, but using HTML which I find so cool

```html
 <ng-include src="'/templates/some_cool_file.html'"></ng-include>
```

### ngMouseover Beethoven (and ngMouseleave)
 Worst pun yet. I can't apologize enough. These two Angular directives launch expressions based on mouse position vis a vis the associated element. `<element ng-mouseover="expression1" ng-mouseleave="expression2"></element>`

[Angular documentaton on ngMouseover](https://docs.angularjs.org/api/ng/directive/ngMouseover)

[Angular documentation on ngMouseleave](https://docs.angularjs.org/api/ng/directive/ngMouseleave)

### ngInit Picky
OK I had one more in me. `ngInit` sets an initial value for elements (or rather,  variables associated with an element).

```javascript
<button ng-mouseover="count = count + 1" ng-init="count=0">
  Increment (when mouse is over)
</button>
count: {{count}}
```

[Angular documentation for ngInit](https://docs.angularjs.org/api/ng/directive/ngInit)

Gratuitious Big Lebowski Reference ![The Jesus](http://assets.sbnation.com/imported_assets/81090/jesus_medium.jpg)
