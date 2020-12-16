//#region Imports

// npm 
import c from 'chalk'
import { MaybePromise, MaybeAsyncReturnType } from 'tsdef'

import is from './guards'

//#endregion Imports

const { log } = console;

export class Fmt
{
    static regex(regex: string | RegExp)
    { 
        return c.ansi256(164)(is.String(regex) ? regex : regex.source);
    }
}

export class TestRegexSet
{
    constructor(testSetName: string)
    constructor(testSetName: string, ...regexes: RegExp[])
    constructor(public type: string, ...regexes: RegExp[]) 
    { 
        this.regexes = regexes;
    }

    public regexes: RegExp[];
    public procedure?: RegExpTestFunction;

    async testAll<T extends RegExpTestFunction>(procedure?: T)
    {
        const resolvedProcedure = procedure ?? this.procedure!
        if(!(is.OneOf(is.Function, is.AsyncFunction)(resolvedProcedure)))
            throw new Error('Missing procedure function for regex test.')

        const results: any[] = []
        for(const testRegex of this.regexes)
        {
            log(`Regex: '${Fmt.regex(testRegex.toString())}'`);

            const testResult = await resolvedProcedure(testRegex);
            results.push(testResult);
        }

        return results
    }

    static fromTuple(type: string, testSets: RegExp[]): TestRegexSet
    static fromTuple(type: TestRegexSetTupleOrSpread[0], testSets: RegExp[]): TestRegexSet
    static fromTuple(type: TestRegexSetTupleOrSpread[0], ...testSets: RegExp[]): TestRegexSet
    static fromTuple(type: TestRegexSetTupleOrSpread[0], ...testSets: ArrayOrSpreadOf<RegExp>): TestRegexSet
    {
        const regexes: RegExp[] = []
        if(is.Array<RegExp>(testSets[0]))
            regexes.push(...testSets[0]);
        // Typechecker smh
        else if(is.RegExp(testSets[0]) && is.Array<RegExp>(testSets))
            regexes.push(...testSets.filter(is.RegExp));

        return new TestRegexSet(type, ...regexes)
    }

    static fromObjectValues<O extends { [key: string]: RegExp[] }>(obj: O): TestRegexSet[]
    {
        const entries: TestRegexSet[] = []
        for(const [name, value] of Object.entries(obj))
        {
            entries.push(new TestRegexSet(name, ...value));
        }
        return entries;
    }
}

export class TestRegexSets extends Array<TestRegexSet>
{
    constructor(...testSets: TestRegexSet[])
    {
        super(...testSets);
    }

    procedure?: RegExpTestFunction

    async runAllSets(procedure?: RegExpTestFunction)
    {
        procedure ??= this.procedure!;
        if(!(is.Function.Any(procedure)))
            throw new Error('No procedure defined or given in argument.')

        const results: any[] = []
        for(const testSet of this)
        {
            Object.assign(testSet, {procedure});

            log(`Running test set ${c.underline.bold.blue`${testSet.type}`}`)

            const setResult = await testSet.testAll();
            results.push(setResult);

            console.log(c.blue`Set results:`)
            console.dir(setResult, {depth: 3, colors: true, compact: true, breakLength: true})
        }

        return results;
    }

    static fromObject<O extends { [key: string]: RegExp[] }>(obj: O):  TestRegexSets
    {
        const sets = TestRegexSet.fromObjectValues(obj);
        return new TestRegexSets(...sets);
    }
}


//#region Types

type ArrayOrSpreadOf<T> = [T[]] | [...T[]];

export interface TestRegexSetObject<T extends string>
{
    type:    T;
    regexes: RegExp[];
}

type TestRegexSetRecords<T extends string = string> = Record<T, TestRegexSetObject<T>>;
type TestRegexSetTuple<T extends string = string> = [Type: T, Regexes: RegExp[]]
export type TestRegexSetTupleOrSpread<T extends string = string> = [Type: T, Regexes: ArrayOrSpreadOf<RegExp>]

type RegExpTestFunction<R extends any = any> = MaybeAsyncReturnType<(regex: RegExp) => R>

//#endregion Types
