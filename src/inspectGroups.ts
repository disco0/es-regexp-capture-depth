///<reference types="regexp-match-indices"/>

//#region Imports

// npm
import { config, RegExpExecArray, implementation } from 'regexp-match-indices'
config.mode = 'lazy';
require("regexp-match-indices/shim")();

import c from 'chalk'

//#endregion Imports

const regexGroupRegex = 
    /(?<!(?:\\{2})*\\)(?:(?<begin_capture>[\(])(?<begin_capture_modifier>(?=[<][a-z_A-Z]+[>])|(?!\?(?:<?[=!]|:)))|(?<begin_non_capture>\((?=\?(?:<?[=!]|:))))|(?:(?<end>\)))/gms

export function inspectGroupCaptures(regex: RegExp): boolean | void;
export function inspectGroupCaptures(regex: string): boolean | void;
export function inspectGroupCaptures($regex: RegExp | string): boolean | void
{
    let regex: RegExp;
    if($regex instanceof RegExp)
        regex = $regex;
    else
    {
        try
        {
            regex = new RegExp($regex);
        }
        catch(error)
        {
            console.error(`Argument received was not a RegExp instance, and failed to compile:\n${error}`);
            return false
        }
    }

    const regexSource = regex.source;

    let i = 0;
    for(const match of regexSource.matchAll(regexGroupRegex))
    {  
        console.log(c.red`#${i}:`)
        displayIndicesData(match)

        i++;
    }

    // const indicesGroups = results.indices.groups;
    // // const indicesArr = [...results.indices];
    // // console.dir(indicesArr);
    // console.dir(indicesGroups);

    // if(!results)
    // {
    //     console.info(`No groups captured from input RegExp instance (%o)`, regex);
    //     return
    // }

    // for(const idx in indicesGroups)
    // {
    //     const indicies = indicesArr
    //     const groupIndices = indicies
    //     console.log(`[${c.red(start)}, ${c.red(end)}]`);
    // }
}

function displayIndicesData(info: RegExpMatchArray)
{
    const groups = Object.entries(info.groups ?? {})
                         .filter(([k, v]) => !!v)
                         .map(([k]) => k)
    for(const group of groups)
        console.log(`  - ${c.ansi256(32)(groups)}`);
    
}
