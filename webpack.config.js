require('dotenv').config();

const mode = process.env.NODE_ENV || 'development';
const prod = mode !== 'development';

const path = require('path');
const md5 = require('md5');
const getPath = relPath => path.resolve(__dirname, relPath);
const getFilename = ({ type, chunk }) => (
  `static/${type}/[name]${prod ? '.[contenthash:8]' : ''}${chunk ? '.chunk' : ''}.${type}`
);

const { DefinePlugin } = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const cssLoaders = [
  !prod ? 'style-loader' : MiniCssExtractPlugin.loader,
  {
    loader: 'css-loader',
    options: {
      modules: {
        auto: true,
        getLocalIdent: ({ resourcePath }, _, name) => `${name}-${md5(resourcePath).slice(0, 5)}`,
      },
    },
  },
  'postcss-loader',
];

module.exports = {
  entry: {
    bundle: getPath('src/index.tsx'),
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    modules: [getPath('src'), 'node_modules'],
  },

  output: {
    path: getPath('docs'),
    filename: getFilename({ type: 'js' }),
    chunkFilename: getFilename({ type: 'js', chunk: true }),
    assetModuleFilename: 'static/media/[name].[hash][ext]',
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
        test: /\.s[ac]ss$/i,
        use: [
          ...cssLoaders,
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: getPath('public/index.html'),
      publicPath: '/',
    }),
    new MiniCssExtractPlugin({
      filename: getFilename({ type: 'css' }),
      chunkFilename: getFilename({ type: 'css', chunk: true }),
    }),
    new DefinePlugin({
      'process.env': JSON.stringify(process.env),
    }),
    prod && new CleanWebpackPlugin(),
    new ForkTsCheckerWebpackPlugin(),
  ].filter(Boolean),

  mode,
  devtool: prod ? false : 'source-map',

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
