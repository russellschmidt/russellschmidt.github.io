---
path: "/blog/new-view-for-cc/"
date: "2015-11-13T17:12:33.962Z"
title: "New View for CC"
type: "blog"
---

From my last blog post we saw that I had a lot of work left on this project.

> **Remaining to do for Sunday:**
>1. Add three fields to Projects for Active, Featured, and FrontPage. All will be Boolean.
>2. Add a new controller action 'Landing' for the front page
>3. On the Index view, only show Active projects
>4. On the new controller action 'Landing' only show FrontPage Projects.
>5. Match the mockups no big deal

### Add some booleans
I want to do this before I get to carried away adding to the database.

I screw up migrations more often than not. There are some things to consider in a migration.

1. The migration itself with the subsequent rake db:migrate.
2. Adding the new fields to your strong params in your controller to whitelist them
3. Adding the new fields to your CRUD so you can see and edit them
4. Add them to preexisting data / seeds

I am just adding three boolean fields. Active is whether a project is shown at all to the public. Featured is a Project of the Month type future feature we are talking about implementing. Frontpage is whether the project shows up on the landing and I will on second thought rename that Landing.

#### migration

So we run a migration in terminal (iTerm 2 in my case)
`$ rails g migration addBooleanFlagsToProjects active:boolean featured:boolean landing:active`

And then open up the migration and Rails sometimes is so clever I can't believe it.

`ruby
class AddBooleanFlagsToProjects < ActiveRecord::Migration
  def change
    add_column :projects, :active, :boolean
    add_column :projects, :featured, :boolean
    add_column :projects, :landing, :active
  end
end
`

We aren't going to add default / initialized data in the migration at this point. Run `rake db:migrate` and get on with this. AAAND Rails barfed. It did not like 'active' as a column name.

So a little creative more ruby-ish change to names...
`ruby
class AddBooleanFlagsToProjects < ActiveRecord::Migration
  def change
    add_column :projects, :is_active, :boolean
    add_column :projects, :is_featured, :boolean
    add_column :projects, :is_landing, :active
  end
end
`

Oh the problem was in `is_landing` where somehow the type `active` was used. I am keeping the new is_x naming schema, changing the error to :boolean and off we go.

I added these to the controller real quick before I got excited about views.

### Views
The best way to handle these would be with a checkbox. Things like this make me fall in love with Ruby on Rails all over again because this is so easy.

`html
<div class="field form-group">
  <%= f.label :is_active, class: 'form-label' %><br>
  <%= f.check_box :is_active, autofocus: true, class: 'form-control' %>
</div>

 <div class="field form-group">
  <%= f.label :is_featured, class: 'form-label' %><br>
  <%= f.check_box :is_featured, autofocus: true, class: 'form-control' %>
</div>

<div class="field form-group">
  <%= f.label :is_landing, class: 'form-label' %><br>
  <%= f.check_box :is_landing, autofocus: true, class: 'form-control' %>
</div>
`

I JUST SPENT AN HOUR TROUBLESHOOTING AN ISSUE OF NEEDING TO RESTART RAILS SERVER JESUCRISTO WTF RAILS I DONT LOVE YOU ANYMORE.

This is typical of my Rails journey.

OK So everything is working.

### New View and styling
Finally, what everyone has been waiting for. A facelift for the site so I can get it on Heroku and show it off.

This is mostly messing around with bootstrap and CSS (SCSS) so not as exciting to write about.
