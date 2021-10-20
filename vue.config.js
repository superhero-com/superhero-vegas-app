//
// const path = require('path');
// module.exports = {
//     publicPath:'./',
//     chainWebpack(config) {
//         // set svg-sprite-loader
//         config.module
//             .rule('svg')
//             .exclude.add(path.resolve(__dirname, 'src/assets/icons'))
//             .end()
//         config.module
//             .rule('icons')
//             .test(/\.svg$/)
//             .include.add(path.resolve(__dirname, 'src/assets/icons'))
//             .end()
//             .use('svg-sprite-loader')
//             .loader('svg-sprite-loader')
//             .options({
//                 symbolId: 'icon-[name]'
//             })
//             .end()
//     }
// };


const path = require('path')

function resolve(dir) {
    return path.join(__dirname, '.', dir)
}

module.exports = {
    publicPath:'./',

    chainWebpack: config => {
        config.module.rules.delete("svg"); //重点:删除默认配置中处理svg,
        config.module
            .rule('svg-sprite-loader')
            .test(/\.svg$/)
            .include
            .add(resolve('src/icons')) //处理svg目录
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })
    },

    transpileDependencies: [
      'vuetify'
    ]
}
