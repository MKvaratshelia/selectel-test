const webpack = require("webpack");
const path = require("path");
// подключаем path к конфигу вебпак
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // Подключили к проекту плагин
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackMd5Hash = require("webpack-md5-hash");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
// подключаем плагин
const isDev = process.env.NODE_ENV === "development";
// создаем переменную для development-сборки

module.exports = {
  entry: { main: "./src/index.js" },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[chunkhash].js",
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: ["pug-loader"],
      },
      {
        // тут описываются правила
        test: /\.js$/, // регулярное выражение, которое ищет все js файлы
        use: { loader: "babel-loader" }, // весь JS обрабатывается пакетом babel-loader
        exclude: /node_modules/, // исключает папку node_modules
      },
      {
        test: /\.css$/i,
        use: [
          isDev ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
        ],
      },
      {
        test: /\.scss$/i,
        use: [
          isDev ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },

      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: "file-loader?name=./vendor/[name].[ext]",
      },
      {
        test: /\.(png|jpg|gif|ico|svg)$/,
        use: [
          "file-loader?name=./images/[name].[ext]", // указали папку, куда складывать изображения
          {
            loader: "image-webpack-loader",
            options: {},
          },
        ],
      },
    ],
  },
  plugins: [
    require("autoprefixer"),
    require("cssnano")({
      // подключили cssnano
      preset: "default", // выбрали настройки по умолчанию
    }),
    new MiniCssExtractPlugin({
      filename: "style.[contenthash].css",
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require("cssnano"),
      cssProcessorPluginOptions: {
        preset: ["default"],
      },
      canPrint: true,
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.pug",
    }),

    // new HtmlWebpackPlugin({
    //   // Означает, что:
    //   inject: false, // стили НЕ нужно прописывать внутри тегов
    //   template: "./src/index.html", // откуда брать образец для сравнения с текущим видом проекта
    //   // template: "./src/index.pug", // откуда брать образец для сравнения с текущим видом проекта
    //   filename: "index.html", // имя выходного файла, то есть того, что окажется в папке dist после сборки
    // }),
    new WebpackMd5Hash(),
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    }),
  ],
};
// module.exports — это синтаксис экспорта в Node.js
