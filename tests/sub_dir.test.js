'use strict';
const stdin = require('mock-stdin').stdin();
const create = require('../lib/create');
const app = require('../bin/sub');

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

test('1 + 18 is equal to 19', () => {
  expect(1 + 18).toBe(19);
});

it('tests create module', () => {
  const retF = create.create('tmp', 'x');
  expect(retF).toBe(0);
  expect(retF).toBe(0);
});

it('tests cli mode directory creation, and works with await', async() => {
  stdin.end();
  stdin.reset();

  expect.assertions(1);
  const result = app.main();
  stdin.send('d\n', 'ascii');
  await sleep(50);
  stdin.send('tmp\n', 'ascii');
  const data = await result;
  expect(data).toBe(0);
  stdin.restore();
});
