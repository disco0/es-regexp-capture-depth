/// <reference types="node" />
import { InspectOptions } from 'util';
export declare const writeDebug: boolean;
export declare const patternInspectConfiguration: InspectOptions;
declare const logMethods: readonly ["log", "debug", "info", "error", "warn", "dir"];
export declare const console: Logger;
declare type Logger = {
    [key in typeof logMethods[number]]: Console[key];
};
export {};
