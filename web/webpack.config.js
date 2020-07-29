const HtmlWebpackPlugin = require("html-webpack-plugin");
var path = require('path');
module.exports = {
    entry : './src/index.js',
    output : {
        path : path.resolve(__dirname , 'dist'),
        filename: 'index_bundle.js'
    },    
    module: {
        rules: [
            {
                test: /\.js$/, exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-react", 
                            "@babel/preset-env"
                        ],
                        plugins: [
                            [
                              "@babel/plugin-proposal-class-properties"
                            ]
                        ]
                    }
                }
            },
            {test : /\.css$/, use:['style-loader', 'css-loader']},
            {
                test : /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/, 
                use:['url-loader?limit=100000']
            }
        ]
      },
      plugins: [
        new HtmlWebpackPlugin(
            {
                template: "./public/index.html"
             })
        ],
        devServer: {
            contentBase: path.join(__dirname, 'dist'),
            compress: true,
            port: 9000
        }      
};