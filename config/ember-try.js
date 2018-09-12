'use strict';

const getChannelURL = require('ember-source-channel-url');

module.exports = function() {
  return getChannelURL('beta').then(function(url) {
    return {
      useYarn: true,

      scenarios: [
        {
          name: 'beta',

          npm: {
            devDependencies: {
              'ember-source': url
            }
          }
        }
      ]
    }
  });
}
