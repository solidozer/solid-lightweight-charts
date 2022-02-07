require('dotenv').config();

const mode = process.env.NODE_ENV || 'development';
const prod = mode !== 'development';

const {resolve} = require('path');
const {DefinePlugin} = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const cssLoaders = [
  MiniCssExtractPlugin.loader,
  {
    loader: 'css-loader',
    options: {
      modules: {
        auto: true,
      },
    },
  },
  'postcss-loader',
];

module.exports = {
  entry: {
    bundle: './src/index.tsx',
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },

  output: {
    path: resolve(__dirname, 'docs'),
    filename: '[name].js',
    chunkFilename: '[name].[id].js'
  },

  module: {
    rules: [
      {
        test: /\.tsx?/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: cssLoaders,
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new DefinePlugin({
      'process.env': JSON.stringify(process.env),
    }),
    prod && new CleanWebpackPlugin(),
    new ForkTsCheckerWebpackPlugin(),
  ].filter(Boolean),

  mode,
  devtool: false,

  optimization: {
    minimize: prod,
    minimizer: [new CssMinimizerPlugin(), '...'],
    splitChunks: {
      chunks: 'async',
      cacheGroups: {
        defaultVendors: {
          chunks: 'all',
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          priority: -10,
          reuseExistingChunk: true,
        },
        css: {
          test: module => module.constructor.name === 'CssModule',
          minSize: 0,
        },
      },
    },
    runtimeChunk: {
      name: entrypoint => `${entrypoint.name}-runtime`,
    },
  },

  devServer: {
    hot: true,
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
    historyApiFallback: true,
    port: 8080,
  },

  stats: {
    preset: 'errors-warnings',
    builtAt: true,
    timings: true,
    performance: true,
  },
};
