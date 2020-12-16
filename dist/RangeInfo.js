"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RangeInfo = void 0;
const guards_1 = __importDefault(require("./guards"));
function RangeInfoBuilder(min = undefined, max = undefined) {
    const obj = (Array.isArray(this) && this.length === 2)
        ? [this[0], this[1]]
        : [min, max];
    if (obj.some(_ => !(Number.isInteger(_))) || obj[0] >= obj[1])
        throw new Error(`Bound or argument input invalid:\n Value for Min >= Max, or one or more is not an integer. (${String(obj[0])} >= ${String(obj[1])}?)`);
    let built = Object.defineProperties(obj, {
        min: {
            get() { return obj[0]; },
            configurable: false,
            enumerable: false
        },
        max: {
            get() { return obj[1]; },
            configurable: false,
            enumerable: false
        }
    });
    return Object.freeze(built);
}
let rangeInfoDefault = {
    min: 0,
    max: 1
};
function RangeInfo(...values) {
    const [min = rangeInfoDefault.min, max = rangeInfoDefault.max] = values.filter(guards_1.default.Number);
    const range = [min, max];
    return RangeInfoBuilder(min, max);
}
exports.RangeInfo = RangeInfo;
//# sourceMappingURL=RangeInfo.js.map