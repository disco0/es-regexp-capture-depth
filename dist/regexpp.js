"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasNestedCaptureGroup = void 0;
const chalk_1 = __importDefault(require("chalk"));
const FlatRegexCaptureCheck_1 = require("./FlatRegexCaptureCheck");
async function hasNestedCaptureGroup(regex) {
    try {
        return await new FlatRegexCaptureCheck_1.FlatRegexCaptureCheck(regex).checkFlat();
    }
    catch (error) {
        console.error(chalk_1.default.red `Error during regexp analysis: ${regex.source}`);
        return false;
    }
    finally {
        return false;
    }
}
exports.hasNestedCaptureGroup = hasNestedCaptureGroup;
//# sourceMappingURL=regexpp.js.map