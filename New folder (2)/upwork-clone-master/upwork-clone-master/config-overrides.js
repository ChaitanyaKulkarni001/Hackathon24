module.exports = function override(config, env) {
    const svgRule = config.module.rules.find(rule => rule.oneOf).oneOf.find(
      rule => rule.test && rule.test.toString().includes('svg')
    );
  
    if (svgRule) {
      svgRule.use = [
        {
          loader: '@svgr/webpack',
          options: {
            throwIfNamespace: false, // Add this option here
          },
        },
      ];
    }
  
    return config;
  };
  