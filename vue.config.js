module.exports = {
    devServer: {
        proxy: {
            '/api': {
                'target': 'http://www.imocc.com/',
                'changeOrigin': true,
                'pathRewrite': {
                    '^/api': ''
                },
            },
        }
    }
}