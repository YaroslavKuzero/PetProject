const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require("webpack");
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const svgToMiniDataURI = require('mini-svg-data-uri');
const ImageminPlugin = require('imagemin-webpack-plugin').default

module.exports = env => {
  return {
    module: {
      rules: [
        {
          test: /\.js$/,
          use: "babel-loader"
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader',
          ],
        },
        // {
        //   test: /\.css$/i,
        //   use: [MiniCssExtractPlugin.loader, 'css-loader'],
        // },
        // {
        //   test: /\.css$/,
        //   use: ["style-loader", "css-loader"]
        // },
        {
          test: /\.hbs$/,
          loader: "handlebars-loader"
        },
        {
          test: /\.(png|jpg|gif)$/i,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8192,
              },
            },
          ],
        },
        {
          test: /\.svg$/i,
          use: [
            {
              loader: 'url-loader',
              options: {
                generator: (content) => svgToMiniDataURI(content.toString()),
              },
            },
          ],
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'fonts/',
              },
            },
          ],
        },
      ],
    },
    devtool: 'eval-source-map',
    devServer: {
      stats: 'errors-warnings',
      open: true,
      port: 4040,
    },
    plugins: [
      new MiniCssExtractPlugin(),
      new CleanWebpackPlugin(),
      new webpack.ProgressPlugin(),
      new FriendlyErrorsWebpackPlugin(),
      new OptimizeCssAssetsPlugin(),
      new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i }),
      new HtmlWebpackPlugin({ template: './src/index.html', })],
  }
};