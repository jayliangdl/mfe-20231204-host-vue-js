const webpack = require('webpack');
module.exports = {
  /**webpack专属的配置放在这里*/
  webpackConfig:{
    mode: 'production',
    
    devtool: 'source-map',
    plugins : [
      new webpack.DefinePlugin({
        'process.env.name':JSON.stringify('prod')
      })
    ]
  },
  /**应用自己的配置放在这里*/
  appConfig:{
    consumReactTsURL:'https://mfe-20231204-remote-react-ts.vercel.app',
    consumVueTsURL:'https://mfe-20231204-remote-vue-ts.vercel.app',
    consumVueJsURL:'https://mfe-20231204-remote-vue-js.vercel.app',
    consumReactTsURL_forLocalTest:'http://localhost:4402',
    consumVueTsURL_forLocalTest:'http://localhost:5502',
    consumVueJsURL_forLocalTest:'http://localhost:6602',
  }
}