---
path: "/blog/fun-concert-finder/"
date: "2016-04-13T17:12:33.962Z"
title: "Fun Concert Finder"
type: "blog"
---

# The making of FunConcertFinder
I have had a couple of days to mull over this project and I think that I am ready to dive in. I am writing this post to help me document my thought process and also assist me in thinking through the process of developing this app.

The first step in programming for me is putting on some music that generally lacks singing. Samples of human voice or highly repetitive sung parts are acceptable, as are non-English lyrics. I just find a standard song sung in English too distracting. I created a channel in Pandora based around the band 'Burial' which has turned into an awesome meditative yet energetic soundtrack to my thinking and typing.

There are three parts to the app, and thus to making the app. The first part is figuring out how to talk to the API. I installed Node.js on my laptop and am currently in my local Starbucks at 6th and Spring in Downtown LA since my wife has her book club taking over our apartment currently. I ought to be able to build a simple JavaScript file that can send and receive API requests tonight.

From there, I need to build out the speech and 'intents' for the Echo user. Intents are the voice answers provided by users to my app. I need to map out all the possible intents as well as provide some help and direction via spoken interactions from the Echo to the user. I imagine this to be an iterative process, since I want to offer three main services - find concerts from a specific band, find concerts at a specific venue, and find concerts in a specific city. Fortunately, the Amazon Echo sample code includes a High Tide finder service that has a little bit of similarity with what I am trying to do.

Last, it helps greatly if a text-based list can be entered of various proper nouns for the various 'slots' (Alexa speech variables) users will provide. Our three slots will most likely be band names, city names, and venue names. I am not quite sure where to find lists of all three, of which venue names are likely the most difficult. For band names, I can check Billboard charts and probably account for a plurality of all concert tickets sold just to the top acts. Of course, I would prefer more obscure bands to make this a more interesting app for niche music vans that are likely more enthusiastic 'super' users of an app like this.

## RESTful Fun
So I checked out a Codecademy course on [APIs and JavaScript](https://www.codecademy.com/courses/javascript-beginner-en-EID4t/1) to get an idea, and was saddened that they started out with XML, but am determined to stick with it.

First I learned the four main HTTP verbs of GET, POST, PUT and DELETE. From Rails, I learned about a few more such as NEW, CREATE and UPDATE but I am not going to be pedantic about it. GET retrieves data, POST sends data as a new record, PUT generally sends data as an update, and DELETE deletes a record.

Next, I learned that an HTTP request is made of three parts: the request line, the header, and the body. The request line will tell the server which verb we are using and what we are looking for. The header sends additional information such as information about my machine (the client). Last, the body is where the POST or PUT data goes. GET and DELETE requests will have an empty body.

For a long time, I was taught that the W3Schools site was not all that great (except at SEO because those fools are top ranked in everything related to programming). However, I found their [JSON information](http://www.w3schools.com/json/json_http.asp) extremely informative and easy to understand. This [Tutorials Point link](http://www.tutorialspoint.com/json/json_ajax_example.htm) also proved helpful.

#### Node and JSON
One last hurdle remained - who is gonna run this operation? I could have put all my JavaScript into a web page and run from my machine or from a server I own, but I am new to Node.js and wanted to see if I could run pure JS from my machine. And so I type 'node index.js' and nothing happens. Well, an error happens, to be exact - Node has no idea what `XMLHttpRequest` is or why I am here on Earth. Baby I was born to get info from a concert API and will not be denied.

Simple enough solution - the `XMLHttpRequest` object is a browser object and not in Node. You have to [download the module from NPM](https://www.npmjs.com/package/xmlhttprequest) and add in a line of code to get this to work.

And with some futzing about combined with my brand new knowledge of Node.js I was able to get communications established with my new friends at BandsInTown! Now to write the other 1,000 lines of code for my Alexa project.
