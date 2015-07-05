var assert = require("assert"),
    deepMixin = require("../src/index");


describe("deepMixin(out, ...objects)", function() {
    it("should deep mixin out with objects members", function() {

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
    });
});
