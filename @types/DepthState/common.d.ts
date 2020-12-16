export declare type DepthStateRecord = Record<'groupDepth' | 'lookaroundDepth', number>;
export declare type BoundaryChange = (stateChange: DepthStateRecord) => void | never;
