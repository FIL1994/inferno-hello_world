module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname,
    publicPath: "/",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["env", "stage-1"],
          plugins: ["syntax-jsx", "inferno"]
        }
      }
    ]
  },
  devServer: {
    port: process.env.PORT || 8000,
    historyApiFallback: {
      index: "/"
    }
  }
};
