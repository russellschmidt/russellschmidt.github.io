webpackJsonp([0x8fd026ff87f8],{589:function(e,n){e.exports={data:{markdownRemark:{html:"<p>Today is a big day. The day I start writing my very own Skill without really relying too much on the existing Amazon examples. To do so involves downloading and running Node.js.</p>\n<p>What is Node.js you ask? You can check <a href=\"https://nodejs.org/en/about/\">Node.js</a> and learn that it is an open source platform 'designed to build scalable network applications.' Node.js is <a href=\"http://siliconangle.com/blog/2016/04/12/node-js-drives-iot-app-development-container-adoption/\">very popular</a> with 3.5 million deployments, including quite a few 'Internet of Things' device deployments, including my new best friends at Amazon with their awesome Echo device. The article linked mentions Node as a universal platform, with some 58 percent of devs writing Node applications in a Docker container.</p>\n<p>My astute readers will note that I haven't answered the question. Node.js is a JavaScript runtime environment that lets you execute code on your computer. I cribbed this from <a href=\"http://blog.modulus.io/absolute-beginners-guide-to-nodejs\">An Absolute Beginner's Guide to Node.js</a>. It is important to note, as the linked guide does, that Node is not a web server, though you can write an HTTP server using built-in libraries.</p>\n<p>I found <a href=\"https://github.com/maxogden/art-of-node#callbacks\">The Art of Node</a> late in the game here but this is a great resource for learning about Node from the ground up.</p>\n<h2>Getting Started</h2>\n<p>First, <a href=\"https://nodejs.org/en/\">download Node.js</a> here. I chose the 'LTS' version, which is short for Long Term Support. Run the installation program. Then, you can use <a href=\"https://github.com/workshopper/learnyounode\">the workshopper 'Learn You Node'</a> to get going on some tutorials on using node.</p>\n<p>There are 13 challenges that help step you through the process of learning about Node and how to use it. Here are some helpful tips below.</p>\n<ol>\n<li>As you might expect, <code>console.log(\"string\")</code> works as normal</li>\n<li>The <code>process</code> object gives you access to command line arguments. The <code>.argv</code> property is an array that contains the command line.</li>\n<li>The format for running a program is <code>learnyounode run program.js</code> to run the program.js file you made, and <code>learnyounode verify program.js</code> to put it to the test.</li>\n<li>You can convert strings to numbers with Number(x) or by prefixing the property with a + sign, as in +process.argv[2] to turn the 3rd item in the array from a string to a number.</li>\n<li>You can invoke a library pretty easily. Invoking the fs (file system) library for standard I/O with <code>var fs = require('fs');</code> and then using the fs variable's handle functions like <code>.readFileSync(path)</code> to copy the file at 'path' to a Buffer object. Buffer objects hold raw data and are easily converted to web friendly UTF-8 strings with <code>.toString()</code>.</li>\n<li>Awesome file system node libraries include <code>net</code>, <code>http</code>, and <code>dgram</code> (for UDP) in addition to <code>fs</code>.</li>\n<li>Really fun <code>fs</code> methods one ought to know include: <code>readdir</code> for an array of files in a folder, <code>readFile</code> for asynchronous file reads,</li>\n</ol>\n<h2>The 4 Node Horsemen.</h2>\n<h4>Callbacks</h4>\n<p>A callback is a JavaScript function that is executed asynchronously. It is somewhat responsible for making Node so boss at dealing with say multiple IO requests.</p>\n<p>Dealing with callbacks is tricky if you have spent most of your time studying synchronous, linear code. A standard callback in node takes the form of <code>function name (error, data)</code> which I like as it puts error handling front and center. We just need to make sure that we are structuring our code to avoid 'race conditions' where the code is executing later steps in our recipe than we are ready for. So, for example:</p>\n<pre><code class=\"language-javascript\">var fs = require('fs');\nvar sum = undefined;\n\nsum = fs.readFile(process.argv[2], finishReading);\n\nfunction finishReading(error, fileData) {\n  if (error) return console.error(error);\n\n  var fileArray = fileData.toString().split('\\n');\n  return (fileArray.length - 1);\n}\n\nconsole.log(sum);\n</code></pre>\n<p>This code will actually never produce the result we want (counting new line characters), because Node kicks off readFile and moves on down the list. It will get to <code>console.log(sum)</code> well before it is done pulling in the data, convering to a string and then an array, and then counting the length of the array. It will print 'undefined' to the console every time.</p>\n<pre><code class=\"language-javascript\">var fs = require('fs');\n\nfs.readFile(process.argv[2], finishReading);\n\nfunction finishReading(error, fileData) {\n  if (error) return console.error(error);\n\n  var fileArray = fileData.toString().split('\\n');\n  console.log(fileArray.length - 1);\n}\n</code></pre>\n<p>This code gives us the answer we want. It puts the console.log reporting inside the function that is the hold up.  And yes I could refactor this to combine the last two lines of code which would be fun because we would convert the data from Buffer to String to Array to number in a single line of code. I think this is a little more readable - it is very clear what we are returning/outputting if we do things this way - but I am comfortable saying that this a matter of taste.</p>\n<h4>Events</h4>\n<p>Events are great for asynchronous data exchanges such as communicating with an API. With events, you subscribe, versus call - this means that you write your code like a person who carries an umbrella with them everywhere (<code>if (raining) { openUmbrella() }</code>), waiting on states to change. Callbacks work more like a nervous parent's orders (<code>flying() { callWhenYouLand(); }</code>) that execute functions, albeit perhaps not in any sort of hurry.</p>\n<p>Examples provided in Art of Node for Events are chat rooms, game servers, game engines, and web servers serving up an API. One magical thing with events is the <code>.on</code> method which can call up different functions based up state information.</p>\n<p>Adapting the awesome example from Art of Node, we can attach callbacks to events, creating more flexible code able to adapt to different conditions.</p>\n<pre><code class=\"language-javascript\">var chatClient = require('my-chat-client').connect()\nchatClient.on('message', logMessage)\nchatClient.on('message', storeMessage)\nchatClient.on('connectionError', function() {\n    console.error('Connection Error! check your cords!');\n}\n\nfunction logMessage(message) {\n  console.log(message)\n}\n\nfunction storeMessage(message) {\n  myDatabase.save(message)\n}\n</code></pre>\n<h4>Streams</h4>\n<p>The <a href=\"https://github.com/substack/stream-handbook#introduction\">Stream handbook</a> is the bible for these sorts of things.</p>\n<p>A Stream is a programmatic adaption of the UNIX shell <code>|</code> which is now immortalized as <code>.pipe()</code>. Using, say, <code>fs.createReadStream</code> we can create streams of data that are sent to the user as they become available.</p>\n<h4>Modules</h4>\n<p>Node is made of a small, fast core and made extensible and scalable through modules. The idea is to stay as small and as fast as possible. Typing <code>npm search pdf</code> can help you find any module with pdf in the name or description. You can note code you like with <code>npm star modulename</code> too.</p>\n<p>If you are going to put modules in a subfolder, remember you must name that folder 'node_modules'.</p>\n<p>Creating modules was confusing for me at first. <a href=\"http://openmymind.net/2012/2/3/Node-Require-and-Exports/\">This tutorial</a> helped me tremendously in wrapping my head around the syntax - the concept of bringing in a method from another file is simple enough.</p>\n<p>The tough part with modules, for me at least, and obviously, since I am writing this (OR AM I?!?! is this all a dream or a hallucination or a parallel universe merging into my former reality) is the actual practice of callbacks and error handling when a method is called on your main .js file and expects either an error or data asynchronously.</p>\n<p>So I want to take some input in my main node.js file, pass it to a module's function, and then get that data back and output it on my main file.</p>\n<p><em>in my main.js</em></p>\n<pre><code class=\"language-javascript\">var input = process.argv[2];\n\nvar myModule = require('./myModule.js');\n\nmyModule(input, function(err, data) {\n    if (err) return console.error(err);\n\n    console.log(data);\n})\n</code></pre>\n<p>This says I am setting a local variable myModule to something from this other file at the path provided. I call that method and pass in my input and a callback to do rudimentary error handling.</p>\n<p>The interesting bit is on the other side.</p>\n<p><em>in my module.js</em></p>\n<pre><code class=\"language-javascript\">var doTheDirty = function(input, callback) {\n      var fs = require('fs');\n      var dataArray = [];\n\n      fs.readdir(input, function( err, data ) {\n        if (err) return callback(err);\n\n        dataArray.push(data);\n\n        callback(null, dataArray);\n      }\n}\n\nmodule.exports = doTheDirty;\n</code></pre>\n<p>So we define a method/function. We have a callback as an argument in the function - this is weird and new to you probably, as it is to me. We add in a standard module and do an asynchronous read of a command line argument we passed in from main.js. Now here, if we hit an error, we bubble up that error like Michael Buble, and otherwise we send our data asynchronously as we receive it. You can see too that we have declared module.exports to equal the method name we assigned. On main.js, we don't have to even know the function name, since we are setting the exported function to a variable. We can then, in main.js, use that variable name for reference.</p>\n<p>This simple example shows how this chain of callbacks can function so as to work in the opposite direction of a chain of passed arguments to nested functions.</p>\n<h4>Stack Overflow Overjoyed</h4>\n<p>One milestone of progress with programming prowess is seeing that the answers that end up helping you on Stack Overflow have 2 or 3 upvotes instead of 856. Or perhaps we ask the Devil's Advocate who chimes in devilishly that the questions are so basic no one thinks of asking them, let alone upvoting them. But that is increasingly less likely as I objectively can solve problems I could not solve 3 months ago or thought at first glance that I could solve two or three hours ago. The node devil is a lie.</p>",frontmatter:{date:"April 12, 2016",path:"/blog/node-it-all/",title:"Node it All",type:"blog"}}},pathContext:{}}}});
//# sourceMappingURL=path---blog-node-it-all-85a25010255c297cd7b1.js.map