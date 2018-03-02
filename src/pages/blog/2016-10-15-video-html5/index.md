---
path: "/blog/video-in-html5/"
date: "2016-10-15T17:12:33.962Z"
title: "Video in HTML5"
type: "blog"
---

For the Climate Cents site, we wanted full screen video at the top of each individual project page. Fortunately each partner has a high quality MP4 for us to use, so the hardest part - making the video - was already done for us.  All that remained was getting it on the site.

### The Promise of HTML5
What is not to like? Drop in a simple tag and voila, you are playing video without needing a 3rd party client or service. Seemed simple enough.

### Cold Reality Hit Me In The Face

The design spec was for the video to stretch across the top of the page and be responsive, which right away seemed to rule out hosting the video on YouTube. However, as I dug into what it took to get HTML5 video tags to work, YouTube or Vimeo hosting looked better by the minute.

First off, cross-browser compatibility is an issue. To use video across major browsers, you need to include files in three formats at present: mp4 (using H264 codec), webm, and ogv.

[Miro Video Converter](http://www.mirovideoconverter.com/) is the solution to the multiple codec problem. I had mp4s of all my videos but needed to convert to the other formats, and Miro did that without any trouble, through converting to HD webm did take a bit more time than I thought it would.

I loaded all the videos to Amazon S3 and made them public. The size of the videos made it impossible to upload to our dev machine on Heroku and based on what I read online, it was going to be hard to beat Amazon at the hosting media game in any event.

#### Code Time
I am going to refactor mny views in rails to get the video URLs into my model and then whitelist them in my controller. But this shows how the HTML can be structured to make it work. Inside the video tag, you stick your three source tags with the MIME type afterwards.

I decided that in 2016 I was not going to support Flash for non-HTML5 compliant browsers. I'm the only dev on this project and my to-do list is a mile long. However, [you can see an example here](https://css-tricks.com/snippets/html/video-for-everybody-html5-video-with-flash-fallback/) of how to do that.

```ruby
<div class="content-wrapper project-show">
  <video poster="<%= @project.pictures.first.image.url(:hero) %>"
    id="hero-image" class="project-video" height="400" width="100%">
    <source src="https://s3.amazonaws.com/climatecents/project-videos/BayFoundation-KelpDive.mp4" type="video/mp4"/>
    <source src="https://s3.amazonaws.com/climatecents/project-videos/ProductionOgv/BayFoundation-KelpDive.oggtheora.ogv" type="video/ogg" />
    <source src="https://s3.amazonaws.com/climatecents/project-videos/ProductionWebM-HD/BayFoundation-KelpDive.webmhd.webm" type="video/webm"/>
    Your browser does not support the video tag.
  </video>
  ...
</div>
```

I decided against using default controls (just pop 'control' without quotes into the video tag) since the videos were short and our design was pretty enough as is. So to get the video to play, I used JavaScript to hook up a button (well, actually an a-tag which I want to refactor to a button as well). That code was pretty straightforward also:

```coffeescript
playVideo = ->
  $video = $('.project-video')
  $videoPlay = $('.project-video-play')
  $videoPlay.on 'click', (e) ->
    if $video.get(0).paused
      $video.get(0).play()
      $videoPlay.text("Click to Pause")
    else
      $video.get(0).pause()
      $videoPlay.text("Resume Video Play")
    return
```

#### Control Problem
During testing, I had set the control flag, and couldn't click on the control! I was losing my mind... until I caught a Stack Overflow comment about z-index! I had set the video element behind another transparent div and so made the button impossible to click. If you can make the controls show up but they do not do anything, be sure to check your z-index.

#### Naughty Naughty Chromey
In the course of getting all of this work, I had my first run in with a Chrome CSS issue. I've never before had to deal with browser-specific CSS issues with Chrome. Basically, my problem was that when using the `object-fit: cover` CSS, the webm file that Chrome played would bust right out of the containing div and ruin my layout.

I tried the following:
1. Set height to 400px in CSS
2. height: 400px !important
3. Set height to 400 in the HTML within the video tag
4. Set height to 100% in the HTML
5. Set max-height: 400px
6. Do some funky, funky CSS positioning

```css
video {
  left: 50%;
  min-height: 100%;
  min-width: 100%;
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
}
```

(this last one screwed up everything)

Eventually I had the bright idea to use the internet and found that you can in CSS specify Chrome through a fun hack-y media query. Here is what eventually got my video to behave:

```scss
@media all and (-webkit-min-device-pixel-ratio:0)
{
    .project-show #hero-image
    {
      object-fit: fill;
    }
}
```

And now I have a cool video that plays behind my nav, stays responsive, and is capped at a height of 400px to stay true to the original design and avoid an unseemly lightbox.

#### HTML5 Video Resource Links
1. Great overview <http://www.htmlgoodies.com/html5/client/how-to-embed-video-using-html5.html#fbid=Ae_QzV1hg3y>
2. AWS Information <http://www.sysmoth.com/streaming-videos-through-amazon-s3-cloudfront-and-html5/>
3. Sample Code examples <http://callmenick.com/post/html5-video-jumpstart-examples>
4. Video-as-Background. Not needed for my project but I want to do this in the future <http://fvsch.com/code/video-background/>
5. Solved my z-index issue <http://stackoverflow.com/questions/36039259/html5-video-controls-do-not-work>
6. Play/Pause with JS <http://stackoverflow.com/questions/10327907/play-pause-html5-video-javascript>
7. Google Developer info on Video - helpful high level background stuff <https://developers.google.com/web/fundamentals/design-and-ui/media/video>
8. Good dive into the `<video>` options <http://www.htmlgoodies.com/html5/tutorials/Web-Developer-Basics-The-HTML5-Video-Element-3922571.htm#fbid=Ae_QzV1hg3y>
9. `<video>` with Flash fallback example <https://css-tricks.com/snippets/html/video-for-everybody-html5-video-with-flash-fallback/>
10. Wrestling with video aspect ratios and sizing <http://stackoverflow.com/questions/2371040/how-can-i-make-html-5-video-playback-fit-to-frame-instead-of-maintaining-aspect-r>
11. Chrome-specific CSS media queries <http://stackoverflow.com/questions/945428/how-to-do-a-chrome-opera-specific-stylesheet>
