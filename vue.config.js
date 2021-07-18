module.exports = {
    devServer: {
        proxy: {
            '/api': { //api就是中间商，访问/api自动转接到target的地址
                //目标代理服务器地址
                target: 'https://api.binstd.com/recipe',
                //允许跨域
                changeOrigin: true,
                pathRewrite: { //路径重写
                    "^/api": ""
                }
            },
        },
    },
}