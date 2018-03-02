---
path: "/blog/escaping-double-curlies/"
date: "2016-04-21T17:12:33.962Z"
title: "Escaping Double Curlies"
type: "blog"
---

Just lost an hour of my life trying to output double curly brackets from a Jekyll blog post in markdown to my blog. Angular relies on double curlies. Go uses double curlies. Liquid uses double curlies. Jekyll uses double curlies. I want to show my double curlies.

The issue is double curly brackets `{% raw %}{{ site.dlcb site.drcb }}{% endraw %}` are interpreted in liquid as interpolation so your curlies will (a) disappear on screen and (b) be interpreted as variables which is a real problem - it was crashing my blog!

So there are some solutions online. There are many people that love this one:

### Raw Ima Give it to Ya
First a hat tip to [SLaks](http://goo.gl/yHdTLP) who told me via a 2 year old Stack Overflow post that one needs to write `raw` and `endraw` enclosed in the `<% %>` to escape the Angular double curlies in Jekyll so I could stop screwing up my blog with the code examples.

Didn't work for me in the context of a Jekyll blog post written in markdown but this is the credited response if otherwise on your site your code needs to output code-as-string.

### Notable Quotables
Some people are escaping their double curlies with quotes. I refuse to do this because it makes it so unreadable. But if you think heiroglyphics were a good system, have at it [here](http://stackoverflow.com/questions/3426182/how-to-escape-liquid-template-tags/5866429#5866429) and enjoy your hell-world.

### Nate Eagle, a God among men
This man NATE EAGLE saved me. [This solution](http://nateeagle.com/2011/08/31/how-to-output-curly-brackets-in-jekyll/) was the one that finally stopped the torture. In your `_config.yml` file set up two variables with the double curlies so you have

`left-curly: '{{ site.dlcb }}'`

`right-curly: '{{ site.drcb }}'`

And now within your post in markdown you can reference this with

`{{ site.dlcb}} site.left-curly {{ site.drcb }}` some sweet code example `{{ site.dlcb}} site.right-curly {{ site.drcb }}`

### Another Way. Go Raw
You can also enclose your double curlies in a Jekyll raw / endraw tag. This would look like:

&#123;&#123;% raw %&#125;&#125;
{% raw %}
{{ look_at_my_double_curlies }}
{% endraw %}
&#123;&#123;% endraw %&#125;&#125;

### PRO TIPS FROM AN AMATEUR

1. Restart your server when you make changes to `config.yml`
2. Write out your post normally with double curly brackets and just use a find-replace and thank me later
3. Make Mother's Day reservations a few weeks in advance, places really fill up.
4. Use single quotes and not double quotes in your variable assignment
