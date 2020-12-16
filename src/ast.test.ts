//#region Imports

// npm
import { isRegExpWithFlatCaptureGroups } from './ast'
import c from 'chalk'
import { 
    Property,
    KeyOfType,
    AnyObjectWithStringKeys,
    KeyOfSubType,
    AreStrictlyEqual,
    StrictlyIncludes,
    Return
} from 'tsdef'

import is from './guards';

//#endregion Imports

//#region Logging

const { log } = console;

class Fmt
{
    static regex(regex: string | RegExp)
    { 
        return c.ansi256(164)(is.String(regex) ? regex : regex.source);
    }
}

//#endregion Logging

type ArrayOrSpreadOf<T> = [T[]] | [...T[]];

interface TestRegexSetObject<T extends string>
{
    type:    T;
    regexes: RegExp[];
}

type TestRegexSetRecords<T extends string = string> = Record<T, TestRegexSetObject<T>>;
type TestRegexSetTuple<T extends string = string> = [Type: T, Regexes: RegExp[]]
type TestRegexSetTupleOrSpread<T extends string = string> = [Type: T, Regexes: ArrayOrSpreadOf<RegExp>]

class TestRegexSet
{
    constructor(testSetName: string)
    constructor(testSetName: string, ...regexes: RegExp[])
    constructor(public type: string, ...regexes: RegExp[]) 
    { 
        this.regexes = regexes;
    }

    public regexes: RegExp[];

    testAll()
    {
        for(const testRegex of this.regexes)
        {
            log(`Regex: '${Fmt.regex(testRegex.toString())}'`);

            isRegExpWithFlatCaptureGroups(testRegex);
        }
    }

    static fromTuple(type: string, testSets: RegExp[]): TestRegexSet
    static fromTuple(type: TestRegexSetTupleOrSpread[0], testSets: RegExp[]): TestRegexSet
    static fromTuple(type: TestRegexSetTupleOrSpread[0], ...testSets: RegExp[]): TestRegexSet
    static fromTuple(type: TestRegexSetTupleOrSpread[0], ...testSets: ArrayOrSpreadOf<RegExp>): TestRegexSet
    {
        const regexes: RegExp[] = []
        if(is.Array<RegExp>(testSets[0]))
            regexes.push(...(testSets[0] as RegExp[]));
        // Typechecker smh
        else if(is.RegExp(testSets[0]) && is.Array<RegExp>(testSets))
            regexes.push(...(testSets as RegExp[]).filter(is.RegExp));

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

class TestRegexSets extends Array<TestRegexSet>
{
    constructor(...testSets: TestRegexSet[])
    {
        super(...testSets);
    }

    runAllSets()
    {
        for(const testSet of this)
        {
            log(`Running test set ${c.underline.bold.blue`${testSet.type}`}`)

            testSet.testAll();
        }
    }

    static fromObject<O extends { [key: string]: RegExp[] }>(obj: O):  TestRegexSets
    {
        const sets = TestRegexSet.fromObjectValues(obj);
        return new TestRegexSets(...sets);
    }
}

const testRegexes = TestRegexSets.fromObject({
    flat:  
    [
        /(a)(b)(c)/
    ],

    deep: 
    [
        /(a(b)(c))/,
        /(a(b(c)))/
    ]
})

testRegexes.runAllSets()
