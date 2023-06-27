module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {}
    },
    {
      resolve: '@elegantstack/gatsby-theme-flexiblog-beauty',
      options: {
        sources: {
          local: true
        }
      }
    }
  ],
  // Customize your site metadata:
  siteMetadata: {
    //General Site Metadata
    title: 'Drusniel',
    name: 'Arcane Paradox A.I.',
    description: 'Embark on a journey through worlds of magic and mystery with Arcane Paradox A.I.!',
    address: 'Palawan, PH',
    email: 'daniel@danielsobrado.com',
    phone: '',

    //Site Social Media Links
    social: [
      {
        name: 'Github',
        url: 'https://github.com/danielsobrado'
      },
      {
        name: 'Twitter',
        url: 'https://twitter.com/gatsbyjs'
      },
      {
        name: 'Instagram',
        url: 'https://www.instagram.com/drusniel/'
      }
    ],

    //Header Menu Items
    headerMenu: [
      {
        name: 'Home',
        slug: '/'
      },
      {
        name: 'Our Team',
        slug: '/authors'
      },
      {
        name: 'Contact',
        slug: '/contact'
      }
    ],

    //Footer Menu Items (2 Sets)
    footerMenu: [
      {
        title: 'Quick Links',
        items: [
          {
            name: 'Advertise with us',
            slug: '/contact'
          },
          {
            name: 'About Us',
            slug: '/about'
          },
          {
            name: 'Contact Us',
            slug: '/contact'
          }
        ]
      },
      {
        title: 'Legal Stuff',
        items: [
          {
            name: 'Privacy Notice',
            slug: '/'
          },
          {
            name: 'Cookie Policy',
            slug: '/'
          },
          {
            name: 'Terms Of Use',
            slug: '/'
          }
        ]
      }
    ]
  }
}
