---
path: "/blog/animate-and-shopify/"
date: "2018-01-13T17:12:33.962Z"
title: "Animate and Shopify"
type: "blog"
---

## How to create an animation in Adobe Creative Cloud 2018
I have no idea why they make this such a hidden secret for those of us who hate sitting through 45 minutes of [instructional videos](https://helpx.adobe.com/animate/how-to/create-2d-animation.html?playlist=/ccx/v1/collection/product/animate/segment/designer/explevel/beginner/applaunch/orientation/collection.ccx.js?ref=helpx.adobe.com) that I had to watch four times... I get the irony. You probably need to watch the videos to know what to click.

How to create a 2D video or HTML Canvas or WebGL in a few steps
1. create a new document. Select HTML Canvas or whatever you want this to end up as.
2. Click on the background layer name and rename it something background-y (ex: "bg")
3. Add a new layer for your animated object
4. Paste your object. NOTE that I had a hard time with items that had been grouped in Illustrator before transferring in, and was happier ungrouping in AI and then importing the file to Animate Animation whatever this is called.
5. I import as a single layer. Easy to break up later.
6. Select the whole object and hit F8 for converting to symbol. Make it a 'movie clip'.
7. Go through the animation object and for each part that is an independently moving piece, hit F8 and convert to symbol as a 'movie clip'
8. Now select the whole object again and CMD+SHIFT+D (Modify>Timeline>Distribute to Layers). The name should have carried over. The original layer for the object ought to be empty. If you missed some items, these are now their own layers.
9. At the bottom, on the timeline, decide how long the loop or animation is, highlight those cells at say 5s or 100 frames or whatever, and hit F5 (Insert > Timeline > Frame)
10. For each item you want to animate, select the object and Insert > Motion Tween. If it worked, the layer icon changed from a piece of paper to a square meteor looking icon.
11. On the timeline, the red slider is the current editable frame. You can select the layer and move the objects around. The program handles the animation between editable frames so you may just want to, for a simple animation select a starting position and, after moving the red slider, an ending position.
12. Move the red timing slider around to test.
13. Select the item and in Properties, you ought to see a Color Effect menu, which is handy for fade in/out. Set alpha to 1 at start (so you can still see it to click) and 100 and the end and voila. Fade into you like Mazzy Star.
14. You can shift the time blocks of each layer for a delayed start as well.
15. Save frequently.
16. Don't want to loop? Tough shit! THIS... IS... ADOBE!!!! OK so I saw a great tip on SO. Create a new layer. On the end frame, hit Insert > Timeline > Keyframe. Then right click that last frame on that layer and hit Action. The script you want to write is simple: `this.stop();` and that is it. Save again.
17. My preferred HTML Canvas output settings when you are done are:
17.1. Basic: include hidden layers, but don't use the export asset options. Adobe assumes you can easily slap child folders on the HTML Canvas file which goes against canon or is impossibly lame with: Rails, React/Node, Shopify, Wordpress.
17.2 Advanced: I Include the Javascript in HTML. Again with Shopify and Wordpress, we want to just slap in some include files and don't want to create a bunch of child directories we can't support. Yes to hosted libraries, yes to compact shapes.
17.3 Hit PUBLISH then OK
18. You **should** just have a single HTML file now to deal with.

### Shopi-fudge
So that HTML file is not really production ready. I mean, presumably you have other content and want to shoehorn the animation in. Or in my case, you had to add the animation for a client's <http://www.literallymagick.com> homepage which is hosted on Shopify.

Open that file in a text editor. There are 5 components you care about.
1. Body - note the 'onload="init();"'. You'll want to add this in or put it into a JS file that runs on load to call the animation script.
2. There are two `script` tags I had to put each of these in a Asset file with a `.js` extension. This is the first, pretty long script tag. I did not copy the script tags themselves since they were in a JS file.
3. This is the second less long script tag.
4. The divs and canvas element.
5. There is some .js file in the head hosted on a CDN from Adobe you need
6. Include the 3 JS files in the head of the theme.liquid file like so
```
  <script src="https://code.createjs.com/createjs-2015.11.26.min.js"></script>
  {{ 'html-canvas-1.js' | asset_url | script_tag }}
  {{ 'html-canvas-2.js' | asset_url | script_tag }}
```
7. Plop in the HTML code in the appropriate SECTION
8. It *should* work. The formatting will probably be off since Shopify themes have some opinionated formatting. I had to install my image outside of the container that connected to their grid system since it added a left margin at different screen sizes that I didn't want to deal with - it was easy enough to just center the image and if you clicked the RESPONSIVE option on publish, the image with adjust to the screen size auto-magically.

This took me about 10 hours to figure out and I have a mild headache now. I wasted half that time trying to animate an SVG and Shopify did not let me upload a file snippet over 256kbs, and including the SVG as an asset and importing as an image killed the animation. On the bright side, I got so much faster at creating animations after my 8th do-over.



