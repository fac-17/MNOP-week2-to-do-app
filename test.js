var test = require('tape');
var logic = require('./logic');

test('Example test', function(t) {
  t.pass();
  t.end();
});

test('is newArray an array', function(test) {
  const actual = logic.deleteTodo(['stuff', 'more-stuff'], 1);
  const expected = ['stuff', 'more-stuff'];

  test.deepEqual(actual, expected, 'newArray is an array');
  test.end();
});

test('is idToDelete in newArray', function(test) {
  const actual = logic.deleteTodo([{id: 2 }, {id: 3}], 3);
  const expected = [{id: 2}];

  test.deepEqual(actual, expected, 'idToDelete is not in newArray');
  test.end();
});
