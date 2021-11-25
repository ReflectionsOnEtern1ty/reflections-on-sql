const { getThemeVariables } = require('antd/dist/theme');

module.exports = [
  {
    test: /\.node$/,
    use: 'node-loader',
  },
  {
    test: /\.(m?js|node)$/,
    parser: { amd: false },
    use: {
      loader: '@marshallofsound/webpack-asset-relocator-loader',
      options: {
        outputAssetBase: 'native_modules',
      },
    },
  },
  {
    test: /\.(js|ts|tsx)$/,
    exclude: /node_modules/,
    loader: 'babel-loader',
    options:{
      plugins: [
        ['import', {libraryName: "antd", style: true}]
      ]
    }
  },
  {
    test: /\.(png|jpe?g|gif)$/i,
    loader: 'file-loader',
    options: {
      name: '[path][name].[ext]',
    },
  },
  {
    test: /\.less$/,
    use: [
      {
        loader: 'style-loader', // creates style nodes from JS strings
      },
      {
        loader: 'css-loader', // translates CSS into CommonJ
      },
      {
        loader: 'less-loader', // compiles Less to CSS
        options: {
          lessOptions: {
            // If you are using less-loader@5 please spread the lessOptions to options directly
            modifyVars: getThemeVariables({
              dark: true, // Enable dark mode
              compact: true, // Enable compact mode
            }),
            javascriptEnabled: true,
          },
        },
      },
    ],
  },
]
