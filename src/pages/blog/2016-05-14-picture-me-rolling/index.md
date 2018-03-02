---
path: "/blog/picture-me-rolling/"
date: "2016-05-14T17:12:33.962Z"
title: "Picture Me Rolling"
type: "blog"
---

![clippy](/images/clippy2.jpg) Time to add some images to a Ruby project that I am working on. I have a Projects model already that has some basic content. I want to enable people to upload images and associate them with a specific project. Later on, I hope to add in permissions so only Admins can access add/change/delete, and automate thumbnails so that on the /index page, relevant pictures show up automatically.

## Setup
There are three popular plugins available for Ruby on Rails: **Paperclip**, **CarrierWave** and **Dragonfly**.

##### Github Repo's

1. [Paperclip](https://github.com/thoughtbot/paperclip)
2. [CarrierWave](https://github.com/carrierwaveuploader/carrierwave)
3. [Dragonfly](https://github.com/markevans/dragonfly)

## ImageMagick
Everyone needs [ImageMagick](http://www.imagemagick.org/script/index.php) to run. It processes images, reading and writing from all the varied image file formats in the wild.

#### First Steps
Get ImageMagick loaded. `brew install imagemagick` and you should have [Homebrew](http://brew.sh/).

If you also want to install GhostScript for fun PDF uploads. `brew install gs`.

Add `gem "paperclip"` to your Gemfile.

And of course, stop your Rails server, `bundle` and restart. Proceed if your site is not destroyed.

### Paperclip (RIP Clippy)
We all miss you Clippy. ![Clippy](/images/clippy1.jpg)

We need to add a model for our images. I'm going to use Rails scaffolding because that's what refactoring is for `rails g scaffold paperclip_image --skip-assets`. (Run first with the -p flag for "pretend" on the end to see what it would do).
