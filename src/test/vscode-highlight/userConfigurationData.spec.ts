//#region Imports

// npm
import c from 'chalk'
// npm - Test
import AVA from 'ava'
import type * as $AVA from 'ava'

import UserRegexes from '../../vscode-highlight/userConfigurationData';
import { FlatRegexCaptureCheck } from '../../FlatRegexCaptureCheck'
import { trimRegExpSource } from '../../test/commonUtils'

//#endregion Imports

//#region Test Macro

const testMacro: $AVA.Macro<[RegExp, boolean]> = // MacroWithTitle(macro$function, macro$title);
async ($, regex, expected) =>
{
    const instance = new FlatRegexCaptureCheck(regex);

    $.is(await instance.result, expected);
}

testMacro.title = (provided, regex, expected) => `Regexp ${c.magenta`/${trimRegExpSource(regex)}/`} has flat capture groups.`

//#endregion Test Macro


const $nulltitle = ''

for(const testEntry of UserRegexes)
{
    AVA($nulltitle, testMacro, testEntry, true);
}
