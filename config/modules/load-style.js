const { loader: miniLoader } = require('mini-css-extract-plugin');

/**
 * @description Generate a function used by 'auto'
 * @param {string} suffix style suffix without dot
 * @returns a function used by 'auto'
 */
const genAutoFunc = (suffix = 'scss') => {
    /** @param {string} rp resolvedPath */
    function cb(rp) {
        if (['styl', 'stylus'].includes(suffix)) {
            return rp.endsWith('.styl') || rp.endsWith('.stylus');
        }

        return rp.endsWith(`.${suffix}`);
    }

    return cb;
};

/**
 * @description generate options of css loaders
 * @param {string} styleType style type
 * @param {boolean} isWithCssModule is css-module config generated
 */
const genCssLoaderOption = (styleType = 'scss', isWithCssModule = true) => {
    const importLoaders = Number(styleType !== 'css') + 1;

    // conf without modules
    const basicConf = {
        sourceMap: false,
        importLoaders,
        modules: false,
    };

    if (isWithCssModule) {
        // conf with modules
        return {
            ...basicConf,
            modules: {
                auto: genAutoFunc(styleType),
                // css-module hash
                localIdentName: '[local]__[hash:base64]',
            },
            // See: https://stackoverflow.com/questions/63693309/kebab-case-to-camelcase-via-localsconvention-in-css-loader-3-4-2-not-working
            localsConvention: 'camelCase',
        };
    }

    return basicConf;
};

/**
 * @description Generate some config of css preprocessors
 * @param {string} styleType style type supported
 */
const genStyleConfigWithPreloader = styleType => {
    const styleTypeList = ['sass', 'scss', 'less', 'stylus'];
    const sourceMap = false;

    if (styleTypeList.includes(styleType)) {
        // List basic keys
        let regex = /\.scss$/i;
        let selfLoaderName = 'sass-loader';
        let selfLoaderOptions = { sourceMap };

        // for sass
        if (styleType === 'sass') {
            regex = /\.sass$/i;
            selfLoaderOptions = Object.assign(selfLoaderOptions, {
                sassOptions: {
                    indentedSyntax: true,
                },
            });
        }

        // for less
        if (styleType === 'less') {
            regex = /\.less$/i;
            selfLoaderName = 'less-loader';
            selfLoaderOptions = Object.assign(selfLoaderOptions, {
                lessOptions: {
                    // If you use antd as your project's UI library, this line is very important!
                    javascriptEnabled: true,
                },
            });
        }

        // for stylus
        if (styleType === 'stylus') {
            regex = /\.styl(us)?$/i;
            selfLoaderName = 'stylus-loader';
        }

        return {
            regex,
            selfLoaderName,
            selfLoaderOptions,
        };
    }

    return null;
};

/**
 * @description config style loads
 * @param {import('webpack-chain')} confInstance
 * @param {Record<string, unknown>}  otherConf
 * @returns the config instance
 */
const loadStyles = (confInstance, { isDev = true, styleType = 'css', styleResourcePatterns = [] }) => {
    const sourceMap = false;

    const cssPreConfs = genStyleConfigWithPreloader(styleType);
    if (cssPreConfs) {
        const { regex, selfLoaderName, selfLoaderOptions } = cssPreConfs;

        return confInstance.module
            .rule(styleType)
            .test(regex)
            .oneOf('css-module')
            .test(/\.module\.\w+$/i)
            .use('style')
            .loader(isDev ? 'style-loader' : miniLoader)
            .end()
            .use('css')
            .loader('css-loader')
            .options(genCssLoaderOption(styleType))
            .end()
            .use('postcss')
            .loader('postcss-loader')
            .options({ sourceMap })
            .end()
            .use(styleType)
            .loader(selfLoaderName)
            .options(selfLoaderOptions)
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
            .options(genCssLoaderOption(styleType, false))
            .end()
            .use('postcss')
            .loader('postcss-loader')
            .options({ sourceMap })
            .end()
            .use(styleType)
            .loader(selfLoaderName)
            .options(selfLoaderOptions)
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
        .options(genCssLoaderOption(styleType))
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
        .options(genCssLoaderOption(styleType, false))
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
