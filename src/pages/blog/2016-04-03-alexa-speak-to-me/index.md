---
path: "/blog/alexa-speak-to-me/"
date: "2016-04-03T17:12:33.962Z"
title: "Alexa Speak to Me"
type: "blog"
---

# Creating a Skill for the Amazon Echo family

Bloc worked out some arrangement with Amazon whereby students that complete a number of Skills (the name of Amazon Echo speech-enabled device programs) can gain prizes, opportunities, fame and immense personal satisfaction. In fact, I believe that, through my Skill, I may achieve, in some way, immortality, like Achilles.

![Brad Pitt is Achilles and lives forever through his fame](https://aniladhami.files.wordpress.com/2014/12/brad-pitt-achilles-troy.jpg)

For one, if this all works, I can win a free **Amazon Echo**, which can lead to me automating my entire life, and saving time is an obsession as are robots and not having to get up.  Learn more about the amazing [Echo](http://lifehacker.com/the-seven-best-things-you-can-do-with-an-amazon-echo-1766989219) or buy one [here](http://www.amazon.com/Amazon-SK705DI-Echo/dp/B00X4WHP5E).

Second, apparently I may be able to interview with the Amazon team if my code is halfway decent, which is amazing. I love Amazon products so being able to work for them would be a dream come true. The biggest stumbling block might be moving to Seattle, since the wife works for a college down here, but we both fell in love with that city on a trip so there are certainly harder sells. The traffic was horrendous but we live in LA so nothing new.

Third, I am excited to have a non-website application to mix things up a bit. While there is a ton of hype surrounding the Internet of Things ([IoT](http://www.wired.com/insights/2014/11/the-internet-of-things-bigger/)) there is a real opportunity here to get some experience working in a non-website environment that also supports speech. Speech and natural language as input-output are inevitable for computing - it is just a question of refining and improving. I grew up dreaming of the day when, like Picard, I could just ask an omnipresent computer anything and get an answer.

![Earl Grey Tea Please computer please](http://www.wired.com/wp-content/uploads/blogs/opinion/wp-content/uploads/2013/03/picard.jpg)

Fourth and last, I get a lot of satisfaction out of knowing that my silly trivia game will be available to all Alexa users. The idea that someone, somewhere, might be enjoying my Presidential Trivia pleases me.

### First Steps
First thing to do is to sign up with Amazon as a developer [here](https://developer.amazon.com/). Sign up for free and agree to the terms. I was able to use my standard Amazon Prime login which is pretty handy.

Next, you will want to create an Amazon Web Services [here](https://goo.gl/uqp3Jp). For this trivia project, the free tier to start is going to be fine unless you have an encyclopedia worth of trivia to unload. More complex skills may need a paid tier account.

Then, to get started on your project, you will want to read up on the [Amazon Skills Kit](https://developer.amazon.com/appsandservices/solutions/alexa/alexa-skills-kit/) site. There is a [quick link](https://developer.amazon.com/edw/home.html#/skills) to their 'getting started' guide for developers. This is a great intro to the basic user interactions and high level explanations for how the service functions.

### Developing an Alexa Skill as a Lambda Function
I stole the title of the [page you should visit](https://developer.amazon.com/appsandservices/solutions/alexa/alexa-skills-kit/docs/developing-an-alexa-skill-as-a-lambda-function) next. This is recommended for a few great reasons such as not needing an SSL certificate, not having to host the code yourself and letting Amazon worry about authenticating usage, scaling and encyrption.

You can download some extremely helpful samples on [Github](https://github.com/amzn/alexa-skills-kit-js) also. I chose to write my skill in JavaScript using Node.js on AWS, but they have other languages such as Python available.

### Reindeer Games
![One Of Affleck's finest works](https://upload.wikimedia.org/wikipedia/en/thumb/5/5b/Reindeer_games.jpg/215px-Reindeer_games.jpg)

As much as I enjoyed and was inspired by the Reindeer Games example provided by Amazon, we want to make our own trivia. There are actually two distinct parts to the code you will want to address, but the good news is you can leave most of it alone. Or rather, you ought to leave most of it alone if you know what's good for you.

#### Index.js part one
In the `index.js` file, you will want to delete the existing reindeer questions and put in your own trivia questions in the `questions` array. Each item in the array is an object where the `name` is the question and the `value` is an array of answers, of which the first item at index zero must be the correct one.

I put all of the presidents of the USA in an array in order of their election. Yes, Stephen Grover Cleveland is both the 22nd and 24th President in that convention, as the only President to have served non-consecutive terms. Yes, that is one of the many amazing trivia questions asked in my skill.

```javascript
var questions = [
    {
        "Who was the first U.S. President?": [
            potusArray[0].fullName,
            potusArray[1].fullName,
            potusArray[2].fullName,
            potusArray[3].fullName,
            potusArray[4].fullName
        ]
    },
    {
        "Who was the second U.S. President?": [
            potusArray[1].fullName,
            potusArray[2].fullName,
            potusArray[3].fullName,
            potusArray[4].fullName,
            potusArray[5].fullName
        ]
    },
    ...
  ];
```

#### Index.js part two
This is the only other part of the code you need to be concered with.

```JavaScript
// ------- Skill specific business logic -------

var ANSWER_COUNT = 4;
var GAME_LENGTH = 5;
var CARD_TITLE = "United States of America Presidential Trivia"; // Be sure to change this for your skill.
```

Make sure your official Skill name matches the `CARD_TITLE` global variable value you assign. You will enter your official Skill name as one of the last steps in your submission process to Amazon.

A word about the `ANSWER_COUNT` and `GAME_LENGTH` globals. `ANSWER_COUNT` is how many answers will be read to the user, and `GAME_LENGTH` is the number of questions asked. You can actually put in more than 4 answers in your code, and what this skill cleverly does is randomizes the incorrect answers in the `populateRoundAnswers()` function.

Following the code below, first, the function makes sure you have enough answers for the question. Then, the incorrect answers are randomized (or shuffled, as Amazon refers to it). Note the index starts at 1 and not 0 to make sure we don't lose the right answer. Lastly, the correct answer is inserted into the array of answers at index 0.

```JavaScript
function populateRoundAnswers(gameQuestionIndexes, correctAnswerIndex, correctAnswerTargetLocation) {
    // Get the answers for a given question, and place the correct answer at the spot marked by the
    // correctAnswerTargetLocation variable. Note that you can have as many answers as you want but
    // only ANSWER_COUNT will be selected.
    var answers = [],
        answersCopy = questions[gameQuestionIndexes[correctAnswerIndex]][Object.keys(questions[gameQuestionIndexes[correctAnswerIndex]])[0]],
        temp, i;

    var index = answersCopy.length;

    if (index < ANSWER_COUNT){
        throw "Not enough answers for question.";
    }

    // Shuffle the answers, excluding the first element.
    for (var j = 1; j < answersCopy.length; j++){
        var rand = Math.floor(Math.random() * (index - 1)) + 1;
        index -= 1;

        var temp = answersCopy[index];
        answersCopy[index] = answersCopy[rand];
        answersCopy[rand] = temp;
    }

    // Swap the correct answer into the target location
    for (i = 0; i < ANSWER_COUNT; i++) {
        answers[i] = answersCopy[i];
    }
    temp = answers[0];
    answers[0] = answers[correctAnswerTargetLocation];
    answers[correctAnswerTargetLocation] = temp;
    return answers;
}
```

#### So is the correct answer always the first one?
No, actually. In the `handleAnswerRequest` function, the correct answer is randomly inserted again before being read to the user. This would be a pretty terrible trivia game without this extra piece of code.

```JavaScript
currentQuestionIndex += 1;
            var spokenQuestion = Object.keys(questions[gameQuestions[currentQuestionIndex]])[0];
            // Generate a random index for the correct answer, from 0 to 3
            correctAnswerIndex = Math.floor(Math.random() * (ANSWER_COUNT));
            var roundAnswers = populateRoundAnswers(gameQuestions, currentQuestionIndex, correctAnswerIndex),

                questionIndexForSpeech = currentQuestionIndex + 1,
                repromptText = "Question " + questionIndexForSpeech.toString() + ". " + spokenQuestion + " ";
```

### Submitting Your Skill to Amazon
I was going to write a custom guide but there is no need. If you are going to use the Reindeer Games trivia example, [this guide](https://developer.amazon.com/appsandservices/community/post/TxDJWS16KUPVKO/New-Alexa-Skills-Kit-Template-Build-a-Trivia-Skill-in-under-an-Hour) holds your hand and guides you through the submission process. There are a lot of steps and a lot of options presented, so this guide was invaluable.
