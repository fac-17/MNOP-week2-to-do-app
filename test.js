var test = require("tape");
var logic = require("./logic");

test("Example test", function(t) {
  t.pass();
  t.end();
});

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
