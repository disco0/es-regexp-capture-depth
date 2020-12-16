export declare class FlatRegexCaptureCheck {
    #private;
    regex: RegExp;
    immediate: boolean;
    constructor(regexp: RegExp);
    constructor(regexp: RegExp, immediate: boolean);
    get result(): Promise<boolean>;
    checkFlat(): Promise<boolean>;
    static readonly defaults: {
        ecmaVersion: 2020;
        immediate: boolean;
    };
}
export default FlatRegexCaptureCheck;
