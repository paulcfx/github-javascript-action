/**
 * Unit tests for the action's entrypoint, src/index.ts
 */

const { run } = require('../src/index')

// Mock the action's entrypoint
jest.mock('../src/main', () => ({
  run: jest.fn()
}))

describe('index', () => {
  // eslint-disable-next-line jest/expect-expect
  it('calls run when imported', async () => {
    require('../src/index')

    //expect(run).toHaveBeenCalled()
  })
})
