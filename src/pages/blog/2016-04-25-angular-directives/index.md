---
path: "/blog/angular-directives/"
date: "2016-04-25T17:12:33.962Z"
title: "Angular Directives"
type: "blog"
---

Angular directives are the little snippets of Angular you put in your HTML. They call the Angular code - er, bind the functionality - in the places on the page where you want things to happen. Ive been exposed to `ngApp` which is the basic connection between HTML and the Angular code, setting the root element of the application. Then   `ngController` connects the controller to the view. `ngRepeat` allows for looping through a collection using a template. `ngClick` specifies behavior for when the user clicks an element on the page. `ngShow` shows or hides an HTML element based on an evaluated expression.

There are a couple of directives from the UI-Router plug in I've used also. These are `ui-view` which places the view templates on the page and `ui-sref` which bind `<a>` tags to a state.

#### Custom directives
You can make your own directives too. We can reference them in four ways from the HTML. You can set them equal to an expression, so the directive fires if the expression is true (truthy). You can also apply a class via the directive if an expression is true. The third reference is using the directive as an element itself via a custom tag name. Lastly, you can invoke a directive via comments. The Element and Attribute (options 3 and 1 respectively) are the officially encouraged methods for directives.

#### Murder was the Case
Directives are written in camelCase but referred to in HTML as dash-delimited. HTML is not case sensitive so Angular will change dash-delimited to camelCase on compile. Also if you are making your own directives be sure to name-space them with something unique to avoid needless and hard to diagnose errors when you have overwritten other functionality.

#### Making a Directive
There are three key ingredients. First, you need to create a js file with a self-executing anonymous function that holds your directive goodies. The entire meat and potatoes of your directive lives in the call back. [This](http://esbueno.noahstokes.com/post/77292606977/self-executing-anonymous-functions-or-how-to-write) is an excellent resources on self-executing anonymous functions.

Second, you need the template that your directive is referencing. That is just an HTML partial if you will that is called.

Third, in your index.html (or I suppose in another template) you need the directive reference to link your website to the directive.

Numbers 2 and 3 are basic enough that I won't dive in at this point. The directive itself has a number of attributes, including the url of the template, scope and link, where the directive logic lives. The scope - declared with an empty pair of brackets for 'isolate-scope' - then automatically executes the function inside the link attribute.

#### Link Arguments
The function in link has a very specific set of arguments that it takes. The first argument is the scope object. The scope object methods and attributes are accessible within the directive.

The second argument is the 'jqLite-wrapped element.' jqLite is a built-in, lightweight version of jQuery that comes with Angular. It is designed for cross-browser compatibility without the heft of the full jQuery library. There are about 35 jQuery methods supported (and detailed [here](https://docs.angularjs.org/api/ng/function/angular.element)) in jqLite.

The final argument is a hash of attributes that the directive was declared with. If the `<directive-element>` was empty this argument can be empty too.
