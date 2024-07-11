import { Configuration } from 'webpack';

const config: Configuration = {
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/, // rule for .js files
        exclude: /node_modules/,
        loader: 'babel-loader', // apply this loader for js files
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: { configFile: 'tsconfig.dev.server.json' },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
};

export default config;
