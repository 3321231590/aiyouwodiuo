// eslint-disable-next-line @typescript-eslint/no-var-requires
const { jsWithTs: tsjPreset } = require('ts-jest/presets')
const path = require('path')

module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    ...tsjPreset.transform
  },
  testURL: 'http://localhost/',
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node'
  ],
  globals: {
    window: true,
    ENABLE_INNER_HTML: true,
    ENABLE_ADJACENT_HTML: true,
    ENABLE_SIZE_APIS: true,
    ENABLE_TEMPLATE_CONTENT: true,
    ENABLE_MUTATION_OBSERVER: true,
    ENABLE_CLONE_NODE: true,
    ENABLE_CONTAINS: true,
    'ts-jest': {
      diagnostics: false,
      tsconfig: 'tsconfig.spec.json'
    }
  },
  testPathIgnorePatterns: [
    'node_modules',
    'utils'
  ],
  transformIgnorePatterns: [
    "node_modules/(?!(@tarojs/*)/)"
  ],
  setupFilesAfterEnv: ['./setup.js'],
  testMatch: ['**/__tests__/**/*.(spec|test).[jt]s?(x)']
}