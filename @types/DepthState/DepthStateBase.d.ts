import type { RangeBounds } from '../RangeInfo';
import { DepthStateChangeHandles, DepthStateRecord } from './common';
export declare abstract class DepthStateBase {
    abstract lookaheadRange: RangeBounds;
    abstract groupRange: RangeBounds;
    abstract groupDepth: number;
    abstract lookaroundDepth: number;
    abstract inc: DepthStateChangeHandles;
    abstract dec: DepthStateChangeHandles;
    abstract validate(partialChange: Partial<DepthStateRecord>): void | never;
}
export default DepthStateBase;
