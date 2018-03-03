webpackJsonp([0xc18fc72f00e4],{535:function(e,n){e.exports={data:{markdownRemark:{html:'<h1>Creating a Skill for the Amazon Echo family</h1>\n<p>Bloc worked out some arrangement with Amazon whereby students that complete a number of Skills (the name of Amazon Echo speech-enabled device programs) can gain prizes, opportunities, fame and immense personal satisfaction. In fact, I believe that, through my Skill, I may achieve, in some way, immortality, like Achilles.</p>\n<p><img src="https://aniladhami.files.wordpress.com/2014/12/brad-pitt-achilles-troy.jpg" alt="Brad Pitt is Achilles and lives forever through his fame"></p>\n<p>For one, if this all works, I can win a free <strong>Amazon Echo</strong>, which can lead to me automating my entire life, and saving time is an obsession as are robots and not having to get up.  Learn more about the amazing <a href="http://lifehacker.com/the-seven-best-things-you-can-do-with-an-amazon-echo-1766989219">Echo</a> or buy one <a href="http://www.amazon.com/Amazon-SK705DI-Echo/dp/B00X4WHP5E">here</a>.</p>\n<p>Second, apparently I may be able to interview with the Amazon team if my code is halfway decent, which is amazing. I love Amazon products so being able to work for them would be a dream come true. The biggest stumbling block might be moving to Seattle, since the wife works for a college down here, but we both fell in love with that city on a trip so there are certainly harder sells. The traffic was horrendous but we live in LA so nothing new.</p>\n<p>Third, I am excited to have a non-website application to mix things up a bit. While there is a ton of hype surrounding the Internet of Things (<a href="http://www.wired.com/insights/2014/11/the-internet-of-things-bigger/">IoT</a>) there is a real opportunity here to get some experience working in a non-website environment that also supports speech. Speech and natural language as input-output are inevitable for computing - it is just a question of refining and improving. I grew up dreaming of the day when, like Picard, I could just ask an omnipresent computer anything and get an answer.</p>\n<p><img src="http://www.wired.com/wp-content/uploads/blogs/opinion/wp-content/uploads/2013/03/picard.jpg" alt="Earl Grey Tea Please computer please"></p>\n<p>Fourth and last, I get a lot of satisfaction out of knowing that my silly trivia game will be available to all Alexa users. The idea that someone, somewhere, might be enjoying my Presidential Trivia pleases me.</p>\n<h3>First Steps</h3>\n<p>First thing to do is to sign up with Amazon as a developer <a href="https://developer.amazon.com/">here</a>. Sign up for free and agree to the terms. I was able to use my standard Amazon Prime login which is pretty handy.</p>\n<p>Next, you will want to create an Amazon Web Services <a href="https://goo.gl/uqp3Jp">here</a>. For this trivia project, the free tier to start is going to be fine unless you have an encyclopedia worth of trivia to unload. More complex skills may need a paid tier account.</p>\n<p>Then, to get started on your project, you will want to read up on the <a href="https://developer.amazon.com/appsandservices/solutions/alexa/alexa-skills-kit/">Amazon Skills Kit</a> site. There is a <a href="https://developer.amazon.com/edw/home.html#/skills">quick link</a> to their \'getting started\' guide for developers. This is a great intro to the basic user interactions and high level explanations for how the service functions.</p>\n<h3>Developing an Alexa Skill as a Lambda Function</h3>\n<p>I stole the title of the <a href="https://developer.amazon.com/appsandservices/solutions/alexa/alexa-skills-kit/docs/developing-an-alexa-skill-as-a-lambda-function">page you should visit</a> next. This is recommended for a few great reasons such as not needing an SSL certificate, not having to host the code yourself and letting Amazon worry about authenticating usage, scaling and encyrption.</p>\n<p>You can download some extremely helpful samples on <a href="https://github.com/amzn/alexa-skills-kit-js">Github</a> also. I chose to write my skill in JavaScript using Node.js on AWS, but they have other languages such as Python available.</p>\n<h3>Reindeer Games</h3>\n<p><img src="https://upload.wikimedia.org/wikipedia/en/thumb/5/5b/Reindeer_games.jpg/215px-Reindeer_games.jpg" alt="One Of Affleck&#x27;s finest works"></p>\n<p>As much as I enjoyed and was inspired by the Reindeer Games example provided by Amazon, we want to make our own trivia. There are actually two distinct parts to the code you will want to address, but the good news is you can leave most of it alone. Or rather, you ought to leave most of it alone if you know what\'s good for you.</p>\n<h4>Index.js part one</h4>\n<p>In the <code>index.js</code> file, you will want to delete the existing reindeer questions and put in your own trivia questions in the <code>questions</code> array. Each item in the array is an object where the <code>name</code> is the question and the <code>value</code> is an array of answers, of which the first item at index zero must be the correct one.</p>\n<p>I put all of the presidents of the USA in an array in order of their election. Yes, Stephen Grover Cleveland is both the 22nd and 24th President in that convention, as the only President to have served non-consecutive terms. Yes, that is one of the many amazing trivia questions asked in my skill.</p>\n<pre><code class="language-javascript">var questions = [\n    {\n        "Who was the first U.S. President?": [\n            potusArray[0].fullName,\n            potusArray[1].fullName,\n            potusArray[2].fullName,\n            potusArray[3].fullName,\n            potusArray[4].fullName\n        ]\n    },\n    {\n        "Who was the second U.S. President?": [\n            potusArray[1].fullName,\n            potusArray[2].fullName,\n            potusArray[3].fullName,\n            potusArray[4].fullName,\n            potusArray[5].fullName\n        ]\n    },\n    ...\n  ];\n</code></pre>\n<h4>Index.js part two</h4>\n<p>This is the only other part of the code you need to be concered with.</p>\n<pre><code class="language-JavaScript">// ------- Skill specific business logic -------\n\nvar ANSWER_COUNT = 4;\nvar GAME_LENGTH = 5;\nvar CARD_TITLE = "United States of America Presidential Trivia"; // Be sure to change this for your skill.\n</code></pre>\n<p>Make sure your official Skill name matches the <code>CARD_TITLE</code> global variable value you assign. You will enter your official Skill name as one of the last steps in your submission process to Amazon.</p>\n<p>A word about the <code>ANSWER_COUNT</code> and <code>GAME_LENGTH</code> globals. <code>ANSWER_COUNT</code> is how many answers will be read to the user, and <code>GAME_LENGTH</code> is the number of questions asked. You can actually put in more than 4 answers in your code, and what this skill cleverly does is randomizes the incorrect answers in the <code>populateRoundAnswers()</code> function.</p>\n<p>Following the code below, first, the function makes sure you have enough answers for the question. Then, the incorrect answers are randomized (or shuffled, as Amazon refers to it). Note the index starts at 1 and not 0 to make sure we don\'t lose the right answer. Lastly, the correct answer is inserted into the array of answers at index 0.</p>\n<pre><code class="language-JavaScript">function populateRoundAnswers(gameQuestionIndexes, correctAnswerIndex, correctAnswerTargetLocation) {\n    // Get the answers for a given question, and place the correct answer at the spot marked by the\n    // correctAnswerTargetLocation variable. Note that you can have as many answers as you want but\n    // only ANSWER_COUNT will be selected.\n    var answers = [],\n        answersCopy = questions[gameQuestionIndexes[correctAnswerIndex]][Object.keys(questions[gameQuestionIndexes[correctAnswerIndex]])[0]],\n        temp, i;\n\n    var index = answersCopy.length;\n\n    if (index &#x3C; ANSWER_COUNT){\n        throw "Not enough answers for question.";\n    }\n\n    // Shuffle the answers, excluding the first element.\n    for (var j = 1; j &#x3C; answersCopy.length; j++){\n        var rand = Math.floor(Math.random() * (index - 1)) + 1;\n        index -= 1;\n\n        var temp = answersCopy[index];\n        answersCopy[index] = answersCopy[rand];\n        answersCopy[rand] = temp;\n    }\n\n    // Swap the correct answer into the target location\n    for (i = 0; i &#x3C; ANSWER_COUNT; i++) {\n        answers[i] = answersCopy[i];\n    }\n    temp = answers[0];\n    answers[0] = answers[correctAnswerTargetLocation];\n    answers[correctAnswerTargetLocation] = temp;\n    return answers;\n}\n</code></pre>\n<h4>So is the correct answer always the first one?</h4>\n<p>No, actually. In the <code>handleAnswerRequest</code> function, the correct answer is randomly inserted again before being read to the user. This would be a pretty terrible trivia game without this extra piece of code.</p>\n<pre><code class="language-JavaScript">currentQuestionIndex += 1;\n            var spokenQuestion = Object.keys(questions[gameQuestions[currentQuestionIndex]])[0];\n            // Generate a random index for the correct answer, from 0 to 3\n            correctAnswerIndex = Math.floor(Math.random() * (ANSWER_COUNT));\n            var roundAnswers = populateRoundAnswers(gameQuestions, currentQuestionIndex, correctAnswerIndex),\n\n                questionIndexForSpeech = currentQuestionIndex + 1,\n                repromptText = "Question " + questionIndexForSpeech.toString() + ". " + spokenQuestion + " ";\n</code></pre>\n<h3>Submitting Your Skill to Amazon</h3>\n<p>I was going to write a custom guide but there is no need. If you are going to use the Reindeer Games trivia example, <a href="https://developer.amazon.com/appsandservices/community/post/TxDJWS16KUPVKO/New-Alexa-Skills-Kit-Template-Build-a-Trivia-Skill-in-under-an-Hour">this guide</a> holds your hand and guides you through the submission process. There are a lot of steps and a lot of options presented, so this guide was invaluable.</p>',frontmatter:{date:"April 03, 2016",path:"/blog/alexa-speak-to-me/",title:"Alexa Speak to Me",type:"blog"}}},pathContext:{}}}});
//# sourceMappingURL=path---blog-alexa-speak-to-me-94167a58b8287130c247.js.map