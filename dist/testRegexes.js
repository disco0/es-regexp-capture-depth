"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tests = void 0;
function $test(obj) { return obj; }
const $tests = {
    flatBasic: {
        value: /(a)(b)(c)/,
        valid: true
    },
    flatWithNestedLookahead: {
        value: /(a)(b(?=valid lookahead))/,
        valid: true
    },
    nestedShallow: {
        value: /(a(b)(c))/,
        valid: false,
    },
    nestedDeep: {
        value: /(a(b(c)))/,
        valid: false
    },
    nestedInLookahead: {
        value: /(?=(nested))/,
        valid: false
    },
    nestedInCaptureInLookahead: {
        value: /(first(?=(nested)))/,
        valid: false
    },
};
var tests;
(function (tests) {
    function getValidFlatRegexes(testList = tests.all) {
        return Object.fromEntries(Object.entries(testList)
            .filter(([, { valid }]) => valid));
    }
    tests.getValidFlatRegexes = getValidFlatRegexes;
    function getInvalidFlatRegexes(testList = tests.all) {
        return Object.fromEntries(Object.entries(testList)
            .filter(([, { valid }]) => !valid));
    }
    tests.getInvalidFlatRegexes = getInvalidFlatRegexes;
    tests.all = Object.freeze($tests);
    tests.valid = Object.freeze(getValidFlatRegexes(tests.all));
    tests.invalid = Object.freeze(getInvalidFlatRegexes(tests.all));
})(tests = exports.tests || (exports.tests = {}));
exports.default = tests;
//# sourceMappingURL=testRegexes.js.map