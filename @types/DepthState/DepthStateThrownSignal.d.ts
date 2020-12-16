import { DepthStateRecord } from './common';
export declare class DepthState {
    #private;
    lookaheadRange: Readonly<[number, number] & {
        min: number;
        max: number;
    }>;
    groupRange: Readonly<[number, number] & {
        min: number;
        max: number;
    }>;
    groupDepth: number;
    lookaroundDepth: number;
    get depths(): {
        group: number;
        lookAround: number;
    };
    depthsPlusDelta(change: Partial<DepthStateRecord>): {
        group: number;
        lookAround: number;
    };
    constructor();
    constructor(groupLimit?: number, lookaheadLimit?: number);
    valueOf(): number;
    inc: {
        readonly group: () => DepthState;
        readonly lookahead: () => DepthState;
    };
    dec: {
        readonly group: () => DepthState;
        readonly lookahead: () => DepthState;
    };
    validate(partialChange: Partial<DepthStateRecord>): void | never;
    [Symbol.toPrimitive](hint: 'default' | 'number' | 'string'): number | string;
}
