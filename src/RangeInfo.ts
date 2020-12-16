//#region Imports

import { MaybeUndefined as Maybe } from 'tsdef'
import is from './guards';

//#endregion Imports

export type RangeTuple<Min extends number = number, Max extends number = number> = [Min: Min, Max: Max];

export type RangeBounds<Tuple extends RangeTuple = RangeTuple<number, number>> 
    = Readonly<Tuple & { min: Tuple[0], max: Tuple[1] }>;

/**
 * Create array tuple with min and max getters
 * 
 * @private
 */
function RangeInfoBuilder(min?: number, max?: number): RangeBounds;
function RangeInfoBuilder(min: Maybe<number>, max?: Maybe<number>): RangeBounds;
function RangeInfoBuilder(this: Maybe<RangeTuple>, min: Maybe<number> = undefined, max: Maybe<number> = undefined): RangeBounds
{
    const obj =
      (Array.isArray(this) && this.length === 2)
        ? [this[0], this[1]]
        : [min, max];
    // console.log(`Parsed values into object: %o`, obj)

    if(obj.some(_ => !(Number.isInteger(_))) || obj[0]! >= obj[1]!)
      throw new Error(`Bound or argument input invalid:\n Value for Min >= Max, or one or more is not an integer. (${String(obj[0])} >= ${String(obj[1])}?)`);

    let built = Object.defineProperties(obj, { 
        min: {
            get(){ return obj[0] },
            configurable: false,
            enumerable:   false
        },
        max: {
            get(){ return obj[1] } ,
            configurable: false,
            enumerable:   false
        }
    });
    return Object.freeze(built);
}

let rangeInfoDefault = 
{
    min: 0,
    max: 1
}

export function RangeInfo<Min extends number, Max extends number>(min: number, max: number): RangeBounds<[Min, Max]>;
export function RangeInfo<Min extends number, Max extends number>(min?: number, max?: number): RangeBounds<[Min, Max]>;
export function RangeInfo<Values extends [...number[]]>(...values: [...Maybe<number>[]]): RangeBounds<[Values[0], Values[1]]>
{
    const [
        min = rangeInfoDefault.min, 
        max = rangeInfoDefault.max
    ] = values.filter(is.Number);

    const range: readonly [Min: number, Max: number] = [min, max]
    return RangeInfoBuilder(min, max);
}
