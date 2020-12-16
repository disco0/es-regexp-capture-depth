///<reference path="./globals.d.ts"/>

//#region Imports

// npm
require('regexp-match-indices/auto');
require('regexp-match-indices').config.mode = 'spec-compliant';

import c from 'chalk'

declare type ExtRegExpExecArray = import('regexp-match-indices/types').RegExpExecArray
declare type ExtRegExpMatchArray = import('regexp-match-indices/types').RegExpMatchArray;

//#endregion Imports

function displayError(text: string, message: string) 
{
    const re = /\b(continue|function|break|for|if)\b/;
    const match = text.match(re)! as ExtRegExpExecArray;
    // Index `1` corresponds to the first capture group.
    const [start, end] = match.indices[1];
    const error = ' '.repeat(start) + // Adjust the caret position.
        '^' +
        '-'.repeat(end - start - 1) +   // Append the underline.
        ' ' + message;                  // Append the message.
    console.log(text);
    console.log(error);
}

const code = 'const function = foo;'; // faulty code
displayError(code, 'Invalid variable name');
