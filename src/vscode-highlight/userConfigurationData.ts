//#region Imports

import fs from 'fs';

import { parse as jsoncParse } from 'jsonc-parser'

//#endregion Imports

export interface HighlightExtensionConfiguration
{
    'highlight.regexes': 
    {
        [key: string]: 
        {
            regexFlags?:          string;
            filterLanguageRegex?: string;
            filterFileRegex?:     string;
            decorations?:
            {
                // Extremely simple, but all that's needed for this
                [key: string]: (string | { [key: string]: string })
            }
        }
    }
}

const emptyConfiguration: HighlightExtensionConfiguration = {'highlight.regexes': { } };

function readUserConfigurationJson(filePath: string): HighlightExtensionConfiguration
{
    if(!(fs.statSync(filePath)?.isFile() ?? false))
        throw new Error(`File not found at path: ${filePath}.`);

    try
    {
        return jsoncParse(
            fs.readFileSync(filePath, 'utf-8'),
            [], { 
                allowEmptyContent:  true, 
                allowTrailingComma: true, 
                disallowComments:   false,
            }
        )
    }
    catch(error)
    {
        console.error(`Failed during read/parse of user configuration file ${filePath}\n  Error: ${error}`); 
        return emptyConfiguration
    }
}

export const rawUserSettings = 
    (require('./vscode-highlight-regexes.json') as 
        typeof import('./vscode-highlight-regexes.json'))['highlight.regexes'];
    
export const userRegexSources = Object.keys(rawUserSettings)

interface HighlightConfiguration
{
    regexFlags?: string;
    decorations?: {}[];
}

function compileAllUserRegexes(): RegExp[]
{
    return Object.entries(rawUserSettings)
                 .map(([source, config]: [string, HighlightConfiguration]) => 
                                       new RegExp(`${source}`, config.regexFlags ?? 'gm'))
}

export default compileAllUserRegexes();
