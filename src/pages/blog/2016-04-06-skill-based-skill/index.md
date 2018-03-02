---
path: "/blog/skill-based-skill/"
date: "2016-04-06T17:12:33.962Z"
title: "Skill-Based Skill"
type: "blog"
---

# Echo Applications Part Two
In this project, I am going to take the 'spaceGeek' trivia application - which it should be said is one of my favorite topics - and turn it into English Bulldog trivia, another favorite topic. My goal is to use the Alexa SDK to ask the Echo for various facts about the English Bulldog, the most noble of breeds.

## Developing the Code
You can find the sourcecode for SpaceGeek [here](https://github.com/amzn/alexa-skills-kit-js/tree/master/samples/spaceGeek). There are several important things to be mindful of with the code, even for a seemingly gentle introduction to writing applications for the Amazon Echo family of products. You know why? Because writing code is really never all that forgiving, even in an easy tutorial. I should know - I spent two hours today troubleshooting what turned out to be a missing comma.

### index.js
After cloning the repo into your own Github world and local machine, you will want to access the `index.js` file.

The code in index.js can be thought of as:
1. Your app ID
2. Your array of facts
3. The pre-loaded functions

#### 1. App ID
You will only obtain the app ID once you have logged into the Amazon Developer Portal and gone through and made your app and saved all of the features. However, per the instructions in 'Sending Code to Amazon' below, you need to upload your code at a step well before you complete the Developer steps. My advice - upload what you've got, and then once through the ringer, update the app ID and re-upload the ZIP file. Note that the app ID is a string so should be in quotes.

#### 2. Array of Facts
I lost a lot of time by forgetting a comma so, well, don't do that. I actually had a much easier time proofing the array when I used an IDE with line wrap because I had some long entries. Being able to see the code line number and the comma or lack thereof made a big difference.

Be sure to find and replace the SPACE_FACTS with a more meaningful name given your subject matter, too. The global variable shows up twice more outside of the definition.

#### 3. Pre-Loaded Functions
At the bottom of the file lies the actual meat and potatoes of the thing. While the Amazon tutorial goes over this all in some detail, you will want to go over and understand what the various functions are doing, as they are not too complicated and give some insight into how this all works.

First, find and replace the `SpaceGeek` object name with something more appropriate. Be mindful that there is also an instance of `spaceGeek` that is, well, instantiated at the bottom of the file. My find and replace in Atom and Brackets also changed this instance variable into the object name without being mindful of the difference in case and caused an error.

Second, note that there is some dialog and comments that reference the template's spacey subject matter. You will want to replace this with something appropriate to your topic, especially the Alexa dialog prompts. Amazon notes that they will not certify your Skill if these are not changed.

Third, just note especially the 'intentHandlers' object added to your object prototype. These four functions are the overriding logic of your Skill. The three that start with `AMAZON.` are preformatted intents (learn more [here](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/implementing-the-built-in-intents)) called 'built-in intents'.  An intent is a spoken user instruction. I am hazarding that they are called intents because there is a some degree of give Amazon has built in to mirror the variations found in human language.

Amazon helpfully provides pre-canned responses tied to actions already - for example, launching and closing a skill are covered by the built-in intents. The four intent handlers here all launch a function based on what the user said to enable the skill to work.  Help, start and stop are covered, so all that remains is for the skill to issue new facts. I can see why diagramming out the skill and using pseudocode would be very helpful for

#### New Facts
In `handleNewFactRequest()` you can see how facts are spoken to users.

```javascript
function handleNewFactRequest(response) {
    // Get a random Bulldog fact from the BULLDOG_FACTS array
    var factIndex = Math.floor(Math.random() * BULLDOG_FACTS.length);
    var fact = BULLDOG_FACTS[factIndex];

    // Create speech output
    var speechOutput = "Here's your Bulldog fact: " + fact;

    response.tellWithCard(speechOutput, "BulldogFactoid", speechOutput);
}
```

Pretty straightforward. Of course this is after I made my changes to my bulldog fact Skill. The function pulls a random number from zero to your array length - 1 (Math.floor rounds down), and then calls that array item via the index number.

### Sending Code to Amazon
You will want to read [this indispensable resource](https://github.com/amzn/alexa-skills-kit-js/blob/master/samples/spaceGeek/FactSkillTemplate/Alexa_Skills_Kit_Template_Step-By-Step_Tutorial.pdf) to get going. It provides some nice hand holding.

There are two separate portals you need to navigate. The first is the AWS Lambda side, where your skill is hosted. Think of Lambda as an on-demand code hosting service that takes care of all the environmental issues for you, so you can just upload your code and not worry about operating systems or anything else in the stack, really. Once you have uploaded and provisioned your skill, you can turn to the Developer portal, where you fill in the client-facing part of the deal and perform some testing. It would be fair I think to consider the Developer portal the front end, and the AWS portal as the back end.

Some key things to write down are your:
* Skill name: **BulldogFactsSkill**
* Invocation Name: **Fun Bulldog Facts**
* Lambda ARN (Amazon Resource Name) (starts with and includes`arn:aws`)
* Amazon App ID `amzn1.echo-sdk-ams.app...`

### Intent and Utterances
Suddenly coding sounds like a Jane Austin novel. Again, intents are pretty vital - they are your input from the user, and the logic of your program flows from these diktats. We put the intents in JSON format as below:

```json
{
  "intents": [
    {
      	"intent": "GetNewFactIntent"
    },
    {
   		"intent": "AMAZON.HelpIntent"
    },
    {
      	"intent": "AMAZON.StopIntent"
    },
    {
    	"intent": "AMAZON.CancelIntent"
    }
  ]
}
```

So we have three built-in intents and then our GetNewFactIntent, which is going to handle all the different ways a user can ask for a fact. However, unlike the off-the-rack solutions, the Skill has no idea what these GetNewFactIntents are, i.e. what words the users say to make a new fact appear. We are going to have to code this bit in the Utterances section.

This is just one part of my utterances - I would highly recommend copying this down outside of the Amazon Developer interface for future reference. I put my entire intent and utterance list in the `README.md` in GitHub for  future reference.

```
etNewFactIntent a fact
GetNewFactIntent a bulldog fact
GetNewFactIntent a fact about bulldogs
GetNewFactIntent a fact about bullies
GetNewFactIntent a fact for a bulldogger

GetNewFactIntent teach me a fact
GetNewFactIntent teach me stuff about bulldogs
GetNewFactIntent teach me bulldog facts
GetNewFactIntent teach me a bulldog fact
GetNewFactIntent teach me a fact about bulldogs
GetNewFactIntent teach me a fact about bullies
GetNewFactIntent teach me a fact for a bulldogger
```

I hope it is obvious that what we do here is take out intent and then add in the language that triggers that intent. If you can imagine the user asking, "Alexa, have Fun Bulldog Facts ..." as the stand-in for `getNewFactIntent` you can start to imagine how these should be written. What becomes an interesting exercise is trying to form an exhaustive list of ways people ask for information. Tell, show, give, gimme, get, list, explain, say, speak, teach... all of these verbs can be used in the context of getting the Echo to spit out a crucial fact about Bulldogs. In addition, then you have pronouns (us, me), differences in how we talk to Alexa, if we ask questions (the interrogative) or issue orders (imperative tense), and whether we want to offer options in slang or colloquial language. I came up with about 80 ways for users to ask for a new fact. The [guide](https://developer.amazon.com/appsandservices/solutions/alexa/alexa-skills-kit/docs/defining-the-voice-interface ) mentions that single key words can be used so that they catch all these variations (think "fact" or "trivia" in this case) since I am really a one-trick pony, spitting up Bulldog facts at random.  Amazon's example is

>For instance, if you have “what’s the weather,” consider also just “weather”

### Conclusion
I have submitted my second Skill to Amazon and revised my first Skill after I did not do a couple of simple things correctly. These last two errors I made form my final words of wisdom.

1. In the Developer portal, when setting up your Skill, make sure your first example intent is 'Alexa, open Fun Bulldog Facts" (or launch, or start, in place of open). You will be auto-dinged if you miss this. Obviously put in your own app invocation (not your app name - there is a difference).
2. Make sure you have some original content for your icons. I used the Presidential seal for my U.S. President trivia game and it was rejected for lack of permission to use the seal. There was probably some ground to fight that but who cares, I made my own sillier logo and submitted it in a few minutes.
