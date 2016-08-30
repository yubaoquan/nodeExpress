module.exports = {
    entry: {
        nav: './public/javascripts/nav',
        main: './public/javascripts/main',
        widgetList: './public/javascripts/widgetList'
    },
    output: {
        path: './public/dist',
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        }, {
            test: /\.vue$/, // a regex for matching all files that end in `.vue`
            loader: 'vue'   // loader to use for matched files
      }]
    },
    devServer:{
        contentBase: './',
        port: 3001
    }
};
