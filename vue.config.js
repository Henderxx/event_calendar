module.exports = {
    css: {
      loaderOptions: {
        sass: {
          additionalData: `
          @import "@/scss/global.scss";
          `,
          implementation: require('sass')
        }
      }
    }
  };