import { DepthStateRecord, DepthStateChangeHandles } from '../common';
import DepthStateBase from '../DepthStateBase';
export declare class DepthState extends DepthStateBase {
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
    inc: DepthStateChangeHandles<DepthState>;
    dec: DepthStateChangeHandles<DepthState>;
    validate(partialChange: Partial<DepthStateRecord>): void | never;
    [Symbol.toPrimitive](hint: 'default' | 'number' | 'string'): number | string;
}
