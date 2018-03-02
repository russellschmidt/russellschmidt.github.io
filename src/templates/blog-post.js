import React from "react";
import Helmet from "react-helmet";
import g from "glamorous";
import { css } from "glamor";

import { rhythm } from "../utils/typography";

const blogPost = css({

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
    <div>
      <Helmet title={`${post.frontmatter.title}`} />

        <article>

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
