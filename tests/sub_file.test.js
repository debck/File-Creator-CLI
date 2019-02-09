'use strict';
const stdin = require('mock-stdin').stdin();
const app = require('../bin/sub');

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

it('test cli mode file creation, and works with await', async() => {
  stdin.end();
  stdin.reset();

  expect.assertions(1);
  const result = app.main();
  stdin.send('f\n', 'ascii');
  await sleep(50);
  stdin.send('tmp\n', 'ascii');
  await sleep(50);
  stdin.send('x\n', 'ascii');
  const data = await result;
  expect(data).toBe(0);
  stdin.restore();
});
