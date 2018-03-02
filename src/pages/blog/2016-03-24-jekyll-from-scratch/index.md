---
path: "/blog/jekyll-from-scratch/"
date: "2016-03-24T17:12:33.962Z"
title: "Jekyll From Scratch"
type: "blog"
---

I was turned onto [Jekyll](https://jekyllrb.com/) by my Bloc mentorship, where they suggested we students use it for our portfolios and then upload to Github Pages. I was a little apprehensive at first about my brain exploding from learning a new framework, but had grown to love markdown and Byword for my blog v1.0 (written in PHP).

I checked out Jekyll, since redoing my blog and personal portfolio was long overdue anyway, and really liked a few things.
1. No database. You upload text files in markdown for blog posts with a little bit of text at the top.
2. Markdown. Sweet. I hated blogging using a CMS, where I would hit backspace or whatnot and lose a draft. Or cutting and pasting where the formatting was an issue.
3. Simple integration to GitHub Pages. I own my own domain with hosting but would love to use git to update directly instead of the FTP upload extra step. There was some nominal savings there but the time spent fiddling with files was more expensive.
4. Amazing support for code snippets with the highlighting and multiple colors built in.

The Bloc program had a couple of great templates to use but my gut instinct works like this:
1. I want to be a special precious snowflake with a different looking portfolio
2. There is a lot of extra stuff in there I won't use - let's get minimalist
3. Oh I see that easy path over there. No, let's make this as difficult as possible.

This did make me wonder why CS and bootcamp programs don't teach Jekyll first. This is such a pleasant, easy-to-understand framework compared to Rails et al.

## Rabbit Hole 1.0
My Mentor naturally was supportive of my gumption and as I was literally months ahead of schedule with the Front End part of Bloc, I didn't see a downside. I stood up a working, atrociously ugly blog right away, using the `Jekyll new` command which I consider equivalent to using scaffolding in Rails. Everyone who is a cool Rails developer tells me to hand code this stuff while they ride their fixie to Burning Man after picking up some home brewed beer using a robot they built with a 3-D printer and some wood hand-lathed at a workshop in Venice. So naturally I saw my ugly, functional duckling and hated my own creation.

A bigger problem though was that I wanted to use [Flex-Grid](https://flex-grid.com) but it didn't have a Jekyll plugin (not a flood of Jekyll plugins out there relative to a blue chip framework or library but they exist).  I found some CSS to copy in but then I realized that with the way FlexGrid works, I would not be able to turn my Ruby loop spitting out blog post links into multiple columns.

_Time burned: 20 hours_

## Pain and More Pain 2.0
Being a glutton for punishment, I thought that perhaps I ought to start fresh. Clean sheet of paper. I was sort of making up the blog as I went anyway, without a clear picture of what the end result ought to look like. I found [Jekyll-Base](https://github.com/danielmcgraw/Jekyll-Base) to be a pretty cool basic Jekyll template without the preconfigured layout to be found in the scaffolding. Unfortunately it is a pretty old repo with some deprecated features. Not the end of the world but also not exactly what I was looking for.

I remade the blog. I built all the SASS by hand, I added in JavaScript files, Normalize.css. I made all the config flags that had been handed to me before by the scaffolding. And it was the ugliest site I have made in years. There has to be a better way.

_Additional time burned: 8 hours_

## Order from Chaos 3.0
My Bloc mentor and I had a call where I said that I had not done any cool jQuery effects because I was busy putzing around with the layout and template for 48 hours, which thoroughly deflated the conversational fun ball. He recommended I look at [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) for multi-column problem I was having, which takes me full circle. I read a bit more about Flexbox (by which I mean I played the Flexbox Froggy game which is the **greatest tutorial on the Internet** and found [here](http://flexboxfroggy.com). I decided that the idea of a FlexGrid for a grid system and then inside the grid FlexBox for my articles was appealing. Either that or just walk away from the design I had in mind.

Oh I forgot to mention that I had a sketch at this point, which makes it easier to code. Before I had been mostly looking at a dozen awesome portfolios and trying to emulate parts of them without copy-pasting from Inspector. It was a bit like a kid's refrigerator portraits in quality but I learned a couple of things.

## Dive in Me
So the first step is going Back to the Scaffold. Because making the .js files without it sucked. Because I can just delete the default styling which I didn't care for. Because I feel like I put enough time into the vagaries of Jekyll naming conventions. And because I want to get this freaking thing out the door by Monday plus I have a whole other Rails project I want to stand up over the weekend. I am giving myself until tomorrow night. I have an open day tomorrow and a couple hours tonight to get after it.

### First Steps
Run `jekyll new portfolio2016v3` because this is the third one in nearly as many days. Open a new command line tab and ```jekyll serve``` and because I already spent an hour on the front 9 wrestling with the various gems I needed, voila, the sucker comes right up.

Next step is grab fistfulls of raisins to eat and then find something soothing without lyrics in English to play on Spotify. I have been listening to Interpol for about a week straight and I hear variety is the spice of life. I can hear 'All the Rage Back Home' in my head at all hours. 'French Lounge Music' is a swing and a miss. That reminds me of a great song 'L'Orque Epaulard' by Aldebaran (translates to Killer Whale I believe) which I hunt down on Soundcloud and that my friends is how you waste 20 minutes.

Then in the `config.yaml` file I added my information. I also copied over some vector images and the html formatting in the includes file for Facebook and LinkedIn to round out the Github and Twitter logos and links. I used the command line to make the files and nothing happened in Brackets. Forgot to re-run my server. When you make changes to `config.yaml` you typically need to restart the server to make the changes appear. Remember in the html files where you are creating the `<a>` tag that LinkedIn profiles are in the /in/ folder [http://www.linkedin.com/in/russellschmidt](http://www.linkedin.com/in/russellschmidt).

I also copied over my blog posts to the `_posts` directory to make sure they came through, and lastly set my git remote repo up. I had [russellschmidt.net](http://www.russellschmidt.net) set up already via DreamHost, so I merely pointed the A record to the Github servers, created a CNAME file in the repo, and named the repo github.io/russellschmidt. More detailed instructions are found [here](https://help.github.com/articles/setting-up-your-pages-site-repository/).

### Break for Tire Fire
I didn't realize I was in the parent directory and did a 'git add .' to master and added every single project in my project folder to my git repo. Lessons there are:
1. Never commit/push to master, especially after 9pm (its 12:45am)
2. Using `git add .` is hazardous. Run `git status` and then `git add <filename>` to be safe unless you can be 100% sure that adding every file to the commit is healthy and sane.

Now I know all about `git clean` and deleting the `.git` hidden directory.

_Additional Time Burned:_ 1 hour. I learned a lot of git command line, though.

Time to pick this up in the morning.

### Style and Mystery
For the style, I have  are a few steps in mind.
1. Make some changes to `css/main.sass` - this sheet imports the others and holds your variables at present. You may want to change this to suit your approach, for instance, making a `variables.scss` file.
2. Delete or modify content from the three stylesheets in `_sass`. I would recommend making sure you keep some elements, especially the '%vertical-rhythm` item so that the syntax-highlighting works.
3. Delete the class names and divs in your app
4. Bring in two stylesheets we do like - normalize.css and [flexgrid.scss](https://github.com/VladShcherbin/flex-grid/blob/master/scss/_mixins.scss). I have been successfully copying the contents to scss files and just @import -ing  them in main.scss.
5. Test some words and styles.

Remember too that there is styling for the main page and for the blog posts.

### Back in Action Jackson
Not quite. Now I am getting an error `Base-level rules cannot contain the parent-selector-referencing character '&'. on line 123` which is the mixins. I have no idea what this means. A quick'n'dirty workaround is dumping SASS for the [compiled CSS](https://github.com/VladShcherbin/flex-grid/blob/master/dist/flex-grid.css). That will hard code all the variables and is also 900 something lines of code long, so not so fun to work with.

So `&` is just shorthand for the parent selector - so you could write
`a.my-link {
	color: red;
	&:hover {
		color: blue;
	}
}`
and the & represents the a.my-link element(s). Awesome.  H/T to [http://www.joeloliveira.com/2011/06/28/the-ampersand-a-killer-sass-feature/](http://www.joeloliveira.com/2011/06/28/the-ampersand-a-killer-sass-feature/).

The error I am getting is saying that I am using the & at a top level - I could be referring to a parent that doesn't exist (sad emoji for orphans).  So I need to make sure that the & are inside a selector block. Of course, it looks like they are, and I have no idea where the $class variable they are all referencing as a parent element is coming from despite CMD-Fing all over the place.

_Additional Time Burned:_ 3 hours of overtired inattentive coding.

### Take 4. Form Follows Function.
 So I learned some SASS, got to admire flex-grid, and realize I just need a g-d grid in here to get going. I literally have nothing but a list of blog posts and some social links.

Flex-grid is built off of Bootstrap, and Bootstrap is everyone's pal, with a huge number of integrations. My downside is that Bootstrap gives me more than I need, and that it is so popular that I feel a little "basic" shall we say in using it. My upside is that I am letting the perfect be the enemy of the good and burning daylight putzing around with a grid framework that isn't made for Jekyll. Decision made, and form shall follow function.

Since Jekyll uses Ruby and SASS (as opposed to LESS) we are going to use the power of Google to figure out what to do. [Boom](http://veithen.github.io/2015/03/26/jekyll-bootstrap.html).

I deleted the flex-grid and mixin SASS files, and followed the instructions per the link on adding the SASS for Bootstrap. Holy crap everything worked i.e. no crash, dev site looks identical.

Last cleanup item before we can finally get into the grid is the variables file. There are some helpful variables that came with the `new` Jekyll command that are laced throughout the SASS. Bootstrap will have some also. So I am going through these and eliminating duplication. Basically all the Flex-Grid sizing had to go, in favor of the Bootstrap. No breaks again.

### Grid my Girded Loins
We want a page that is two columns. 1/3 - the space on the left - is our menu and nav in a single column. We'll have a fun color, perhaps. The rest is a white column. This will be for content. I went through and changed all the `wrapper` classes to `container-fluid` to be Bootstrap-compliant (bootstrapped?).

The header and footer are likely, eventually, going to be deleted but I will leave them in there for now, changing out `wrapper` and pouring out a 40 for them.

Diving into index.html, I am thinking I might want to make two include files of html, one for the menu bar, and one for the content.

### Everyone Loves a Good Accordion
Found an excellent, simple accordian tutorial that I used as a jumping off point [here](http://jc-designs.net/blog/2011/07/how-to-build-a-horizontal-jquery-accordion/) with a [demo](http://www.jc-designs.net/demo/accordion.html). I want to have a single page site and the accordion allows me to showcase a little animation and use the space on the site better.

### Cleanup
And now it is just a matter of porting over the exisitng JS from the sorta working first site that was guilty of ugliness, adding content (case studies), styling the blog posts and making the project slideshow automated with a timer.

Other challenges I want to tackle before I consider this project done include:
* Adding more social links for other sites I am on
* Mobile/responsive solutions to the accordian. I want to flip it from horizontal to vertical accordion action.

But [russellschmidt.net](http://www.russellschmidt.net) is well on its way.

_Total Time Burned to Date:_ 36 Hours

_Additional Time Required:_ 4 hours (estimated)




