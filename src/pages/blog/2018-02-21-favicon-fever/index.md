---
path: "/blog/favicon-fever/"
dated: "2018-02-21T15:42:11.200Z"
title: "Favicon Fever"
type: "blog"
---

Sometimes you just want to add a ridiculous picture to your website hosted on Github Pages. I struggle to do this with Gatsby because out of the box, you don't touch HTML file. In fact, I had no idea where this was in the Gatsby file structure. There are I believe 8 "html.js" files in the barebones implementation. Fortunately the generally excellent Gatsby documentation [has a section on html.js](http://www.webexhibits.org/causesofcolor/5.html).

Once you have copied the `html.js` file to your `src` folder (`$ cp .cache/default-html.js src/html.js`), you can copy your normal favicon links into the `<head>`. Copy your favicon files into `/static/` and away we go - this works on my dev server. It definitely has not worked on my Github Pages production site. Hmmm...

I hate to use a plugin, but I think I need to in this case given the paucity of information I found about the inner workings of Favicons and Gatsby and the potential that this is just an annoying Github issue I don't care to dive into. Whaddya know, there is a plugin for [just this sort of thing](https://github.com/Creatiwity/gatsby-plugin-favicon).

