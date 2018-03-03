webpackJsonp([0x78854e72ca23],{567:function(e,t){e.exports={data:{markdownRemark:{html:'<p>I had forgotten a pretty messy issue with deploying to Github pages with Gatsby: if you run a <code>gatsby build</code> and then save to your github repo, you have just pushed all the production code into your life. Not only is your file huge, but you gain unreadable cruft at the expense of hot reloading. No bueno.</p>\n<p>So you need to make sure you are pushing to two repos: dev and prod. Duh you scream, that is best practice anyway, and you would <a href="http://guides.beanstalkapp.com/deployments/best-practices.html">probably recommend a staging site</a>. True, but for a personal blog, coming from Rails and Jekyll, you wouldn\'t do this step as the framework can parse out which version you are running so you don\'t need separate repo buckets.</p>\n<p><em>So far I love Gatsby so much that I don\'t care.</em></p>\n<h3>Domain Registrar and DNS Settings</h3>\n<p>I use namecheap. Here are the settings I used on the Advanced DNS tab. Namecheap doesn\'t pay me but I\'ve been happy with them. I\'ve also been playing with Amazon\'s Route 53 which is a pretty robust set of DNS controls but we\'ll save that for another day.</p>\n<p><img src="https://s3.amazonaws.com/russell-personal/namecheap-ruslio.png" alt="namecheap screenshot"></p>\n<p>So you point namecheap to your github repo, in this case I am using <code>russellschmidt.github.com</code>. Stir and wait 30 minutes for the internet to catch up.</p>\n<h3>Github</h3>\n<p>I had a repo for my dev, now I need to set a repo for the production. In my case, this is blog v3.0 so I already had the repo sitting there waiting for me to abuse.</p>\n<p>As per usual, I had at some point in the distant past set\n<code>$ git remote add origin https://github.com/russellschmidt/whatevarepo.git</code></p>\n<p>Now those magic words mean something - origin is just a name for the repo that can be conveniently dropped off when running a command later if you ran <code>$ git push -u origin master</code> - you can just run <code>$ git push</code>.</p>\n<p>Well let\'s ruin all of that.</p>\n<p><code>$ git remote add prod https://github.com/russellschmidt/russellschmidt.github.io.git</code></p>\n<p>Now run <code>$ git remote -v</code> and see if you get two repos. You should have two repos, each listed twice (once each for fetch and push respectively).</p>\n<h3>Get gh-pages</h3>\n<p>You want an easy deploy, gh-pages can help you.</p>\n<p><code>$ yarn install --dev gh-pages</code></p>\n<p>Then you want to edit your <code>package.json</code> to create a new command <code>deploy</code> that encompasses a build and a push to github.</p>\n<p>I am using a custom domain so I use this variant under "dependencies"\n<code>$ "deploy": "gatsby build &#x26;&#x26; gh-pages -d public -b master"</code></p>\n<p>If you are using a subdomain, <a href="https://www.gatsbyjs.org/docs/how-gatsby-works-with-github-pages/">learn more here</a>, as there is a slight different and an extra step.</p>\n<p>Do the git dance, <code>$ git push origin master</code> and <code>$ yarn run deploy</code>.</p>\n<h3>Failure and Success</h3>\n<p>Annnnd this will fail. You just pushed production to dev ("origin"). Sorry to write this in the order I f\'d up but them\'s the breaks kid.</p>\n<p>There is an implicit push to \'origin\' branch so ya gotta rename the repos in the CLI.\n<code>$ git remote rename origin dev</code>\n<code>$ git remote rename prod dev</code>\n<code>$ yarn run deploy</code></p>\n<p>If you look at the github page for the repos, the production repo should be in the right place. Now, replace that f\'d up dev repo. Mind you this is not something you should do all the time but good to know, as it is destructive and goes against everything git is about in the sense of gradualism, incrementalism, caution.</p>\n<p><code>$ git push dev master -f</code>\nThe -f flag <em>forces</em> the change, so it wipes out the production build on your dev side. You should be good to go now.</p>',frontmatter:{date:"February 20, 2018",path:"/blog/gatsby-github/",title:"Gatsby'n'Githubby",type:"blog"}}},pathContext:{}}}});
//# sourceMappingURL=path---blog-gatsby-github-c4a7d9d0c17089ea0d21.js.map