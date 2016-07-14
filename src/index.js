var keys = require("@nathanfaucett/keys"),
    isObject = require("@nathanfaucett/is_object"),
    isArrayLike = require("@nathanfaucett/is_array_like"),
    isNullOrUndefined = require("@nathanfaucett/is_null_or_undefined");


module.exports = deepMixin;


function deepMixin(out) {
    var i = 0,
        il = arguments.length - 1;

    while (i++ < il) {
        baseDeepMixin(out, arguments[i]);
    }

    return out;
}

function baseDeepMixin(a, b) {
    var objectKeys = keys(b),
        i = -1,
        il = objectKeys.length - 1,
        key, value;

    while (i++ < il) {
        key = objectKeys[i];

        if (!isNullOrUndefined((value = b[key]))) {
            mixin(a, key, value);
        }
    }
}

function mixin(object, key, value) {
    var objectValue = object[key];

    if (isNullOrUndefined(objectValue)) {
        object[key] = value;
    } else {
        if (isArrayLike(value) && isArrayLike(objectValue)) {
            mixinArray(objectValue, value);
        } else if (isObject(value) && isObject(objectValue)) {
            baseDeepMixin(objectValue, value);
        }
    }
}

function mixinArray(a, b) {
    var i = -1,
        il = b.length - 1;

    while (i++ < il) {
        a[a.length] = b[i];
    }
}
