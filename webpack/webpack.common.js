const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { VueLoaderPlugin } = require("vue-loader");
const dependencies = require("../package.json").dependencies;
const webpack = require('webpack');

// const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

// const REMOTE_APP_URL = 'http://localhost:3002';
// const remotes = (isServer) => {
//   const location = isServer ? 'ssr' : 'chunks';
//   return {
//     remote: `remote@${REMOTE_APP_URL}/_next/static/${location}/remoteEntry.js`,
//   };
// }

module.exports = (env,localtest) => {
  const consumReactTsURL = localtest && localtest==='true' ? env['appConfig']['consumReactTsURL_forLocalTest'] :env['appConfig']['consumReactTsURL']; 
  const consumNextjsTsURL = localtest && localtest==='true' ? env['appConfig']['consumNextjsTsURL_forLocalTest'] :env['appConfig']['consumNextjsTsURL']; 
  const consumVueTsURL = localtest && localtest==='true' ? env['appConfig']['consumVueTsURL_forLocalTest'] :env['appConfig']['consumVueTsURL']; 
  const consumVueJsURL = localtest && localtest==='true' ? env['appConfig']['consumVueJsURL_forLocalTest'] :env['appConfig']['consumVueJsURL']; 
  return {
    // output: {
    //   publicPath: "http://localhost:8482/",
    // },
  
    resolve: {
      extensions: [".tsx", ".ts", ".vue", ".jsx", ".js", ".json"],
    },
  
    devServer: {
      // port: 8482,
      port: 6001,
      historyApiFallback: true,
    },
  
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: "vue-loader",
        },
        {
          test: /\.tsx?$/,
          use: [
            "babel-loader",
            {
              loader: "ts-loader",
              options: {
                transpileOnly: true,
                appendTsSuffixTo: ["\\.vue$"],
                happyPackMode: true,
              },
            },
          ],
        },
        {
          test: /\.(css|s[ac]ss)$/i,
          use: ["style-loader", "css-loader", "postcss-loader"],
        },
      ],
    },
  
    plugins: [
      new VueLoaderPlugin(),
      // new NextFederationPlugin({
      //   name: 'content',
      //   filename: 'static/chunks/remoteEntry.js',
      //   remotes: remotes(false),
      //   // extraOptions: {
      //   //   automaticAsyncBoundary: true,
      //   // },
      //   exposes: {
          
      //   },
      //   shared: {

      //   },
      // }),
      new webpack.DefinePlugin({
        __VUE_OPTIONS_API__: true, // 如果您想使用选项 API，请设置为 true
        __VUE_PROD_DEVTOOLS__: false // 通常在生产环境中应该设置为 false
      }),
      new ModuleFederationPlugin({
        name: "hostVueJs",
        filename: "remoteVueJsEntry.js",
        remotes: {
          'remoteVueJs':`remoteVueJs@${consumVueJsURL}/remoteVueJsEntry.js`,
          'remoteReactTs': `remoteReactTs@${consumReactTsURL}/remoteReactTsEntry.js`,
          'remoteNextjsTs': `remote@${consumNextjsTsURL}/_next/static/chunks/remoteEntry.js`,
        },
        exposes: {},
        shared: {
          ...dependencies, // 现有的依赖
        }
      }),
      new HtmlWebPackPlugin({
        template: "./src/index.html",
      }),
    ],
  }
} ;
