const { loader: miniLoader } = require('mini-css-extract-plugin');

/**
 * @description Generate a function used by 'auto'
 * @param suffix style suffix without dot
 * @returns a function used by 'auto'
 */
const genAutoFunc = (suffix = 'scss') => {
    function cb(rp) {
        if (['styl', 'stylus'].includes(suffix)) {
            return rp.endsWith('.styl') || rp.endsWith('.stylus');
        }

        return rp.endsWith(`.${suffix}`);
    }

    return cb;
};

const genCssModulesOption = (suffix = 'scss') => ({
    auto: genAutoFunc(suffix),
    localIdentName: '[local]__[hash:base64]',
    // exportLocalsConvention: 'camelCase',
});

/**
 * @description config style loads
 * @param {import('webpack-chain')} confInstance
 * @param {Record<string, unknown>}  otherConf
 * @returns the config instance
 */
const loadStyles = (confInstance, { isDev = true, styleType = 'css', styleResourcePatterns = [] }) => {
    const sourceMap = !isDev;

    if (styleType === 'sass') {
        return confInstance.module
            .rule('sass')
            .test(/\.sass$/i)
            .oneOf('css-modules')
            .test(/\.module\.\w+$/i)
            .use('style')
            .loader(isDev ? 'style-loader' : miniLoader)
            .end()
            .use('css')
            .loader('css-loader')
            .options({
                sourceMap,
                importLoaders: 2,
                // css-module hash
                modules: genCssModulesOption('sass'),
            })
            .end()
            .use('postcss')
            .loader('postcss-loader')
            .options({ sourceMap })
            .end()
            .use('sass')
            .loader('sass-loader')
            .options({
                sourceMap,
                sassOptions: {
                    indentedSyntax: true,
                },
            })
            .end()
            .use('style-resource')
            .loader('style-resources-loader')
            .options({
                patterns: Array.isArray(styleResourcePatterns) ? styleResourcePatterns : [],
            })
            .end()
            .end()
            .oneOf('css-normal')
            .use('style')
            .loader(isDev ? 'style-loader' : miniLoader)
            .end()
            .use('css')
            .loader('css-loader')
            .options({
                sourceMap,
                importLoaders: 2,
                // css-module hash
                modules: false,
            })
            .end()
            .use('postcss')
            .loader('postcss-loader')
            .options({ sourceMap })
            .end()
            .use('sass')
            .loader('sass-loader')
            .options({
                sourceMap,
                sassOptions: {
                    indentedSyntax: true,
                },
            })
            .end()
            .use('style-resource')
            .loader('style-resources-loader')
            .options({
                patterns: Array.isArray(styleResourcePatterns) ? styleResourcePatterns : [],
            })
            .end()
            .end()
            .end()
            .end();
    }

    if (styleType === 'scss') {
        return confInstance.module
            .rule('scss')
            .test(/\.scss$/i)
            .oneOf('css-module')
            .test(/\.module\.\w+$/i)
            .use('style')
            .loader(isDev ? 'style-loader' : miniLoader)
            .end()
            .use('css')
            .loader('css-loader')
            .options({
                sourceMap,
                importLoaders: 2,
                // css-module hash
                modules: genCssModulesOption(),
            })
            .end()
            .use('postcss')
            .loader('postcss-loader')
            .options({ sourceMap })
            .end()
            .use('scss')
            .loader('sass-loader')
            .options({ sourceMap })
            .end()
            .use('style-resource')
            .loader('style-resources-loader')
            .options({
                patterns: Array.isArray(styleResourcePatterns) ? styleResourcePatterns : [],
            })
            .end()
            .end()
            .oneOf('css-modules')
            .use('style')
            .loader(isDev ? 'style-loader' : miniLoader)
            .end()
            .use('css')
            .loader('css-loader')
            .options({
                sourceMap,
                importLoaders: 2,
                // css-module hash
                modules: false,
            })
            .end()
            .use('postcss')
            .loader('postcss-loader')
            .options({ sourceMap })
            .end()
            .use('scss')
            .loader('sass-loader')
            .options({ sourceMap })
            .end()
            .use('style-resource')
            .loader('style-resources-loader')
            .options({
                patterns: Array.isArray(styleResourcePatterns) ? styleResourcePatterns : [],
            })
            .end()
            .end()
            .end()
            .end();
    }

    if (styleType === 'less') {
        return confInstance.module
            .rule('less')
            .test(/\.less$/i)
            .oneOf('css-modules')
            .test(/\.module\.\w+$/i)
            .use('style')
            .loader(isDev ? 'style-loader' : miniLoader)
            .end()
            .use('css')
            .loader('css-loader')
            .options({
                sourceMap,
                importLoaders: 2,
                // css-module hash
                modules: genCssModulesOption('less'),
            })
            .end()
            .use('postcss')
            .loader('postcss-loader')
            .options({ sourceMap })
            .end()
            .use('less')
            .loader('less-loader')
            .options({ sourceMap })
            .end()
            .use('style-resource')
            .loader('style-resources-loader')
            .options({
                patterns: Array.isArray(styleResourcePatterns) ? styleResourcePatterns : [],
            })
            .end()
            .end()
            .oneOf('css-modules')
            .use('style')
            .loader(isDev ? 'style-loader' : miniLoader)
            .end()
            .use('css')
            .loader('css-loader')
            .options({
                sourceMap,
                importLoaders: 2,
                // css-module hash
                modules: false,
            })
            .end()
            .use('postcss')
            .loader('postcss-loader')
            .options({ sourceMap })
            .end()
            .use('less')
            .loader('less-loader')
            .options({ sourceMap })
            .end()
            .use('style-resource')
            .loader('style-resources-loader')
            .options({
                patterns: Array.isArray(styleResourcePatterns) ? styleResourcePatterns : [],
            })
            .end()
            .end()
            .end()
            .end();
    }

    if (styleType === 'stylus') {
        return confInstance.module
            .rule('stylus')
            .test(/\.styl(us)?$/i)
            .oneOf('css-modules')
            .test(/\.module\.\w+$/i)
            .use('style')
            .loader(isDev ? 'style-loader' : miniLoader)
            .end()
            .use('css')
            .loader('css-loader')
            .options({
                sourceMap,
                importLoaders: 2,
                // css-module hash
                modules: genCssModulesOption('styl'),
            })
            .end()
            .use('postcss')
            .loader('postcss-loader')
            .options({ sourceMap })
            .end()
            .use('less')
            .loader('stylus-loader')
            .options({ sourceMap })
            .end()
            .use('style-resource')
            .loader('style-resources-loader')
            .options({
                patterns: Array.isArray(styleResourcePatterns) ? styleResourcePatterns : [],
            })
            .end()
            .end()
            .oneOf('normal')
            .use('style')
            .loader(isDev ? 'style-loader' : miniLoader)
            .end()
            .use('css')
            .loader('css-loader')
            .options({
                sourceMap,
                importLoaders: 2,
                // css-module hash
                modules: false,
            })
            .end()
            .use('postcss')
            .loader('postcss-loader')
            .options({ sourceMap })
            .end()
            .use('stylus')
            .loader('stylus-loader')
            .options({ sourceMap })
            .end()
            .use('style-resource')
            .loader('style-resources-loader')
            .options({
                patterns: Array.isArray(styleResourcePatterns) ? styleResourcePatterns : [],
            })
            .end()
            .end()
            .end()
            .end();
    }

    return confInstance.module
        .rule('css')
        .test(/\.css$/i)
        .oneOf('css-module')
        .test(/\.module\.\w+$/i)
        .use('style')
        .loader(isDev ? 'style-loader' : miniLoader)
        .end()
        .use('css')
        .loader('css-loader')
        .options({
            sourceMap,
            importLoaders: 1,
            // css-module hash
            modules: genCssModulesOption('css'),
        })
        .end()
        .use('postcss')
        .loader('postcss-loader')
        .options({ sourceMap })
        .end()
        .use('style-resource')
        .loader('style-resources-loader')
        .options({
            patterns: Array.isArray(styleResourcePatterns) ? styleResourcePatterns : [],
        })
        .end()
        .end()
        .oneOf('css-modules')
        .use('style')
        .loader(isDev ? 'style-loader' : miniLoader)
        .end()
        .use('css')
        .loader('css-loader')
        .options({
            sourceMap,
            importLoaders: 1,
            // css-module hash
            modules: false,
        })
        .end()
        .use('postcss')
        .loader('postcss-loader')
        .options({ sourceMap })
        .end()
        .use('style-resource')
        .loader('style-resources-loader')
        .options({
            patterns: Array.isArray(styleResourcePatterns) ? styleResourcePatterns : [],
        })
        .end()
        .end()
        .end()
        .end();
};

module.exports = {
    loadStyles,
};
