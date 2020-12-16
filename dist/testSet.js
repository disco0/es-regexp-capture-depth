"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestRegexSets = exports.TestRegexSet = exports.Fmt = void 0;
const chalk_1 = __importDefault(require("chalk"));
const guards_1 = __importDefault(require("./guards"));
const { log } = console;
class Fmt {
    static regex(regex) {
        return chalk_1.default.ansi256(164)(guards_1.default.String(regex) ? regex : regex.source);
    }
}
exports.Fmt = Fmt;
class TestRegexSet {
    constructor(type, ...regexes) {
        Object.defineProperty(this, "type", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: type
        });
        Object.defineProperty(this, "regexes", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "procedure", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.regexes = regexes;
    }
    async testAll(procedure) {
        const resolvedProcedure = procedure ?? this.procedure;
        if (!(guards_1.default.OneOf(guards_1.default.Function, guards_1.default.AsyncFunction)(resolvedProcedure)))
            throw new Error('Missing procedure function for regex test.');
        const results = [];
        for (const testRegex of this.regexes) {
            log(`Regex: '${Fmt.regex(testRegex.toString())}'`);
            const testResult = await resolvedProcedure(testRegex);
            results.push(testResult);
        }
        return results;
    }
    static fromTuple(type, ...testSets) {
        const regexes = [];
        if (guards_1.default.Array(testSets[0]))
            regexes.push(...testSets[0]);
        else if (guards_1.default.RegExp(testSets[0]) && guards_1.default.Array(testSets))
            regexes.push(...testSets.filter(guards_1.default.RegExp));
        return new TestRegexSet(type, ...regexes);
    }
    static fromObjectValues(obj) {
        const entries = [];
        for (const [name, value] of Object.entries(obj)) {
            entries.push(new TestRegexSet(name, ...value));
        }
        return entries;
    }
}
exports.TestRegexSet = TestRegexSet;
class TestRegexSets extends Array {
    constructor(...testSets) {
        super(...testSets);
        Object.defineProperty(this, "procedure", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
    async runAllSets(procedure) {
        procedure ?? (procedure = this.procedure);
        if (!(guards_1.default.Function.Any(procedure)))
            throw new Error('No procedure defined or given in argument.');
        const results = [];
        for (const testSet of this) {
            Object.assign(testSet, { procedure });
            log(`Running test set ${chalk_1.default.underline.bold.blue `${testSet.type}`}`);
            const setResult = await testSet.testAll();
            results.push(setResult);
            console.log(chalk_1.default.blue `Set results:`);
            console.dir(setResult, { depth: 3, colors: true, compact: true, breakLength: 80 });
        }
        return results;
    }
    static fromObject(obj) {
        const sets = TestRegexSet.fromObjectValues(obj);
        return new TestRegexSets(...sets);
    }
}
exports.TestRegexSets = TestRegexSets;
//# sourceMappingURL=testSet.js.map