module.exports = {
  // Transform ES modules in node_modules that need it
  transformIgnorePatterns: [
    'node_modules/(?!uuid)'
  ],

  // File extensions to consider
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],

  // Transform files with these extensions
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
    '^.+\\.(js|jsx)$': 'babel-jest'
  },

  // Test match patterns
  testMatch: [
    '**/__tests__/**/*.(ts|tsx|js)',
    '**/*.(test|spec).(ts|tsx|js)'
  ],

  // Mock ES module packages that cause issues in Jest
  moduleNameMapper: {
    '^uuid$': '<rootDir>/__mocks__/uuid.js'
  }
};
