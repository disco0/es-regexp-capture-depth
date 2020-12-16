"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const ava_1 = __importDefault(require("ava"));
const userConfigurationData_1 = __importDefault(require("../../vscode-highlight/userConfigurationData"));
const FlatRegexCaptureCheck_1 = require("../../FlatRegexCaptureCheck");
const commonUtils_1 = require("../../test/commonUtils");
const testMacro = async ($, regex, expected) => {
    const instance = new FlatRegexCaptureCheck_1.FlatRegexCaptureCheck(regex);
    $.is(await instance.result, expected);
};
testMacro.title = (provided, regex, expected) => `Regexp ${chalk_1.default.magenta `/${commonUtils_1.trimRegExpSource(regex)}/`} has flat capture groups.`;
const $nulltitle = '';
for (const testEntry of userConfigurationData_1.default) {
    ava_1.default($nulltitle, testMacro, testEntry, true);
}
//# sourceMappingURL=userConfigurationData.spec.js.map