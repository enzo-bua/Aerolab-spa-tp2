// base para cualquier proyecto
const path = require('path'); 
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPluguin = require('copy-webpack-plugin');

module.exports = { //objeto para exportar la configuracion 
    entry: './index.js', //pasamos el punto de entrada
    output: { //ruta que construye una carpeta build, y se arroja a un entorno de produccion
        path: path.resolve(__dirname, 'build'),
        filename: 'main.js' //nombre del archivo final que queda
},
resolve: { //que webpack pueda entender cualq archivo que tenga esta extension
    extensions: ['.js'],
},
module: {
    rules: [
        {
            test: /\.js?$/, 
            exclude: /node_modules/, //cuando vaya a produccion le decmos que la carpeta no suba
            use: {
                loader: 'babel-loader',
            }
        }
    ]
},
plugins: [
    new HtmlWebpackPlugin(
        {
            inject: true,
            template: './public/index.html',
            filename: './index.html',
        }
    ),
    new CopyWebpackPluguin({
        patterns: [{ from: './src/styles/styles.css',
        to: '' }],
    })
]   
}
