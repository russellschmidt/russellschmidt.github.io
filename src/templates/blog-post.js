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
});

const blogPostTitle = css({

});

const blogPostDate = css({

});

const blogPostContent = css({

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
