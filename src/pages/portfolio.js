import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import g from "glamorous";
import { css } from "glamor";

const portfolioLinkStyle = css({
  textDecoration: `none`,
  color: `#ccc`,
  "&:hover": {color: `#fff`},
  display: `inline-block`,
  height: `100%`,
  width: `100%`
});

const flexContainer = css({
  display: `flex`,
  flexFlow: `row wrap`,
  width: `100%`,
  justifyContent: `space-around`,
});

const flexChild = css({
  margin: `5px`,
  padding: `5px`,
  flexGrow: 1,
  background: `#222`,
  height: 175,
  minWidth: 200,
  "&:hover": {backgroundColor: `#444`},
  textAlign: `center`,
});

const flexChildText = css({
  textDecoration: `none`,
  color: `#ccc`,
  "&:hover": {color: `#fff`},
})

export default function PortfolioIndex({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <div>
      <h1>Portfolio</h1>
      <Helmet title={`Portfolio Projects: Russell Schmidt`} />
      <div className={flexContainer}>
        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => {
            return (
              <div className={flexChild} key={post.id}>
                <Link className={portfolioLinkStyle}
                to={post.frontmatter.path}>
                  <h3 className={flexChildText}>{post.frontmatter.title}</h3>
                  <h4 className={flexChildText}>{post.frontmatter.date}</h4>
                  <p className={flexChildText}>{post.excerpt}</p>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
}
export const pageQuery = graphql`
  query PortfolioQuery {
    allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/portfolio/.*\\.md$/"}}
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
