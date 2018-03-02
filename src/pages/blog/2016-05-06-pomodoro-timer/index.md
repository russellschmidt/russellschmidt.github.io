---
path: "/blog/pomodoro-timer/"
date: "2016-05-06T17:12:33.962Z"
title: "Pomodoro Timer"
type: "blog"
---

It's ALIVE! Just click Dr Frankenstein over there to experience the majesty of my Pomodoro Timer. <a href="http://pomodoro-timer-rs.herokuapp.com/" rel="ITS ALIVE (Pomodoro app link)" target="_blank">![Gene Wilder as Frankenstein](http://graphiccon.com/wp-content/uploads/2016/01/its-alive-1200x475.jpg)</a>

# [Pomodoro Timer](http://pomodoro-timer-rs.herokuapp.com/)
A Pomodoro Timer is a timer that allows for following the Pomodoro Technique, which is 25 minutes of focus followed by 5 minutes of rest (or really, unfocused thinking, day dreaming, type activities). This allows the brain-mortar to dry when you are building new neurological connections.

## My Pomodoro App
Built in AngularJS, it provides the basic timer for 25 min work and 5 min relaxation, plus every fourth round the rest period extends to 30 minutes. It also connects to Firebase for tracking activities.

## Roadmap
There are a number of things I hope to continue to add.

1. Giant rotating tomato - this proved a time suck because I need to photograph a rotating tomato - CSS animations and JS animations both do better on a 'axis-on' view (think of looking at a spinning tire hubcap) instead of 'equator' view (think tire tread). I want to show timing hash marks so would need to take a number of pictures of the tread and then animate a transition between pictures, estimating that for 360 degrees and 30 minutes I would need 30 images representing 12 degrees each. Each minute I am transitioning from minute to minute.
2. Login - right now anyone can add a task specific to everyone, which is not really a great outcome. I am running on security by obscurity and blogging about it so that is not all that bright. Ideally I would create a login and signup mechanism so everyone could use their own task list.
3. Task specific tracking - I would want to know how many times per task I am interrupted (have to hit the pause button) and how many task-break cycles I have completed. It would be great to be able to select and existing or create new task when I hit the start button.
