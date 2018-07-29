const test = require('ava');
const m = require('.');

test('unquick', t => {
    t.true(true);
    t.is(m, m);
});
