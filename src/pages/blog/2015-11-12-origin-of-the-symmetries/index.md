---
path: "/blog/origin-of-the-symmetries/"
date: "2015-11-12T17:12:33.962Z"
title: "Origin of the Symmetries"
type: "blog"
---

## Origin of the Symmetries
I am working in Rails and starting to understand the moving parts instead of trusting the Force. And now that I have been kicking around in Ruby for 5 weeks at a more intensive level starting with the pre-work for this Bloc experiment, things are just clicking for me in a way they never did before.

Overheard in my brain today
> Of course link_to is a method. The parenthesis are just *implied*. And controller_view_path is a method that was created automatically in the background when I ran ```rails g controller view view view```. Everything is one. Namaste.
Without my current grounding in Ruby this truly all seemed like magic before, and not the good kind. The crappy kind, the quarter behind the ear magic where you know its just sleight of hand and the reason you don't know the exact trick is because no one will show you and Magic Overflow is a scalpel when you need a hammer.

### Scalpel / Hammer Interlude
What I mean is that Stack Overflow is at its best and incredible to behold when targeted at specific one liner problems like 'Why is this error message'? I think especially for my Swift class, the community was really trying to figure things out (I was writing my final project in Swift 1.2 which was turning into 2.0 THE WEEK AFTER CLASS ENDED AND BROKE ALL OUR PROJECTS).

SO is marginally less awesome - though sometimes a shining beacon of hope and knowledge, just depends on the day - with problems like 'I dont understand conceptually what is going on here' wher you get a lot of 'hurr durr learn2internet' snark. I have been bullied and bullied on the internet and I just have had enough of it. It is part of a general coursening of the culture I hope to address soon in my own startup idea.

### Symmetry
So I see in Rails that when you generate a controller, you get a unique SASS (.scss) file for each controller. That makes sense, as those Views ought to have a similar look and feel, or likely, a designer would want them to the vast majorty of the time. Your View All page looking radically different from an Edit page would be a surprise to everyone. That said, I found it asymmetric that the same thing - a unique template per controller - is not there for the HTML via **application.html.erb**.  Not wrong. Just asymmetric.  I would imagine that you might have a single application.html.erb for all pages and then each controller would have its own auto-generated template, as one might want a different structure per family of views. Maybe I am overthinking things, and I know it is easy enough to make a helper file to perform this same function if needed.
