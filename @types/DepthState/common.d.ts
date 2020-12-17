import type { DepthStateBase } from './DepthStateBase';
export declare type DepthStateRecord = Record<'groupDepth' | 'lookaroundDepth', number>;
export declare type BoundaryChangeValidation = (stateChange: DepthStateRecord) => void | never;
declare type DepthStateBoundName = 'group' | 'lookahead';
export interface DepthStateChangeHandles<T extends DepthStateBase = DepthStateBase> extends Record<DepthStateBoundName, () => T> {
}
export {};
