//#region Imports

import {InspectOptions} from 'util';
import c from 'chalk';
import process = require('process')

//#endregion Imports

// Enable / disable extended debugging
const forceDebugMode = false;
export const writeDebug = 
    'DEBUG_CAPTURES' in process.env 
    || forceDebugMode;

export const patternInspectConfiguration: InspectOptions = 
{
    depth: 12,
    colors: true,
    compact: false,
    breakLength: 80
} as const;

const logMethods = ['log', 'debug', 'info', 'error', 'warn', 'dir'] as const;
export const console = ($console =>
{
    const logger: Logger = {} as Logger;
    logMethods.forEach(m => Object.assign(logger, {[m]: $console[m]}));
    return logger;
})(globalThis.console);

console.debug = (...msg) => writeDebug ? console.log(c.gray(...msg)) : void 0;
console.dir   = (obj)    => globalThis.console.dir.call(console, obj, patternInspectConfiguration);

type Logger = { [key in typeof logMethods[number]]: Console[key]; };
