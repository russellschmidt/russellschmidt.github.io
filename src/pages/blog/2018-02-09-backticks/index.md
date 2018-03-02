---
path: "/blog/backticks/"
date: "2018-02-09T17:12:33.962Z"
title: "Gatsby Backticks"
type: "blog"
---

So the blog was up and then I was having all sorts of errors. Note that the links are for your edification but ultimately did not help me.

tl;dr
You need backticks - not single quotes - for your `gatsby-config.js` filenames.

1. "Cannot read property 'allMarkdownRemark' of undefined" [more here](https://github.com/DSchau/gatsby-blog-starter-kit/issues/9)
2. "TypeError: Cannot read property 'allMarkdownRemark' of undefined"
3. "gatsby Invariant Violation: GraphQLParser: Unknown argument `formatString`. Source: document `IndexQuery` file: `GraphQL request`"

These error messages ultimately were not incredibly helpful to a Noob like myself, as the pointed to the `index.js` root file which meant they could be anything.

Through sheer luck / force of will / desperation, I started looking through tutorials, my go-to once Stack Overflow and Github comment threads start looking like junk.   

So my initial `gatbsy-config.js` looks like so:

```javascript

module.exports = {
  siteMetadata: {
    title: `Russell Schmidt`,
    author: `Russell Schmidt`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [] // for future interop with gatsby-remark-prismjs, gatsby-remark-copy-linked-files, gatsby-remark-images
      }
    },
  ],
};

```

[This is a great tutorial](https://medium.freecodecamp.org/how-to-build-a-react-and-gatsby-powered-blog-in-about-10-minutes-625c35c06481) that unlocked the secrets of the universe.
