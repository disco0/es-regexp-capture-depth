"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.trimRegExpSource = void 0;
const guards_1 = __importDefault(require("../guards"));
exports.trimRegExpSource = (function (source) {
    return ((source) => {
        if (guards_1.default.Undefined(source))
            throw new Error(`Invalid RegExp source string. (${String(source)})`);
        if (source.length <= exports.trimRegExpSource.truncationLength)
            return source;
        else
            return source.substr(0, exports.trimRegExpSource.truncationLength) + '...';
    })(guards_1.default.String(source) ? source : source.source);
});
exports.trimRegExpSource.truncationLength = 70;
//# sourceMappingURL=commonUtils.js.map