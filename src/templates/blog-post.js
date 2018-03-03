import React from "react";
import Helmet from "react-helmet";
import g from "glamorous";
import { css } from "glamor";

import { rhythm } from "../utils/typography";

const blogContainer = css({
  display: `grid`,
  gridTemplateColumns: `repeat(12, 8%)`,
  gridTemplateRows: `auto`,
  width: `100%`,
  justifyContent: `space-evenly`,
});

const blogArticle = css({
  gridColumnStart: 3,
  gridColumnEnd: 11,
  "@media (max-width: 768px)": {
    gridColumnStart: 1,
    gridColumnEnd: 13,
  },
});

const blogPostTitle = css({
  "@media (max-width: 768px)": {
    fontSize: rhythm(1),
    marginTop: rhythm(1),
    marginBottom: 0,
  },
});

const blogPostDate = css({
  fontSize: rhythm(0.75),
  marginTop: rhythm(1),
  marginBottom: rhythm(1),
  "@media (max-width: 768px)": {
    fontSize: rhythm(0.5),
    marginTop: rhythm(0.5),
    marginBottom: rhythm(1),
  },
});

const blogPostContent = css({
  width: `100%`,
  "> pre": {
    color: `#4b4`,
    background: `#000`,
    padding: `4px 6px`,
    fontSize: rhythm(0.2),
    lineHeight: 1.4,
  },
  "@media (max-width: 768px)": {
    "> pre": {
      fontSize: rhythm(0.1),
      lineHeight: 1.1,
      borderTop: `1px solid #888`,
      borderBottom: `1px solid #888`,
      padding: `2px`,
      overflow: `visible`,
    },
  },
});

export default function Template({
  data
}) {
  const post = data.markdownRemark;
  return (
    <div className={blogContainer}>
      <Helmet title={post.frontmatter.title} />

      <article className={blogArticle}>

        <header>
          <h1 className={blogPostTitle}>{post.frontmatter.title}</h1>
          <h2 className={blogPostDate}>{post.frontmatter.date}</h2>
        </header>
        <section>
          <div
            className={blogPostContent}
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </section>
      </article>

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
        type
      }
    }
  }
`
;
