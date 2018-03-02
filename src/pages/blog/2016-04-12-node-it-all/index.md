---
path: "/blog/node-it-all/"
date: "2016-04-12T17:12:33.962Z"
title: "Node it All"
type: "blog"
---

Today is a big day. The day I start writing my very own Skill without really relying too much on the existing Amazon examples. To do so involves downloading and running Node.js.

What is Node.js you ask? You can check [Node.js](https://nodejs.org/en/about/) and learn that it is an open source platform 'designed to build scalable network applications.' Node.js is [very popular](http://siliconangle.com/blog/2016/04/12/node-js-drives-iot-app-development-container-adoption/) with 3.5 million deployments, including quite a few 'Internet of Things' device deployments, including my new best friends at Amazon with their awesome Echo device. The article linked mentions Node as a universal platform, with some 58 percent of devs writing Node applications in a Docker container.

My astute readers will note that I haven't answered the question. Node.js is a JavaScript runtime environment that lets you execute code on your computer. I cribbed this from [An Absolute Beginner's Guide to Node.js](http://blog.modulus.io/absolute-beginners-guide-to-nodejs). It is important to note, as the linked guide does, that Node is not a web server, though you can write an HTTP server using built-in libraries.

I found [The Art of Node](https://github.com/maxogden/art-of-node#callbacks) late in the game here but this is a great resource for learning about Node from the ground up.

## Getting Started
First, [download Node.js](https://nodejs.org/en/) here. I chose the 'LTS' version, which is short for Long Term Support. Run the installation program. Then, you can use [the workshopper 'Learn You Node'](https://github.com/workshopper/learnyounode) to get going on some tutorials on using node.

There are 13 challenges that help step you through the process of learning about Node and how to use it. Here are some helpful tips below.

1. As you might expect, `console.log("string")` works as normal
2. The `process` object gives you access to command line arguments. The `.argv` property is an array that contains the command line.
3. The format for running a program is `learnyounode run program.js` to run the program.js file you made, and `learnyounode verify program.js` to put it to the test.
4. You can convert strings to numbers with Number(x) or by prefixing the property with a + sign, as in +process.argv[2] to turn the 3rd item in the array from a string to a number.
5. You can invoke a library pretty easily. Invoking the fs (file system) library for standard I/O with `var fs = require('fs');` and then using the fs variable's handle functions like `.readFileSync(path)` to copy the file at 'path' to a Buffer object. Buffer objects hold raw data and are easily converted to web friendly UTF-8 strings with `.toString()`.
6. Awesome file system node libraries include `net`, `http`, and `dgram` (for UDP) in addition to `fs`.
7. Really fun `fs` methods one ought to know include: `readdir` for an array of files in a folder, `readFile` for asynchronous file reads,


## The 4 Node Horsemen.
#### Callbacks
A callback is a JavaScript function that is executed asynchronously. It is somewhat responsible for making Node so boss at dealing with say multiple IO requests.

Dealing with callbacks is tricky if you have spent most of your time studying synchronous, linear code. A standard callback in node takes the form of `function name (error, data)` which I like as it puts error handling front and center. We just need to make sure that we are structuring our code to avoid 'race conditions' where the code is executing later steps in our recipe than we are ready for. So, for example:

```javascript
var fs = require('fs');
var sum = undefined;

sum = fs.readFile(process.argv[2], finishReading);

function finishReading(error, fileData) {
  if (error) return console.error(error);

  var fileArray = fileData.toString().split('\n');
  return (fileArray.length - 1);
}

console.log(sum);
```
This code will actually never produce the result we want (counting new line characters), because Node kicks off readFile and moves on down the list. It will get to `console.log(sum)` well before it is done pulling in the data, convering to a string and then an array, and then counting the length of the array. It will print 'undefined' to the console every time.


```javascript
var fs = require('fs');

fs.readFile(process.argv[2], finishReading);

function finishReading(error, fileData) {
  if (error) return console.error(error);

  var fileArray = fileData.toString().split('\n');
  console.log(fileArray.length - 1);
}
```
This code gives us the answer we want. It puts the console.log reporting inside the function that is the hold up.  And yes I could refactor this to combine the last two lines of code which would be fun because we would convert the data from Buffer to String to Array to number in a single line of code. I think this is a little more readable - it is very clear what we are returning/outputting if we do things this way - but I am comfortable saying that this a matter of taste.

#### Events
Events are great for asynchronous data exchanges such as communicating with an API. With events, you subscribe, versus call - this means that you write your code like a person who carries an umbrella with them everywhere (`if (raining) { openUmbrella() }`), waiting on states to change. Callbacks work more like a nervous parent's orders (`flying() { callWhenYouLand(); } `) that execute functions, albeit perhaps not in any sort of hurry.

Examples provided in Art of Node for Events are chat rooms, game servers, game engines, and web servers serving up an API. One magical thing with events is the `.on` method which can call up different functions based up state information.

Adapting the awesome example from Art of Node, we can attach callbacks to events, creating more flexible code able to adapt to different conditions.

```javascript
var chatClient = require('my-chat-client').connect()
chatClient.on('message', logMessage)
chatClient.on('message', storeMessage)
chatClient.on('connectionError', function() {
	console.error('Connection Error! check your cords!');
}

function logMessage(message) {
  console.log(message)
}

function storeMessage(message) {
  myDatabase.save(message)
}
```

#### Streams
The [Stream handbook](https://github.com/substack/stream-handbook#introduction) is the bible for these sorts of things.

A Stream is a programmatic adaption of the UNIX shell `|` which is now immortalized as `.pipe()`. Using, say, `fs.createReadStream` we can create streams of data that are sent to the user as they become available.

#### Modules
Node is made of a small, fast core and made extensible and scalable through modules. The idea is to stay as small and as fast as possible. Typing `npm search pdf` can help you find any module with pdf in the name or description. You can note code you like with `npm star modulename` too.

If you are going to put modules in a subfolder, remember you must name that folder 'node_modules'.

Creating modules was confusing for me at first. [This tutorial](http://openmymind.net/2012/2/3/Node-Require-and-Exports/) helped me tremendously in wrapping my head around the syntax - the concept of bringing in a method from another file is simple enough.

The tough part with modules, for me at least, and obviously, since I am writing this (OR AM I?!?! is this all a dream or a hallucination or a parallel universe merging into my former reality) is the actual practice of callbacks and error handling when a method is called on your main .js file and expects either an error or data asynchronously.

So I want to take some input in my main node.js file, pass it to a module's function, and then get that data back and output it on my main file.

_in my main.js_

```javascript
var input = process.argv[2];

var myModule = require('./myModule.js');

myModule(input, function(err, data) {
	if (err) return console.error(err);

	console.log(data);
})
```

This says I am setting a local variable myModule to something from this other file at the path provided. I call that method and pass in my input and a callback to do rudimentary error handling.

The interesting bit is on the other side.

_in my module.js_

```javascript
var doTheDirty = function(input, callback) {
	  var fs = require('fs');
	  var dataArray = [];

	  fs.readdir(input, function( err, data ) {
	  	if (err) return callback(err);

	  	dataArray.push(data);

	  	callback(null, dataArray);
	  }
}

module.exports = doTheDirty;
```

So we define a method/function. We have a callback as an argument in the function - this is weird and new to you probably, as it is to me. We add in a standard module and do an asynchronous read of a command line argument we passed in from main.js. Now here, if we hit an error, we bubble up that error like Michael Buble, and otherwise we send our data asynchronously as we receive it. You can see too that we have declared module.exports to equal the method name we assigned. On main.js, we don't have to even know the function name, since we are setting the exported function to a variable. We can then, in main.js, use that variable name for reference.

This simple example shows how this chain of callbacks can function so as to work in the opposite direction of a chain of passed arguments to nested functions.

#### Stack Overflow Overjoyed
One milestone of progress with programming prowess is seeing that the answers that end up helping you on Stack Overflow have 2 or 3 upvotes instead of 856. Or perhaps we ask the Devil's Advocate who chimes in devilishly that the questions are so basic no one thinks of asking them, let alone upvoting them. But that is increasingly less likely as I objectively can solve problems I could not solve 3 months ago or thought at first glance that I could solve two or three hours ago. The node devil is a lie.
