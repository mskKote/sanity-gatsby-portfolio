export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61c21a293d6bb648618e7ced',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-cz1ksse9',
                  apiId: '9275a9ed-8fa8-4053-96e1-1fef8884a0ee'
                },
                {
                  buildHookId: '61c21a2ab6d7c84807337639',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-vfrb4hzp',
                  apiId: 'd00f71a8-b5f5-45a7-82dd-dcde0c8c63e5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mskKote/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-vfrb4hzp.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
