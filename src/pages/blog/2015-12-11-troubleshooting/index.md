---
path: "/blog/troubleshooting-with-rails/"
date: "2015-12-11T17:12:33.962Z"
title: "Troubleshooting with Rails"
type: "blog"
---

## Troubleshooting with Rails.logger.info
This short post will be discussing the magic of the Rails error logging. I literally learned about it today and literally have zero blog readers so I don't feel too bad with the misinformation campaign below.

Assume you have an error you don't understand. An error that doesn't even necessarily cause your view to show an error message. Maybe you are spitting out JSON which is not quite as verbose about things not working as, say, an error that would mess up an HTML-based view. You need some help. You need to know what is in those variables. You need Rails logger!

### Rails.logger.info
Putting in Rails.logger.info *some_var* into your Ruby code will output that *some_var* to your test log (see next section). You can output strings enclosed in quotes, variables as variables, variables using string interpolation for more readable error logging, or dive into variables with *some_var.inspect*.

So for example, you can write Rails.logger.info @current_user.inspect to see the status of a currently logged in user while running, say, RSpec or playing with a live app on your local machine.

### iTerm Use Case
In iTerm (or Terminal, or other command line du jure) you can type in
>>>
$ tail -f log/test.log
>>>
and now view an activity log including your Rails.logger.info entries to pick apart what is going on in your code.

### Helpful hints
I can only pass on the three I know, so here goes.
1. Be sure to delete out your Rails.logger.info code once you are done.
2. Don't be shy about using lines of text so provide visual ID'ing of your tests. It is hard to find the inserted logger lines so "!!!!!!!!!!!!!" is not a bad idea.
3. You can only pass one variable per line with Rails.logger.info
