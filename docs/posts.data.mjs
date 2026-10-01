import { createContentLoader } from 'vitepress'

export default createContentLoader('posts/*.md', {
  includeSrc: false,
  transform(raw) {
    return raw.map(({ url, frontmatter }) => ({
      title: frontmatter.title,
      url,
      date: frontmatter.date,
      cover_image: frontmatter.cover_image || null
    })).sort((a, b) => new Date(a.date) - new Date(b.date))
  }
})
