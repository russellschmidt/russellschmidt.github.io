---
path: "/blog/coffeescript/"
date: "2016-06-06T17:12:33.962Z"
title: "CoffeeScript"
type: "blog"
---

# CoffeeScript on OSX funtime
The GameTree tech stack is going to be using Jade and CoffeeScript so I ought to know how to use these things, no? Yes.

### What is CoffeeScript
CoffeeScript is a simplified syntax + optimized compile of good 'ol JavaScript. It ought to make life easier and code run faster in most cases if you believe everything the manufacturer writes on the box.

tl;dr - CoffeeScript basically lets you use some very very Ruby-like syntactic sugar for writing JavaScript

### Installing CoffeeScript

1. First `$ update homebrew`  or if you have no idea what I am talking about, [install homebrew](http://brew.sh/)
2. Then we need node.js. If you don't have node.js, hope on in, the water is fine. `$ brew install node` and now you follow the prompts to install our pal Node.
3. Now to install CoffeeScript. `$ npm install -g coffee-script'
4. Make sure it installed `$ coffee -v`

You can now write `.coffee` files and compile them with the `$ coffee` command.

1. `$ coffee -o javascripts/ -c coffeescripts/` will take coffee files from the coffeescripts folder and compile them to JavaScript.
2. `$ coffee -w -o javascripts/ -c coffeescripts/` will do as in no. 1 above but *w*atches so as to compile changes on the fly. This works for new files and changes to existing files, but not to new folders and their content.
3. `$ coffee -j javascripts/app.js -c coffeescripts/*.coffee` will combine multiple coffee files into a single JS file
4. `$ coffee` opens a coffeescript shell for practice

### Now to learn the coffeescripting
Hot Tips

1. No more var or let or const for your variable declarations. `name = "Rusty"`
2. Concatenate strings with a + sign.
3. String interpolation is as in HAML `#{variable_name}`
4. Declare function with `functionName = -> firstName + " " + lastName`
5. Note the lack of ending semicolon
6. Note that like Ruby functions automatically return the last line of code so no `return` keyword
7. Since there is no semi-colon you write multi-line functions with multiple lines of code. I.e. his enter/return and type like a champ.
8. Create arguments for functions by putting them in parenthesis like so `name = (first_name, last_name) -> first_name + " " + last_name`   just put them before the -> arrow
9. Like Ruby you can omit parenthesis on arguments if you like when you call a function `name 'Russell', 'Schmidt'
10. Arrays are the same as ever except you can write them as multiline and omit the commas, with one entry per line. You still need square brackets.
11. Similarly Objects can drop the commas when you go multi-line, and the curlies, so long as you indent, so its just

```coffeescript
object =
  key: value
  key2: value2
```

12. You can also use Ruby ranges like [1..10] which is inclusive of 1 and 10. Three dots [1...11] excludes the high number end and here represents the same range as [1..10]. If you just use [..] it is the size of the array.
13. Splats! (`...`) you can define a function with `someName...` as an argument and then loop through it to take an indiscriminate number of arguments and just transform them via the function as a loop `for x in someName`
14. Class declarations are simple. Note whitespace being required.

```coffeescript
  class BoneMachine
    constructor: (fastfood) ->
      @fastfood = fastfood

  // can also be written as
  class BoneMachine
    constructor: (@fastfood) ->
    yourBones: @fastfood ->
      console.log("Your bone has a little machine")

  // instantiate a class
  myBoneMachine = BoneMachine "japanese fast food"

  // extend a class
  class BreakMyBody extends BoneMachine
  // overwrite inheritance
    yourBones ->
      super console.log("Im a belly dancer")
```

15. New syntax for equivalence symbols

  |coffee|JS|
  |---|---|
  |is|===|
  |isnt|!==|
  |not|!|
  |and|&&|
  |or| `||`|
  |true yes on | true|
  |false no off | false|
  |@  this | this|
  | of | in |
  | in | no JS|

16. The Existential Operator. Without a doubt this is my favorite thing I have ever learned in CS. ?. The question mark. You can use to check for presence `login() if not currentUser?` or assign default values like the Ruby ||=  but here it is `?=`. You can use it like a ternary operator `name = username ? 'Mr No Name'` to assign a default. You can also use it like how ? is used in *Swift optionals*, especially in chained methods - the accessor variant of the Existential Operatol. This lets you handle null errors a little better.
17. Ruby-like looping with in `sayMyName = ("Destiny's Child" for i in [0..9]` to return the name 10 times in an array. It can decrement automatically too `countdown = (num for num in [10..1])`
18. Drop the parenthesis and curlies with conditionals. `mood = happy if singing`
19. While and Until keywords and loops are available with a much easier to understand syntax.

```coffeescript
if this.studyingEconomics
  buy()  while supply > demand
  sell() until supply > demand
```

20. Switch statements are just `switch someVar` and then `when x then y` indented and ended with `else z`.
21. Switch statements can be used in place of if statements since we can pass in conditionals for each case.
`when x < 100 then y` inside a switch is awesome instead of relying on perfect equivalence.
22. Try/Catch can omit the error variable(s) and curlies, just relying on new line and indentation.
23. Block comments in CoffeeScript use `### some comments on many lines ###`


All liberally cribbed from [treehouse](http://blog.teamtreehouse.com/the-absolute-beginners-guide-to-coffeescript) and the source at [coffeescript.org](http://coffeescript.org/)


Also *Get your Sublime 3 Right*

1. Download [Sublime Package control](http://wbond.net/sublime_packages/package_control) - install and restart Sublime
2. In Sublime for OSX - CMD+SHFT+P
3. Type "Package Control - Install Package"
4. Find your package - look up "SASS" ... I enjoy 'syntax highlighting for SASS' though
