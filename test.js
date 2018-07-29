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

test('reject quick', async t => {
    const start = Date.now();
    const result = await m(delay.reject, 200)(100, 'OK').catch(e => `[${e}]`);
    t.is(result, '[OK]');
    t.true(Date.now() - start > 200);
});

test('reject slow', async t => {
    const start = Date.now();
    const result = await m(delay.reject, 100)(200, 'OK').catch(e => `[${e}]`);
    t.is(result, '[OK]');
    t.true(Date.now() - start > 200);
});

test('sync', async t => {
    const start = Date.now();
    const result = await m(v => v, 100)('OK');
    t.is(result, 'OK');
    t.true(Date.now() - start > 100);
});

test('throw', async t => {
    const start = Date.now();
    const result = await m(v => {
        throw v;
    }, 100)('OK').catch(e => `[${e}]`);
    t.is(result, '[OK]');
    t.true(Date.now() - start > 100);
});
