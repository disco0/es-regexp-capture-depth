//#region Imports

import type { RangeInfo, RangeBounds } from '../RangeInfo'
import { 
    BoundaryChangeValidation,
    DepthStateChangeHandles,
    DepthStateRecord,
    
} from './common'

//#endregion Imports

export abstract class DepthStateBase
{
    abstract lookaheadRange:  RangeBounds;
    abstract groupRange:      RangeBounds;

    abstract groupDepth:      number;
    abstract lookaroundDepth: number;
    
    abstract inc:             DepthStateChangeHandles;
    abstract dec:             DepthStateChangeHandles;

    abstract validate(partialChange: Partial<DepthStateRecord>): void | never;
}

export default DepthStateBase
