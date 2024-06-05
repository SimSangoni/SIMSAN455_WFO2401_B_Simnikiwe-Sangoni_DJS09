const path = require('path');

module.exports = {
  mode: 'development', // or 'production' depending on your environment
  entry: {
    index: './src/index.ts', // Assuming your TypeScript files are in a 'src' directory
  },
  output: {
    filename: '[name].pack.js',
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        },
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'), // Serve content from the 'public' directory
    compress: true,
    port: 8080,
  },
};
