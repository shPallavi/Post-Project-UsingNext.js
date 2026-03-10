module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
  },
  transform: {
    "^.+/.jsx?$": "babel-jest",
    "^.+/.tsx?$": "babel-jest",
  },
  transformIgnorePatterns: [
    "node_modules/(?!(?!(?:.*/)*?@?next/)react|react-dom)",
  ],
  collectCoverageFrom: [
    "components/**/*.{js,jsx}",
    "lib/**/*.{js,jsx}",
    "app/**/*.{js,jsx}",
    "actions/**/*.{js,jsx}",
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
  watchPlugins: [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname",
  ],
};
