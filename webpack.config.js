const path = require('path');

module.exports = {
    mode:   'development',

    entry: `${path.join(__dirname, 'src')}/index.jsx`,

    output: {
        filename:   'bundle.js',
        path:       path.join(__dirname, 'public')
    },

    resolve: {
        extensions: ['.js', '.jsx']
    },

    module: {
        rules: [
            {
                loader:     'babel-loader',
                test:       /\.js(x)?/,
                include:    path.join(__dirname, 'src')
            }
        ]
    }
};
