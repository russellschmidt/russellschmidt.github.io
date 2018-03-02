---
path: "/blog/double-model-trouble/"
date: "2016-05-20T17:12:33.962Z"
title: "Double Model Trouble"
type: "blog"
---

Want to attach a photo to a model? No problem. Pop the [Paperclip](https://github.com/thoughtbot/paperclip) gem into your project and rock out on the million tutorials for this. I actually really like the tutorial on building a Pinterest clone on [One Month Rails](https://onemonth.com/courses/one-month-rails/curriculum) if you want a step by step introduction to setting up Devise and Paperclip. It is not a free tutorial, and I am not getting paid to talk about it. Just a casual fan here. [Here is a free Paperclip tutorial](https://richonrails.com/articles/getting-started-with-paperclip) I liked a lot also. It fills in a couple of details that the Github documentation leaves out.

What if I want to attach multiple photos? The way Paperclip works, it associates one image with one model object. So if I want multiple photos to be associated with each project, I would need either to create different attributes for each photo on my model, which with Paperclip is 4 attributes per, or create a new model, say, 'Images', and have Images belong to Projects. This dual model approach is more flexible, since I can just dynamically add photos, but also is a bigger pain in the ass to implement. My heart says dual model but my brain says additional attributes.

The argument for just adding the attributes onto the existing model is:

1. Realistically, how many photos can we possibly want to use? I suppose we might want a gallery feature one day. And we can go ahead and implement that when we have the need. It seems like premature optimization and scope creep before we even know we need it.
2. Drill baby drill. Or, rather, ship baby ship. Anything that is going to add complexity adds time, and I aint got time for that.
3. It will be easier to implement a system to make changes for admins with the photos as attributes.

The counterarguments are:

1. It is something of a jumble of concerns for a project model to also hold information about images. The photos are not central to That Thing Which is a Project, though that this not a slam dunk of an argument.
2. Creating image attributes in the Project model is brittle, creating them as their own model makes them dynamic.

### A good Tutorial is hard to find
And then [I find this tutorial](http://www.railscook.com/recipes/multiple-files-upload-with-nested-resource-using-paperclip-in-rails/) with the Github repo that makes sense and think I should just do this the gangster way, the right way.  So I am going to give the hard way a try and create an Images model.

First, we make sure we have ImageMagick installed.
`$ brew install imagemagick`

Then we add the Paperclip gem to our Gemfile, checking via [Ruby Gems](https://rubygems.org/) that we have the latest and greatest.
`gem 'paperclip', '~> 4.3'`
`$ bundle install`

Now let's create our Picture model that will connect to paperclip.
`$ rails g model Picture image:attachment project:references`

This creates a model Picture with two attributes: an image, and the index for the associated project_id.

We have to create the association in each model, too.

`ruby
class Picture < ActiveRecord::Base
  belongs_to :project
end
`

`ruby
class Project < ActiveRecord::Base
 has_many :pictures, :dependent => :destroy
end
`

We also want to look at the Paperclip documentation at this point too.  There is a bit more to add to the Picture model. We add the standard sizes are going to convert images into - it makes sense to pick a standard ratio so you know what you will be getting on a resize. I went with a 16:9 ratio (that is width:height).

`ruby
class Picture < ActiveRecord::Base
  belongs_to :project

  # all images at a 16:9 ratio
  has_attached_file :image, styles: { hero: "1280x720>", carousel: "1024x576>", largebanner: "771x433>", medium: "300x169>", small: "200x112>" }, default_url: "/images/:style/missing.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/
end
`

And this ought to do it for our modeling.

`$ rake db:migrate` and pray.

It seemed to have worked... our db schema was automagically changed to accept all the picture parameters.

`ruby
create_table "pictures", force: :cascade do |t|
  t.string   "image_file_name"
  t.string   "image_content_type"
  t.integer  "image_file_size"
  t.datetime "image_updated_at"
  t.integer  "project_id"
  t.datetime "created_at",         null: false
  t.datetime "updated_at",         null: false
end
`

Push to git before the computer changes it mind.

### Controller steps
Now we need to add a controller for our Pictures, add some fun stuff to our Project controller to make pictures fun and more easily accessible, and then adjust our views so we can add/change/show pictures.

Time to crib generously from the awesome example done [https://github.com/hackhowtofaq/multiple_file_upload_paperclip_rails](https://github.com/hackhowtofaq/multiple_file_upload_paperclip_rails).

For the `pictures_controller` simply replace the `Gallery` and `gallery` references with the model of your design, and review to make sure it makes sense. You may want to delete the JSON rendering if you so choose. I did not use the `description` attribute whitelisted at bottom either. You can DRY out the code a bit with a private setting method as well. I started in on that but will save that for when the rest of the controllers are implemented for easier testing.

In the `projects_controller` a bit less needs to be done. The github repo has some helper variables set that are not required but that will save you a bit of typing. However, `create` and `update` have some  changes in an `if` block that need to be added so as to save the pictures on an edit.

### Views time
The good news is that we do not have to add any views for the Pictures model. We just need to tweak the existing views and we are good to go. Definitely refer to the Github repo for the tutorial.

### DONT FORGET THE ROUTES...
...Because I sure did. I did not nest the routes because that adds crazy complexity and also because who cares.

`resources :pictures`

### Errata
There is still a lot to do on this project, and I burned a little time by going this route. However, I am glad I did the project this way, as it retains a flexible structure.

#### Remaining to do for Sunday:

1. Add three fields to Projects for Active, Featured, and FrontPage. All will be Boolean.
2. Add a new controller action 'Landing' for the front page
3. On the Index view, only show Active projects
4. On the new controller action 'Landing' only show FrontPage Projects.
5. Match the mockups no big deal

#### To Do Longer Term

1. Facebook login
2. CRM integration with integrated Payment Flow
3. Blog / News. Would LOVE this to be Angular with Rails backend.
4. Personal Profile page
5. Admin dashboard, though the extent of the need for this given the CRM is up in the air.
6. Video integration
7. Project Infographics tied to amount donated - Progress to completion
8. Personal Infographics based on participation in projects and CO2 impact
9. Social (Facebook, Twitter, IG) links
10. Migrate to production
11. SEO-ing including better non-numeric URLs and meta tags
12. FAQ on global warming
