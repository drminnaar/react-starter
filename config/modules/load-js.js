/**
 * @description add thread loader when isProd
 * @param {import('webpack-chain')} confInstance
 * @param {Record<string, unknown>} opts
 */
const loadJs = (confInstance, opts = {}) => {
    const { isProd } = opts || {};

    // basic config of ts-loader
    const tsLoaderBasicConf = {
        transpileOnly: true,
        happyPackMode: false,
    };

    if (isProd) {
        return confInstance.module
            .rule('js')
            .test(/\.jsx?$/i)
            .use('thread-loader')
            .loader('thread-loader')
            .end()
            .use('babel')
            .loader('babel-loader')
            .options({ babelrc: true })
            .end()
            .exclude.add(/node_modules/)
            .end()
            .end()
            .rule('ts')
            .test(/\.tsx?$/i)
            .use('thread-loader')
            .loader('thread-loader')
            .end()
            .use('babel')
            .loader('babel-loader')
            .options({ babelrc: true })
            .end()
            .exclude.add(/node_modules/)
            .end()
            .use('ts-loader')
            .loader('ts-loader')
            .options({
                ...tsLoaderBasicConf,
                happyPackMode: true,
            })
            .end()
            .end()
            .end();
    }

    return confInstance.module
        .rule('js')
        .test(/\.jsx?$/i)
        .use('babel')
        .loader('babel-loader')
        .options({ babelrc: true })
        .end()
        .exclude.add(/node_modules/)
        .end()
        .end()
        .rule('ts')
        .test(/\.tsx?$/i)
        .use('babel')
        .loader('babel-loader')
        .options({ babelrc: true })
        .end()
        .exclude.add(/node_modules/)
        .end()
        .use('ts-loader')
        .loader('ts-loader')
        .options({
            ...tsLoaderBasicConf,
            happyPackMode: true,
        })
        .end()
        .end()
        .end();
};

module.exports = {
    loadJs,
};
