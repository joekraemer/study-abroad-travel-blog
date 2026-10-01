import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "A College Kid Spends a Semester in Spain",
  description: "My travel blog from studying abroad",
  ignoreDeadLinks: true,
  vite: {
    assetsInclude: ['**/*.JPG', '**/*.PNG']
  },
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Posts', link: '/posts/2015-09-02-the-beginning' }
    ],
    sidebar: [
      {
        text: 'Blog Posts',
        items: [
          { text: 'The beginning', link: '/posts/2015-09-02-the-beginning' },
          { text: 'The first couple days', link: '/posts/2015-09-07-the-first-couple-days' },
          { text: 'A tour of the apartment', link: '/posts/2015-09-09-a-tour-of-the-apartment' },
          { text: 'First day on the job!', link: '/posts/2015-09-15-first-day-on-the-job' },
          { text: 'Playing catch up', link: '/posts/2015-09-15-playing-catch-up' },
          { text: 'Pro Tip: Dont lose your passport', link: '/posts/2015-09-20-pro-tip-dont-lose-your-passport' },
          { text: 'First weekend trip', link: '/posts/2015-09-22-first-weekend-trip' },
          { text: 'New Foods and a Weekend to Madrid and Toledo', link: '/posts/2015-09-30-new-foods-and-a-weekend-to-madrid-and-toledo' },
          { text: 'One Month Down', link: '/posts/2015-10-07-one-month-down' },
          { text: 'Long weekend in London', link: '/posts/2015-10-16-long-weekend-in-london' },
          { text: 'Half way point!', link: '/posts/2015-10-22-half-way-point' },
          { text: 'Week 8', link: '/posts/2015-10-26-week-8' },
          { text: 'France, Painted Forest, and Butrón Castle', link: '/posts/2015-11-04-france-painted-forest-and-butrn-castle' },
          { text: 'Solo in Sevilla', link: '/posts/2015-11-11-solo-in-sevilla' },
          { text: 'Bilbao Weekend', link: '/posts/2015-11-18-bilbao-weekend' },
          { text: 'Krakow', link: '/posts/2015-12-01-krakow' },
          { text: 'Road tripping to Portugal', link: '/posts/2015-12-10-road-tripping-to-portugal' },
          { text: 'The Second to Last Week :(', link: '/posts/2016-01-19-the-second-to-last-week' }
        ]
      }
    ]
  }
})
