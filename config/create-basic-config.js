const webpack = require('webpack');
const Config = require('webpack-chain');
const compose = require('compose-function');
const { resolve: pathResolve } = require('path');
const { loadStyles } = require('./modules/load-style');
const { loadJs } = require('./modules/load-js');

const { ProgressPlugin, HotModuleReplacementPlugin, DefinePlugin } = webpack;
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

/**
 * @description Modify the relative path to the root path of the project using `path.resolve`
 * @param suffix the relative path relative to the root path of the project
 * @returns the real path
 */
const withBasePath = (suffix = '') => pathResolve(__dirname, `../${suffix}`);

// get mb value
const mb = (i = 1) => 1024 * i;

/**
 * @description Create a basic config using webpack-chain
 * @param {Record<string, unknown>} opts Self-Defined options
 */
const createBasicConfig = (opts = null) => {
    const { isDev = true, isProd = false, lang = 'en', title = 'React Starter' } = opts || {};

    const takeConditionalConfig = compose(
        /** @param {Config} conf */
        conf =>
            loadStyles(conf, {
                isDev,
                styleType: 'scss',
            }),
        /** @param {Config} conf */
        conf =>
            loadStyles(conf, {
                isDev,
                styleType: 'sass',
            }),
        /** @param {Config} conf */
        conf =>
            loadStyles(conf, {
                isDev,
                styleType: 'css',
            }),
        /** @param {Config} conf */
        conf =>
            loadJs(conf, {
                isProd,
            })
    );

    return takeConditionalConfig(
        new Config()
            .context(withBasePath())
            // set entry
            .entry('main')
            .add(withBasePath('src/main.tsx'))
            .end()
            // output
            .output.path(withBasePath('public'))
            .filename(isDev ? '[name].js' : 'js/[name].[contenthash].bundle.js')
            .chunkFilename(isDev ? '[name].js' : 'js/[name].[contenthash].js')
            .end()
            // set alias
            .resolve.alias.set('@', withBasePath('src'))
            .end()
            .extensions.add('.js')
            .add('.jsx')
            .add('.ts')
            .add('.tsx')
            .add('.json')
            .add('.cjs')
            .add('.mjs')
            .end()
            .end()
            .module.rule('pic')
            .test(/\.(png|svg|jpg|gif)$/)
            .use('url-loader')
            .loader('url-loader')
            .options({
                limit: mb(2),
                name: 'img/[name].[hash:7].[ext]',
            })
            .end()
            .exclude.add(/node_modules/)
            .end()
            .end()
            .end()
            .optimization.splitChunks({
                cacheGroups: {
                    commons: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendors',
                        chunks: 'all',
                    },
                },
            })
            .end()
            .plugin('ProgressPlugin')
            .use(ProgressPlugin)
            .end()
            .plugin('CleanPlugin')
            .use(CleanWebpackPlugin)
            .end()
            .plugin('HtmlPlugin')
            .use(HtmlPlugin, [
                {
                    template: withBasePath('html/index.htm'),
                    templateParameters: {
                        lang,
                    },
                    inject: true,
                    favicon: withBasePath('html/favicon.ico'),
                    title,
                },
            ])
            .end()
            .plugin('ForkTsCheckerWebpackPlugin')
            .use(ForkTsCheckerWebpackPlugin)
            .end()
            .when(isDev, conf => {
                conf.mode('development')
                    .devtool('source-map')
                    // set devServer
                    .devServer.compress(true)
                    .port(9222)
                    .hot(true)
                    .open(false)
                    .end()
                    .plugin('HotModuleReplacementPlugin')
                    .use(HotModuleReplacementPlugin)
                    .end()
                    // check eslint
                    .plugin('ESLintPlugin')
                    .use(ESLintPlugin, [
                        {
                            extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.mjs', '.cjs'],
                            fix: true,
                            threads: true,
                            exclude: ['node_modules'],
                        },
                    ])
                    .end();
            })
            .when(isProd, conf => {
                conf.mode('production')
                    .devtool('eval')
                    .plugin('MiniCssExtractPlugin')
                    .use(MiniCssExtractPlugin, [
                        {
                            filename: 'style/[name]-[contenthash].css',
                        },
                    ])
                    .end()
                    .plugin('UglifyJsPlugin')
                    .use(UglifyJsPlugin, [
                        {
                            sourceMap: true,
                        },
                    ])
                    .end()
                    .plugin('DefinePlugin')
                    .use(DefinePlugin, [
                        {
                            'process.env.NODE_ENV': JSON.stringify('production'),
                        },
                    ])
                    .end();
            })
    );
};

module.exports = {
    createBasicConfig,
};
