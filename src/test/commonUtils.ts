//#region Imports

import is from '../guards';

//#endregion Imports

interface RegExpTrimmer
{
    (source: string | RegExp | {source: string}): string;
    truncationLength: number;
}

export const trimRegExpSource = (function(source)
{
    return ((source) => 
    {
        if(is.Undefined(source))
            throw new Error(`Invalid RegExp source string. (${String(source)})`)

        if(source.length <= trimRegExpSource.truncationLength)
            return source
        else
            return source.substr(0, trimRegExpSource.truncationLength) + '...';
            
    })(is.String(source) ? source : source.source)
}) as RegExpTrimmer

trimRegExpSource.truncationLength = 70
