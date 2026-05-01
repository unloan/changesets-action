// Mock uuid for Jest testing - provides the same interface as the real uuid package
// This allows tests to run without ES module issues while production uses the real secure version

const { v4 } = jest.requireActual('uuid');

module.exports = {
  v1: jest.fn(() => '00000000-0000-1000-8000-000000000000'),
  v3: jest.fn(() => '00000000-0000-3000-8000-000000000000'),
  v4: jest.fn(() => '00000000-0000-4000-8000-000000000000'),
  v5: jest.fn(() => '00000000-0000-5000-8000-000000000000'),
  v6: jest.fn(() => '00000000-0000-6000-8000-000000000000'),
  v7: jest.fn(() => '00000000-0000-7000-8000-000000000000'),
  NIL: '00000000-0000-0000-0000-000000000000',
  parse: jest.fn(),
  stringify: jest.fn(),
  validate: jest.fn(() => true),
  version: jest.fn(() => 4)
};
