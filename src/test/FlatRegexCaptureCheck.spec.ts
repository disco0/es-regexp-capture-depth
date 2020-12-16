//#region Imports

// npm
import {
    NonUndefinedProps
} from 'tsdef'
import c from 'chalk'

// npm - Testing
import AVA from 'ava';
import * as $AVA from 'ava';

import Tests, { TestRegexInfo, TestInfoEntry } from '../testRegexes';
import { FlatRegexCaptureCheck } from '../FlatRegexpCaptureCheck'
import { trimRegExpSource } from './commonUtils'

//#endregion Imports

//#region Test Macro

const testMacro: $AVA.Macro<[TestInfoEntry, boolean]> = // MacroWithTitle(macro$function, macro$title);
async ($, [, {value}], expected) =>
{
    const instance = new FlatRegexCaptureCheck(value);

    $.is(await instance.result, expected);
}
testMacro.title = (provided, [testName, {tags, valid, value, desc}], expected) => 
  // (globalThis.console.debug(`${value} flat ? ${expected}`), 
    `Regexp ${c.magenta`/${trimRegExpSource(value)}/`} ${expected ? "has flat capture groups" : "has nested/complex capture groups or lookaround structure"}.`
  // )

//#endregion Test Macro

const $nulltitle = ''

for(const testEntry of Object.entries(Tests.valid))
{
    AVA($nulltitle, testMacro, testEntry, true)
}

for(const testEntry of Object.entries(Tests.invalid))
{
    AVA($nulltitle, testMacro, testEntry, false)
}

//#region AVA Macro Utils

function MacroWithTitle<
    Macro extends $AVA.EitherMacro<any[], Context>, 
    MacroArgs extends Parameters<Macro>,
    Context extends any = unknown
  >(
    handle: Macro, 
    title: TitleMethodSignatureFor<Macro>
  ): 
    NonUndefinedProps<$AVA.Macro<MacroArgs, Context>>
{ 
    return Object.assign(handle, {title})
}

type TitleMethodSignatureFor<T> = 
    T extends $AVA.Macro<infer Args> 
        ? Exclude<$AVA.Macro<Args>['title'], undefined> 
        : never

//#endregion AVA Macro Utils

// describe('Regexes w/ flat capture groups - Using hasNestedCaptureGroup wrapper', async function()
// {
//     for(const [name, test] of entries(valid))
//     {
//         const testName = `${name}`;
//         const tagString = (test.tags ?? []).join(', ');
//         it(`${testName}${tagString ? ` [${tagString}]` : ''} has flat capture groups`, async function() 
//         {
//             const result = await hasNestedCaptureGroup(test.value);
            
//             return expect(result).toBe(true);
//         })
//     }
// })


// class Macro
// {
//     constructor<T extends $AVA.UntitledMacro<any[]>>(
//         public testFunction: T, 
//         public title?:       Macro$TitleFunction<Parameters<T>>
//     ) { };
// }

// const ClassTestMacro = new Macro(
//     async function(_): Promise<boolean>
//     {
//         const instance = new FlatRegexCaptureCheck(test.value);

//         return _.true(await instance.result)
//     })
// )


// Test procedure
// const macro$function: $AVA.Macro<[TestRegexInfo, boolean]> = 
// async ($, input, expected) =>
// {
//     const instance = new FlatRegexCaptureCheck(input.value);

//     $.is(await instance.result, expected);
// }

// // Test title generator
// const macro$title: TitleMethodSignatureFor<typeof macro$function> = 
//     (providedTitle = '', input, expected) => 
//         `${providedTitle} ${input} = ${expected}`.trim();
