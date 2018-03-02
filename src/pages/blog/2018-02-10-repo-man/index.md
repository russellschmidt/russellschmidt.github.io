---
path: "/blog/repo-man/"
date: "2018-02-10T11:15:12.962Z"
title: "Repo Man"
type: "blog"
---

Uh oh you getting messages like this:
> npm WARN package.json: No repository field

If you are stronger than me, or the warnings are specific to one or more of your project dependencies, you ought to be able to ignore them. It has no impact on the functioning of your app.

But some of us can't abide a warning.

Well some Stack Overflow digging can reveal some truths - [I went here](https://stackoverflow.com/questions/16827858/npm-warn-package-json-no-repository-field) and you too can learn what to do.

You need to add your repo in `package.json`. NBD. You can find your url in your github repo page under CLONE and then select SSH.

```javascript
"repository": {
  "type": "git",
  "url": "git://github.com/username/repository.git"
},
```

Or, you can, in the same `package.json` add a `private` field like so:

```javascript
{
  "name": "some-ish",
  "version": "2.1.2",
  "private": true
},
```

Now you are...

![Repo Man movie poster](https://i.ytimg.com/vi/NY-fnHN861M/movieposter.jpg "Repo Man")
