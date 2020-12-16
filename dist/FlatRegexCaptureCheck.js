"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _resultValue;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlatRegexCaptureCheck = void 0;
const regexpp_1 = require("regexpp");
const chalk_1 = __importDefault(require("chalk"));
const EcmaVersions_1 = __importDefault(require("./EcmaVersions"));
const ThrownSignal_1 = require("./DepthState/ThrownSignal");
const debug_1 = require("./debug");
class FlatRegexCaptureCheck {
    constructor(regexp, immediate = FlatRegexCaptureCheck.defaults.immediate) {
        Object.defineProperty(this, "regex", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "immediate", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: FlatRegexCaptureCheck.defaults.immediate
        });
        _resultValue.set(this, undefined);
        if (!(regexp instanceof RegExp))
            throw new Error(`First argument must be a RegExp instance.`);
        this.regex = regexp;
        if (immediate) {
            debug_1.console.debug(` Beginning flat captures check immediately`);
            this.checkFlat();
        }
    }
    get result() {
        debug_1.console.debug(chalk_1.default.gray `${chalk_1.default.gray.bold('get')} checkResult`);
        if (__classPrivateFieldGet(this, _resultValue)) {
            debug_1.console.debug(`Returning existing #resultValue promise`);
            return __classPrivateFieldGet(this, _resultValue);
        }
        debug_1.console.debug(`Creating flat captures check Promise for #resultValue`);
        this.checkFlat();
        return __classPrivateFieldGet(this, _resultValue);
    }
    checkFlat() {
        debug_1.console.debug(chalk_1.default.gray `${chalk_1.default.gray.bold('get')} Checking capture group structure of /${this.regex.source}/${this.regex.flags}`);
        __classPrivateFieldSet(this, _resultValue, new Promise((resolve, reject) => {
            if (__classPrivateFieldGet(this, _resultValue)) {
                debug_1.console.debug(`Validation already in progress and assigned to \`this.checkResult\`.`);
                return __classPrivateFieldGet(this, _resultValue);
            }
            const RESOLVE = {
                VALID: () => (resolve(true)),
                INVALID: () => (resolve(false))
            };
            let depth = new ThrownSignal_1.DepthStateSignalThrower();
            try {
                debug_1.console.debug(`Initalizing validator`);
                const source = this.regex.toString();
                function isEnteringEmptyCapture(index) {
                    const [open, close] = [source[index], source[index + 1]];
                    debug_1.console.debug(`Checking chars [ ${open}, ${close} ]`);
                    return (open === '(' && close === ')');
                }
                function isLeavingEmptyCapture(index) {
                    const [open, close] = [source[index], source[index + 1]];
                    debug_1.console.debug(`Checking chars [ ${open}, ${close} ]`);
                    return (open === '(' && close === ')');
                }
                const validator = new regexpp_1.RegExpValidator({
                    ecmaVersion: FlatRegexCaptureCheck.defaults.ecmaVersion,
                    onCapturingGroupEnter(start, name) {
                        let groupDepth = depth.depths.group;
                        debug_1.console.debug(`${'  '.repeat(Math.max(0, groupDepth))}Entering capture group.`);
                        if (isEnteringEmptyCapture(start)) {
                            groupDepth = depth.depths.group;
                            debug_1.console.debug(`${'  '.repeat(Math.max(0, groupDepth))}Empty capture group entry detected (Skipping increment)`);
                        }
                        else {
                            depth.inc.group();
                            groupDepth = depth.depths.group;
                            debug_1.console.debug(`${'  '.repeat(Math.max(0, groupDepth))}Group depth: ${groupDepth}`);
                        }
                    },
                    onCapturingGroupLeave(start, name) {
                        let groupDepth = depth.depths.group;
                        debug_1.console.debug(`${'  '.repeat(Math.max(0, groupDepth))}Exiting capture group`);
                        if (isLeavingEmptyCapture(start)) {
                            groupDepth = depth.depths.group;
                            debug_1.console.debug(`${'  '.repeat(Math.max(0, groupDepth))}Empty capture group exit detected (Skipping decrement)`);
                        }
                        else {
                            groupDepth = depth.depths.group;
                            debug_1.console.debug(`${'  '.repeat(Math.max(0, groupDepth))}Group depth: ${groupDepth}`);
                            depth.dec.group();
                        }
                    },
                    onPatternLeave() {
                        debug_1.console.debug(`Exiting pattern validation`);
                        debug_1.console.debug(`Returning early (successfully)`);
                        RESOLVE.VALID();
                    },
                    onLookaroundAssertionEnter() {
                        let lookaroundDepth = depth.depths.lookAround;
                        debug_1.console.debug(`${'  '.repeat(Math.max(0, lookaroundDepth))}Entering lookaround group.`);
                        depth.inc.lookahead();
                        lookaroundDepth = depth.depths.lookAround;
                        debug_1.console.debug(`${'  '.repeat(Math.max(0, lookaroundDepth))}Lookaround depth: ${lookaroundDepth}`);
                    },
                    onLookaroundAssertionLeave() {
                        let lookaroundDepth = depth.depths.lookAround;
                        debug_1.console.debug(`${'  '.repeat(Math.max(0, lookaroundDepth))}Exiting lookaround group.`);
                        depth.dec.lookahead();
                        lookaroundDepth = depth.depths.lookAround;
                        debug_1.console.debug(`${'  '.repeat(Math.max(0, lookaroundDepth))}Lookaround depth: ${lookaroundDepth}`);
                    }
                });
                validator.validateLiteral(this.regex.toString());
            }
            catch (error) {
                if (error instanceof ThrownSignal_1.Signals.DepthStateBoundsError)
                    RESOLVE.INVALID();
                else {
                    (msg => {
                        globalThis.console.error(chalk_1.default.red.bold(msg));
                        throw new Error(msg);
                    })(chalk_1.default.red `Non-expected error thrown and caught during evaluation of RegExpValidator.\n  ${error}`);
                }
            }
            finally {
                RESOLVE.INVALID();
            }
        }));
        return __classPrivateFieldGet(this, _resultValue);
    }
}
exports.FlatRegexCaptureCheck = FlatRegexCaptureCheck;
_resultValue = new WeakMap();
Object.defineProperty(FlatRegexCaptureCheck, "defaults", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: {
        ecmaVersion: EcmaVersions_1.default[2020],
        immediate: true
    }
});
exports.default = FlatRegexCaptureCheck;
//# sourceMappingURL=FlatRegexCaptureCheck.js.map