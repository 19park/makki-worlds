const webpack = require('webpack')

export default {
  srcDir: 'app',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Nuxt Firebase SNS Example',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
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
