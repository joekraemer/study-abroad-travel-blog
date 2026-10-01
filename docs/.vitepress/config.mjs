import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "My Semester in Spain",
  description: "A travel blog archive",
  base: '/study-abroad-travel-blog/',
  ignoreDeadLinks: true,
  vite: {
    assetsInclude: ['**/*.JPG', '**/*.PNG']
  }
})
