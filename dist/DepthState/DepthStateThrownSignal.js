"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _validations;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepthState = void 0;
const chalk_1 = __importDefault(require("chalk"));
const guards_1 = __importDefault(require("../guards"));
const RangeInfo_1 = require("../RangeInfo");
const debug_1 = require("../debug");
const signalErrors_1 = require("./signalErrors");
class DepthState {
    constructor(groupLimit = 1, lookaheadLimit = 1) {
        Object.defineProperty(this, "lookaheadRange", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: RangeInfo_1.RangeInfo(0, 1)
        });
        Object.defineProperty(this, "groupRange", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: RangeInfo_1.RangeInfo(0, 1)
        });
        Object.defineProperty(this, "groupDepth", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        Object.defineProperty(this, "lookaroundDepth", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        Object.defineProperty(this, "inc", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: {
                group: () => { this.validate({ groupDepth: 1, lookaroundDepth: 0 }); this.groupDepth++; return this; },
                lookahead: () => { this.validate({ groupDepth: 0, lookaroundDepth: 1 }); this.lookaroundDepth++; return this; },
            }
        });
        Object.defineProperty(this, "dec", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: {
                group: () => { this.validate({ groupDepth: -1, lookaroundDepth: 0 }); this.groupDepth--; return this; },
                lookahead: () => { this.validate({ groupDepth: 0, lookaroundDepth: -1 }); this.lookaroundDepth--; return this; },
            }
        });
        _validations.set(this, [
            (change) => {
                if (change.groupDepth === 0)
                    return;
                const delta = this.depthsPlusDelta(change), current = this.depths;
                if (this.groupRange.min > delta.group)
                    throw new signalErrors_1.DepthStateBoundsError(`Depth state out of range: \n    Non-natural number: ${delta.group}`);
                if (this.groupRange.max < delta.group)
                    throw new signalErrors_1.DepthStateBoundsError(`Depth state out of range: \n    Out of bounds: ${delta.group} > ${this.groupRange.max}`);
                if (current.lookAround > 0 && (delta.group - current.group) > 0)
                    throw new signalErrors_1.DepthStateBoundsError(`Depth state increasing while non-zero lookahead depth:\n    Can't increase group depth while lookahead depth > 0 (New group depth: ${delta.group}, Current lookahead: ${current.lookAround})`);
            },
            (change) => {
                if (change.lookaroundDepth === 0)
                    return;
                const delta = this.depthsPlusDelta(change), current = this.depths;
                if (this.lookaheadRange.min > delta.lookAround)
                    throw new signalErrors_1.DepthStateBoundsError(`Lookahead state out of range: \n    Non-natural number: ${delta.lookAround}`);
            }
        ]);
        this.lookaheadRange = RangeInfo_1.RangeInfo(0, lookaheadLimit);
        this.groupRange = RangeInfo_1.RangeInfo(0, groupLimit);
    }
    get depths() {
        return {
            group: this.groupDepth,
            lookAround: this.lookaroundDepth
        };
    }
    depthsPlusDelta(change) {
        const depth = this.depths;
        if (guards_1.default.Number(change.groupDepth))
            depth.group += change.groupDepth;
        if (guards_1.default.Number(change.lookaroundDepth))
            depth.lookAround += change.lookaroundDepth;
        return depth;
    }
    valueOf() { return this.depths.group; }
    validate(partialChange) {
        const change = {
            ...{ groupDepth: 0, lookaroundDepth: 0 },
            ...partialChange
        };
        const { lookaroundDepth: lookahead, groupDepth: group } = change;
        const debugPrefix = chalk_1.default.gray `[validate] `;
        const debugMsg = debug_1.writeDebug
            ? (msg) => debug_1.console.debug(`${debugPrefix} ` + chalk_1.default.gray `${msg}`)
            : (msg) => { };
        debugMsg(` Validating state change:`);
        debugMsg(`      ${lookahead !== 0 ? lookahead : ''}`);
        debugMsg(`      ${group !== 0 ? group : ''}`);
        debugMsg(` Iterating through depth validation functions array`);
        __classPrivateFieldGet(this, _validations).forEach((fn, idx) => {
            debugMsg(`  - Running depth step validation check #${idx}`);
            fn(change);
        });
        debugMsg(` ${chalk_1.default.green.dim `Finished iterating through depth validation functions array`}`);
        return;
    }
    [(_validations = new WeakMap(), Symbol.toPrimitive)](hint) {
        return hint === 'string'
            ? this.depths.group.toString()
            : this.depths.group;
    }
}
exports.DepthState = DepthState;
//# sourceMappingURL=DepthStateThrownSignal.js.map