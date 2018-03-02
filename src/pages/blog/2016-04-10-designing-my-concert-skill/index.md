---
path: "/blog/designing-my-concert-skill/"
date: "2016-04-10T17:12:33.962Z"
title: "Designing My Concert Skill"
type: "blog"
---

# So I love live music
Tonight, my wife and I are going to check out a pretty rad LA-based band called 'Youth Code' at my favorite concert venue. The band is just the sort of angry, noisy, industrial-punk-hardcore band with clever lyrics that I love. Here is their anti-vivisection video for [Consuming Guilt](https://www.youtube.com/watch?v=4h5uEPH5IFE) and [here](http://www.laweekly.com/music/youth-code-industrial-music-duo-are-an-unlikely-breakout-success-4416599) is an LA Weekly article about them. This [Vice article](http://noisey.vice.com/blog/youth-code-commitment-to-complications-interview) about them is also pretty entertaining. I prefer their sound to just about any other heavy band out there. I'm fanboy enough that I follow both members on Instagram like a teen.

Then on April 20th, wife, friend and I are caravaning over to Pomona for another bad ass concert from a duo: the awesome [Death Grips](http://thirdworlds.net/). I was lucky enough to see [Death Grips at Coachella 2012](https://www.youtube.com/watch?v=1sJx-y8M3cE) in one of the smaller tents. I hadn't heard that much about them, but I was sold from the first time giant inflatable pills bounced above the audience. Typically bands from Sacramento are pretty raw and Death Grips, to me, are the rawest and most interesting band making music right now. We ran to see them at the Echo when they were back in LA and I had tinnitus for three days. By far the best show I had seen in a long time. Since then tried to see them open for NIN (they disbanded and [cancelled a ton of shows, pissing everyone off](http://noisey.vice.com/blog/why-death-grips-not-playing-their-own-shows-isnt-punk)). I will leave the debate about the ethics of cancelling tours and breaking up and getting back together to people with more passion than I. I think them releasing their album for [free on the web to get out of their hated Sony contract](http://pitchfork.com/news/48044-death-grips-say-their-label-shut-down-their-website-label-says-they-didnt-do-it/) was pretty awesome. It wasn't [Sex Pistols f-ing up the Queen's Jubilee](http://www.bbc.com/news/entertainment-arts-18078751) level of cool but it was up there. Certainly more my style than Prince's protest ![Prince writes slave on his face](/images/prince-slave.jpeg).

## What it takes to Echo
I really want an Amazon Echo, and my wife thinks I spend too much on electronics and gadgets (I do), so winning an Echo (via my Bloc mentorship) is my only option. In order to win the Echo, three things need to happen.
1. My 'Presidential Trivia' skill needs to be approved and certified by Amazon
2. My 'Bulldog Facts' skill needs to be approved and certified by Amazon
3. I need to create and submit an original skill that is approved and certified by Amazon

In addition, I had some exposure to JSON APIs in my Swift class from a couple years back and in one particular Rails Foundation checkpoint with Bloc, but I ran out of time before I was able to do the JSON Rails checkpoint. (I still have a plan to go back and do it one day, maybe between quarters with Bloc.) I would really like to create a skill that can pull data from an API.

## When is the next concert
Using the 'Bands in Town' [concert API](https://www.bandsintown.com/api/1.0/best_practices) I ought to be able to ask my future Amazon Echo about upcoming concerts. The API currently provides JSON and XML. Since I have had positive experiences with JSON and suffer from nightmares from programming Polycom, Snom and Aastra (now Mitel) IP telephones using XML, I am going to stick with JSON.

### Data fields
The Bands In Town API provides 8 data requests and 6 responses. There are a few requests that are listed as deprecrated so I am not going to count those. Detail can be found [here](https://www.bandsintown.com/api/1.0/responses#artist-json).

#### Requests
1. Artists - Get
2. Arists - Events
3. Events - Search
4. Events - Recommended
5. Events - On Sale Soon
6. Events - Daily
7. Venues - Events
8. Venues - Search

#### Responses
1. Artist
2. Event
3. Events
4. Venues
5. Success
6. Error

Each response only has a handful of data fields, so I think I ought to be in good shape for a pretty targeted application.

### Intent schema
How people communicate regarding concerts is complicated when you have to diagram it out. If I can just get the initial query right for 'when is band x playing in city y?' I would consider it a win, but that would still be an incomplete app.

#### Full intent
User: "Ask ConcertFinder (just a working title -ed.) to find upcoming shows in Denver."
User: "Ask ConcertFinder (just a working title -ed.) to find out when Korn is playing in Utah again."
User: "Ask ConcertFinder (just a working title -ed.) to find if Insane Clown Posse is on tour."
User: "

#### Partial Intent
User: "Ask ConcertFinder (just a working title -ed.) to find shows in my area."

#### No Intent
User: "Launch ConcertFinder"

**I used a program called MindNode to make a PDF diagram of responses [here](/docs/ConcertFinder.pdf)** - this is my first time using MindNode (MindNode 2 to be exact and [available on the Mac App Store](https://itunes.apple.com/us/app/mindnode-2-delightful-mind/id992076693?mt=12)) so I am sure it is a bit rough.

### One thing at a time
One consideration from the [Amazon Skills Kit Voice Design Best Practices](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/alexa-skills-kit-voice-design-best-practices) document is that I should only be asking for one piece of information at a time, in which all this work for a diagram is not so great. That said, this is a working draft based on how people talk. In practice, I may need to build out a more robust decision tree with different intents as each piece of information is asked.

One thing I am not sure about is if I need a 'main menu' type reset command to start over, or if the flow of intents as set by the internal logic of the program overrides this. I always hated this sort of thing as a user so will try to avoid creating this.

### Slots, both Custom and Built-in
**Slots** are Echo Skill-speak for variables. These are a special brand of variable. Amazon defines them as

>"an argument to an intent that gives Alexa more information about that request. For example: “Alexa, ask History Buff what happened on June third”. In this statement, “June third” is the value of a date slot that refines the request.

>For a given intent, slots can be required or optional:

>Required: a slot that contains values that are necessary for Alexa to complete the user’s request. For example: “Alexa, ask Astrology Daily for the horoscope for Taurus.” Without the name of the specific zodiac sign, Astrology Daily cannot provide a horoscope. If the user does not provide a value for a required slot, you must ask the user for that slot value.

>Optional: a slot that contains values that refine the user’s request, but are not necessary for Alexa to complete the task. For example, “Alexa, ask History Buff what happened in history on June third”. Here, June third is optional since History Buff can just give historical events for today if the user does not specify a date. As such, you should not ask the user for optional slot values if they exclude them.



**Built-in Slots** are things like dates, numbers, times and durations. Amazon helpfully provides these data types for us.

```json
{
  "intents": [
    {
      "intent": "DateIntent",
      "slots": [
        {
          "name": "MyDate",
          "type": "AMAZON.DATE"
        }
      ]
    }
  ]
}
```

For this project, I would need dates, times, numbers, US City, and US State. All of the built-in slot types can be found [here](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/defining-the-voice-interface).

**Custom Slots** for my project are things like band names and venue names. These present a huge challenge, since I would need to provide a list of band names and venues in the United States. Alexa will attempt to send anything it understands to the code, which is incredibly helpful as otherwise making a comprehensive list of all bands and concert venues is a life's work unless I can find someone already made such a list somewhere online.

### Other things I want to implement if I have the time
There is always a surprising amount of stuff to code for even seemingly simple apps where the options laid before you are so straightforward in the API.

* _Radius_ - You can set the search radius in miles, and it would be nice to give users that option. In addition, I have to consider what the default radius is (I was thinking 25 miles).
* _IP Geolocation_ - the API can return results based on the IP address of the user. I will have to test this to make sure it is the user's IP and not, say, the IP of an Amazon data center.
* _Default Location_ - a different way to handle this problem is to ask the user upfront for the city they want to look for, and then go from there. This is only wasted time if the user wants to hear the full tour schedule for a band, which is a pretty inside baseball type request anyway. I could however see someone who lives in an area that is underserved by venues to want to see a tour schedule so they could drive to a show in a nearby town.
* _Tickets on Sale_ - the API can tell users when tickets go on sale and provide a URL. It would be incredibly awesome if the skill would email the user the link to buy tickets. I suppose I would use SendGrid or Mailgun.
* _Variable time_ - I should be able to ask for different time periods for my query. I think 'next weekend', 'this month' and 'this weekend' are likely as well as 'through Dec 31' or 'between March 1 and March 15'.
* _Concert alert_ - If I could figure out a way for users to sign in and create profiles, I could send them SMS alerts via Twilio when bands they like announce tours and tickets going on sale. I would also appreciate warnings prior to tickets going on sale and reminders of upcoming concerts.
