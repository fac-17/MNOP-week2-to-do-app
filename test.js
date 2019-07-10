var test = require("tape");
var logic = require("./logic");

test("Example test", function(t) {
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
  
// test("A blank array should be returned", function(t) {
//   const actual = Array.isArray(logic.addTodo());
//   const expected = true;
//   t.equal(actual, expected, "A blank array should be returned");
//   t.end();
// });

test("An array should be returned different to input array", function(t) {
  const actual = logic.addTodo([2, 3, 4], [5]);
  const expected = [2, 3, 4, 5];
  t.deepEqual(
    actual,
    expected,
    "An array needs to be return with four numbers"
  );
  t.end();
});

test("Add new ID to newtodo object", function(t) {
  const actual = logic.addTodo([], { description: "Buy Shoes" });
  const expected = [{ id: 2, description: "Buy Shoes" }];
  t.deepEqual(actual, expected, "Id needs to be added to object");
  t.end();
});

test("Add new ID to newtodo object", function(t) {
  const actual = logic.addTodo([], { description: "Buy Sunglasses" });
  const expected = [{ id: 3, description: "Buy Sunglasses" }];
  t.deepEqual(actual, expected, "Id needs to be added to sunglasses object");
  t.end();
});

// test("Return the specified todo item using the id", function(t) {
//   const actual = logic.markTodo(
//     [
//       { id: 3, description: "Buy Sunglasses" },
//       { id: 2, description: "Buy Shoes" }
//     ],
//     3
//   );
//   const expected = { id: 3, description: "Buy Sunglasses" };
//   t.deepEqual(actual, expected, "Can we select todos using the id");
//   t.end();
// });

// test("Toggle done value", function(t) {
//   const actual = logic.markTodo(
//     [
//       { id: 3, description: "Buy Sunglasses", done: false },
//       { id: 2, description: "Buy Shoes", done: true }
//     ],
//     3
//   );
//   const expected = { id: 3, description: "Buy Sunglasses", done: true };
//   t.deepEqual(actual, expected, "Done value of sunglasses need to be true");
//   t.end();
// });

test("Return entire todo array with single object.done value toggled", function(t) {
  const actual = logic.markTodo(
    [
      { id: 3, description: "Buy Sunglasses", done: false },
      { id: 2, description: "Buy Shoes", done: true }
    ],
    3
  );
  const expected = [
    { id: 3, description: "Buy Sunglasses", done: true },
    { id: 2, description: "Buy Shoes", done: true }
  ];
  t.deepEqual(actual, expected, "Buy sunglasses should now be set to false");
  t.end();
});

test("Return entire todo array with single object.done value toggled", function(t) {
  const actual = logic.markTodo(
    [
      { id: 3, description: "Buy Sunglasses", done: false },
      { id: 2, description: "Buy Shoes", done: true }
    ],
    2
  );
  const expected = [
    { id: 3, description: "Buy Sunglasses", done: false },
    { id: 2, description: "Buy Shoes", done: false }
  ];
  t.deepEqual(actual, expected, "Buy shoes should be false");
  t.end();
});
