---
path: "/blog/graphql-filter/"
date: "2018-02-16T11:15:12.962Z"
title: "Graph QL"
type: "blog"
---

So the tutorials I used to teach myself a bit about Gatsby have assumed a single source for your blog posts and a structure that has your homepage serve as the "index" in RESTful terms, listing links to all of your blog posts. unfortunately, I want my site to have both portfolio and blog post links to start and I think the separation is important.

So it looks like I have to bump up my GraphQL education on the timetable.

The solution is to add in a filter to your GraphQL query and make sure that your separate template files have different names and filters. This is the solution on the GraphQL side I ended up stealing simply using the folder holding the file and some clever regex to parse what I needed <https://github.com/gatsbyjs/gatsby/issues/1634>.

The filter is: `filter: {fileAbsolutePath: {regex: "/blog/.*\\.md$/"}}` but be sure to see how the query is structured to understand what is going on. I actually ended up swtiching the filter and sort bits because I had a hunch that the filter ought to go first so we arent sorting the full list and then filtering out items, but I hadn't tested yet. My porfolio is so outnumbered by blog posts, and the absolute number of both so small, that I don't know that it matters anyway.

My project thus is organized in part as:

```
..
/src
  /layouts
  /pages
    /blog
      /YYYY-MM-DD-blog-title
        index.md
    /portfolio
      /YYYY-MM-DD-project-title
        index.md
  /templates
  /utils
```

My `blog.js` that lives in the `\pages` root looks like this

### src/pages/blog.js

```
import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <div className="blog-posts">
      <Helmet title={`Blog posts: rusl.io & Russell Schmidt`} />
      {posts
        .filter(post => post.node.frontmatter.title.length > 0)
        .map(({ node: post }) => {
          return (
            <div className="blog-post-preview" key={post.id}>
              <h1>
                <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
              </h1>
              <h2>{post.frontmatter.date}</h2>
              <p>{post.excerpt}</p>
            </div>
          );
        })}
    </div>
  );
}
export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {fileAbsolutePath: {regex: "/blog/.*\\.md$/"}}
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`;

```

And my `portfolio.js` that also lives in the `\pages` root looks like this:

### src/pages/portfolio.js

```
import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <div className="blog-posts">
      <Helmet title={`Portfolio Projects: rusl.io & Russell Schmidt`} />
      {posts
        .filter(post => post.node.frontmatter.title.length > 0)
        .map(({ node: post }) => {
          return (
            <div className="blog-post-preview" key={post.id}>
              <h1>
                <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
              </h1>
              <h2>{post.frontmatter.date}</h2>
              <p>{post.excerpt}</p>
            </div>
          );
        })}
    </div>
  );
}
export const pageQuery = graphql`
  query PortfolioQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {fileAbsolutePath: {regex: "/portfolio/.*\\.md$/"}}
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`;
```

Then there are the two template files in `../src/templates`, `blog-post.js` and `portfolio-post.js`.

### src/templates/blog-post.js

```
import React from "react";
import Helmet from "react-helmet";

export default function Template({
  data
}) {
  const post = data.markdownRemark;
  return (
    <div className="blog-post-container">
      <Helmet title={`rusl.io - ${post.frontmatter.title}`} />
      <div className="blog-post">
        <h1>{post.frontmatter.title}</h1>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
;
```


### src/templates/portfolio.js

```
import React from "react";
import Helmet from "react-helmet";

export default function Template({
  data
}) {
  const post = data.markdownRemark;
  return (
    <div className="blog-post-container">
     <Helmet title={`rusl.io - ${post.frontmatter.title}`} />
      <div className="blog-post">
        <h1>{post.frontmatter.title}</h1>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query PortfolioPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
;

```

### Lastly, you will want to add some logic to your `gatsby-node.js` file.

```
const path = require('path');

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;
  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`);
  const portfolioPostTemplate = path.resolve(`src/templates/portfolio-post.js`);

  return graphql(`{
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          html
          id
          frontmatter {
            date
            path
            title
            type
          }
        }
      }
    }
  }`).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
  } result.data.allMarkdownRemark.edges
    .forEach(({ node }) => {
      if (node.frontmatter.type === "blog") {
        createPage({
          path: node.frontmatter.path,
          component: blogPostTemplate,
          context: {} // additional data can be passed via context
        });
      } else if (node.frontmatter.type === "portfolio") {
        createPage({
          path: node.frontmatter.path,
          component: portfolioPostTemplate,
          context: {} // additional data can be passed via context
        });
      }
    });
  });
}
```
