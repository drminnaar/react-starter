const { createBasicConfig } = require('./config/create-basic-config');

module.exports = environments => {
    const { dev, prod } = environments || {};
    const { NODE_ENV = 'development' } = process.env;

    return createBasicConfig({
        isDev: !!dev && NODE_ENV === 'development',
        isProd: !!prod && NODE_ENV === 'production',
    }).toConfig();
};
