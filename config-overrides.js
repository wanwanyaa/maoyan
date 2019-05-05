const { override,fixBabelImports, addLessLoader } = require('customize-cra');

module.exports= override(
  fixBabelImports('import', {
    libraryName: 'antd',
    style: 'css',
  }),
  // 配置less
  addLessLoader()
 );
