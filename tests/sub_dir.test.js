const header = require('../lib/header');
const create = require('../lib/create');
const question = require('../lib/question');
const ifdir = require('../lib/ifdir');
const sub = require('../bin/sub');
const stdin = require('mock-stdin').stdin();

async function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

test('1 + 18 is equal to 19', () => {
  expect(1 + 18).toBe(19);
});

it('tests create module', () => {
	const ret_f = create.create('tmp', 'x');
	const ret_d = create.createdir('tmp');
	expect(ret_f).toBe(0);
	expect(ret_f).toBe(0);
});

const one = it('tests cli mode directory creation, and works with await', async () => {
	stdin.end();
	stdin.reset();

	expect.assertions(1);
	const result = sub.main();
	stdin.send('d\n', 'ascii');
	await sleep(50);
	stdin.send('tmp\n', 'ascii');
	const data = await result;
	expect(data).toBe(0);
	stdin.restore();
});
