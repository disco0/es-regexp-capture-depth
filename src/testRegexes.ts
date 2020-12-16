///<reference lib="esnext"/>

export const enum TestTag 
{
    flat       = 'flat',
    lookaround = 'lookaround',
    nested     = 'nested',
    valid      = 'valid',
    invalid    = 'invalid'
}

export interface TestRegexInfo 
{
    value: RegExp;
    valid: boolean;
    desc?: string;
    tags?: Array<TestTag>
}

export type TestInfoEntry = [ Name: string, Value: TestRegexInfo ];

function $test<T extends TestRegexInfo>(obj: T): TestRegexInfo 
{ return obj }

const $tests = {
    flatBasic: 
    {
        value: /(a)(b)(c)/,
        valid: true
    } as TestRegexInfo,
    flatWithNestedLookahead: 
    {
        value: /(a)(b(?=valid lookahead))/,
        valid: true
    } as TestRegexInfo,
    nestedShallow: 
    {
        value: /(a(b)(c))/,
        valid: false,
    } as TestRegexInfo,
    nestedDeep:
    {
        value: /(a(b(c)))/,
        valid: false
    } as TestRegexInfo,
    nestedInLookahead: 
    {
        value: /(?=(nested))/,
        valid: false
    } as TestRegexInfo,
    nestedInCaptureInLookahead: 
    {
        value: /(first(?=(nested)))/,
        valid: false
    } as TestRegexInfo,
} as const;

export namespace tests
{   
    export type RegexTestRecord<S extends string = string> = Record<S, TestRegexInfo>;

    export function getValidFlatRegexes(testList: RegexTestRecord = all): RegexTestRecord
    {
        return Object.fromEntries(
                Object.entries(testList)
                    .filter(([, {valid}]) => valid) );
    }

    export function getInvalidFlatRegexes(testList: RegexTestRecord = all): RegexTestRecord
    {
        return Object.fromEntries(
                Object.entries(testList)
                    .filter(([, {valid}]) => !valid) );
    }

    export const all     = Object.freeze($tests);
    export const valid   = Object.freeze(getValidFlatRegexes(all));
    export const invalid = Object.freeze(getInvalidFlatRegexes(all));
}

// export const valid = 
//     Object.fromEntries(
//         Object.entries(tests)
//             .filter(([, {valid}]) => valid) )

// export const invalid = 
//     Object.fromEntries(
//         Object.entries(tests)
//             .filter(([, {valid}]) => !valid) )

export default tests
