module.exports = {
    publicPath: `/`,
    css: {
      loaderOptions: {
        sass: {
          prependData:
            `@import "@/scss/_global.scss"`
          
        }
      }
    }
  };