const basicBabelConfig = {
    presets: [
        [
            '@babel/preset-env',
            {
                useBuiltIns: 'usage',
                corejs: '3.36',
            },
        ],
        '@babel/preset-react',
        '@babel/preset-typescript',
    ],
};

module.exports = basicBabelConfig;
