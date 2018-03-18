const paths = require('./paths');

module.exports = [
  {
    test: /\worker.(js|jsx|mjs)$/,
    include: paths.appSrc,
    use: [
      {
        loader: 'workerize-loader',
      },
      {
        loader: require.resolve('babel-loader'),
        options: { compact: true, },
      },
    ]
  },
]