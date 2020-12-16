//#region Imports

// Node
import c from 'chalk'

import { FlatRegexCaptureCheck } from './FlatRegexpCaptureCheck'

//#endregion Imports


export async function hasNestedCaptureGroup(regex: RegExp): Promise<boolean>
{
    try
    {
        return await new FlatRegexCaptureCheck(regex).checkFlat();

    }
    // From a quick review of regexp-to-ast if shit breaks its probably not flat
    catch(error)
    {
        console.error(c.red`Error during regexp analysis: ${regex.source}`)
        return false
    }
    finally
    {
        return false
    }
}

