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
