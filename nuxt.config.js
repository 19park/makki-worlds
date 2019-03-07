const webpack = require('webpack')

export default {
  srcDir: 'app',
  /*
  ** Headers of the page
  */
  head: {
    title: '마끼월드',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '마끼 project' },
      { hid: 'og:image', property: 'og:image', content: 'https://makki.ml/makki.jpg' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.1/css/bulma.min.css' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  css: [
    '~/assets/base.css'
  ],
  loading: { color: '#00d1b2' },
  /*
  ** Build configuration
  */
  env: {
    APIKEY: "AIzaSyBS7akFZnh8QFlSbxzaumf2jrybPF_pjko",
    AUTHDOMAIN: "makki-b4939.firebaseapp.com",
    DATABASEURL: "https://makki-b4939.firebaseio.com",
    PROJECTID: "makki-b4939",
    STORAGEBUCKET: "makki-b4939.appspot.com",
    MESSAGINGSENDERID: "337225498650"
  },
  build: {
    publicPath: '/assets/',
  }
}
