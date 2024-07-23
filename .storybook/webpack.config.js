const webpack = require('webpack');

module.exports = {
    resolve: {
        fallback: {
            http: require.resolve('stream-http'),
            https: require.resolve('https-browserify'),
            os: require.resolve('os-browserify/browser'),
            querystring: require.resolve('querystring-es3'),
            zlib: require.resolve('browserify-zlib'),
            net: false,
            tls: false,
            child_process: false,
        },
    },
};