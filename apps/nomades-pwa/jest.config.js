module.exports = {
  name: 'nomades-pwa',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/nomades-pwa',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
