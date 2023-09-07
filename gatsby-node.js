exports.createPages = async ({ actions }) => {
  const { createRedirect } = actions

  createRedirect({
    fromPath: `/brochure`,
    toPath: `/brochure.pdf`,
  })
}