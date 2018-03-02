webpackJsonp([76027727993773],{552:function(e,n){e.exports={data:{markdownRemark:{html:'<h1>CoffeeScript on OSX funtime</h1>\n<p>The GameTree tech stack is going to be using Jade and CoffeeScript so I ought to know how to use these things, no? Yes.</p>\n<h3>What is CoffeeScript</h3>\n<p>CoffeeScript is a simplified syntax + optimized compile of good \'ol JavaScript. It ought to make life easier and code run faster in most cases if you believe everything the manufacturer writes on the box.</p>\n<p>tl;dr - CoffeeScript basically lets you use some very very Ruby-like syntactic sugar for writing JavaScript</p>\n<h3>Installing CoffeeScript</h3>\n<ol>\n<li>First <code>$ update homebrew</code>  or if you have no idea what I am talking about, <a href="http://brew.sh/">install homebrew</a></li>\n<li>Then we need node.js. If you don\'t have node.js, hope on in, the water is fine. <code>$ brew install node</code> and now you follow the prompts to install our pal Node.</li>\n<li>Now to install CoffeeScript. `$ npm install -g coffee-script\'</li>\n<li>Make sure it installed <code>$ coffee -v</code></li>\n</ol>\n<p>You can now write <code>.coffee</code> files and compile them with the <code>$ coffee</code> command.</p>\n<ol>\n<li><code>$ coffee -o javascripts/ -c coffeescripts/</code> will take coffee files from the coffeescripts folder and compile them to JavaScript.</li>\n<li><code>$ coffee -w -o javascripts/ -c coffeescripts/</code> will do as in no. 1 above but <em>w</em>atches so as to compile changes on the fly. This works for new files and changes to existing files, but not to new folders and their content.</li>\n<li><code>$ coffee -j javascripts/app.js -c coffeescripts/*.coffee</code> will combine multiple coffee files into a single JS file</li>\n<li><code>$ coffee</code> opens a coffeescript shell for practice</li>\n</ol>\n<h3>Now to learn the coffeescripting</h3>\n<p>Hot Tips</p>\n<ol>\n<li>No more var or let or const for your variable declarations. <code>name = "Rusty"</code></li>\n<li>Concatenate strings with a + sign.</li>\n<li>String interpolation is as in HAML <code>#{variable_name}</code></li>\n<li>Declare function with <code>functionName = -> firstName + " " + lastName</code></li>\n<li>Note the lack of ending semicolon</li>\n<li>Note that like Ruby functions automatically return the last line of code so no <code>return</code> keyword</li>\n<li>Since there is no semi-colon you write multi-line functions with multiple lines of code. I.e. his enter/return and type like a champ.</li>\n<li>Create arguments for functions by putting them in parenthesis like so <code>name = (first_name, last_name) -> first_name + " " + last_name</code>   just put them before the -> arrow</li>\n<li>Like Ruby you can omit parenthesis on arguments if you like when you call a function `name \'Russell\', \'Schmidt\'</li>\n<li>Arrays are the same as ever except you can write them as multiline and omit the commas, with one entry per line. You still need square brackets.</li>\n<li>Similarly Objects can drop the commas when you go multi-line, and the curlies, so long as you indent, so its just</li>\n</ol>\n<pre><code class="language-coffeescript">object =\n  key: value\n  key2: value2\n</code></pre>\n<ol start="12">\n<li>You can also use Ruby ranges like [1..10] which is inclusive of 1 and 10. Three dots [1...11] excludes the high number end and here represents the same range as [1..10]. If you just use [..] it is the size of the array.</li>\n<li>Splats! (<code>...</code>) you can define a function with <code>someName...</code> as an argument and then loop through it to take an indiscriminate number of arguments and just transform them via the function as a loop <code>for x in someName</code></li>\n<li>Class declarations are simple. Note whitespace being required.</li>\n</ol>\n<pre><code class="language-coffeescript">  class BoneMachine\n    constructor: (fastfood) ->\n      @fastfood = fastfood\n\n  // can also be written as\n  class BoneMachine\n    constructor: (@fastfood) ->\n    yourBones: @fastfood ->\n      console.log("Your bone has a little machine")\n\n  // instantiate a class\n  myBoneMachine = BoneMachine "japanese fast food"\n\n  // extend a class\n  class BreakMyBody extends BoneMachine\n  // overwrite inheritance\n    yourBones ->\n      super console.log("Im a belly dancer")\n</code></pre>\n<ol start="15">\n<li>New syntax for equivalence symbols</li>\n</ol>\n<table>\n<thead>\n<tr>\n<th>coffee</th>\n<th>JS</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>is</td>\n<td>===</td>\n</tr>\n<tr>\n<td>isnt</td>\n<td>!==</td>\n</tr>\n<tr>\n<td>not</td>\n<td>!</td>\n</tr>\n<tr>\n<td>and</td>\n<td>&#x26;&#x26;</td>\n</tr>\n<tr>\n<td>or</td>\n<td><code>||</code></td>\n</tr>\n<tr>\n<td>true yes on</td>\n<td>true</td>\n</tr>\n<tr>\n<td>false no off</td>\n<td>false</td>\n</tr>\n<tr>\n<td>@  this</td>\n<td>this</td>\n</tr>\n<tr>\n<td>of</td>\n<td>in</td>\n</tr>\n<tr>\n<td>in</td>\n<td>no JS</td>\n</tr>\n</tbody>\n</table>\n<ol start="16">\n<li>The Existential Operator. Without a doubt this is my favorite thing I have ever learned in CS. ?. The question mark. You can use to check for presence <code>login() if not currentUser?</code> or assign default values like the Ruby ||=  but here it is <code>?=</code>. You can use it like a ternary operator <code>name = username ? \'Mr No Name\'</code> to assign a default. You can also use it like how ? is used in <em>Swift optionals</em>, especially in chained methods - the accessor variant of the Existential Operatol. This lets you handle null errors a little better.</li>\n<li>Ruby-like looping with in <code>sayMyName = ("Destiny\'s Child" for i in [0..9]</code> to return the name 10 times in an array. It can decrement automatically too <code>countdown = (num for num in [10..1])</code></li>\n<li>Drop the parenthesis and curlies with conditionals. <code>mood = happy if singing</code></li>\n<li>While and Until keywords and loops are available with a much easier to understand syntax.</li>\n</ol>\n<pre><code class="language-coffeescript">if this.studyingEconomics\n  buy()  while supply > demand\n  sell() until supply > demand\n</code></pre>\n<ol start="20">\n<li>Switch statements are just <code>switch someVar</code> and then <code>when x then y</code> indented and ended with <code>else z</code>.</li>\n<li>Switch statements can be used in place of if statements since we can pass in conditionals for each case.\n<code>when x &#x3C; 100 then y</code> inside a switch is awesome instead of relying on perfect equivalence.</li>\n<li>Try/Catch can omit the error variable(s) and curlies, just relying on new line and indentation.</li>\n<li>Block comments in CoffeeScript use <code>### some comments on many lines ###</code></li>\n</ol>\n<p>All liberally cribbed from <a href="http://blog.teamtreehouse.com/the-absolute-beginners-guide-to-coffeescript">treehouse</a> and the source at <a href="http://coffeescript.org/">coffeescript.org</a></p>\n<p>Also <em>Get your Sublime 3 Right</em></p>\n<ol>\n<li>Download <a href="http://wbond.net/sublime_packages/package_control">Sublime Package control</a> - install and restart Sublime</li>\n<li>In Sublime for OSX - CMD+SHFT+P</li>\n<li>Type "Package Control - Install Package"</li>\n<li>Find your package - look up "SASS" ... I enjoy \'syntax highlighting for SASS\' though</li>\n</ol>',frontmatter:{date:"June 06, 2016",path:"/blog/coffeescript/",title:"CoffeeScript",type:"blog"}}},pathContext:{}}}});
//# sourceMappingURL=path---blog-coffeescript-035b7e9ea59375f9a8ba.js.map