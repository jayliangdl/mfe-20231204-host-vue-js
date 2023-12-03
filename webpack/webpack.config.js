const { merge } = require('webpack-merge')

module.exports = (envVars) => {
  const { env,localtest } = envVars
  const envConfig = require(`./webpack.${env}.js`);
  const commonConfig = require('./webpack.common.js');
  const config = merge(commonConfig(envConfig,localtest), envConfig['webpackConfig'])
  return config
}