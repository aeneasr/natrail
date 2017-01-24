const config = {
  fileName: './state.json',
  getPlugins(plugins) {
    const createParallaxPlugin = require('./plugins/parallax').default
    const FaIconPlugin = require('./plugins/fa-icon').default

    const slatePlugin = plugins.content.slate()

    return {
      content: [
        plugins.content.image,
        plugins.content.video,
        slatePlugin,
        plugins.content.spacer,
        FaIconPlugin
      ],
      layout: [
        plugins.layout.spoiler,
        createParallaxPlugin(slatePlugin)
      ]
    }
  },
  // helmet config applied to every page
  helmet: {
    title: 'ORY Editor Static Page Demo',
    meta: [
      { charset: 'utf-8' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro' },
      { rel: 'stylesheet', href: 'assets/css/main.css' },
      { rel: 'stylesheet', href: 'https://unpkg.com/ory-editor@0.0.17/dist/styles.css' }
    ],
    script: [
      { src: 'assets/js/jquery.min.js' },
      { src: 'assets/js/jquery.scrolly.min.js' },
      { src: 'assets/js/skel.min.js' },
      { src: 'assets/js/util.js' },
      { src: 'assets/js/main.js' }
    ]
  }
}

export default config
