1. Create folder "WebPack"
2. Create folder SRC
3. Create index.js
4. Create package.json by command:

```shell
npm init -y
```

5. Install Webpack by command:

```shell
npm install webpack webpack-cli --save-dev
```

6. In package.json add scripts to start production and development modes:

```json
"build": "webpack --mode production",
"build:dev": "webpack --mode development"
```

7. Install babel:

```shell
npm install @babel/core @babel/preset-env babel-loader --save-dev
```

8. Create file ".babelrc" with next inside:

```json
{
  "presets": ["@babel/preset-env"]
}
```

9. Create file 'webpack.config.js' with next inside:

```JavaScript
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader"
      },
    ],
  },
}
```

10. Install webpack-dev-server:

```shell
npm install webpack-dev-server --save-dev
```

11. Configurate devServer by adding next lines in file 'webpack.config.js:

```JavaScript
devServer: {
      stats: 'errors-warnings',
      open: true,
      port: 4040,
    },
```

12. In package.json rename script to start dev mode:
    from

```json
"build:dev": "webpack --mode development"
```

to

```json
"start": "webpack-dev-server --mode development"
```

13. Install html-webpack-plugin:

```shell
npm install html-webpack-plugin --save-dev
```

14. In file 'webpack.config.js' add :

```JavaScript
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // module: {
  //   rules: [
  //     {
  //       test: /\.js$/,
  //       use: "babel-loader"
  //     },
  //   ],
  // },
  plugins: [new HtmlWebpackPlugin()]
};
```

15. Add file index.html in folder dist by command:

```shell
npm run build
```

16. Start server for development by command:

```shell
npm start
```

17. Change configuration of webpack to function and add source-map. Your `webpack.config.js` should be as below:

```JavaScript
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env = {}, argv = {}) => {
  return {
    module: {
      rules: [
        {
          test: /\.js$/,
          use: "babel-loader"
        },
      ],
    },
    devtool: 'eval-source-map',
    plugins: [
      new HtmlWebpackPlugin({ template: './src/index.html', }),
  }
};
```

18. Create file 'style.css' in folder src with some code as example:

```css
body {
  background: teal;
  color: white;
}
```

19. Import style.css to index.js

```JavaScript
import './style.css';
```

20. Install css and styles loaders by command:

```shell
npm install css-loader style-loader --save-dev
```

21. In file 'webpack.config.js' add:

```JavaScript
{
test: /\.css\$/,
use: ["style-loader", "css-loader"]
},
```

22. Install mini-css-extract-plugin:

```shell
npm install --save-dev mini-css-extract-plugin
```

23. In file 'webpack.config.js' add:

```JavaScript
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

rules:[
  {
    test: /\.css$/i,
    use: [MiniCssExtractPlugin.loader, 'css-loader'],
  },
]


plugins: [
      new MiniCssExtractPlugin(),]
```

24. Install clean-webpack-plugin for cleaning folder 'dist'

```shell
npm install --save-dev clean-webpack-plugin
```

25. In file 'webpack.config.js' add:

```JavaScript
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

plugins: [
      new CleanWebpackPlugin(),]
```

26. For checking loading progress In file 'webpack.config.js' add:

```JavaScript
const webpack = require("webpack");

plugins: [
new webpack.ProgressPlugin(),]
```

27. For beautify your console :) install friendly-errors-webpack-plugin:

```shell
npm i friendly-errors-webpack-plugin
```

28. Make a change in our 'webpack.config.js' file:

```JavaScript
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

plugins: [
      new FriendlyErrorsWebpackPlugin(),]
```

29. Install handlebars for templating:

```shell
npm install handlebars --save-dev
```

30. Install loader for handlebars for render our template:

```shell
npm install handlebars-loader --save-dev
```

31. Add rules to `webpack.config.js``

```JavaScript
{
  test: /\.hbs$/,
  loader: "handlebars-loader"
},
```

32. Install optimize-css-assets-webpack-plugin for minification our css:

```shell
npm install --save-dev optimize-css-assets-webpack-plugin
```

33. Add changes to our 'webpack.config.js' file:

```JavaScript
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');


plugins: [
      new OptimizeCssAssetsPlugin(),]
```

34. Install sass-loader sass webpack to compile scss to css:

```shell
npm install sass-loader sass --save-dev
```

35. Change rules at file 'webpack.config.js':

```JavaScript
{
  test: /\.s[ac]ss$/i,
  use: [
    MiniCssExtractPlugin.loader,
    'css-loader',
    'sass-loader',
      ],
},
```

36. Install url-loader for loading pictures and files:

```shell
npm install url-loader --save-dev
```

37. Change rules at file 'webpack.config.js':

```JavaScript
{
  test: /\.(png|jpg|gif)\$/i,
  use: [
        {
          loader: 'url-loader',
          options: {
            limit: 8192,
            },
        },
      ],
},
```

38. For using customs/loaded fonts need to install file-loader:

```shell
npm install file-loader --save-dev
```

39. Add rules to 'webpack.config.js':

```JavaScript

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
```

40. Install minifier svg:

```shell
npm install mini-svg-data-uri --save-dev
```

41. Add rules to 'webpack.config.js':

```JavaScript
const svgToMiniDataURI = require('mini-svg-data-uri');

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
```

42. Install plugin for minimize images:

```shell
 npm install imagemin-webpack-plugin --save-dev
```

43. Add rules to 'webpack.config.js':

```JavaScript
const ImageminPlugin = require('imagemin-webpack-plugin').default

plugins: [
  new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i }),
  ]
```

44. Install axios library for http requests:

```shell
npm install axios --save-dev
```

45. Install throttle-debounce for delaying functions:

```shell
npm install throttle-debounce --save-dev
```

46. Install [react](https://uk.reactjs.org) and react-dom:

```shell
npm install react react-dom --save-dev
```

47. Install prop-types checking for React props and similar objects:

```shell
npm install prop-types --save-dev
```
