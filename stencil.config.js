exports.config = {
  bundles: [
    { components: ['my-app', 'home-page', 'demo-page'] }
  ],
  collections: [
    { name: '@stencil/router' }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
