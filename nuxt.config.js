const webpack = require('webpack')

module.exports = {
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.4.1/css/simple-line-icons.css'},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato'},
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: { color: '#53c556' },
  css: ['~/assets/css/main.scss'],
  build: {
    vendor: [
      'jquery',
      'bootstrap',
      'vee-validate',
      'axios',
    ],
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      })
    ]
  },
  plugins: [
    '~plugins/bootstrap.js',
    '~plugins/validate.js',
    //'~plugins/axios.js',
  ]
}
