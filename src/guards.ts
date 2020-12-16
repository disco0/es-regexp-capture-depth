//#region Imports

// npm
import {
    AnyFunction,
    MaybeUndefined as Maybe
} from 'tsdef'

//#endregion Imports

//#region Guards

//#region Guard toString Function

function assertToString<T extends () => string>(obj: unknown): asserts obj is T
{
    if(!(!!obj && typeof obj === 'function'))
        throw new Error(`Failed to resolve primordial toString function. Value passed to assert: ${String(obj)}`);
}

function getPrimativeToString(): Maybe<() => string>
{
    return ((protoProps) => {
        for(const propName of protoProps)
            if(typeof ({} as Record<string, string>)[propName]?.toString === 'function')
                return ({} as Record<string, string>)[propName].toString;
    })([`__proto__`, `prototype`] as const);
}

const toString = getPrimativeToString()!;

assertToString(toString);

function stringOf(obj: any): string
{
    return toString.call(obj);
}

//#endregion Guard toString Function

function isObject(obj: unknown): obj is Object
{
    return stringOf(obj) === "[object Object]"
}

/**
 * Strict checking of function—validation is done through toString call and thus
 * async and generator functions will fail to validate through this function.
 *
 * @see isAsyncFunction
 * @see isGeneratorFunction
 */
function isFunctionStrict<T extends AnyFunction>(obj: unknown): obj is T
{
    return stringOf(obj) === "[object Function]"
}

function isFunction<T extends AnyFunction>(obj: unknown): obj is T
{
    return (typeof obj === 'function' && !(isAsyncFunction(obj)))
            || (
                !isUndefined(obj)
                &&  (($obj) => ('call' in $obj && typeof $obj.call === 'function'))((obj as any))
            )
}

function isGeneratorFunction<T extends AnyFunction>(obj: unknown): obj is T
{
    return stringOf(obj) === "'[object GeneratorFunction]"
}

function isAsyncFunction<T extends (...args: any[]) => Promise<any>>(obj: unknown): obj is T
{
    return ((obj as any)?.constructor?.name ?? -1) === 'AsyncFunction';
}

function isAnyFunction<T extends AnyFunction>(obj: unknown): obj is T
{
    return isFunctionStrict(obj)
            || isAsyncFunction(obj)
            || isGeneratorFunction(obj)
}

function isUndefined(obj: unknown): obj is undefined
{
    return typeof obj === 'undefined'
}

function isNull(obj: unknown): obj is null
{
    return stringOf(obj) === "[object Null]"
}

function isString(obj: unknown): obj is string
{
    return stringOf(obj) === "[object String]"
}

function isNumber(obj: unknown): obj is number
{
    return stringOf(obj) === "[object Number]"
}

function isBoolean(obj: unknown): obj is boolean
{
    return toString.call(obj) === "[object Boolean]"
}

function isDate(obj: unknown): obj is Date
{
    return stringOf(obj) === "[object Date]"
}

function isRegExp(obj: unknown): obj is RegExp
{
    return stringOf(obj) === "[object RegExp]"
}

/**
 * Wrapper for `Array.isArray` with optional element type assertion
 */
function isArray<T extends any = unknown>(obj: readonly T[] | unknown): obj is T[]
{
    return Array.isArray(obj)
}

const Function = Object.assign(
    function(_){ return isFunctionStrict(_) } as typeof isFunctionStrict,
    {
        Any:       isAnyFunction,
        Async:     isAsyncFunction,
        Generator: isGeneratorFunction
    })

//#region Modifiers

type IsMethod = (value: unknown) => boolean

const Maybe = <IS_FN extends IsMethod>(fn: IS_FN) =>
    (value: unknown): boolean  => (fn(value) || is.Undefined(value))

type AtLeastOne<T> = [T, ...T[]];

const OneOf = 
    <IS_FNS extends IsMethod[] = AtLeastOne<IsMethod>>(...fns: IS_FNS) =>
        (filteredFns => (value: unknown): boolean => 
            filteredFns.length > 0
                ? filteredFns.some(_ => _(value))
                : false
        )(fns.filter(isFunction));

//#endregion Modifiers

const is =
{
    Function,
    AsyncFunction:     isAsyncFunction,
    GeneratorFunction: isGeneratorFunction,

    Undefined:         isUndefined,
    Null:              isNull,

    Boolean:           isBoolean,
    Object:            isObject,
    String:            isString,
    Number:            isNumber,
    Date:              isDate,
    RegExp:            isRegExp,
    Array:             isArray,

    Maybe,
    OneOf
}

// Replace default export with commonjs for this project
export = is;

//#endregion Guards
