"use strict";
function assertToString(obj) {
    if (!(!!obj && typeof obj === 'function'))
        throw new Error(`Failed to resolve primordial toString function. Value passed to assert: ${String(obj)}`);
}
function getPrimativeToString() {
    return ((protoProps) => {
        for (const propName of protoProps)
            if (typeof {}[propName]?.toString === 'function')
                return {}[propName].toString;
    })([`__proto__`, `prototype`]);
}
const toString = getPrimativeToString();
assertToString(toString);
function stringOf(obj) {
    return toString.call(obj);
}
function isObject(obj) {
    return stringOf(obj) === "[object Object]";
}
function isFunctionStrict(obj) {
    return stringOf(obj) === "[object Function]";
}
function isFunction(obj) {
    return (typeof obj === 'function' && !(isAsyncFunction(obj)))
        || (!isUndefined(obj)
            && (($obj) => ('call' in $obj && typeof $obj.call === 'function'))(obj));
}
function isGeneratorFunction(obj) {
    return stringOf(obj) === "'[object GeneratorFunction]";
}
function isAsyncFunction(obj) {
    return (obj?.constructor?.name ?? -1) === 'AsyncFunction';
}
function isAnyFunction(obj) {
    return isFunctionStrict(obj)
        || isAsyncFunction(obj)
        || isGeneratorFunction(obj);
}
function isUndefined(obj) {
    return typeof obj === 'undefined';
}
function isNull(obj) {
    return stringOf(obj) === "[object Null]";
}
function isString(obj) {
    return stringOf(obj) === "[object String]";
}
function isNumber(obj) {
    return stringOf(obj) === "[object Number]";
}
function isBoolean(obj) {
    return toString.call(obj) === "[object Boolean]";
}
function isDate(obj) {
    return stringOf(obj) === "[object Date]";
}
function isRegExp(obj) {
    return stringOf(obj) === "[object RegExp]";
}
function isArray(obj) {
    return Array.isArray(obj);
}
const Function = Object.assign(function (_) { return isFunctionStrict(_); }, {
    Any: isAnyFunction,
    Async: isAsyncFunction,
    Generator: isGeneratorFunction
});
const Maybe = (fn) => (value) => (fn(value) || is.Undefined(value));
const OneOf = (...fns) => (filteredFns => (value) => filteredFns.length > 0
    ? filteredFns.some(_ => _(value))
    : false)(fns.filter(isFunction));
const is = {
    Function,
    AsyncFunction: isAsyncFunction,
    GeneratorFunction: isGeneratorFunction,
    Undefined: isUndefined,
    Null: isNull,
    Boolean: isBoolean,
    Object: isObject,
    String: isString,
    Number: isNumber,
    Date: isDate,
    RegExp: isRegExp,
    Array: isArray,
    Maybe,
    OneOf
};
module.exports = is;
//# sourceMappingURL=guards.js.map