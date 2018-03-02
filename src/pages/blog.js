import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import g from "glamorous";
import { css } from "glamor";
import { rhythm } from "../utils/typography";

const blogPostsFlexbox = css({
  display: `flex`,
  flexFlow: `row wrap`,
  width: `100%`,
  justifyContent: `space-around`,
});

const blogPostPreview = css({
  padding: `5px 10px`,
  margin: `0 2px 5px`,
  width: `30%`,
  flexGrow: 1,
  minWidth: 300,
  backgroundColor: `#222`,
  "&:hover": {backgroundColor: `#444`}
});

const blogPostTitle = css({
  marginTop: `1.6rem`,
  marginBottom: `1.6rem`,
  color: `#ccc`,
  "&:hover": {color: `#fff`}
});

const blogLinkStyle = css({
  textDecoration: `none`,
  color: `#ccc`,
  "&:hover": {color: `#fff`}
});

const blogPostDate = css({
  marginTop: `1.6rem`,
  marginBottom: `3.2rem`,
  color: `#ccc`,
  "&:hover": {color: `#fff`}
});

export default function BlogIndex({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <div>
      <h1>Blog</h1>
      <Helmet title={`Blog posts: Russell Schmidt`} />
      <div className={blogPostsFlexbox}>
      {posts
        .filter(post => post.node.frontmatter.title.length > 0)
        .map(({ node: post }) => {
          return (
            <div className={blogPostPreview} key={post.id}>
              <Link className={blogLinkStyle} to={post.frontmatter.path}>
                <h3 className={blogPostTitle}>{post.frontmatter.title}</h3>
                <h4 className={blogPostDate}>{post.frontmatter.date}</h4>
                <p>{post.excerpt}</p>
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
