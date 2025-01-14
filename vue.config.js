/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable prettier/prettier */

const webpack = require('webpack');

const packageVersion = JSON.stringify(require('./package.json').version);
const web = process.env.WEB || true;

console.log(`Building package ${packageVersion} for Web: ${web}`);

const path = require('path')

module.exports = {
  // base url
  publicPath: process.env.NODE_ENV === 'production'
      ? './'
      : '/',
  // output dir
  outputDir: './dist',
  assetsDir: 'static',
  // eslint-loader check
  lintOnSave: true,
  // webpack
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  chainWebpack: (config) => {
    config.plugin('define').tap((args) => {
      const env = args[0]['process.env'];
      let keys;
      try {
        keys = require('./keys-whitelist.json');
      } catch {
        keys = {
          mainnet: [],
          testnet: []
        }
      }
      args[0]['process.env'] = {
          ...env,
          PACKAGE_VERSION: packageVersion,
          WEB: web,
          KEYS_WHITELIST: JSON.stringify(keys)
      };
      return args;
    });
  },
  // generate map
  productionSourceMap: true,
  //use template in vue
  runtimeCompiler: true,
  // css
  css: {
    // ExtractTextPlugin
    extract: false,
    //  CSS source maps?
    sourceMap: false,
    // css loader
    loaderOptions: {
      postcss: {
        config: {
          path: '.postcss.config.js'
        }
      }
    },
    // CSS modules for all css / pre-processor files.
    requireModuleExtension: true
  },
  // use thread-loader for babel & TS in production build
  // enabled by default if the machine has more than 1 cores
  parallel: require('os').cpus().length > 1,
  // webpack-dev-server
  devServer: {
    disableHostCheck: true,
    host: '0.0.0.0',
    port: 8080,
    public: 'w.twix.live',
    before: app => {
    },
    proxy: {
        '/cryptonews': {
            target: 'https://medium.com/feed/new-capital', //For testing: this line can be changed to a different RSS source. 
        ws: true,
        changeOrigin: true,
            pathRewrite: { '^/cryptonews': '' }
      },
    }
  },
  // plugins
  pluginOptions: {
    "process.env": {
      NODE_ENV: '"development"',
    }
  }
}
