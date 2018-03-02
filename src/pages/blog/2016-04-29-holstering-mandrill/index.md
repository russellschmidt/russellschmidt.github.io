---
path: "/blog/holstering-mandrill/"
date: "2016-04-29T17:12:33.962Z"
title: "Holstering Mandrill"
type: "blog"
---

In our last episode, I mentioned that Mandrill was no longer going to be available on a free tier. Mailchimp, maker of a beautiful email newsletter system, had bought dear Mandrill and is requiring users to have a paid Mailchimp account to use Mandrill. Not even mad but I am not spending $20 a month for a project that is firmly in an embryonic beta state.

Heroku fortunately makes things pretty darn rootin tootin easy if you must leave the tender tendrils of the Mandrill. Options for leaving include Mailgun, Postmark, SendGrid and SparkPost, with the link to [Heroku here](https://blog.heroku.com/archives/2016/3/2/migrating_from_the_mandrill_add_on) if you didn't receive one of the many email notifications about the upcoming change.

### Pause for Weird Thoughts
!['Madragora, from Tacuinum Sanitatis, 1474'](/images/mandrake-1474.jpg) I have been contemplating next career steps. Do I become a junior dev and learn from a mentor or team? Do I dive into my own company? Or third do I start a design shop, and get paid for the type of work I am already doing for friends? I was contemplating business names, and of course you start noticing other company and product names. Which brings me to Mandrill, which I always associate with either a Mandrake, the legendary magical, somewhat hallucinogenic plant of Pagan ritual, or a gay bar. It was said that Mandrakes would scream as you pulled them out by the root, killing anyone who heard it, which is topical since Mailchimp killed my app by pulling Mandrill support.

### Back on the case
I'm a current SendGrid customer so I am hoping that this is the right tree to bark up. Dog bark, tree bark, I guess when you are top of the food chain, you can just assign one word to everything.

Here are the steps [Brandon West](https://sendgrid.com/blog/author/brandon/) came up with for [migrating Mandrill to SendGrid on Heroku](https://sendgrid.com/blog/replacing-the-mandrill-heroku-add-on-with-the-sendgrid-add-on/). I am regurgitating them in my own easily imitable style.

#### Command line
In your favorite BASHer, install the SendGrid add-on `$ heroku addons:create sendgrid` at which point the environmental variables are automatically configured.  You can check these with `$ heroku config:get SENDGRID_USERNAME` and `$ heroku config:get SENDGRID_PASSWORD`. Maybe save these? I did.

Want to configure SendGrid's Heroku add on? Just type `$ heroku addons:open sendgrid`. This will take you to the Heroku website's SendGrid plugin control panel, where you have to confirm your email before proceeding. Mine went to Junk so check that.

#### Heroku's SendGrid Control Panel
In the middle are some menu options. Select 'Whitelabels' and enter your subdomain and domain - I used a domain I already owned and made up a subdomain 'debater' to match my app.

The Whitelabel confirmation page gives you three CNAME entries you need to add to your domain DNS settings. I also took a screenshot and saved all of this. In my case I use namecheap for domain registration and from their DOMAINS>MANAGE>ADVANCED DNS options I was able to enter the three CNAME entries.

#### The part that sucks
DNS propagation takes time. Give it a day or two. Check into the SendGrid Heroku Add-on control panel and click 'Validate Record' to see if it went through. If it is failing after 3 days, assume you have an error and that it is not part of a standard DNS delay.

#### Ruby-on-Rails Time
Man I haven't been in this app for two months. Time flies.

The example Señor West provides is different than my code OF COURSE GDMMT. I went [here for SendGrid on Rails](https://devcenter.heroku.com/articles/sendgrid#ruby-rails) tips. Here are my settings for  `config/environments/production.rb`:

```ruby
config.action_mailer.default_url_options = { host: 'debater.herokuapp.com'}
config.action_mailer.raise_delivery_errors = true
config.action_mailer.delivery_method = :sendgrid
config.action_mailer.smtp_settings = {
  address:                'smtp.sendgrid.net',
  port:                   '587',
  authentication:         :plain,
  enable_starttls_auto:   true,
  user_name:              ENV['SENDGRID_USERNAME'],
  password:               ENV['SENDGRID_PASSWORD'],
  domain:                 'heroku.com'

}
```

We also want to make some changes to my Devise settings, since that is the whole reason I am messing with the email programs in the first place.

So go to `config/initializers/devise.rb`

```ruby
config.mailer_sender = "confirm@debater.laika.io"
```

Now I have no idea if this will work but I can't find anything on what this email should be! SendGrid does not seem to have any options for creating an email, and namecheap has email options but then why make the CNAMEs to allow SendGrid to send on my behalf. I am assuming at this point that whatever I send, if the domain matches, is sent on to the user.

In the future you would definitely want your domain names on email and on the web to match. It is confusing for users and might lead to lower open rates if there is a slight difference that has peoples ears perked for spam and scams.
