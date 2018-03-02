---
path: "/blog/grunting-gulping-nodes/"
date: "2016-03-29T17:12:33.962Z"
title: "Grunting Gulping Nodes"
type: "blog"
---

We are going to turn my BlocJams application up to 11! Rock and Roll! Angular! ![Rocking Granny](http://cdn.twentytwowords.com/wp-content/uploads/Old-woman-playing-guitar.jpg) so let's get this party started! _Angular party is the best party/ because I like to party._ -Eminem.

So to get started, first I need to install Grunt and NPM. Grunt is a task runner that is accessed via the command line. This means that it automates some tasks that are pretty repetitive. Examples are unit tests and compiling SASS into CSS. Grunt runs on Node.js, so who knew, but today was the day I was installing Node on my Mac. [Here is a fun guide](http://blog.teamtreehouse.com/install-node-js-npm-mac).

### Installing with Homebrew
`brew install node`
`node -v`  check if node made it.
`npm -v` and see if NPM is there. boom.

That's it. Update with `brew update node` and uninstall with `brew uninstall node` - pretty easy.

Now install Grunt
`$ npm install -g grunt-cli`

You should get a nicely formatted 'Fatal Error' page.

When the time comes, you can run `grunt` and go to localhost:3000 to see your magical site.

### Root it Out
Go to your project's home page in command line and `$ npm init`. Next follow the prompts to make your manifest file, inputting the name, description, keywords, and people fields.

Then `$ npm install grunt --save-dev` will get grunt installed as a dependency under the dev environment.

### Grunties
In the home folder of your project, make a file `Gruntfile.js` in the root directory. For reasons unknown at this point, this is required.

Make sure your Gruntfile has all of its Grunt logic in a `module.exports` function expression.
`JavaScript
module.exports = function(grunt) {
	// magical code here
};`

The `grunt` argument is apparently required - or at least one convention says to name it that, while you *are* required to have at least one argument. `module.exports` is Node convention.

The fundamental unit of Grunt is a task. I would like Grunt more if the fundamental unit was called a 'grunt' - huge missed opportunity. Every task in Grunt is first registered inside that function we made.

`JavaScript
grunt.registerTask('default', 'Testing out Grunt logging and task callbacks', function() {
	grunt.log.writeln('This is our first Grunt task! Why isn't this HELLO WORLD');
	});`

Note that the registerTask takes 3 arguments - a string naming the task, a description of the task in String form, and a callback that runs with the task. You can run this task with an incredible complicated command:

`bash
$ grunt
`

Now all your GruntDreams came true.

You can use names beside 'default' and then run them simply by typing `$ grunt name-you-put-in` and you are off to the proverbial races.

### Many Grunts
You can, instead of a single calback in your Grunt registerTask(), you can pass in an array of subtasks (so, `['task1', 'task2']` instead of the callback).

You can install grunt plugins easily, too.

`npm install grunt-some-plugin --save-dev`

A popular grunt plugin is 'grunt-contrib-watch' that watches specified files for changes and runs code when the file is saved.

Once installed, you can run these plugins within the Gruntfile.

` grunt.loadNpmTasks('grunt-contrib-watch');`

We can specify which files we want to watch with this plugin with

`JavaScript
 grunt.initConfig({
        watch: {
            files: ['Gruntfile.js']
        }
    });
`

The run `grunt watch` from the command line, only hitting CTRL C to exit.

### Globs of Grunts
Just like we had a watch property, there is a files property that goes into the initConfig. In `files: { }` we can put 'globbing patterns' (wildcard functionality) to look for *types of files* instead of specific filenames. For example:

`JavaScript
files: [
    './css/*',
    './images/*.{png,jpg,svg}',
    './assets/**/*.{png,jpg,svg,otf,ttf}'
]`

The * indicates 'select any file of that type in that directory.
We use { }  to specify multiple file extensions, here all types of image files in the /images/ directory.
Lastly, ** means any subdirectory.  So, `images/ * * / *. {png, jpg, gif, tiff} ` is saying look in the subdirectories of images for any image file.

### Patterns of Grunting
A common use of Grunt is taking a file or a pile of files, changing or copying the content, and putting the modified content in a different directory. There are two ways of referencing source and destination - compat format and files object format. You can learn more about that [here](http://gruntjs.com/configuring-tasks#compact-format) in the Grunt documentation.

