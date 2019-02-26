// const { override, fixBabelImports } = require('customize-cra');
// module.exports = override(
//     fixBabelImports('import', {
//         libraryName: 'antd',
//         libraryDirectory: 'es',
//         style: 'css',
//     }),
// );
const {addBabelPlugin} =require('customize-cra');

function override (config, env) {

    return config;
};

module.exports =override(addBabelPlugin(["import", {
    "libraryName": "antd",
    "libraryDirectory": "es",
    "style": "css"
}]));
