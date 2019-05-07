const { override,fixBabelImports, addLessLoader, addWebpackAlias } = require('customize-cra');
const path = require('path')

module.exports= override(
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css',
  }),
  // 配置less
  addLessLoader(),
  addWebpackAlias({
    '@': path.resolve(__dirname,'./src')
  })
 );
