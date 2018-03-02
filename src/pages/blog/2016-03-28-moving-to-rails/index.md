---
path: "/blog/moving-to-rails/"
date: "2016-03-28T17:12:33.962Z"
title: "Moving to Rails"
type: "blog"
---

### A New Hope
Sadly, we reached the end of the road with the existing WordPress site. The type of site that everyone on the team wants is a single page application (for the most part) with really cool graphics and animations. We looked at the WordPress code and we would essentially have to start over with all of the custom work done to date. In addition, since I am the only developer on staff and we have some pretty ambitious timelines, there was a question of what is the fastest way to get the 2.0 out the door. Since we don't have access to the source files for a lot of things, I am left trying to do styling with minified CSS and JS files and a lot of commented out code but few comments.

#### New Site Goals
1. Excellent mobile experience
2. Lots of data visualization for users
3. Make it easy to share news, giving and other bragging rights
4. Layer in a blogging platform
5. Great sign in experience

#### Process
First, I decided to go with postgres for the development site. Worst case scenario, I can spin up a parallel Rails server with a different database, copy over the code and use that if I am forced to use MySQL for production (because [MediaTemple](https://mediatemple.net/) is our current host). I don't think that should be too much of an issue (nor should switching hosts be a concern) but its not my money. All in all, this is the sort of thing that makes Rails so fun for this stage of the game - the flexibility is pretty great, and you don't have to get married to a certain backend. Just don't get any production data in the db that you can't get out again.

#### Getting Started
The [Digital Ocean instructions](https://www.digitalocean.com/community/tutorials/how-to-setup-ruby-on-rails-with-postgres) are what I used to get going. I also installed [lunchy](https://www.moncefbelyamani.com/how-to-install-postgresql-on-a-mac-with-homebrew-and-lunchy/) which, if you are used to using MAMP to get your MySQL going, is even easier if you can believe that. `lunchy start postgres` is pretty straightforward.
1. rails new cc -d postgresql
2. rake db:create
3. rails s

And go to localhost:3000 and see if you see what you expect.

#### Next Steps
Let's throw our working rails app that does nothing in a GitHub repo, and then push to a new Heroku instance to still do nothing but in public.

Once we have done that, I want to make a controller 'welcome' and view 'index' to be our new home page so we have something to show.

#### Testing, testing, 1, 2... 3?
We have a couple of gems we wil want to install upfront. The first one is Rspec, which is an excellent testing tool. By excellent, I mean, it is the one I am more familiar with.

The next gem we want to install is Devise.

####  Configuring Devise.

#### Next challenges
We want to enable a Facebook login, so that we can make life easy for our users. We also intend to, at least initially, focus on Facebook as a marketing channel so it makes sense to incorporate it into our login schema and start to think about ways to collect user data.
