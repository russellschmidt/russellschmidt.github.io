webpackJsonp([26207579169762],{567:function(e,t){e.exports={data:{markdownRemark:{html:"<p>We are going to turn my BlocJams application up to 11! Rock and Roll! Angular! <img src=\"http://cdn.twentytwowords.com/wp-content/uploads/Old-woman-playing-guitar.jpg\" alt=\"Rocking Granny\"> so let's get this party started! <em>Angular party is the best party/ because I like to party.</em> -Eminem.</p>\n<p>So to get started, first I need to install Grunt and NPM. Grunt is a task runner that is accessed via the command line. This means that it automates some tasks that are pretty repetitive. Examples are unit tests and compiling SASS into CSS. Grunt runs on Node.js, so who knew, but today was the day I was installing Node on my Mac. <a href=\"http://blog.teamtreehouse.com/install-node-js-npm-mac\">Here is a fun guide</a>.</p>\n<h3>Installing with Homebrew</h3>\n<p><code>brew install node</code>\n<code>node -v</code>  check if node made it.\n<code>npm -v</code> and see if NPM is there. boom.</p>\n<p>That's it. Update with <code>brew update node</code> and uninstall with <code>brew uninstall node</code> - pretty easy.</p>\n<p>Now install Grunt\n<code>$ npm install -g grunt-cli</code></p>\n<p>You should get a nicely formatted 'Fatal Error' page.</p>\n<p>When the time comes, you can run <code>grunt</code> and go to localhost:3000 to see your magical site.</p>\n<h3>Root it Out</h3>\n<p>Go to your project's home page in command line and <code>$ npm init</code>. Next follow the prompts to make your manifest file, inputting the name, description, keywords, and people fields.</p>\n<p>Then <code>$ npm install grunt --save-dev</code> will get grunt installed as a dependency under the dev environment.</p>\n<h3>Grunties</h3>\n<p>In the home folder of your project, make a file <code>Gruntfile.js</code> in the root directory. For reasons unknown at this point, this is required.</p>\n<p>Make sure your Gruntfile has all of its Grunt logic in a <code>module.exports</code> function expression.\n<code>JavaScript module.exports = function(grunt) { // magical code here };</code></p>\n<p>The <code>grunt</code> argument is apparently required - or at least one convention says to name it that, while you <em>are</em> required to have at least one argument. <code>module.exports</code> is Node convention.</p>\n<p>The fundamental unit of Grunt is a task. I would like Grunt more if the fundamental unit was called a 'grunt' - huge missed opportunity. Every task in Grunt is first registered inside that function we made.</p>\n<p><code>JavaScript grunt.registerTask('default', 'Testing out Grunt logging and task callbacks', function() { grunt.log.writeln('This is our first Grunt task! Why isn't this HELLO WORLD'); });</code></p>\n<p>Note that the registerTask takes 3 arguments - a string naming the task, a description of the task in String form, and a callback that runs with the task. You can run this task with an incredible complicated command:</p>\n<p><code>bash $ grunt</code></p>\n<p>Now all your GruntDreams came true.</p>\n<p>You can use names beside 'default' and then run them simply by typing <code>$ grunt name-you-put-in</code> and you are off to the proverbial races.</p>\n<h3>Many Grunts</h3>\n<p>You can, instead of a single calback in your Grunt registerTask(), you can pass in an array of subtasks (so, <code>['task1', 'task2']</code> instead of the callback).</p>\n<p>You can install grunt plugins easily, too.</p>\n<p><code>npm install grunt-some-plugin --save-dev</code></p>\n<p>A popular grunt plugin is 'grunt-contrib-watch' that watches specified files for changes and runs code when the file is saved.</p>\n<p>Once installed, you can run these plugins within the Gruntfile.</p>\n<p><code>grunt.loadNpmTasks('grunt-contrib-watch');</code></p>\n<p>We can specify which files we want to watch with this plugin with</p>\n<p><code>JavaScript grunt.initConfig({ watch: { files: ['Gruntfile.js'] } });</code></p>\n<p>The run <code>grunt watch</code> from the command line, only hitting CTRL C to exit.</p>\n<h3>Globs of Grunts</h3>\n<p>Just like we had a watch property, there is a files property that goes into the initConfig. In <code>files: { }</code> we can put 'globbing patterns' (wildcard functionality) to look for <em>types of files</em> instead of specific filenames. For example:</p>\n<p><code>JavaScript files: [ './css/*', './images/*.{png,jpg,svg}', './assets/**/*.{png,jpg,svg,otf,ttf}' ]</code></p>\n<p>The * indicates 'select any file of that type in that directory.\nWe use { }  to specify multiple file extensions, here all types of image files in the /images/ directory.\nLastly, ** means any subdirectory.  So, <code>images/ * * / *. {png, jpg, gif, tiff}</code> is saying look in the subdirectories of images for any image file.</p>\n<h3>Patterns of Grunting</h3>\n<p>A common use of Grunt is taking a file or a pile of files, changing or copying the content, and putting the modified content in a different directory. There are two ways of referencing source and destination - compat format and files object format. You can learn more about that <a href=\"http://gruntjs.com/configuring-tasks#compact-format\">here</a> in the Grunt documentation.</p>",frontmatter:{date:"March 29, 2016",path:"/blog/grunting-gulping-nodes/",title:"Grunting Gulping Nodes",type:"blog"}}},pathContext:{}}}});
//# sourceMappingURL=path---blog-grunting-gulping-nodes-14ed9ea53c248ee987bd.js.map