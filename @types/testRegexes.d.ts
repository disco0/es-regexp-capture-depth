/// <reference lib="esnext" />
export declare const enum TestTag {
    flat = "flat",
    lookaround = "lookaround",
    nested = "nested",
    valid = "valid",
    invalid = "invalid"
}
export interface TestRegexInfo {
    value: RegExp;
    valid: boolean;
    desc?: string;
    tags?: Array<TestTag>;
}
export declare type TestInfoEntry = [Name: string, Value: TestRegexInfo];
export declare namespace tests {
    type RegexTestRecord<S extends string = string> = Record<S, TestRegexInfo>;
    function getValidFlatRegexes(testList?: RegexTestRecord): RegexTestRecord;
    function getInvalidFlatRegexes(testList?: RegexTestRecord): RegexTestRecord;
    const all: Readonly<{
        readonly flatBasic: TestRegexInfo;
        readonly flatWithNestedLookahead: TestRegexInfo;
        readonly nestedShallow: TestRegexInfo;
        readonly nestedDeep: TestRegexInfo;
        readonly nestedInLookahead: TestRegexInfo;
        readonly nestedInCaptureInLookahead: TestRegexInfo;
    }>;
    const valid: Readonly<Record<string, TestRegexInfo>>;
    const invalid: Readonly<Record<string, TestRegexInfo>>;
}
export default tests;
