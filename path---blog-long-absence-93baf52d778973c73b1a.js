webpackJsonp([0xd4c5de6281a9],{578:function(e,t){e.exports={data:{markdownRemark:{html:'<p>Seems that I have bitten off a bit more than I could chew of late and my writing on this bloggo 4 doggos has fallen behind a bit. I saw my Google Analytics drop from 10 visitors a day to 3, a terrible turn of events. So much for that dream of passive income through terrible blogging. And yes I am sorry, faithful reader(s). In the spirit of the Rio Olympics, I will Go for Gold™ from here on out.</p>\n<h2>MeteorMan</h2>\n<p>I have been quite busy working on a fun project for <a href="http://www.gametree.me">GameTree</a>. Up until about 3 weeks ago, my work was largely on the front-end, though that distinction is less and less meaningful with JS frameworks. The stack is Meteor with CoffeeScript for the JavaScript and Jade for the HTML templates, which means I was learning a new framework, a new, terse version of JS, wrestling with Mongo for the database, and getting comfortable with Jade. I was used to HAML so Jade was not so scary.</p>\n<p>Working on the front end for Meteor was fun and, once I got the hang of helpers and templating, I liked it quite a bit. You could do a lot with a little code, and there wasn\'t a lot of overhead checking for nil? or present? which is a lot of my Rails day-to-day frustration. For getting something quickly up an running, I would argue that when you get the hang of the file structure and the basics, it would be hard to be faster than Meteor. I suppose with scaffolding Rails is pretty damn fast but if the app requires reactivity well then you are in a whole other hell of hooking React or Angular up. I tried that and failed, and am due to try again once I come up for air with GameTree and Bloc.</p>\n<p>Oh but Mongo. You are such a touchy bastard. Years spent learning SQL and MySQL and Postgres, learning about Joins and one-to-whatever relationships, and then here I am writing data to JSON. Nothing checking me, no need to define your database ahead of time (though you certainly might want to opt for using <a href="https://atmospherejs.com/aldeed/simple-schema">Simple Schema</a> so you can set default values and validate incoming data). I can add new fields willy nilly, after I finally figured out how to do that. It took me two days to figure out how to increment properly, of course there is a special <code>$inc</code>operator. It was a humbling learning curve.</p>\n<p>There is nothing wrong with Mongo. What Mongo represents is a real break from all the other databases I have used. I rolled my eyes at Mongo\'s document instead of row, collection instead of table and conclude: it is necessary. For Mongo is of this <a href="https://www.mongodb.com/blog/post/thinking-documents-part-1">document-based database revolution</a> and the names should be different to mark Mongo as apart from a traditional relational database.</p>\n<h3>Notes on HAML and Jade</h3>\n<p>I know there is a lot of debate on whether these actually help anyone or if the various time-consuming search engine lookups and learning curve surrounding edge cases with HTML preprocessors eats up the savings from abandoning closing tags. I don\'t have strong opinions on the bulk of programming debates, since I don\'t trust my own instincts quite yet, and could easily confuse learning curve for steady state ease of use issues. However, I have been writing HTML forever, and after having gone solo in throwing together a Rails site for a friend over the course of the last few months in my scant spare time, I can say with confidence that I hate closing tags and will be installing HAML as soon as I refactor that Rails site for the upcoming 2.1 release for said friend.</p>',frontmatter:{date:"August 10, 2016",path:"/blog/long-absence/",title:"Long Absence",type:"blog"}}},pathContext:{}}}});
//# sourceMappingURL=path---blog-long-absence-93baf52d778973c73b1a.js.map