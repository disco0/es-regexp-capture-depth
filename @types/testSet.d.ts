import { MaybeAsyncReturnType } from 'tsdef';
export declare class Fmt {
    static regex(regex: string | RegExp): string;
}
export declare class TestRegexSet {
    type: string;
    constructor(testSetName: string);
    constructor(testSetName: string, ...regexes: RegExp[]);
    regexes: RegExp[];
    procedure?: RegExpTestFunction;
    testAll<T extends RegExpTestFunction>(procedure?: T): Promise<any[]>;
    static fromTuple(type: string, testSets: RegExp[]): TestRegexSet;
    static fromTuple(type: TestRegexSetTupleOrSpread[0], testSets: RegExp[]): TestRegexSet;
    static fromTuple(type: TestRegexSetTupleOrSpread[0], ...testSets: RegExp[]): TestRegexSet;
    static fromObjectValues<O extends {
        [key: string]: RegExp[];
    }>(obj: O): TestRegexSet[];
}
export declare class TestRegexSets extends Array<TestRegexSet> {
    constructor(...testSets: TestRegexSet[]);
    procedure?: RegExpTestFunction;
    runAllSets(procedure?: RegExpTestFunction): Promise<any[]>;
    static fromObject<O extends {
        [key: string]: RegExp[];
    }>(obj: O): TestRegexSets;
}
declare type ArrayOrSpreadOf<T> = [T[]] | [...T[]];
export interface TestRegexSetObject<T extends string> {
    type: T;
    regexes: RegExp[];
}
export declare type TestRegexSetTupleOrSpread<T extends string = string> = [Type: T, Regexes: ArrayOrSpreadOf<RegExp>];
declare type RegExpTestFunction<R extends any = any> = MaybeAsyncReturnType<(regex: RegExp) => R>;
export {};
