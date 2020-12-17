import type { DepthStateBase } from './DepthStateBase'

// Update if `groupDepth` and/or `lookaheadDepth` members change on DepthState
export type DepthStateRecord = Record<'groupDepth' | 'lookaroundDepth', number>;

export type BoundaryChangeValidation = (stateChange: DepthStateRecord) => void | never

type DepthStateBoundName = 'group' | 'lookahead';

export interface DepthStateChangeHandles<T extends DepthStateBase = DepthStateBase> 
                 extends  Record<DepthStateBoundName, () => T> 
{ }
