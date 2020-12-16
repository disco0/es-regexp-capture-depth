interface RegExpTrimmer {
    (source: string | RegExp | {
        source: string;
    }): string;
    truncationLength: number;
}
export declare const trimRegExpSource: RegExpTrimmer;
export {};
