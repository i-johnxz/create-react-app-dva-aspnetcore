const {addBabelPlugin} =require('customize-cra');

function override (config, env) {

    return config;
};

module.exports =override(addBabelPlugin(["import", {
    "libraryName": "antd-mobile",
    "libraryDirectory": "es",
    "style": "css"
}]));
