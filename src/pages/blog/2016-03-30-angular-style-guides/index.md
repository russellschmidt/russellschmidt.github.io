---
path: "/blog/angular-style-guides/"
date: "2016-03-30T17:12:33.962Z"
title: "Angular Style Guides"
type: "blog"
---

### Some thoughts on Angular Style Guides.

I read one from one of my new favorite software bloggers, Todd Motto! [toddmotto.com](https://toddmotto.com/opinionated-angular-js-styleguide-for-teams/) .

Also I read this much esteemed gentleman John Papa's [Angular Style Guide](https://github.com/johnpapa/angular-styleguide).

Lastly, we cannot ignore the mad scientists at Google that created Angular and their OG [style guide](https://google.github.io/styleguide/angularjs-google-style.html).

### Start at the Start
From the Google styleguide, the suggestions are (not at all comprehensively listed) as follows:

1. Main application module should be in root
2. Only alter modules where they are defined
3. Keep modules consistent (in case you reuse it elsewhere) so define them in the same file as their component pieces so they can travel as a discrete, autonomous (dependency-free) unit
4. Methods should be defined in controllers.
5. In the Template, reference the controller with the `as controllerName` convention clears up confusion when using multiple controllers in a template.
6. Don't name your variables with a leading '$'

### Call Me Big Papa
For extra credit check out his [course on Angular JS patterns](https://www.pluralsight.com/courses/angularjs-patterns-clean-code).

Before hopping into another incomplete but somewhat accurate list, I just want future biographers to note that I really enjoyed reading the Angular 2 guide. It has a lot of good, practical advice for writing code in general.

1. Define 1 component per file, ideally < 400 lines of code
2. Keep functions small, idealling < 75 lines of code
3. Avoid naming collisions with unique names and descriptive folder names
4. Use a consistent sequencing of components - properties, public functions, private functions. Each is alphabetized by name within its group.
5. Put logic in services and not a component
6. Use factories to make reusable components that are put into views
7. Services should have a single responsibility.
8. Names should follow a pattern that describes the feature then the type - so, `feature.type.js`
9. Dashes should separate words and dots separate the name from the type
10. Add suffix of spec to a test that matches the thing it is testing - so, `feature.type.spec.js`
11. Components should have the name `Component` attached to the suffix - ex. `class SpeakerListComponent()`
12. Services ought to use CamelCase and end in Service  -ex. `SpeakerListService`.
13. LIFT Principle should guide you - as if you can do the following:
	1. Be able to **Locate** your code quickly
	2. **Identify** your code at a glance
	3. Keep the **Flattest** structure possible
	4. **Try** to stay DRY
14. Keep 3rd party code in a folder in root separate from code you write
15. If a folder has more than 7 files, consider making a new folder or subfolder
16. Keep route configuration in a separate file

### Thats the Motto Yolo
Todd Motto has a great style guide as well with some very helpful code samples. I like his writing style, also, which is  more rare than the meat of fresh roadkill. One might say his direct, clear style is the opposite of my meandering, dad-joke-full style of overlong sentences peppered with non sequitors.

There is overlap here with Mr. Papa, but nevertheless some of the style concepts include:

1. Use the getter syntax for declaring modules
2. Wrap your module functions in an IIFE - Immediately Invoked Function Expression
3. Be sure to use the ControllerAs syntax with controllers
4. Avoid logic in Controllers - push to services and/or factories.
5. DOM manipulation should only occur inside a directive.
6. Factory-made Objects should have the same name as the Factory
7. Services should be class-like, utilizing the `this` keyword.
8. Do not name services with the `ng-` prefix
9. Directives must be camelCased
10. One role, one file. Keep everything encapsulated and bite-sized.
11. Dont use $ or $$ to start a variable or other custom name

#### Wrapping up
I am just beginning my Angular journey and these posts are far more for me than for you. I think the newest thing to get used to is the getter syntax and being more strict about keeping functions short and making more files. For whatever reason I thought there was a performance price to be paid there but none of these far, far more accomplished and knowledgeable people seem to give a care.
