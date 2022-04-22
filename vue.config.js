// 这里的配置会和公共的webpack.config.js合并
const {resolve} = require("core-js/fn/promise");
module.exports = {
    configureWebpack:{
        resolve:{
            alias:{
                'assets':'@/assets',
                'components':'@/components',
                'views':'@/views',
                'network':'@/network',
                'common':'@/common',
            }
        }
    }
}