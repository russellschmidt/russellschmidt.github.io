import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import g from "glamorous";
import { css } from "glamor";

import { rhythm } from "../utils/typography";

const blogPostsContainer = css({
  display: `grid`,
  gridTemplateColumns: `repeat(12, 8%)`,
  gridTemplateRows: `auto`,
  width: `100%`,
  justifyContent: `space-evenly`,
});

const blogPostPreview = css({
  gridColumn: `span 3`,
  padding: `0 10px`,
  "@media (max-width: 768px)": {
    gridColumn: `span 13`,
  },
});

const blogPostTitle = css({
  margin: `1rem 0 0 0`,
});

const blogLinkStyle = css({
  color: `black`,
  "&:hover": {
    textDecoration: `none`,
  }
});

const blogPostDate = css({
  margin: `0.5rem 0`,
  fontSize: rhythm(0.4),
});

const blogPostCopy = css({
  fontSize: rhythm(0.45),
  textAlign: `justify`,
});

export default function BlogIndex({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <div>
      <h1>Blog</h1>
      <Helmet title={`Blog posts: Russell Schmidt`} />
      <div className={blogPostsContainer}>
      {posts
        .filter(post => post.node.frontmatter.title.length > 0)
        .map(({ node: post }) => {
          return (
            <div className={blogPostPreview} key={post.id}>
              <Link className={blogLinkStyle} to={post.frontmatter.path}>
                <h3 className={blogPostTitle}>{post.frontmatter.title}</h3>
                <h4 className={blogPostDate}>{post.frontmatter.date}</h4>
                <p className={blogPostCopy}>{post.excerpt}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/blog/.*\\.md$/"}}
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            type
          }
        }
      }
    }
  }
`;
