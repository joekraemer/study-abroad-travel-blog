import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "My Semester in Spain",
  description: "A travel blog archive",
  base: '/study-abroad-travel-blog/',
  ignoreDeadLinks: true,
  themeConfig: {
    sidebar: [
      {
        text: 'Blog Posts',
        items: [
          {
                    "text": "Sep 01 - The beginning",
                    "link": "/posts/2015-09-02-the-beginning"
          },
          {
                    "text": "Sep 06 - The First Couple Days",
                    "link": "/posts/2015-09-07-the-first-couple-days"
          },
          {
                    "text": "Sep 08 - A Tour of the Apartment",
                    "link": "/posts/2015-09-09-a-tour-of-the-apartment"
          },
          {
                    "text": "Sep 14 - First Day On The Job",
                    "link": "/posts/2015-09-15-first-day-on-the-job"
          },
          {
                    "text": "Sep 14 - Playing Catch Up",
                    "link": "/posts/2015-09-15-playing-catch-up"
          },
          {
                    "text": "Sep 19 - Pro tip: Don't Lose Your Passport",
                    "link": "/posts/2015-09-20-pro-tip-dont-lose-your-passport"
          },
          {
                    "text": "Sep 21 - First weekend trip",
                    "link": "/posts/2015-09-22-first-weekend-trip"
          },
          {
                    "text": "Sep 29 - New Foods and a Weekend to Madrid and Toledo",
                    "link": "/posts/2015-09-30-new-foods-and-a-weekend-to-madrid-and-toledo"
          },
          {
                    "text": "Oct 06 - One Month Down",
                    "link": "/posts/2015-10-07-one-month-down"
          },
          {
                    "text": "Oct 15 - Long Weekend in London",
                    "link": "/posts/2015-10-16-long-weekend-in-london"
          },
          {
                    "text": "Oct 21 - Half Way Point",
                    "link": "/posts/2015-10-22-half-way-point"
          },
          {
                    "text": "Oct 26 - Week 8",
                    "link": "/posts/2015-10-26-week-8"
          },
          {
                    "text": "Nov 04 - France, Painted Forest, and Butrón Castle",
                    "link": "/posts/2015-11-04-france-painted-forest-and-butrn-castle"
          },
          {
                    "text": "Nov 10 - Solo in Sevilla",
                    "link": "/posts/2015-11-11-solo-in-sevilla"
          },
          {
                    "text": "Nov 17 - Bilbao Weekend",
                    "link": "/posts/2015-11-18-bilbao-weekend"
          },
          {
                    "text": "Nov 30 - Krakow",
                    "link": "/posts/2015-12-01-krakow"
          },
          {
                    "text": "Dec 09 - Road Tripping to Portugal",
                    "link": "/posts/2015-12-10-road-tripping-to-portugal"
          },
          {
                    "text": "Dec 16 - The Second to Last Week :(",
                    "link": "/posts/2015-12-17-the-second-to-last-week"
          }
]
      }
    ]
  },
  vite: {
    assetsInclude: ['**/*.JPG', '**/*.PNG']
  }
})
