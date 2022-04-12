module.exports = {
  publicPath: '/',
  transpileDependencies: ['vuetify'],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              indentedSyntax: true,
              sassOoptions: {
                indentedSyntax: true,
              },
              implementation: require('sass'),
              additionalData: `
                @import "@/scss/global.scss"

                `,
            },
          },
        ],
      },
    ],
  },
}
