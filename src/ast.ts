//#region Imports

// Node
import type { InspectOptions } from 'util'
import c from 'chalk'

// npm 
import RegExpAST from 'regexp-to-ast';

//#endregion Imports

const patternInspectConfiguration: InspectOptions =
{
    depth: 4,
    colors: true, 
    compact: false, 
    breakLength: 80
}

export function isRegExpWithFlatCaptureGroups(regex: RegExp): boolean
{
    try
    {
        let parser = new RegExpAST.RegExpParser();
        const ast = parser.pattern(regex.toString())
        
        console.dir(ast, patternInspectConfiguration);
    }
    // From a quick review of regexp-to-ast if shit breaks its probably not flat
    catch(error)
    {
        console.error(c.red`Error parsing regex source: ${regex.source}`)
        return false
    }

    return false
}
