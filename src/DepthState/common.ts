// Update if `groupDepth` and/or `lookaheadDepth` members change on DepthState
export type DepthStateRecord = Record<'groupDepth' | 'lookaroundDepth', number>;

export type BoundaryChange = (stateChange: DepthStateRecord) => void | never
