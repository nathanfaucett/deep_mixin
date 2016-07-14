var tape = require("tape"),
    deepMixin = require("../src/index");


tape("should deep mixin out with objects members", function(assert) {

    assert.deepEqual(deepMixin({
        name: "Bob",
        age: null,
        array: [],
        object: {
            foo: "bar"
        }
    }, {
        name: null,
        object: {
            bar: "foo"
        }
    }, {
        name: "Frank",
        age: 42,
        array: [1, 2]
    }), {
        name: "Bob",
        age: 42,
        array: [1, 2],
        object: {
            foo: "bar",
            bar: "foo"
        }
    });
    assert.end();
});
