const test = require('ava');
const m = require('.');
const delay = require('delay');

test('quick', async t => {
    const start = Date.now();
    const result = await m(delay, 200)(100, 'OK');
    t.is(result, 'OK');
    t.true(Date.now() - start > 200);
});

test('slow', async t => {
    const start = Date.now();
    const result = await m(delay, 100)(200, 'OK');
    t.is(result, 'OK');
    t.true(Date.now() - start > 200);
});

test.todo('sync');
test.todo('reject');
test.todo('throw');
