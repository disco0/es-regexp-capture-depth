//#region Imports

// npm
import c from 'chalk';

import is from '../guards';
import { RangeInfo, RangeBounds, RangeTuple } from '../RangeInfo'
import { console, writeDebug } from '../debug';

import { 
    DepthStateBoundsError,
} from './signalErrors';
import { 
    BoundaryChange,
    DepthStateRecord
} from './common'

//#endregion Imports

/**
 * Number object with bounds detection, indicates bounds violation by throwing 
 * predefined custom error instances (`)
 * 
 */
export class DepthState
{
    lookaheadRange = RangeInfo(0, 1);
    groupRange     = RangeInfo(0, 1);

    groupDepth:     number = 0;
    lookaroundDepth: number = 0;

    get depths(): { group: number, lookAround: number }
    {
        return {
            group:     this.groupDepth,
            lookAround: this.lookaroundDepth
        }
    }

    /**
     * Calculate state given a set of state changes
     */
    depthsPlusDelta(change: Partial<DepthStateRecord>): { group: number, lookAround: number }
    {
        const depth = this.depths;
        
        if(is.Number(change.groupDepth))
            depth.group += change.groupDepth;

        if(is.Number(change.lookaroundDepth))
            depth.lookAround += change.lookaroundDepth;

        return depth;
    }

    constructor(); 
    constructor(groupLimit?: number,    lookaheadLimit?: number); 
    constructor(groupLimit: number = 1, lookaheadLimit: number = 1) 
    { 
        this.lookaheadRange = RangeInfo(0, lookaheadLimit);
        this.groupRange     = RangeInfo(0, groupLimit);
    }

    // Needed because TypeScript explodes instead of handing toPrimative symbol
    valueOf(): number { return this.depths.group }

    //#region Bound State Updating

    /*
     * Note: Values are now checked before incrementing, for any external interfacing
     *       make sure appear to have {de,in}cremented value (or move back to privates)
     */
    inc =
    {
        group:     (): DepthState => { this.validate({ groupDepth:  1, lookaroundDepth:  0 }); this.groupDepth++;      return this },
        lookahead: (): DepthState => { this.validate({ groupDepth:  0, lookaroundDepth:  1 }); this.lookaroundDepth++; return this },
    } as const;

    dec =
    {
        group:     (): DepthState => { this.validate({ groupDepth: -1, lookaroundDepth:  0 }); this.groupDepth--;      return this },
        lookahead: (): DepthState => { this.validate({ groupDepth:  0, lookaroundDepth: -1 }); this.lookaroundDepth--; return this },
    } as const;

    //#endregion Bound State Updating

    #validations: BoundaryChange[] =
    [
        /*
         * Group bound change
         * Throw if
         *  - Group depth increasing past max (> 1 unless something big changed)
         *  - Lookahead depth > 0 and group depth crosses over 0 -> 1
         * Allowed
         *  - No lookahead depth
         *  - Moving between 0, 1
         */
        (change) =>
        {
            // Skip validation block if not a group depth state change
            if(change.groupDepth === 0)
                return;

            const delta   = this.depthsPlusDelta(change),
                  current = this.depths;
            
            //#region Should never happen
            
            if(this.groupRange.min > delta.group)
                throw new DepthStateBoundsError(`Depth state out of range: \n    Non-natural number: ${delta.group}`)
            
            //#endregion Should never happen

            //#region Expected for nesting
            
            // If group depth crossing over (max) limit
            if(this.groupRange.max < delta.group)
                throw new DepthStateBoundsError(`Depth state out of range: \n    Out of bounds: ${delta.group} > ${this.groupRange.max}`)

            // If currently nested, and group depth increasing
            if(current.lookAround > 0 && (delta.group - current.group) > 0 /* && delta.group > 0 */ )
                throw new DepthStateBoundsError(`Depth state increasing while non-zero lookahead depth:\n    Can't increase group depth while lookahead depth > 0 (New group depth: ${delta.group}, Current lookahead: ${current.lookAround})`);

            //#endregion Expected for nesting
        },

        /**
         * Lookahead bound change
         * Throw if:
         *  - 1) Lookahead depth > 0 and group depth crosses over 0 -> 1
         * Allowed:
         *  - Any fully returned depth traversal without increasing group depth
         */
        (change) =>
        {
            // Skip validation block if not a lookahead depth state change
            if(change.lookaroundDepth === 0)
                return;

            const delta   = this.depthsPlusDelta(change),
                  current = this.depths;

            //#region Should never happen

            if(this.lookaheadRange.min > delta.lookAround)
                throw new DepthStateBoundsError(`Lookahead state out of range: \n    Non-natural number: ${delta.lookAround}`)
            
            //#endregion Should never happen

            //#region Expected for nesting 

            // Expect to fill this region out
            
            // // 1)
            // if(current.group)
            // // if(this.lookaheadRange.max < delta.lookahead)
            // //     throw new DepthStateNonNaturalError(`Lookahead state out of range: \n    Out of bounds: ${delta.lookahead} > ${this.lookaheadRange.max}`)

            //#endregion Expected for nesting 
        }
    ]

    validate(partialChange: Partial<DepthStateRecord>): void | never
    {
        const change = 
        {
            ...{groupDepth: 0, lookaroundDepth: 0}, 
            ...partialChange
        };
        const 
        { 
            lookaroundDepth: lookahead, 
            groupDepth:     group 
        } = change;

        const debugPrefix = c.gray`[validate] `;
        const debugMsg = 
            writeDebug 
                ? (msg: string) => console.debug(`${debugPrefix} ` + c.gray`${msg}`)
                : (msg: string) => {};

        debugMsg(` Validating state change:`)
        debugMsg(`      ${lookahead !== 0 ? lookahead : ''}`);
        debugMsg(`      ${group     !== 0 ? group     : ''}`);
        debugMsg(` Iterating through depth validation functions array`);

        this.#validations.forEach((fn, idx) =>
        {
            debugMsg(`  - Running depth step validation check #${idx}`)
            fn(change);
        })

        debugMsg(` ${c.green.dim`Finished iterating through depth validation functions array`}`);

        return;

        /**
         * @NOTE Important: Don't actually apply value in validation method, yet
         *       (but if it is yet, the problem may be here)
         */

        //#region @TODO: Remove this after checking the array iteration method still works

        // if(this.groupRange.min > this.#groupDepth)
        // {
        //     throw new DepthStateNonNaturalError(`Depth state out of range: \n    Non-natural number: ${this.#groupDepth}`)
        // }
        // if(this.groupRange.max < this.#groupDepth)
        // {
        //     throw new DepthStateNonNaturalError(`Depth state out of range: \n    Out of bounds: ${this.#groupDepth} > ${this.groupDepthMax}`)
        // }

        //#endregion @TODO: Remove this after checking the array iteration method still works
    }

    [Symbol.toPrimitive](hint: 'default' | 'number' | 'string'): number | string
    {
        return hint === 'string' 
            ? this.depths.group.toString() 
            : this.depths.group;
    }
}
