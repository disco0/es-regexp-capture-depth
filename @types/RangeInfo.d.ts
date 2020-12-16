export declare type RangeTuple<Min extends number = number, Max extends number = number> = [Min: Min, Max: Max];
export declare type RangeBounds<Tuple extends RangeTuple = RangeTuple<number, number>> = Readonly<Tuple & {
    min: Tuple[0];
    max: Tuple[1];
}>;
export declare function RangeInfo<Min extends number, Max extends number>(min: number, max: number): RangeBounds<[Min, Max]>;
export declare function RangeInfo<Min extends number, Max extends number>(min?: number, max?: number): RangeBounds<[Min, Max]>;
