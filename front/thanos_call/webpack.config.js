const webpackConfig = {
  mode: "none",
  module: {
    rules: [
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "fonts/[name].[ext]",
              outputPath: "fonts/",
              publicPath: "/fonts/",
            },
          },
        ],
      },
    ],
  },
}

export default webpackConfig
