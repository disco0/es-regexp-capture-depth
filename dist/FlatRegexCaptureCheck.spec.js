"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const ava_1 = __importDefault(require("ava"));
const testRegexes_1 = __importDefault(require("../testRegexes"));
const FlatRegexCaptureCheck_1 = require("../FlatRegexCaptureCheck");
const commonUtils_1 = require("./commonUtils");
const testMacro = async ($, [, { value }], expected) => {
    const instance = new FlatRegexCaptureCheck_1.FlatRegexCaptureCheck(value);
    $.is(await instance.result, expected);
};
testMacro.title = (provided, [testName, { tags, valid, value, desc }], expected) => `Regexp ${chalk_1.default.magenta `/${commonUtils_1.trimRegExpSource(value)}/`} ${expected ? "has flat capture groups" : "has nested/complex capture groups or lookaround structure"}.`;
const $nulltitle = '';
for (const testEntry of Object.entries(testRegexes_1.default.valid)) {
    ava_1.default($nulltitle, testMacro, testEntry, true);
}
for (const testEntry of Object.entries(testRegexes_1.default.invalid)) {
    ava_1.default($nulltitle, testMacro, testEntry, false);
}
function MacroWithTitle(handle, title) {
    return Object.assign(handle, { title });
}
//# sourceMappingURL=FlatRegexCaptureCheck.spec.js.map