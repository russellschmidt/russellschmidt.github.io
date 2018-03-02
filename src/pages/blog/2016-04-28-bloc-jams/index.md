---
path: "/blog/bloc-jams/"
date: "2016-04-28T17:12:33.962Z"
title: "Bloc Jams"
type: "blog"
---

Finally finished refactoring the Bloc Jams music player into Angular. You can [find it here](ancient-peak-81208.herokuapp.com) and turn those speakers way way up.

#### Keep the Node Alive
I had a question for my mentor regarding the easiest way to run a Node app on the inter-webs. I know how to do things old school from a PHP server management persective at a hobbyist level, FTPing files in. I was not as sure about Node and how that all works. Mentor Man said to check out Heroku, where I had an account for the rails projects.

#### Node on Heroku
The [instructions for loading a Node-only app](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction) on Heroku could not be easier so that is the good news.

Here are the steps.

1. Make heroku account
2. Load Heroku Dev Toolbelt
3. Log into heroku from command line - this assumes you are using git, bee tee dubs.
4. navigate in bash to the project root folder
5. `$ heroku create`
6. `$ git push heroku master`

**DONE**

Heroku has a couple more steps to make sure your app is good to go.

1. `$ heroku ps:scale web=1` this makes sure one of your 3 free dynos on heroku is assigned
2. `$ heroku open` opens the website in your default browser

Having a bit of a Heroku-inspired confusion because the email verification plug in I was using from Mailgun ended Heroku support without a paid account. I knew this and saw it coming but was too busy with all these projects to get involved, but now that I went deep into the weeds, might as well try and fix it. Heroku helpfully put the app to sleep for now.

Another naughty bit is that my pictures and icons and custom fonts all disappeared, and they are all being pulled off a CDN. I have a suspicion that if I went to a paid account this might resolve itself because I am a cynical bastard.

# UPDATE
That problem resolved itself and my vile cynicism was unwarranted. ITS ALIVE!!!!

#### Future Bloc Jams
Currently there are 12 identical albums on there. I would like to at least have 12 different albums on the site - its a bit boring!

Some ideas from Bloc were creating user profiles, sharing music and creating playlists.

#### Future tech project
I have 6 apps now on Heroku that I am proud of and wished were all up and running. I have the one I am paying for - climatecents.org - which is a long-term project I am on, and then 3 of the free plans.

At $7 a month per app, I would be paying $21 a month to host the three extra apps. I wonder at what point I should be looking at a Digital Ocean or other inexpensive VPS solution. Since I am rich in old laptops and computers, I also might want to self host with a static IP, though that is a very old school solution and will not have great performance over my internet with its not incredible upload speeds.
