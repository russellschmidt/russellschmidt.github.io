---
path: "/blog/a-list-of-every-band-ever/"
date: "2016-04-15T17:12:33.962Z"
title: "A List of Every Band Every"
type: "blog"
---

## Custom Slots
One of the challenges of making an Alexa skill is that the program works better if you have a list of the words defined that you expect your user to speak. For example, if you are using the sample high tide finder app, there is a finite list of cities with tide information available from the government. So, this list of cities if predefined and checked against when you ask Alexa for tide info. If your location is not on there, a sad trumpet arpeggio is played (not really). These predefined terms are called custom slots.

I am trying to make some sort of reference for both bands and venues, and so to start I need...

## A List of Every Band Ever
Well not exactly. I don't need Elvis since he is dead. And Alexa can try to figure out and pass data in anyway if it doesn't understand it, so I could just write the program such that the user is asked "what band" and Alexa tries to figure out whatever was just said and pass it in to my program as a query. The complication is when you get a natural speech pattern like "Alexa, have funConcertFinder tell me when the Mighty Mighty Bosstones are playing" and Alexa doesn't know (a) how to skank like it is 1994 and (b) that the Mighty Mighty Bosstones is a band... unless you put that bandname in a list ahead of time and connect the dots for Alexa.

Maybe I do need Elvis, just so I can say he is dead to users, or really, the default 'not on tour.' I mean some day some 12 year old kid will discover Ziggy Stardust and someone needs to break the news to him that the time has passed to see the man live. (Saw him with Nine Inch Nails opening at the Forum and let me tell you, I've never been so close to a legend as that show when that NIN fanbase left for the exits).

There is a free database [freedb.org](http://www.freedb.org/en/download__database.10.html) that is a comprehensive list of musicians and bands, which is good because I am using a cobbled together list of musicians for testing that is full of duplicates I am scraping via Google Docs which sucks beyond all suck and is very rock heavy. If you make a list of bands off of Billboard charts, you get some weird stuff - bands that broke up or have recently deceased members that otherwise stopped touring years ago, re-releases like Beethoven who isn't touring any time soon, and in the hip hop world artists are listed as collaborators and share top billing that would not necessarily be touring together and are in fact independent acts (e.g. "Paul McCartney & Michael Jackson").

## Umlauts and Outliers
Those little dots above the 'o' and 'u'? If you are not Bjork or Röyksopp and from Iceland or some other nation that uses umlauts, I mean, you are really screwing up my cobbled together database for my app. Looking at you Motörhead and Mötley Crüe. Queensrÿche I mean get it together, over the 'y'? 'Silent Lucidity' was your only good song. Well I liked 'Empire' as a kid, it seemed political and sophisticated at the time.

'Soul II Soul' is another one I don't know what to do with. However do you want it, indeed? Will Alexa speak Roman Numeral? Will anyone ever ask about this band from the early 90's?

Ampersands (&) might present another challenge but I am going to keep them in because I read that Alexa can handle them and because they are the formal spelling of the band names.

Acronym names (e.g. T.I., t.A.T.u., TLC) are another curve ball. I going to use the periods as the artists use them but I think this will make Amazon's device choke, it will try to hear TLC as an unpronounceable word. Is it The Go-Go's or The Go Go's? B-52's or B52s? Shame these bands are relatively popular  on an objective scale of (The Beatles - 100,000 artists on Soundcloud) scale or I could just ignore them. W.A.S.P. pronounced "wasp" is a whole other headache.

My list of artists is 2,235 strong working from the Hooter's Casino bed in Vegas so, something of a small victory just getting that far. I imagine maybe 30% of that list is not touring because they are dead or ancient or broken up for years, but would see a respectable amount of queries.

Amazon said that a particular custom slot can hold up to 50,000 values which is something of a challenge when it comes to bands - I want to support obscure acts since they are the ones that I have a soft spot for and that I hypothesize will attract the more diehard users. Also to differentiate my app from the native StubHub Echo app I would need to go after more niche acts, which StubHub totally ignores.
