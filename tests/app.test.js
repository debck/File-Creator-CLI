const header = require('../lib/header');
const question = require('../lib/question');
const create = require('../lib/create');
const app = require('../bin/app');

test('1 + 18 is equal to 19', () => {
  expect(1 + 18).toBe(19);
});

/**
it('works with async/await', async () => {
  expect.assertions(1);
  const data = await app.main();
  expect(data).toBeDefined();
});
*/