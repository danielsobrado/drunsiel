const queryMobileMenu = require('../utils/queryMobileMenu')

module.exports = async (
  { graphql, actions, reporter },
  pluginOptions,
  { template, mobileMenu }
) => {
  const { createPage } = actions
  const { pageContextOptions } = pluginOptions

  pageContextOptions.mobileMenu = mobileMenu

  console.log('pluginOptions', pluginOptions)

  const result = await graphql(`
    {
      allArticle(
        filter: { draft: { ne: true } }
        sort: [{ date: DESC }, { title: ASC }]
        limit: 1000
      ) {
        edges {
          node {
            id
            slug
            language
            link
            category {
              id
            }
            tags {
              id
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic(result.errors)
  }

  const { allArticle } = result.data
  const posts = allArticle.edges

  posts.forEach(({ node }, index) => {
    const { id, slug, language, category, tags, link } = node

    if (link) return //skip creating pages for nodes linking to external sites

    const previous = index === posts.length - 1 ? null : posts[index + 1]
    const next = index === 0 ? null : posts[index - 1]

    //For querying related posts based on tags and category
    const categoryId = category && category.id
    const tagsIds = (tags && tags.map(tag => tag && tag.id)) || []
    const hasTags = tagsIds.length > 0
    // slug = `${language}/${slug}`

    createPage({
      path: slug,
      language: language, 
      component: template,
      context: {
        id,
        categoryId,
        language, 
        tagsIds,
        hasTags,
        previousId: previous ? previous.node.id : undefined,
        nextId: next ? next.node.id : undefined,
        ...pageContextOptions
      }
    })
  })
}
