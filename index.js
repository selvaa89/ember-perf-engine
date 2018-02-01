const EngineAddon = require('ember-engines/lib/engine-addon');
module.exports = EngineAddon.extend({
  name: 'ember-perf-engine',
  lazyLoading: {
    enabled: false
  }
});
