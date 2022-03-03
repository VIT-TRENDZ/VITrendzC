const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
module.exports = {
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
      ],
    }
};