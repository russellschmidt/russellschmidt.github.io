---
path: "/blog/services-with-angular/"
date: "2016-04-21T17:12:33.962Z"
title: "Services with Angular"
type: "blog"
---

After a couple of weeks on the Alexa projects, I am back in Angular land. It has been a rough landing. I am having to relearn a lot of things that I would not say I knew all that well at the time I started. If I could do it over again, I would not abandon a project midway again - I would have switched to Alexa after completing Angular. To compensate, I am taking a Codecademy course on Angular at the same time that I am knee deep in the muck.

### Services
This post is mostly going to regurgitate what you can find on [learn-angular.org](http://www.learn-angular.org/#!/lessons/the-value-recipe) if you want to have a better explained reference with more examples. If you prefer the watered down, high fructose corn syrup though, my blog is always the preferred resource of vaguely understood semi-accurate information. For more serious discussion of services, you can also check the [Angular Developer Guide on Services](https://docs.angularjs.org/guide/services).

In talking about services, we start by recalling some sage advice from Rails about having skinny controllers and fat models (plus-sized models). The concept is that controllers should not contain business logic, but should stick to their tightly proscribed role of intermediary between the model and view. Angular also takes the same perspective. Services are objects we can make available to controllers (and other components if we want) that allow for sharing of data, access to shared methods, and generally keep us DRY.

I like the Angular Developer Guide explanation that 'you can use services to organize and share code across your app.'

### Dependency Injection (DI)
I have attempted to translate the [Developer Guide](https://docs.angularjs.org/guide/di) into my special brand of plain, folksy California English for consumption.

I have to say Dependency Injection is one of the coolest sounding technical terms I have encountered and I hope I can casually drop it in conversation soon. This fancy term for making Some Component A's methods and values available to Some Different Component B comes up all the time in Angular. This is fun and worthwhile because we want to minimize duplication of code and DI lets us do this. Also with services, we specifically want skinny controllers, which means we need to offload non-controller-y type code to a different component.

If we dig into the nitty gritty of services and how we actually inject that dependency into our veins, this so far seems to mean passing the service into a component such as a controller as an argument ![inject it real good](/images/Trainspotting-1000x562.png). But you can also create a DI when you define a factory method which is called registering the factory in this context because Angular uses a ton of humorless nomenclature. There are a ton more ways to achieve DI but for the purposes of this blog post it is sufficient to understand that the mechanism by which a service's innards are made available to a controller is called a Dependency Injection.

### Five Finger Death Punch
There are five (5) types of services in Angular. This is handy because our hands have five fingers. These types of services are also referred to as service types or recipes.

¡Cuidado! Angular creates services as **singleton objects**. Singletons are a design pattern (think of patterns as a programming meme if you are not familiar with sewing) where a class is restricted to being used (or better put instantiated) in a single object. New references to this class refer back to the single object. This can be dangerous if we change the object as it can impact code across our program.

![Colonel Sanders got the recipe](/images/colonel-sanders.jpg)

The five recipes, all cribbed liberally from [here](http://learn-angular.org/#!/lessons/the-value-recipe) are:

1) **Value Recipe**  Returns a value. Declare with:

 ```javascript
 .value("nameOfService1", value);
 ```

2) **Factory Recipe** Returns a function. Declare with:

  ```javascript
  .factory("nameOfService2", ["input-service-name", function(input){
    // some code
    var someIsh = input * input;
    return someIsh;
  }])
  ```

3) **Service Recipe** Returns (or 'exposes') an object. There will be two parts to this - the declaration where we name the recipe and associate the object with it, and the object declaration itself. Based on Angular design principles that have trickled into my brain I suppose we keep these separate. Declare with:

  ```javascript
  .service("nameOfService3"), ["dependency", MyObject]);
  ```

  ```javascript
  function MyObject(dependency) {
    this.value = dependency.value,
    this.makeItZero = function(dependency) {
      return dependency * 0;
    }
  }
  ```

You can use a factory recipe to accomplish the same thing, and just return the object. So why use the terribly-named Service Service? "The syntax is cleaner" - you don't need the function declaration in your controller definition. "More Angular" - you can compartmentalize your code better by giving the object declaration a home of its own separate from its inclusion as a service. "The name is too stupid not to use" - Service Service. Doctor Doctor. I love double names unless its Sirhan Sirhan because that guy was a jerk.

4) **Provider Recipe** Buckle up little Timmy, you are about to see some stuff. The example from [LearnAngular](http://www.learn-angular.org/#!/lessons/the-provider-recipe) where I stole nearly all of this post from has a use case where we have an API key we want to provide without making public. Just like with the Service Service, we want to have the Provider service reference a separate function or object we declare elsewhere.

We declare the Provider recipe like so:

```javascript
  .provider("nameOfService4", [function() {
    var arg = null;

    this.setArg = function(argString) {
      arg = argString;
    }

    this.$get = [function () {
      return new myFunction(arg);
    }]
  }])
```

and we have our function declared far far away

```javascript
  function myFunction(arg) {
    this.arg = arg;
  }
```

What we have done is we set the argument `arg` once and can reuse it over and over. We also have a new magic term `$get` that is an Angular function which retrieves the object we are injecting. It introduces a little bit of weirdness reminiscent of Rails naming conventions. In our controller, we can refer to our Provider Service with "myFunctionProvider" - Angular automatically knows that the Provider slapped onto the end refers to the Service, and "myFunction" refers to the object defined by the `$get` function! So it makes sense if you consider that we want to use different names for the service itself and the output of the service. We need two names so something has got to give.

Unlike other services to date, in the root module we have two steps. First we need to `.config` the service and in our example call `setArg` and pass in a value. Second, we need to then assign a variable to the output from $get within the controller scope to use it, within `.controller`. Refer to [this link](http://www.learn-angular.org/#!/lessons/the-provider-recipe) to see specific syntax.

5) **Constant Recipe** Turns out you can't inject constants into configs via services, because configs run by default first, so you are injecting a null. That is why you need Constant Services, which are a special service that can be injected into config().

```javascript
  .constant("argText", "This is an argument's value");
```

You would configure the constant alongside the Provider like so:

```javascript
  angular.module("root", ["services"])
  	.config(["myFunctionProvider", "argText",
  		function (myFunctionProvider, argText) {
  			messageProvider.setText(argText);
  		}])
  ...
```
