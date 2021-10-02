/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const redirects = require('./redirects.json');

exports.createPages = async ({ actions }) => {
  const { createRedirect } = actions;

  redirects.forEach(({ fromPath, toPath }) =>
    createRedirect({
      fromPath,
      toPath,
    }),
  );
};
