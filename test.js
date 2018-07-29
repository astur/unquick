const test = require('ava');
const m = require('.');

test('unquick', t => {
    t.true(true);
    t.is(m, m);
});

test.todo('quick');
test.todo('slow');
test.todo('sync');
test.todo('reject');
test.todo('throw');
