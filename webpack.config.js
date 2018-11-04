const path = require('path');

module.exports = {
    entry: './src/index.js',
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            }
       ]
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    watch: false,
    devServer: {
        open: true, // Open the page in browser
        overlay: true, // Capture compilation related warnings and errors
        contentBase: "dist"
      },
};