module.exports = {
  publicPath: '/',

  css: {
    loaderOptions: {
      scss: {
        additionalData: `
        @import "@/scss/global.scss"
        `,
      },
    },
  },

  transpileDependencies: ['vuetify'],
}
