module.exports = {
  assumptions: {
    setClassMethods: true,
    setSpreadProperties: true,
    setComputedProperties: true,
    setPublicClassFields: true,
    privateFieldsAsProperties: true,
  },
  presets: [
    ['@babel/preset-env'],
    [
      '@babel/preset-react',
      { importSource: '@emotion/react', runtime: 'automatic' },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    '@emotion',
    '@babel/plugin-syntax-dynamic-import',
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ['@babel/plugin-proposal-private-methods', { loose: true }],
    ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
    '@babel/plugin-transform-runtime',
  ],
};
